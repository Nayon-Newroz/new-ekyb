import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./TabsStyle.css";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function TabsTop() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTab-root": {
              color: "gray", // Default text color
              fontWeight: 600, // Font weight
              lineHeight: "14.06px",
            },
            "& .Mui-selected": {
              color: "#037777", // Text color for selected tab
              borderBottom: "2px solid #037777", // Bottom border color for selected tab
            },
            "& .MuiTabs-indicator": {
              backgroundColor: "transparent", // Hide the default indicator
            },
          }}
        >
          <Tab label="Direct" {...a11yProps(0)} />
          <Tab label="Watching" {...a11yProps(1)} />
          <button
            style={{
              position: "absolute",
              right: 10,
              bottom: 13,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.28 5.96663L8.9333 10.3133C8.41997 10.8266 7.57997 10.8266 7.06664 10.3133L2.71997 5.96663"
                stroke="#037777"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="">
          <div className="TopTabs-Card">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66675 25.3333H25.3334"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.125 10.3333V25.3333H18.875V10.3333C18.875 9.41666 18.5 8.66666 17.375 8.66666H16.625C15.5 8.66666 15.125 9.41666 15.125 10.3333Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 15.3333V25.3333H12.8333V15.3333C12.8333 14.4167 12.5 13.6667 11.5 13.6667H10.8333C9.83333 13.6667 9.5 14.4167 9.5 15.3333Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1667 19.5V25.3333H24.5001V19.5C24.5001 18.5833 24.1667 17.8333 23.1667 17.8333H22.5001C21.5001 17.8333 21.1667 18.5833 21.1667 19.5Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="">
              <h4>It has survived not only five centuries.</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has ...
              </p>
            </div>
            <div className="TabsContent-End">
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <path
                      d="M3.61987 6.50001L5.78399 8.66668L10.1199 4.33334"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <path
                      d="M3.61987 9.75L10.1199 3.25"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.1199 9.75L3.61987 3.25"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div className="TopTabs-Card">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6666 25.3333H20.3333C23.6833 25.3333 24.2833 23.9917 24.4583 22.3583L25.0833 15.6917C25.3083 13.6583 24.7249 12 21.1666 12H12.8333C9.27494 12 8.6916 13.6583 8.9166 15.6917L9.5416 22.3583C9.7166 23.9917 10.3166 25.3333 13.6666 25.3333Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6667 12V11.3333C13.6667 9.85832 13.6667 8.66666 16.3334 8.66666H17.6667C20.3334 8.66666 20.3334 9.85832 20.3334 11.3333V12"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.6666 17.8333V18.6667C18.6666 18.675 18.6666 18.675 18.6666 18.6833C18.6666 19.5917 18.6583 20.3333 16.9999 20.3333C15.3499 20.3333 15.3333 19.6 15.3333 18.6917V17.8333C15.3333 17 15.3333 17 16.1666 17H17.8333C18.6666 17 18.6666 17 18.6666 17.8333Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M25.0417 16.1667C23.1167 17.5667 20.9167 18.4 18.6667 18.6833"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.18335 16.3917C11.0583 17.675 13.175 18.45 15.3333 18.6917"
                stroke="#555555"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="">
              <h4>It has survived not only five centuries.</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has ...
              </p>
            </div>
            <div className="TabsContent-End">
              <p>07:40 am</p>
            </div>
          </div>

          {/* <div className="TopTabs-Card">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5667 14.15V19.85C24.5667 20.7833 24.0667 21.65 23.2584 22.125L18.3084 24.9834C17.5 25.45 16.5 25.45 15.6834 24.9834L10.7334 22.125C9.92505 21.6584 9.42505 20.7917 9.42505 19.85V14.15C9.42505 13.2167 9.92505 12.35 10.7334 11.875L15.6834 9.01666C16.4917 8.54999 17.4917 8.54999 18.3084 9.01666L23.2584 11.875C24.0667 12.35 24.5667 13.2084 24.5667 14.15Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 16.1667C18.0724 16.1667 18.9417 15.2973 18.9417 14.225C18.9417 13.1526 18.0724 12.2834 17 12.2834C15.9277 12.2834 15.0583 13.1526 15.0583 14.225C15.0583 15.2973 15.9277 16.1667 17 16.1667Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.3334 20.8833C20.3334 19.3833 18.8417 18.1667 17.0001 18.1667C15.1584 18.1667 13.6667 19.3833 13.6667 20.8833"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="">
              <h4>It has survived not only five centuries.</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has ...
              </p>
            </div>
            <div className="TabsContent-End">
              <p>07:40 am</p>
            </div>
          </div> */}

          {/* <div className="TopTabs-Card">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1751 9.85001C22.9584 9.95001 24.3668 10.975 24.4501 14.8917L24.5584 20.0333C24.6251 23.4667 23.8334 25.1917 19.6668 25.2833L14.6668 25.3833C10.5001 25.4667 9.63344 23.7667 9.56677 20.3417L9.45011 15.1917C9.36677 11.275 10.7418 10.1917 13.5084 9.98334L20.1751 9.85001Z"
                stroke="#555555"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.9666 22V17.8333"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9999 19.9167H12.8333"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6667 8.66666V11.1667"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.3333 8.66666V11.1667"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="">
              <h4>It has survived not only five centuries.</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has ...
              </p>
            </div>
          </div> */}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="">
          <div className="TopTabs-Card">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66675 25.3333H25.3334"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.125 10.3333V25.3333H18.875V10.3333C18.875 9.41666 18.5 8.66666 17.375 8.66666H16.625C15.5 8.66666 15.125 9.41666 15.125 10.3333Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 15.3333V25.3333H12.8333V15.3333C12.8333 14.4167 12.5 13.6667 11.5 13.6667H10.8333C9.83333 13.6667 9.5 14.4167 9.5 15.3333Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1667 19.5V25.3333H24.5001V19.5C24.5001 18.5833 24.1667 17.8333 23.1667 17.8333H22.5001C21.5001 17.8333 21.1667 18.5833 21.1667 19.5Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="">
              <h4>It has survived not only five centuries.</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has ...
              </p>
            </div>
            <div className="TabsContent-End">
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <path
                      d="M3.61987 6.50001L5.78399 8.66668L10.1199 4.33334"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
              <button>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 14 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g opacity="0.2">
                    <path
                      d="M3.61987 9.75L10.1199 3.25"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.1199 9.75L3.61987 3.25"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </g>
                </svg>
              </button>
            </div>
          </div>

          <div className="TopTabs-Card">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.66675 25.3333H25.3334"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.125 10.3333V25.3333H18.875V10.3333C18.875 9.41666 18.5 8.66666 17.375 8.66666H16.625C15.5 8.66666 15.125 9.41666 15.125 10.3333Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.5 15.3333V25.3333H12.8333V15.3333C12.8333 14.4167 12.5 13.6667 11.5 13.6667H10.8333C9.83333 13.6667 9.5 14.4167 9.5 15.3333Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M21.1667 19.5V25.3333H24.5001V19.5C24.5001 18.5833 24.1667 17.8333 23.1667 17.8333H22.5001C21.5001 17.8333 21.1667 18.5833 21.1667 19.5Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="">
              <h4>It has survived not only five centuries.</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has ...
              </p>
            </div>
            <div className="TabsContent-End">
              <p>07:40 am</p>
            </div>
          </div>

          {/* <div className="TopTabs-Card">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24.5667 14.15V19.85C24.5667 20.7833 24.0667 21.65 23.2584 22.125L18.3084 24.9834C17.5 25.45 16.5 25.45 15.6834 24.9834L10.7334 22.125C9.92505 21.6584 9.42505 20.7917 9.42505 19.85V14.15C9.42505 13.2167 9.92505 12.35 10.7334 11.875L15.6834 9.01666C16.4917 8.54999 17.4917 8.54999 18.3084 9.01666L23.2584 11.875C24.0667 12.35 24.5667 13.2084 24.5667 14.15Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M17 16.1667C18.0724 16.1667 18.9417 15.2973 18.9417 14.225C18.9417 13.1526 18.0724 12.2834 17 12.2834C15.9277 12.2834 15.0583 13.1526 15.0583 14.225C15.0583 15.2973 15.9277 16.1667 17 16.1667Z"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.3334 20.8833C20.3334 19.3833 18.8417 18.1667 17.0001 18.1667C15.1584 18.1667 13.6667 19.3833 13.6667 20.8833"
                stroke="#606060"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="">
              <h4>It has survived not only five centuries.</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has ...
              </p>
            </div>
            <div className="TabsContent-End">
              <p>07:40 am</p>
            </div>
          </div> */}

          {/* <div className="TopTabs-Card">
            <svg
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.1751 9.85001C22.9584 9.95001 24.3668 10.975 24.4501 14.8917L24.5584 20.0333C24.6251 23.4667 23.8334 25.1917 19.6668 25.2833L14.6668 25.3833C10.5001 25.4667 9.63344 23.7667 9.56677 20.3417L9.45011 15.1917C9.36677 11.275 10.7418 10.1917 13.5084 9.98334L20.1751 9.85001Z"
                stroke="#555555"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.9666 22V17.8333"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M16.9999 19.9167H12.8333"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M13.6667 8.66666V11.1667"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.3333 8.66666V11.1667"
                stroke="#606060"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>

            <div className="">
              <h4>It has survived not only five centuries.</h4>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. It has ...
              </p>
            </div>
          </div> */}
        </div>
      </CustomTabPanel>
      <button
        className=""
        style={{
          position: "absolute",
          right: 20,
          background: "none",
          border: "none",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "5px",
          color: "#037777",
          fontWeight: 550,
          fontSize: "14px",
          lineHeight: "12px",
        }}
      >
        View All
        <svg
          width="14"
          height="15"
          viewBox="0 0 14 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.19751 12.1201L9.00084 8.31673C9.45001 7.86757 9.45001 7.13257 9.00084 6.6834L5.19751 2.88007"
            stroke="#037777"
            stroke-width="1.5"
            stroke-miterlimit="10"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </Box>
  );
}
