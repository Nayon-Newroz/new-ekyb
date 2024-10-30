import React, { useContext, useEffect, useState } from "react";
import "./DynamicForm.css";
import { handleGetData } from "../../services/GetDataService";

import dayjs from "dayjs";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AuthContext } from "../../context/AuthContext";
const data = {
  form: {
    fields: [
      {
        fieldName: "businessName",
        title: "Business name",
        placeHolder: "Please enter your business name",
        type: "text",
        defaultValue: "",
        state: "visible",
        action: "active",
        groupId: 1,
        position: 1,
        min: 4,
        max: 10,
        required: true,
        parentParam: "",
        fetchData: "",
        validator: "^[A-Za-z ]{2,256}$",
        options: null,
      },
      {
        fieldName: "document",
        title: "Please select all the document",
        placeHolder: "Please select documents",
        type: "checkbox",
        defaultValue: "",
        state: "visible",
        action: "active",
        groupId: 1,
        position: 2,
        min: 0,
        max: 0,
        required: true,
        parentParam: "",
        validator: "^[1-9]{1,}$",
        options: [
          {
            id: 1,
            value: "nid",
          },
          {
            id: 2,
            value: "TIN",
          },
        ],
      },
      {
        fieldName: "startDate",
        title: "Start Date",
        placeHolder: "Please select start Date",
        type: "date",
        defaultValue: "",
        state: "visible",
        action: "active",
        groupId: 1,
        position: 3,
        min: 112,
        max: 0,
        required: true,
        parentParam: "",
        fetchData: "",
        validator: "^[0-9]{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$",
        options: null,
      },
      {
        fieldName: "endDate",
        title: "End Date",
        placeHolder: "Please select End Date",
        type: "date",
        defaultValue: "",
        state: "visible",
        action: "active",
        groupId: 1,
        position: 4,
        min: 0,
        max: 365,
        required: true,
        parentParam: "startDate",
        fetchData: "",
        validator: "^[0-9]{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])$",
        options: null,
      },
      {
        fieldName: "logo",
        title: "Please upload your logo",
        placeHolder: "Logo",
        type: "file",
        defaultValue: "",
        state: "visible",
        action: "active",
        groupId: 1,
        position: 5,
        min: 0,
        max: 0,
        required: true,
        parentParam: "",
        fetchData: "",
        validator: ".jpg|.JPG|.jpeg|.JPEG|.png|.PNG",
        options: null,
      },
      {
        fieldName: "organizationType",
        title: "Please select your organization type",
        placeHolder: "Organization Type",
        type: "option",
        defaultValue: "",
        state: "visible",
        action: "active",
        groupId: 1,
        position: 6,
        min: 0,
        max: 0,
        required: true,
        parentParam: "",
        fetchData: "",
        validator: "^[1-9]{1,}$",
        options: [
          {
            id: 1,
            value: "Public Limited",
          },
          {
            id: 2,
            value: "Private Limited",
          },
        ],
      },
      {
        fieldName: "tradeLicence",
        title: "Please upload your Trade Licence",
        placeHolder: "Trade Licence",
        type: "file",
        defaultValue: "",
        state: "hidden",
        action: "active",
        groupId: 1,
        position: 7,
        min: 0,
        max: 0,
        required: false,
        parentParam: "",
        fetchData: "",
        validator: ".PDF|.pdf|.jpg|.JPG|.jpeg|.JPEG|.png|.PNG",
        options: null,
      },
      {
        fieldName: "country",
        title: "Please enter your Country",
        placeHolder: "Country",
        type: "option",
        defaultValue: "",
        state: "visible",
        action: "active",
        groupId: 1,
        position: 8,
        min: 4,
        max: 10,
        required: true,
        parentParam: "",
        validator: "^[1-9]{1,}$",
        options: [
          {
            id: 1,
            value: "Bangladesh",
          },
          {
            id: 2,
            value: "Canada",
          },
        ],
      },
      {
        fieldName: "city",
        title: "City List",
        placeHolder: "city",
        type: "option",
        defaultValue: "",
        state: "visible",
        action: "inactive",
        groupId: 1,
        position: 9,
        min: 4,
        max: 10,
        required: true,
        parentParam: "country",
        fetchData: "/config/city?countryId=?",
        validator: "^[1-9]{1,}$",
        options: [
          {
            id: 1,
            value: "Bangladesh",
          },
          {
            id: 2,
            value: "Canada",
          },
        ],
      },
    ],
    buttons: [
      {
        type: "Submit",
        name: "Submit Now",
        api: "/signUp/confirm",
      },
      {
        type: "Clear",
        name: "Clear Data",
        api: "/",
      },
    ],
    groups: [
      {
        id: 1,
        title: "Business Information",
        subTitle: "Display content from your connected accounts on your site",
      },
    ],
  },
  rules: [
    {
      name: "organizationType",
      action: [
        {
          type: "change",
          conditions: [
            {
              value: "^Private Limited$",
              fields: [
                {
                  name: "tradeLicence",
                  types: {
                    required: true,
                    state: "visible",
                    action: "active",
                  },
                },
              ],
            },
          ],
          default: [
            {
              name: "tradeLicence",
              types: {
                required: false,
                state: "hidden",
                action: "inactive",
              },
            },
          ],
        },
      ],
    },
    {
      name: "country",
      action: [
        {
          type: "change",
          conditions: [
            {
              value: "^[A-Za-z .]{1,}$",
              fields: [
                {
                  name: "city",
                  types: {
                    action: "active",
                  },
                },
              ],
            },
          ],
          default: [
            {
              name: "city",
              types: {
                action: "inactive",
              },
            },
          ],
        },
      ],
    },
  ],
};
const DynamicForm = () => {
  const { kyb_admin_panel, logout, login } = useContext(AuthContext);
  const [formData, setFormData] = useState({});
  const [formValues, setFormValues] = useState([]);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  // Helper function to convert file to base64
  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };
  const handleChange = async (e) => {
    const { name, value, type, checked, files, id } = e.target;

    // Determine the actual value (use checked for checkboxes, base64 for files)
    let actualValue;

    let dataForRules = formData?.form?.fields?.find(
      (res) => res.fieldName === id
    );

    let newName = name;

    if (type === "checkbox") {
      actualValue = name;

      newName = id;
    } else if (type === "file") {
      if (files?.length > 1) {
        let allFiles = await Promise.all(
          Array.from(files).map(async (file) => {
            let base64Value = await convertToBase64(file);
            return base64Value.replace("data:image/png;base64,", "");
          })
        );
        actualValue = allFiles;
      } else {
        // Convert file to base64
        const file = files[0]; // Assuming a single file upload
        let base64Value = await convertToBase64(file);

        actualValue = [base64Value.replace("data:image/png;base64,", "")];
      }
    } else {
      actualValue = value;
    }

    // Remove the data URL prefix if it's a base64 string

    // Ensure formValues is an array
    const existingField = formValues.find((field) => field.key === newName);

    const handleCheckboxValue = (oldValue, newvalue) => {
      let value = parseInt(newvalue);

      if (oldValue.includes(value)) {
        return oldValue.filter((res) => res !== value);
      } else {
        return [...oldValue, value];
      }
    };
    if (existingField) {
      // Update the value if the field already exists

      let newformValue = formValues.map((field) =>
        field.key === newName
          ? {
              ...field,
              value:
                type === "checkbox"
                  ? handleCheckboxValue(field.value, actualValue)
                  : actualValue,
            }
          : field
      );
      setFormValues(newformValue);
    } else {
      // Add a new key-value pair if the field doesn't exist
      setFormValues([
        ...formValues,
        {
          key: newName,
          value: type === "checkbox" ? [parseInt(actualValue)] : actualValue,
        },
      ]);
    }

    // Apply any rules after setting the new value
    applyRules(dataForRules, actualValue);
  };

  const applyRules = (dataForRules, value) => {
    let rulesValue = dataForRules?.options?.find(
      (item) => item.id == value
    )?.value;

    const rule = formData.rules.find(
      (rule) => rule.name === dataForRules?.fieldName
    );
    console.log("rule", rule);

    if (rule) {
      let newUpdatedFormFields = [];

      let conditionMatch = false;
      if (rule?.action[0]?.conditions?.length > 0) {
        rule?.action[0]?.conditions?.map((condition) => {
          const regexCheckValue = condition?.value || "";

          const regex = new RegExp(regexCheckValue); // Use the dynamic value directly as the regular expression

          // const regex22 = /^[A-Za-z .]{1,}$/;
          // const input = "John Doe.";

          if (regex.test(rulesValue)) {
            conditionMatch = true;

            condition?.fields?.map((item) => {
              let matchFeild = formData?.form?.fields?.map((el) => {
                if (el.fieldName === item.name) {
                  let newElement = {
                    ...el,
                    required: item?.types?.required
                      ? item?.types?.required
                      : el?.required,
                    state: item?.types?.state ? item?.types?.state : el?.state,
                    action: item?.types?.action
                      ? item?.types?.action
                      : el?.action,
                  };
                  console.log("item ==============", item);
                  if (item?.types?.state === "hidden") {
                    setFormValues(
                      formValues?.filter((res) => res.key !== item.name)
                    );
                  }

                  return newUpdatedFormFields.push(newElement);
                } else {
                  newUpdatedFormFields.push(el);
                }
              });

              // if (matchFeild) {
              //   return matchFeild;
              // }
              // return;
            });
          } else {
            console.log("No match");
          }
        });
      }

      if (!conditionMatch) {
        rule?.action[0]?.default?.map((defaultCondition) => {
          let matchFeild = formData?.form?.fields?.map((el) => {
            if (el.fieldName === defaultCondition.name) {
              let newElement = {
                ...el,

                required: defaultCondition?.types?.required
                  ? defaultCondition?.types?.required
                  : el?.required,
                state: defaultCondition?.types?.state
                  ? defaultCondition?.types?.state
                  : el?.state,
                action: defaultCondition?.types?.action
                  ? defaultCondition?.types?.action
                  : el?.action,
              };
              if (defaultCondition?.types?.state === "hidden") {
                setFormValues(
                  formValues?.filter((res) => res.key !== defaultCondition.name)
                );
              }
              return newUpdatedFormFields.push(newElement);
            } else {
              newUpdatedFormFields.push(el);
            }
          });
        });
      }

      let oldForm = formData.form;
      let newForm = { ...oldForm, fields: newUpdatedFormFields };
      let newFormdata = { ...formData, form: newForm };

      // setFormData({ ...formData, form: newUpdatedFormFields });

      setFormData(newFormdata);
    }
  };
  const check = () => {
    console.log("formValues", formValues);

    const inputPattern = "Private Limited"; // Dynamic pattern (can be changed)
    const regex = new RegExp(`^${inputPattern}$`); // Create dynamic regex
    const input = "Private Limited"; // Example input

    if (regex.test(input)) {
      console.log("Valid input");
    } else {
      console.log("Invalid input");
    }
  };
  const fileValidator = (validate) => {
    const extensionToMimeType = {
      // Images
      jpg: "image/jpeg",
      jpeg: "image/jpeg",
      png: "image/png",
      gif: "image/gif",
      bmp: "image/bmp",
      svg: "image/svg+xml",
      webp: "image/webp",

      // Documents
      pdf: "application/pdf",
      doc: "application/msword",
      docx: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
      xls: "application/vnd.ms-excel",
      xlsx: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      ppt: "application/vnd.ms-powerpoint",
      pptx: "application/vnd.openxmlformats-officedocument.presentationml.presentation",
      txt: "text/plain",
      rtf: "application/rtf",
      csv: "text/csv",

      // Audio
      mp3: "audio/mpeg",
      wav: "audio/wav",
      ogg: "audio/ogg",
      flac: "audio/flac",
      aac: "audio/aac",
      m4a: "audio/mp4",

      // Video
      mp4: "video/mp4",
      avi: "video/x-msvideo",
      mov: "video/quicktime",
      mkv: "video/x-matroska",
      webm: "video/webm",
      flv: "video/x-flv",

      // Archives
      zip: "application/zip",
      rar: "application/vnd.rar",
      tar: "application/x-tar",
      gz: "application/gzip",
      "7z": "application/x-7z-compressed",

      // Code
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      json: "application/json",
      xml: "application/xml",
      php: "application/x-httpd-php",
      java: "text/x-java-source",
      py: "text/x-python",
      cpp: "text/x-c++src",
      c: "text/x-csrc",

      // Fonts
      ttf: "font/ttf",
      otf: "font/otf",
      woff: "font/woff",
      woff2: "font/woff2",
    };

    if (!validate) return ""; // Return empty string if no validator

    // Step 1: Replace | with ,
    let replacedString = validate.replace(/\|/g, ",");

    // Step 2: Split, remove duplicates (case-insensitive), and map extensions to MIME types
    let uniqueMimeTypes = [
      ...new Set(
        replacedString
          .toLowerCase()
          .split(",")
          .map((ext) => extensionToMimeType[ext] || ext) // If the extension has a known MIME type, map it; otherwise, leave it
      ),
    ];

    // Step 3: Join the array back into a string with commas
    const newString = uniqueMimeTypes.join(",");

    return newString;
  };
  const renderField = (field) => {
    if (field.state === "hidden") return null;
    if (field.state === "visible") {
      const calculateStartDateLimits = (data) => {
        const today = new Date();

        // Get the dynamic min and max values from the data object
        const minOffset = data.min || 0; // Default to 0 if not provided
        const maxOffset = data.max || 0; // Default to 0 if not provided

        // Calculate the max date based on the max offset
        const maxDate = new Date();
        maxDate.setDate(today.getDate() + maxOffset); // Adjust the date by max offset
        const maxDateString = maxDate.toISOString().split("T")[0]; // Max date in YYYY-MM-DD format

        // Calculate the min date based on the min offset
        const minDate = new Date();
        minDate.setDate(today.getDate() - minOffset); // Adjust the date by min offset
        const minDateString = minDate.toISOString().split("T")[0]; // Min date in YYYY-MM-DD format

        return { minDate: minDateString, maxDate: maxDateString };
      };

      // const { minDate, maxDate } = calculateStartDateLimits();

      return (
        <div key={field.fieldName}>
          <label style={{ color: "#4b4141" }}>
            {field.title} {field?.required && "*"}
          </label>

          {field.type === "text" && (
            <input
              disabled={field?.action === "inactive"}
              minLength={field?.min.toString()}
              maxLength={field?.max.toString()}
              placeholder={field?.placeHolder}
              // placeholder={field?.placeHolder}
              type={field.type}
              name={field.fieldName}
              id={field.fieldName}
              onChange={handleChange}
              required={field.required}
              defaultValue={field.defaultValue}
              className="form-input"
            />
          )}

          {field.type === "checkbox" &&
            field.options &&
            field.options.map((option) => (
              <div
                key={option.id}
                style={{
                  display: "inline-flex",
                  whiteSpace: "nowrap",
                  marginRight: "20px",
                  marginBottom: "22px",
                }}
              >
                {/* for requird need to work */}
                <input
                  disabled={field?.action === "inactive"}
                  type="checkbox"
                  id={field.fieldName}
                  name={option.id}
                  onChange={handleChange}
                  className="form-input"
                />
                &nbsp;&nbsp; <span>{option.value}</span>
              </div>
            ))}

          {field.type === "date" && (
            <input
              disabled={field?.action === "inactive"}
              type="date"
              id={field.fieldName}
              name={field.fieldName}
              onChange={handleChange}
              required={field.required}
              className="form-input"
              min={calculateStartDateLimits(field)?.minDate}
              max={calculateStartDateLimits(field)?.maxDate}
            />
          )}

          {field.type === "file" && (
            <input
              disabled={field?.action === "inactive"}
              id={field.fieldName}
              type="file"
              name={field.fieldName}
              onChange={handleChange}
              required={field.required}
              // accept=".pdf,.jpg,.jpeg,.png"
              accept={fileValidator(field?.validator)}
              // accept={field?.validator?.replace(/\|/g, ",")}
              className="form-input"
              multiple
            />
          )}

          {field.type === "option" && (
            <select
              disabled={field?.action === "inactive"}
              id={field.fieldName}
              name={field.fieldName}
              defaultValue=""
              onChange={handleChange}
              required={field.required}
              className="form-input"
            >
              <option value="" disabled>
                Select an option
              </option>
              {field.options &&
                field.options.map((option) => (
                  <option key={option.id} value={option.id}>
                    {option.value}
                  </option>
                ))}
            </select>
          )}
        </div>
      );
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("formValues", formValues);

    // Validate and submit the form
  };

  const clearForm = () => {
    setFormData(formData);
  };

  const getData = async (pageNO, pageLimit, newUrl) => {
    setLoading(true);

    let url = `/api/v1/public/app-form-collection?formName=signup_step_1`;

    // let token = await RefreshToken(dizli_admin_panel, logout, login);

    // let token = dizli_admin_panel.access_token;
    let res = await handleGetData(url);
    console.log("res", res?.data);
    // if (res?.status === 401 || res?.status === 403) {
    //   logout();
    //   return;
    // }

    if (res?.status > 199 && res?.status < 300) {
      setFormData(res?.data?.data?.data);
      // setTotalElements(res.data.data.totalElements);
      // setTotalPage(res.data.data.totalPages);
      // setRowsPerPage(res.data.data.per_page);
      if (res.data.data.length > 0) {
        // setList(res.data.data);
      } else {
        // setList([]);
      }
    } else {
      // setMessage(res.data.message);
    }
    setLoading(false);
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {!loading &&
        formData?.form?.groups?.map((group, i) => (
          <div className="dynamic-form" key={i}>
            <form onSubmit={handleSubmit}>
              <h1 onClick={check}>{group?.title}</h1>
              <h5>{group?.subTitle}</h5>

              {formData.form.fields
                .filter((field) => field.groupId === group.id) // Filter fields by group
                .sort((a, b) => a.position - b.position) // Sort fields by position
                .map((field) => renderField(field))}
              <div style={{ textAlign: "right" }}>
                <button
                  style={{ marginRight: "10px" }}
                  type="button"
                  onClick={() => {
                    setFormValues({});
                    clearForm();
                  }}
                >
                  Clear Data
                </button>
                <button type="submit">Submit Now</button>
              </div>
            </form>
          </div>
        ))}

      {/* <div className="dynamic-form">
        <form onSubmit={handleSubmit}>
          <h1 onClick={check}>{formData.form.groups[0].title}</h1>
          <h4>{formData.form.groups[0].subTitle}</h4>

          {formData.form.fields
            .filter((field) => field.groupId === formData.form.groups[0].id) // Filter fields by group
            .sort((a, b) => a.position - b.position) // Sort fields by position
            .map((field) => renderField(field))}
          <button type="submit">Submit Now</button>
          <button type="button" onClick={() => setFormValues({})}>
            Clear Data
          </button>
        </form>
      </div> */}
    </>
  );
};

export default DynamicForm;
