import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Grid } from "@mui/material";
import "./TopDrawer.css";
import NavigateDrawer from "./NavigateDrawer";
import SearchDrawer from "./SearchDrawer";

export default function TopDrawer({ openDrawer, onClose }) {
  const [openNavigation, setOpenNavigation] = React.useState(false);
  const [openSearchNavigation, setOpenSearchNavigation] = React.useState(false);
  const [text, setText] = React.useState("");

  //handleNavigation
  const handleNavigation = (text) => {
    setText(text);
    setOpenNavigation(true);
  };

  // handleSearchNavigation
  const handleSearchNavigation = () => {
    setOpenSearchNavigation(true);
  };

  const DrawerList = openSearchNavigation ? (
    <SearchDrawer
      onClose={onClose}
      setOpenSearchNavigation={setOpenSearchNavigation}
    />
  ) : openNavigation ? (
    <NavigateDrawer
      onClose={onClose}
      setOpenNavigation={setOpenNavigation}
      text={text}
    />
  ) : (
    <Box
      sx={{
        height: "100vh", // Make drawer full height
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "50px 0px 20px 0px",
        boxSizing: "border-box",
        position: "relative",
        gap: "20px",
        marginBottom: "80px",
        width: "100%",
      }}
      role="presentation"
    >
      <Box sx={{ padding: "0px 70px 0px 70px" }}>
        <div className="top-drawer-header">
          <h4
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "7px",
              color: "#BE185D",
              fontSize: "22px",
            }}
          >
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M18.0399 8.30989C19.3986 8.30989 20.5 7.20851 20.5 5.84989C20.5 4.49127 19.3986 3.38989 18.0399 3.38989C16.6813 3.38989 15.58 4.49127 15.58 5.84989C15.58 7.20851 16.6813 8.30989 18.0399 8.30989Z"
                stroke="#BE185D"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.96001 8.30989C8.31863 8.30989 9.42 7.20851 9.42 5.84989C9.42 4.49127 8.31863 3.38989 6.96001 3.38989C5.60139 3.38989 4.5 4.49127 4.5 5.84989C4.5 7.20851 5.60139 8.30989 6.96001 8.30989Z"
                stroke="#BE185D"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M18.0399 20.6099C19.3986 20.6099 20.5 19.5086 20.5 18.1499C20.5 16.7913 19.3986 15.6899 18.0399 15.6899C16.6813 15.6899 15.58 16.7913 15.58 18.1499C15.58 19.5086 16.6813 20.6099 18.0399 20.6099Z"
                stroke="#BE185D"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.96001 20.6099C8.31863 20.6099 9.42 19.5086 9.42 18.1499C9.42 16.7913 8.31863 15.6899 6.96001 15.6899C5.60139 15.6899 4.5 16.7913 4.5 18.1499C4.5 19.5086 5.60139 20.6099 6.96001 20.6099Z"
                stroke="#BE185D"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            App All Navigation
          </h4>

          <div className="">
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
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
          </div>
        </div>

        <div className="" style={{ marginTop: "20px" }}>
          <div
            style={{
              margin: "40px 6px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "#555555" }}>Main Menu \ </p>
            <div className="">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  onClick={handleSearchNavigation}
                >
                  <path
                    d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M22 22L20 20"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span
                style={{
                  marginLeft: "11px",
                  cursor: "pointer",
                  color: "#222222",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
              <span
                style={{
                  marginLeft: "2px",
                  cursor: "pointer",
                  color: "#222222",
                }}
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.91003 19.9201L15.43 13.4001C16.2 12.6301 16.2 11.3701 15.43 10.6001L8.91003 4.08008"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>
            </div>
          </div>

          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={12} lg={4}>
              <div className="top-drawer-card">
                <div className="card-content">
                  <span className="card-drawer-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.52 2.83992L4.13 7.03992C3.23 7.73992 2.5 9.22992 2.5 10.3599V17.7699C2.5 20.0899 4.39 21.9899 6.71 21.9899H18.29C20.61 21.9899 22.5 20.0899 22.5 17.7799V10.4999C22.5 9.28992 21.69 7.73992 20.7 7.04992L14.52 2.71992C13.12 1.73992 10.87 1.78992 9.52 2.83992Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 17.99V14.99"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Home
                  </span>
                </div>
                <div className="">
                  <span style={{ cursor: "pointer" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13.8284 6 14.5 5.32843 14.5 4.5C14.5 3.67157 13.8284 3 13 3C12.1716 3 11.5 3.67157 11.5 4.5C11.5 5.32843 12.1716 6 13 6Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21C13.8284 21 14.5 20.3284 14.5 19.5C14.5 18.6716 13.8284 18 13 18C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 13C13.8284 13 14.5 12.3284 14.5 11.5C14.5 10.6716 13.8284 10 13 10C12.1716 10 11.5 10.6716 11.5 11.5C11.5 12.3284 12.1716 13 13 13Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="top-drawer-card">
                <div className="card-content">
                  <span className="card-drawer-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M20 12.5C20 11.12 21.12 10 22.5 10V9C22.5 5 21.5 4 17.5 4H7.5C3.5 4 2.5 5 2.5 9V9.5C3.88 9.5 5 10.62 5 12C5 13.38 3.88 14.5 2.5 14.5V15C2.5 19 3.5 20 7.5 20H17.5C21.5 20 22.5 19 22.5 15C21.12 15 20 13.88 20 12.5Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.5 4L10.5 20"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-dasharray="5 5"
                      />
                    </svg>
                    Tickets
                  </span>
                </div>
                <div className="">
                  <span style={{ cursor: "pointer" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13.8284 6 14.5 5.32843 14.5 4.5C14.5 3.67157 13.8284 3 13 3C12.1716 3 11.5 3.67157 11.5 4.5C11.5 5.32843 12.1716 6 13 6Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21C13.8284 21 14.5 20.3284 14.5 19.5C14.5 18.6716 13.8284 18 13 18C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 13C13.8284 13 14.5 12.3284 14.5 11.5C14.5 10.6716 13.8284 10 13 10C12.1716 10 11.5 10.6716 11.5 11.5C11.5 12.3284 12.1716 13 13 13Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="top-drawer-card">
                <div className="card-content">
                  <span className="card-drawer-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M21.5 7V17C21.5 20 20 22 16.5 22H8.5C5 22 3.5 20 3.5 17V7C3.5 4 5 2 8.5 2H16.5C20 2 21.5 4 21.5 7Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M15 4.5V6.5C15 7.6 15.9 8.5 17 8.5H19"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.5 13H12.5"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.5 17H16.5"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Customer Report
                  </span>
                </div>
                <div className="">
                  <span style={{ cursor: "pointer" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13.8284 6 14.5 5.32843 14.5 4.5C14.5 3.67157 13.8284 3 13 3C12.1716 3 11.5 3.67157 11.5 4.5C11.5 5.32843 12.1716 6 13 6Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21C13.8284 21 14.5 20.3284 14.5 19.5C14.5 18.6716 13.8284 18 13 18C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 13C13.8284 13 14.5 12.3284 14.5 11.5C14.5 10.6716 13.8284 10 13 10C12.1716 10 11.5 10.6716 11.5 11.5C11.5 12.3284 12.1716 13 13 13Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="top-drawer-card">
                <div className="card-content">
                  <span className="card-drawer-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.66 10.87C9.56 10.86 9.44 10.86 9.33 10.87C6.95 10.79 5.06 8.84 5.06 6.44C5.06 3.99 7.04 2 9.5 2C11.95 2 13.94 3.99 13.94 6.44C13.93 8.84 12.04 10.79 9.66 10.87Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M16.91 4C18.85 4 20.41 5.57 20.41 7.5C20.41 9.39 18.91 10.93 17.04 11C16.96 10.99 16.87 10.99 16.78 11"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M4.65997 14.56C2.23997 16.18 2.23997 18.82 4.65997 20.43C7.40997 22.27 11.92 22.27 14.67 20.43C17.09 18.81 17.09 16.17 14.67 14.56C11.93 12.73 7.41997 12.73 4.65997 14.56Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.84 20C19.56 19.85 20.24 19.56 20.8 19.13C22.36 17.96 22.36 16.03 20.8 14.86C20.25 14.44 19.58 14.16 18.87 14"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    User List
                  </span>
                </div>
                <div className="">
                  <span style={{ cursor: "pointer" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13.8284 6 14.5 5.32843 14.5 4.5C14.5 3.67157 13.8284 3 13 3C12.1716 3 11.5 3.67157 11.5 4.5C11.5 5.32843 12.1716 6 13 6Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21C13.8284 21 14.5 20.3284 14.5 19.5C14.5 18.6716 13.8284 18 13 18C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 13C13.8284 13 14.5 12.3284 14.5 11.5C14.5 10.6716 13.8284 10 13 10C12.1716 10 11.5 10.6716 11.5 11.5C11.5 12.3284 12.1716 13 13 13Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="top-drawer-card">
                <div className="card-content">
                  <span className="card-drawer-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5 18C22.5 18.32 22.46 18.63 22.38 18.93C22.29 19.33 22.13 19.72 21.92 20.06C21.23 21.22 19.96 22 18.5 22C17.47 22 16.54 21.61 15.84 20.97C15.54 20.71 15.28 20.4 15.08 20.06C14.71 19.46 14.5 18.75 14.5 18C14.5 16.92 14.93 15.93 15.63 15.21C16.36 14.46 17.38 14 18.5 14C19.68 14 20.75 14.51 21.47 15.33C22.11 16.04 22.5 16.98 22.5 18Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.91003 22C3.91003 18.13 7.76003 15 12.5 15C13.46 15 14.39 15.13 15.26 15.37"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M19.53 16.9399L17.42 19.0499"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.4401 16.96L19.5601 19.0699"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Block User List
                  </span>
                </div>
                <div className="">
                  <span style={{ cursor: "pointer" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13.8284 6 14.5 5.32843 14.5 4.5C14.5 3.67157 13.8284 3 13 3C12.1716 3 11.5 3.67157 11.5 4.5C11.5 5.32843 12.1716 6 13 6Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21C13.8284 21 14.5 20.3284 14.5 19.5C14.5 18.6716 13.8284 18 13 18C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 13C13.8284 13 14.5 12.3284 14.5 11.5C14.5 10.6716 13.8284 10 13 10C12.1716 10 11.5 10.6716 11.5 11.5C11.5 12.3284 12.1716 13 13 13Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="top-drawer-card">
                <div className="card-content">
                  <span className="card-drawer-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.78 10.45L21.5 6.72998L17.78 3.01001"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.5 6.72998H21.5"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.21997 13.55L3.5 17.2701L7.21997 20.9901"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M21.5 17.27H3.5"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Transactions
                  </span>
                </div>
                <div className="">
                  <span style={{ cursor: "pointer" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13.8284 6 14.5 5.32843 14.5 4.5C14.5 3.67157 13.8284 3 13 3C12.1716 3 11.5 3.67157 11.5 4.5C11.5 5.32843 12.1716 6 13 6Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21C13.8284 21 14.5 20.3284 14.5 19.5C14.5 18.6716 13.8284 18 13 18C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 13C13.8284 13 14.5 12.3284 14.5 11.5C14.5 10.6716 13.8284 10 13 10C12.1716 10 11.5 10.6716 11.5 11.5C11.5 12.3284 12.1716 13 13 13Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="top-drawer-card">
                <div className="card-content">
                  <span className="card-drawer-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M22.5 10V15C22.5 20 20.5 22 15.5 22H9.5C4.5 22 2.5 20 2.5 15V9C2.5 4 4.5 2 9.5 2H14.5"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22.5 10H18.5C15.5 10 14.5 9 14.5 6V2L22.5 10Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 13H13.5"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 17H11.5"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Data Bundle Log
                  </span>
                </div>
                <div className="">
                  <span style={{ cursor: "pointer" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13.8284 6 14.5 5.32843 14.5 4.5C14.5 3.67157 13.8284 3 13 3C12.1716 3 11.5 3.67157 11.5 4.5C11.5 5.32843 12.1716 6 13 6Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21C13.8284 21 14.5 20.3284 14.5 19.5C14.5 18.6716 13.8284 18 13 18C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 13C13.8284 13 14.5 12.3284 14.5 11.5C14.5 10.6716 13.8284 10 13 10C12.1716 10 11.5 10.6716 11.5 11.5C11.5 12.3284 12.1716 13 13 13Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Grid>

            {/* extra grid layout */}
            <Grid item xs={12} lg={4}>
              <div className="layer-one">
                <div className="layer-two">
                  <div
                    className="top-drawer-card-extra"
                    onClick={() => handleNavigation("KYC Request")}
                  >
                    <div className="card-content">
                      <span className="card-drawer-icon">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M22.5 18C22.5 18.32 22.46 18.63 22.38 18.93C22.29 19.33 22.13 19.72 21.92 20.06C21.23 21.22 19.96 22 18.5 22C17.47 22 16.54 21.61 15.84 20.97C15.54 20.71 15.28 20.4 15.08 20.06C14.71 19.46 14.5 18.75 14.5 18C14.5 16.92 14.93 15.93 15.63 15.21C16.36 14.46 17.38 14 18.5 14C19.68 14 20.75 14.51 21.47 15.33C22.11 16.04 22.5 16.98 22.5 18Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.91003 22C3.91003 18.13 7.76003 15 12.5 15C13.46 15 14.39 15.13 15.26 15.37"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M19.99 17.98H17.01"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.5 16.52V19.51"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        KYC Request
                      </span>
                    </div>
                    <div className="">
                      <span style={{ cursor: "pointer" }}>
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.41003 16.9201L7.93003 10.4001C8.70003 9.63008 8.70003 8.37008 7.93003 7.60008L1.41003 1.08008"
                            stroke="#969696"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            <Grid item xs={12} lg={4}>
              <div className="top-drawer-card">
                <div className="card-content">
                  <span className="card-drawer-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.5 22H15.5C20.5 22 22.5 20 22.5 15V9C22.5 4 20.5 2 15.5 2H9.5C4.5 2 2.5 4 2.5 9V15C2.5 20 4.5 22 9.5 22Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.87 8.87988H18.12"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.88 8.87988L7.63 9.62988L9.88 7.37988"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.87 15.8799H18.12"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.88 15.8799L7.63 16.6299L9.88 14.3799"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    KYB Request
                  </span>
                </div>
                <div className="">
                  <span style={{ cursor: "pointer" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13.8284 6 14.5 5.32843 14.5 4.5C14.5 3.67157 13.8284 3 13 3C12.1716 3 11.5 3.67157 11.5 4.5C11.5 5.32843 12.1716 6 13 6Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21C13.8284 21 14.5 20.3284 14.5 19.5C14.5 18.6716 13.8284 18 13 18C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 13C13.8284 13 14.5 12.3284 14.5 11.5C14.5 10.6716 13.8284 10 13 10C12.1716 10 11.5 10.6716 11.5 11.5C11.5 12.3284 12.1716 13 13 13Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} lg={4}>
              <div className="top-drawer-card">
                <div className="card-content">
                  <span className="card-drawer-icon">
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.51001 11.22V15.71C3.51001 20.2 5.31001 22 9.80001 22H15.19C19.68 22 21.48 20.2 21.48 15.71V11.22"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 12C14.33 12 15.68 10.51 15.5 8.68L14.84 2H10.17L9.49999 8.68C9.31999 10.51 10.67 12 12.5 12Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M18.81 12C20.83 12 22.31 10.36 22.11 8.35L21.83 5.6C21.47 3 20.47 2 17.85 2H14.8L15.5 9.01C15.67 10.66 17.16 12 18.81 12Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.14 12C7.79 12 9.28 10.66 9.44 9.01L9.66 6.8L10.14 2H7.09C4.47001 2 3.47 3 3.11 5.6L2.84 8.35C2.64 10.36 4.12 12 6.14 12Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12.5 17C10.83 17 10 17.83 10 19.5V22H15V19.5C15 17.83 14.17 17 12.5 17Z"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                    Store Management
                  </span>
                </div>
                <div className="">
                  <span style={{ cursor: "pointer" }}>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M13 6C13.8284 6 14.5 5.32843 14.5 4.5C14.5 3.67157 13.8284 3 13 3C12.1716 3 11.5 3.67157 11.5 4.5C11.5 5.32843 12.1716 6 13 6Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 21C13.8284 21 14.5 20.3284 14.5 19.5C14.5 18.6716 13.8284 18 13 18C12.1716 18 11.5 18.6716 11.5 19.5C11.5 20.3284 12.1716 21 13 21Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M13 13C13.8284 13 14.5 12.3284 14.5 11.5C14.5 10.6716 13.8284 10 13 10C12.1716 10 11.5 10.6716 11.5 11.5C11.5 12.3284 12.1716 13 13 13Z"
                        fill="#969696"
                        stroke="#969696"
                        stroke-width="1.5"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </div>
            </Grid>

            {/* extra grid layout */}
            <Grid item xs={12} lg={4}>
              <div className="layer-one">
                <div className="layer-two">
                  <div
                    className="top-drawer-card-extra"
                    onClick={() => handleNavigation("Banking Log")}
                  >
                    <div className="card-content">
                      <span className="card-drawer-icon">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M12.87 2.15009L21.87 5.75006C22.22 5.89006 22.5 6.31006 22.5 6.68006V10.0001C22.5 10.5501 22.05 11.0001 21.5 11.0001H3.5C2.95 11.0001 2.5 10.5501 2.5 10.0001V6.68006C2.5 6.31006 2.78 5.89006 3.13 5.75006L12.13 2.15009C12.33 2.07009 12.67 2.07009 12.87 2.15009Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M22.5 22H2.5V19C2.5 18.45 2.95 18 3.5 18H21.5C22.05 18 22.5 18.45 22.5 19V22Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M8.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M16.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M20.5 18V11"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M1.5 22H23.5"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 8.5C13.3284 8.5 14 7.82843 14 7C14 6.17157 13.3284 5.5 12.5 5.5C11.6716 5.5 11 6.17157 11 7C11 7.82843 11.6716 8.5 12.5 8.5Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Banking Log
                      </span>
                    </div>
                    <div className="">
                      <span style={{ cursor: "pointer" }}>
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.41003 16.9201L7.93003 10.4001C8.70003 9.63008 8.70003 8.37008 7.93003 7.60008L1.41003 1.08008"
                            stroke="#969696"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            {/* extra grid layout */}
            <Grid item xs={12} lg={4}>
              <div className="layer-one">
                <div className="layer-two">
                  <div
                    className="top-drawer-card-extra"
                    onClick={() => handleNavigation("Manage Roles")}
                  >
                    <div className="card-content">
                      <span className="card-drawer-icon">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M14.8334 16.8311V19.1648C14.8334 20.0222 14.8334 20.0222 15.6482 20.5683L17.8889 21.8544C18.2271 22.0485 18.7771 22.0485 19.1112 21.8544L21.3519 20.5683C22.1667 20.0222 22.1667 20.0222 22.1667 19.1689V16.8311C22.1667 15.9778 22.1667 15.9778 21.3519 15.4317L19.1112 14.1456C18.7771 13.9515 18.2271 13.9515 17.8889 14.1456L15.6482 15.4317C14.8334 15.9778 14.8334 15.9778 14.8334 16.8311Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 12C15.2614 12 17.5 9.76142 17.5 7C17.5 4.23858 15.2614 2 12.5 2C9.73858 2 7.5 4.23858 7.5 7C7.5 9.76142 9.73858 12 12.5 12Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M3.91003 22C3.91003 18.13 7.76003 15 12.5 15C13.46 15 14.39 15.13 15.26 15.37"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M18.5 19.3334C19.2363 19.3334 19.8333 18.7365 19.8333 18.0001C19.8333 17.2637 19.2363 16.6667 18.5 16.6667C17.7636 16.6667 17.1666 17.2637 17.1666 18.0001C17.1666 18.7365 17.7636 19.3334 18.5 19.3334Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Manage Roles
                      </span>
                    </div>
                    <div className="">
                      <span style={{ cursor: "pointer" }}>
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.41003 16.9201L7.93003 10.4001C8.70003 9.63008 8.70003 8.37008 7.93003 7.60008L1.41003 1.08008"
                            stroke="#969696"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>

            {/* extra grid layout */}
            <Grid item xs={12} lg={4}>
              <div className="layer-one">
                <div className="layer-two">
                  <div
                    className="top-drawer-card-extra"
                    onClick={() => handleNavigation("Manage Access")}
                  >
                    <div className="card-content">
                      <span className="card-drawer-icon">
                        <svg
                          width="25"
                          height="24"
                          viewBox="0 0 25 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17.5 22H7.5C3.5 22 2.5 21 2.5 17V15C2.5 11 3.5 10 7.5 10H17.5C21.5 10 22.5 11 22.5 15V17C22.5 21 21.5 22 17.5 22Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.5 10V8C6.5 4.69 7.5 2 12.5 2C17.5 2 18.5 4.69 18.5 8V10"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M12.5 18.5C13.8807 18.5 15 17.3807 15 16C15 14.6193 13.8807 13.5 12.5 13.5C11.1193 13.5 10 14.6193 10 16C10 17.3807 11.1193 18.5 12.5 18.5Z"
                            stroke="#222222"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        Manage Access
                      </span>
                    </div>
                    <div className="">
                      <span style={{ cursor: "pointer" }}>
                        <svg
                          width="10"
                          height="18"
                          viewBox="0 0 10 18"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M1.41003 16.9201L7.93003 10.4001C8.70003 9.63008 8.70003 8.37008 7.93003 7.60008L1.41003 1.08008"
                            stroke="#969696"
                            stroke-width="1.5"
                            stroke-miterlimit="10"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </Box>
    </Box>
  );

  return (
    <Drawer
      anchor="top" // Open from the top
      open={openDrawer}
      onClose={onClose}
      sx={{
        ".MuiDrawer-paper": {
          height: "100vh",
          width: "100%",
          boxShadow: "none",
          backgroundColor: "#F8F8FA8F",
          backdropFilter: "blur(5px)",
        },
      }}
    >
      {DrawerList}
    </Drawer>
  );
}
