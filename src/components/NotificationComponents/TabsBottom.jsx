import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./TabsStyle.css";
import img from "../../assets/images/dashboard/avatar/Avatar.png";

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

export default function TabsBottom() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "40px" }}>
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
          <Tab label="Activity" {...a11yProps(0)} />
          <Tab label="User" {...a11yProps(1)} />
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

            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "60px",
              }}
            >
              <div className="">
                <h4>It has survived not only five centuries.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry...
                </p>
              </div>
              <button style={{ background: "none", border: "none" }}>
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9399 21.78L18.2866 17.4334C18.7999 16.92 18.7999 16.08 18.2866 15.5667L13.9399 11.22"
                    stroke="#037777"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
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

            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "60px",
              }}
            >
              <div className="">
                <h4>It has survived not only five centuries.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry...
                </p>
              </div>
              <button style={{ background: "none", border: "none" }}>
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9399 21.78L18.2866 17.4334C18.7999 16.92 18.7999 16.08 18.2866 15.5667L13.9399 11.22"
                    stroke="#037777"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
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

            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "60px",
              }}
            >
              <div className="">
                <h4>It has survived not only five centuries.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry...
                </p>
              </div>
              <button style={{ background: "none", border: "none" }}>
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9399 21.78L18.2866 17.4334C18.7999 16.92 18.7999 16.08 18.2866 15.5667L13.9399 11.22"
                    stroke="#037777"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
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

            <div
              className=""
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: "60px",
              }}
            >
              <div className="">
                <h4>It has survived not only five centuries.</h4>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry...
                </p>
              </div>
              <button style={{ background: "none", border: "none" }}>
                <svg
                  width="32"
                  height="33"
                  viewBox="0 0 32 33"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.9399 21.78L18.2866 17.4334C18.7999 16.92 18.7999 16.08 18.2866 15.5667L13.9399 11.22"
                    stroke="#037777"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
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
