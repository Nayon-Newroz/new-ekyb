import { useState } from "react";
import { Box } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import "./SearchDrawer.css";

const SearchDrawer = ({ onClose, openSearchNavigation }) => {
  const [inputValue, setInputValue] = useState(""); 
  const [showCard, setShowCard] = useState(false); 

  // Handle input change and show card only when there's text
  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setTimeout(() => {
      setShowCard(value.trim() !== "");
    }, 1000);
  };

  //handleCloseInput
  const handleCloseInput = () => {
    setInputValue("");
    setShowCard(false);
  };

  return (
    <Box
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "50px 0px 20px 0px",
        boxSizing: "border-box",
        position: "relative",
        overflow: "hidden",
        gap: "20px",
      }}
      role="presentation"
    >
      <Box sx={{ flexGrow: 1, padding: "0px 70px 0px 70px" }}>
        <div className="search-content">
          <div className="search-input">
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 21C17.2467 21 21.5 16.7467 21.5 11.5C21.5 6.25329 17.2467 2 12 2C6.75329 2 2.5 6.25329 2.5 11.5C2.5 16.7467 6.75329 21 12 21Z"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M22.5 22L20.5 20"
                stroke="#222222"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>

            <input
              type="text"
              value={inputValue}
              onChange={handleInputChange} 
              placeholder="Search..."
            />

            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              onClick={handleCloseInput}
            >
              <path
                d="M6.5 18L18.5 6"
                stroke="#555555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M18.5 18L6.5 6"
                stroke="#555555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Card that shows when there's text in the input */}
          {showCard && (
            <div className="search-card">
              <div className="search-content">
                <p>KYC Request</p>
                <h5>
                  Partial KYC List{" "}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9301 5.92993L21.0001 11.9999L14.9301 18.0699M4 12H20.83"
                      stroke="#555555"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h5>
                <h5>
                  Partial KYC List{" "}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9301 5.92993L21.0001 11.9999L14.9301 18.0699M4 12H20.83"
                      stroke="#555555"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h5>
                <h5>
                  Partial KYC List{" "}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9301 5.92993L21.0001 11.9999L14.9301 18.0699M4 12H20.83"
                      stroke="#555555"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h5>
                <h5>
                  Partial KYC List{" "}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9301 5.92993L21.0001 11.9999L14.9301 18.0699M4 12H20.83"
                      stroke="#555555"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h5>
                <h5>
                  Partial KYC List{" "}
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9301 5.92993L21.0001 11.9999L14.9301 18.0699M4 12H20.83"
                      stroke="#555555"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h5>
              </div>
              <div className="search-recent">
                <p>Recent</p>
                <h5>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5 12C22.5 17.52 18.02 22 12.5 22C6.98 22 2.5 17.52 2.5 12C2.5 6.48 6.98 2 12.5 2C18.02 2 22.5 6.48 22.5 12Z"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.2099 15.18L13.1099 13.33C12.5699 13.01 12.1299 12.24 12.1299 11.61V7.51001"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Partial KYC List{" "}
                  </span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9301 5.92993L21.0001 11.9999L14.9301 18.0699M4 12H20.83"
                      stroke="#555555"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h5>
                <h5>
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5 12C22.5 17.52 18.02 22 12.5 22C6.98 22 2.5 17.52 2.5 12C2.5 6.48 6.98 2 12.5 2C18.02 2 22.5 6.48 22.5 12Z"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.2099 15.18L13.1099 13.33C12.5699 13.01 12.1299 12.24 12.1299 11.61V7.51001"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Partial KYC List{" "}
                  </span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.9301 5.92993L21.0001 11.9999L14.9301 18.0699M4 12H20.83"
                      stroke="#555555"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </h5>
              </div>
            </div>
          )}
        </div>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          position: "absolute",
          bottom: 16,
          width: "100%",
        }}
      >
        <IconButton
          edge="end"
          color="inherit"
          onClick={onClose}
          aria-label="close"
          sx={{
            backgroundColor: "#155C9E",
            border: "1px solid #62C6FF",
            color: "#fff",
            boxShadow: "0px 4px 10px rgba(0, 34, 66, 0.1)", // Correct box-shadow
            height: "50px",
            width: "50px",
            borderRadius: "42px",
            "&:hover": {
              backgroundColor: "#155C9E", // Same background on hover
              boxShadow: "0px 4px 10px rgba(0, 34, 66, 0.2)", // Adjust hover box-shadow for subtle effect
            },
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default SearchDrawer;
