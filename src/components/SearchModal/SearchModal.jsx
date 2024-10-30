import "./SearchModal.css";
import { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import PropTypes from "prop-types";
import { Grid } from "@mui/material";
import img from "../../assets/images/dashboard/ico.png";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 650,
  height: 480,
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

const SearchModal = ({ openSearchModal, onClose }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Modal
      open={openSearchModal}
      onClose={null}
      disableEscapeKeyDown
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className="search-header">
          <div className="search-modal-top">
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
                  d="M8.625 15.75C12.56 15.75 15.75 12.56 15.75 8.625C15.75 4.68997 12.56 1.5 8.625 1.5C4.68997 1.5 1.5 4.68997 1.5 8.625C1.5 12.56 4.68997 15.75 8.625 15.75Z"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.5 16.5L15 15"
                  stroke="#555555"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              Search
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
              width: "650px",
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
              centered
              sx={{
                ".MuiTabs-flexContainer": {
                  gap: 2, // Adds space between the tabs
                  height: "55px",
                  width: "649px",
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
                  //   backgroundColor: "#1565c0", // Background color on hover
                  // },
                },
                ".MuiTabs-indicator": {
                  display: "none", 
                },
              }}
            >
              <Tab label="Search User" />
              <Tab label="Adding option" />
              <Tab label="Adding option" />
            </Tabs>
          </Box>
        </div>
        <div className="search-modal-content">
          <CustomTabPanel value={value} index={0}>
            <div className="" style={{ position: "relative" }}>
              <Grid container spacing={2}>
                {/* First Row */}
                <Grid item xs={12} sm={6}>
                  <input
                    className="search-field"
                    type="text"
                    placeholder="Mobile No."
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    className="search-field"
                    type="text"
                    placeholder="Email"
                  />
                </Grid>

                {/* First Row */}
                <Grid item xs={12} sm={6}>
                  <input
                    className="search-field"
                    type="text"
                    placeholder="Doc Type"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    className="search-field"
                    type="text"
                    placeholder="Doc ID"
                  />
                </Grid>

                {/* First Row */}
                <Grid item xs={12} sm={6}>
                  <input
                    className="search-field"
                    type="date"
                    placeholder="Starting Time"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <input
                    className="search-field"
                    type="date"
                    placeholder="Ending Time"
                  />
                </Grid>
              </Grid>
              <div className="search-btn">
                <button className="restore-btn">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3334 10C18.3334 14.6 14.6001 18.3334 10.0001 18.3334C5.40008 18.3334 2.59175 13.7 2.59175 13.7M2.59175 13.7H6.35842M2.59175 13.7V17.8667M1.66675 10C1.66675 5.40002 5.36675 1.66669 10.0001 1.66669C15.5584 1.66669 18.3334 6.30002 18.3334 6.30002M18.3334 6.30002V2.13335M18.3334 6.30002H14.6334"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
                <button className="search-action-btn">Search</button>
              </div>
            </div>
            <Grid container spacing={2} sx={{ marginTop: "60px" }}>
              {/* First Row */}
              <Grid item xs={12} sm={12}>
                <div className="search-item">
                  <div
                    className=""
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      gap: "10px",
                    }}
                  >
                    <img src={img} alt="" />
                    <div className="">
                      <h4
                        style={{
                          fontFamily: "Roboto",
                          fontWeight: 500,
                          fontSize: "16px",
                          lineHeight: "16px",
                          color: "#035B77",
                        }}
                      >
                        Guy Hawkins
                      </h4>
                      <p
                        style={{
                          fontFamily: "Roboto",
                          fontWeight: 500,
                          fontSize: "12px",
                          lineHeight: "16px",
                          color: "#EC8400",
                          marginTop: "4px",
                        }}
                      >
                        +9641793661527
                      </p>
                    </div>
                  </div>
                  <div className="">
                    <button className="search-item-btn">
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699M3.5 12H20.33"
                          stroke="#222222"
                          stroke-width="1.5"
                          stroke-miterlimit="10"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
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
      </Box>
    </Modal>
  );
};

export default SearchModal;
