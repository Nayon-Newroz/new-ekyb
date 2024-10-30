import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import "./TabsStyle.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import "./styles.css";

// Import Images
import img1 from "../../assets/images/dashboard/NotificationCarousel/item23.png";
import img2 from "../../assets/images/dashboard/NotificationCarousel/item25.png";
import img3 from "../../assets/images/dashboard/NotificationCarousel/item27.png";
import img4 from "../../assets/images/dashboard/NotificationCarousel/item29.png";
import img5 from "../../assets/images/dashboard/NotificationCarousel/item30.png";
import img6 from "../../assets/images/dashboard/NotificationCarousel/item33.png";
import img7 from "../../assets/images/dashboard/NotificationCarousel/item36.png";

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
      {value === index && <Box sx={{ p: 0 }}>{children}</Box>}
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

export default function EmployeeTabs() {
  const [value, setValue] = React.useState(0);
  const [showSearch, setShowSearch] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [filteredUsers, setFilteredUsers] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [sliderRef] = useKeenSlider({
    loop: true,
    mode: "free-snap",
    slides: {
      perView: 7,
      spacing: 14,
    },
    autoplay: true,
  });

  // Array containing user data
  const userSlides = [
    { username: "Alice", image: img1 },
    { username: "Bob", image: img2 },
    { username: "Charlie", image: img3 },
    { username: "David", image: img4 },
    { username: "Eva", image: img5 },
    { username: "Frank", image: img6 },
    { username: "Grace", image: img7 },
  ];

  const handleSearchIconClick = () => {
    setShowSearch(!showSearch);
    setSearchQuery("");
    setFilteredUsers([]);
  };

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);
    const results = userSlides.filter((user) =>
      user.username.toLowerCase().includes(query)
    );
    setFilteredUsers(results);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "40px", marginBottom: "40px" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
          sx={{
            "& .MuiTab-root": {
              color: "red", // Default text color
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
          <Tab label="Employee List" {...a11yProps(0)} />
          <button
            style={{
              position: "absolute",
              right: 10,
              bottom: 13,
              background: "none",
              border: "none",
              cursor: "pointer",
            }}
            className="searchIcon"
            onClick={handleSearchIconClick}
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.75 10.5C8.37335 10.5 10.5 8.37335 10.5 5.75C10.5 3.12665 8.37335 1 5.75 1C3.12665 1 1 3.12665 1 5.75C1 8.37335 3.12665 10.5 5.75 10.5Z"
                stroke="#037777"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M11 11L10 10"
                stroke="#037777"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </Tabs>
      </Box>

      {/* Show search input field */}
      {showSearch && (
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search by username..."
          style={{
            margin: "10px 0",
            padding: "8px",
            borderRadius: "4px",
            width: "96.9%",
            border: "1px solid #ccc",
          }}
        />
      )}

      <CustomTabPanel value={value} index={0}>
        <div style={{ margin: "10px 0px 10px 0px", padding: "0px" }}>
          <div ref={sliderRef} className="keen-slider">
            {(searchQuery.length > 0 ? filteredUsers : userSlides).map(
              (user, index) => (
                <div
                  key={index}
                  className={`keen-slider__slide number-slide${index + 1}`}
                >
                  <img
                    style={{
                      backgroundColor: "#fff",
                      height: "60px",
                      width: "60px",
                      borderRadius: "50%",
                      marginBottom: "7px",
                    }}
                    src={user.image}
                    alt={user.username}
                  />
                  <p
                    style={{
                      fontFamily: "Roboto",
                      fontSize: "12px",
                      fontWeight: 500,
                      lineHeight: "11.72px",
                      textAlign: "center",
                      color: "#000000E5",
                    }}
                  >
                    {user.username}
                  </p>
                </div>
              )
            )}
            {searchQuery.length > 0 && filteredUsers.length === 0 && (
              <p
                style={{
                  textAlign: "center",
                  color: "#ff0000",
                  height: "20px",
                  width: "90%",
                }}
              >
                No user found!
              </p>
            )}
          </div>
        </div>
      </CustomTabPanel>
      <button
        className=""
        style={{
          position: "absolute",
          left: 20,
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
          marginTop: "8px",
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
