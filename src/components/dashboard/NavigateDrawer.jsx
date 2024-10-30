import { Box, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";

const NavigateDrawer = ({ onClose, setOpenNavigation, text }) => {
  const data = {
    "KYC-Request": {
      textOne: "Partial-KYC-List",
      textTwo: "Pending-KYC-List",
      textThree: "Reuploaded-KYC-List",
      textFour: "Partial-Declined-KYC-List",
      textFive: "Declined-KYC-List",
      textSix: "Verified-KYC-List",
    },
    "Manage-Roles": {
      textOne: "Partial-KYC-List",
      textTwo: "Pending-KYC-List",
      textSix: "Verified-KYC-List",
    },
    "Banking-Log": {
      textOne: "Partial-KYC-List",
      textThree: "Reuploaded-KYC-List",
      textFive: "Declined-KYC-List",
      textSix: "Verified-KYC-List",
    },
    "Manage-Access": {
      textOne: "Partial-KYC-List",
      textTwo: "Pending-KYC-List",
      textThree: "Reuploaded-KYC-List",
      textFour: "Partial-Declined-KYC-List",
      textSix: "Verified-KYC-List",
    },
  };

  // Use the `text` prop to get the correct entry from `data`
  const selectedText = data[text] || {};
  //handleBack
  const handleBack = () => {
    setOpenNavigation(false);
  };
  return (
    <Box
      sx={{
        height: "100%", // Make drawer full height
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
        <div className="" style={{ marginTop: "10px" }}>
          <div
            style={{
              margin: "40px 6px 30px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p style={{ color: "#555555", cursor: "pointer" }}>
              {" "}
              <span onClick={handleBack}>Main Menu</span> \{" "}
              <span style={{ color: "#be185d", fontWeight: 600 }}>{text}</span>{" "}
            </p>
            <div className="">
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
            {/* {Object.values(selectedText).map((item, index) => (
              <Grid
                key={index}
                item
                xs={12}
                sm={6}
                md={4}
                lg={3}
                sx={{
                  marginBottom: "10px",
                  border: "1px solid #dcdcdc",
                  padding: "10px",
                  borderRadius: "8px",
                }}
              >
                <p>{item}</p>
              </Grid>
            ))} */}

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
                    Partial-KYC-List
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
                    Pending-KYC-List
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
                    Verified-KYC-List
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
                    Declined-KYC-List
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
          </Grid>
        </div>
      </Box>
    </Box>
  );
};

export default NavigateDrawer;
