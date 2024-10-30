import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import "./AddModal.css";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 800,
  height: 624,
  bgcolor: "background.paper",
  borderRadius: "10px",
  background: "#ffffff",
  p: 4,
  border: "1px solid #D9F1F1",
  padding: "0px",
};

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

const AddModal = ({ openAddModal, onClose }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Modal
      open={openAddModal}
      onClose={null}
      disableEscapeKeyDown
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="add-header">
          <div className="add-modal-top">
            <p
              style={{
                display: "flex",
                alignItems: "center",
                padding: "9px",
                gap: "7px",
              }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M16.5 6.2025V3.1725C16.5 1.98 16.02 1.5 14.8275 1.5H11.7975C10.605 1.5 10.125 1.98 10.125 3.1725V6.2025C10.125 7.395 10.605 7.875 11.7975 7.875H14.8275C16.02 7.875 16.5 7.395 16.5 6.2025Z"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.875 6.39V2.985C7.875 1.9275 7.395 1.5 6.2025 1.5H3.1725C1.98 1.5 1.5 1.9275 1.5 2.985V6.3825C1.5 7.4475 1.98 7.8675 3.1725 7.8675H6.2025C7.395 7.875 7.875 7.4475 7.875 6.39Z"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M7.875 14.8275V11.7975C7.875 10.605 7.395 10.125 6.2025 10.125H3.1725C1.98 10.125 1.5 10.605 1.5 11.7975V14.8275C1.5 16.02 1.98 16.5 3.1725 16.5H6.2025C7.395 16.5 7.875 16.02 7.875 14.8275Z"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M10.875 13.125H15.375"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M13.125 15.375V10.875"
                  stroke="#555555"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
              Add
            </p>
            <IconButton
              aria-label="close"
              onClick={onClose}
              sx={{
                color: "text.secondary",
                background: "#fff",
              }}
            >
              <CloseIcon />
            </IconButton>
          </div>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
              width: "100%",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
              sx={{
                ".MuiTabs-flexContainer": {
                  gap: 2, 
                  height: "55px",
                  width: "700px",
                },
                ".MuiTab-root": {
                  padding: "4px 12px",
                  borderRadius: "24px",
                  height: "30px", 
                  width: "120px",
                  textTransform: "none", 
                  backgroundColor: "#FFFFFF", 
                  color: "#037777", 
                  fontSize: "12px",
                  fontWeight: 500,
                  lineHeight: "18px",
                  boxShadow: "1px 2px 4px rgba(0, 0, 0, 0.2)", 
                  overflow: "visible", 
                  zIndex: 1000,
                  "&.Mui-selected": {
                    backgroundColor: "#fff",
                    color: "#037777", 
                    boxShadow: "inset 0px 2px 4px rgba(0, 0, 0, 0.3)", 
                  },
                  // "&:hover": {
                  //   backgroundColor: "#1565c0", 
                  // },
                },
                ".MuiTabs-indicator": {
                  display: "none", 
                },
              }}
            >
              <Tab label="Add User" />
              <Tab label="Adding option" />
              <Tab label="Adding option" />
            </Tabs>
          </Box>
        </div>
        <div className="add-modal-content">
          <CustomTabPanel value={value} index={0}>
            <Grid container spacing={2}>
              {/* First Row */}
              <Grid item xs={12} sm={6}>
                <label className="input-label" htmlFor="">
                  Full Name
                </label>
                <input className="input-field" type="text" placeholder="Name" />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label className="input-label" htmlFor="">
                  Nickname
                </label>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Nickname"
                />
              </Grid>

              {/* Second Row */}
              <Grid item xs={12} sm={6}>
                <label className="input-label" htmlFor="">
                  Contact
                </label>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Contact"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label className="input-label" htmlFor="">
                  Full Name
                </label>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Full Name"
                />
              </Grid>

              {/* Third Row */}
              <Grid item xs={12} sm={6}>
                <label className="input-label" htmlFor="">
                  Degeneration
                </label>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Degeneration"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label className="input-label" htmlFor="department">
                  Support
                </label>
                <select id="department" className="input-field">
                  <option value="">Support</option>
                  <option value="hr">Human Resources</option>
                  <option value="it">Information Technology</option>
                  <option value="marketing">Marketing</option>
                  <option value="sales">Sales</option>
                </select>
              </Grid>

              {/* Third Row */}
              <Grid item xs={12} sm={6}>
                <label className="input-label" htmlFor="">
                  Employee ID
                </label>
                <input
                  className="input-field"
                  type="text"
                  placeholder="Employee ID"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <label className="input-label" htmlFor="">
                  Profile picture
                </label>
                <input
                  className="input-field"
                  type="file"
                  placeholder="Employee ID"
                />
              </Grid>
            </Grid>
          </CustomTabPanel>
          <CustomTabPanel value={value} index={1}>
            Item Two
          </CustomTabPanel>
          <CustomTabPanel value={value} index={2}>
            Item Three
          </CustomTabPanel>
        </div>
        <div className="header-bottom">
          <div className="">
            <button className="close-btn" onClick={onClose}>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.5 13.5L13.5 4.5"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 13.5L4.5 4.5"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Close
            </button>
          </div>
          <div className="save-btn">
            <button className="more">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 6.74252V15.2625C12 16.35 11.22 16.8075 10.2675 16.2825L7.32001 14.64C7.00501 14.4675 6.49499 14.4675 6.17999 14.64L3.2325 16.2825C2.28 16.8075 1.5 16.35 1.5 15.2625V6.74252C1.5 5.46002 2.54999 4.41003 3.83249 4.41003H9.66751C10.95 4.41003 12 5.46002 12 6.74252Z"
                  stroke="#BE185D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 3.83249V12.3525C16.5 13.44 15.72 13.8975 14.7675 13.3725L12 11.8275V6.74249C12 5.45999 10.95 4.41 9.66751 4.41H6V3.83249C6 2.54999 7.04999 1.5 8.33249 1.5H14.1675C15.45 1.5 16.5 2.54999 16.5 3.83249Z"
                  stroke="#BE185D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.25 9H8.25"
                  stroke="#BE185D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.75 10.5V7.5"
                  stroke="#BE185D"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Save And Add More
            </button>
            <button className="exit">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1292_4411)">
                  <path
                    d="M1.5 6.5C1.5 4.14333 1.5 2.96417 2.2325 2.2325C2.96417 1.5 4.14333 1.5 6.5 1.5H12.4767C12.8167 1.5 12.9875 1.5 13.14 1.56333C13.2933 1.62667 13.4142 1.74667 13.655 1.98833L16.0117 4.345C16.2533 4.58667 16.3733 4.70667 16.4367 4.86C16.5 5.0125 16.5 5.18333 16.5 5.52333V11.5C16.5 13.8567 16.5 15.0358 15.7675 15.7675C15.0358 16.5 13.8567 16.5 11.5 16.5H6.5C4.14333 16.5 2.96417 16.5 2.2325 15.7675C1.5 15.0358 1.5 13.8567 1.5 11.5V6.5Z"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M12.3333 16.5V14.8333C12.3333 13.2617 12.3333 12.4767 11.8449 11.9883C11.3566 11.5 10.5716 11.5 8.99992 11.5H8.16659C6.59492 11.5 5.80992 11.5 5.32159 11.9883C4.83325 12.4767 4.83325 13.2617 4.83325 14.8333V16.5"
                    stroke="white"
                    stroke-width="1.5"
                  />
                  <path
                    d="M4.83325 5.66663H8.99992"
                    stroke="white"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_1292_4411">
                    <rect width="18" height="18" fill="white" />
                  </clipPath>
                </defs>
              </svg>
              Save And Exit
            </button>
          </div>
        </div>
      </Box>
    </Modal>
  );
};

export default AddModal;
