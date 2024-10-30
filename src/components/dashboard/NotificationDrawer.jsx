import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import "./Notification.css";
import TabsTop from "../NotificationComponents/TabsTop";
import TabsBottom from "../NotificationComponents/TabsBottom";
import EmployeeTabs from "../NotificationComponents/EmpolyeeTabs";

const NotificationDrawer = ({ openNotificationDrawer, onClose }) => {
  const DrawerList = (
    <Box
      sx={{
        width: "608px",
        height: "100vh",
        background: "#F0F9F9",
        position: "relative",
      }}
      role="presentation"
    >
      <button className="notification-close-btn" onClick={onClose}>
        <svg
          width="26"
          height="26"
          viewBox="0 0 26 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.4">
            <g filter="url(#filter0_dd_243_3131)">
              <rect x="3" y="1" width="20" height="20" rx="10" fill="white" />
            </g>
            <path
              d="M17 7L13 11L9 15M17 15L9 7"
              stroke="#155C9E"
              stroke-width="2"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <filter
              id="filter0_dd_243_3131"
              x="0"
              y="0"
              width="26"
              height="26"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="2" />
              <feGaussianBlur stdDeviation="1.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0.133333 0 0 0 0 0.258824 0 0 0 0.2 0"
              />
              <feBlend
                mode="normal"
                in2="BackgroundImageFix"
                result="effect1_dropShadow_243_3131"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
              />
              <feBlend
                mode="normal"
                in2="effect1_dropShadow_243_3131"
                result="effect2_dropShadow_243_3131"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect2_dropShadow_243_3131"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
      </button>

      <div className="notification-container">
        <p
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            marginTop: "10px",
          }}
        >
          <svg
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13.0216 2.16667C9.03489 2.16667 5.80656 5.395 5.80656 9.38167V11.6567C5.80656 12.3933 5.50322 13.4983 5.12406 14.1267L3.74822 16.4233C2.90322 17.8425 3.48822 19.4242 5.04822 19.9442C10.2266 21.6667 15.8274 21.6667 21.0057 19.9442C22.4682 19.4567 23.0966 17.745 22.3057 16.4233L20.9299 14.1267C20.5507 13.4983 20.2474 12.3825 20.2474 11.6567V9.38167C20.2366 5.41667 16.9866 2.16667 13.0216 2.16667Z"
              stroke="#222222"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
            <path
              d="M16.6076 20.3883C16.6076 22.3708 14.9826 23.9958 13.0001 23.9958C12.0142 23.9958 11.1042 23.5842 10.4542 22.9342C9.80424 22.2842 9.39258 21.3742 9.39258 20.3883"
              stroke="#222222"
              stroke-width="1.5"
              stroke-miterlimit="10"
            />
            <path
              d="M13 6.97667V10.5842"
              stroke="#222222"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
            />
          </svg>
          <span className="title">Notifications</span>
        </p>
        {/* Notification-Tabs */}
        <div className="" style={{ marginTop: "17px" }}>
            <TabsTop />
            <TabsBottom />
            <EmployeeTabs />
        </div>
      </div>
    </Box>
  );
  return (
    <div style={{ position: "relative" }}>
      <Drawer sx={{ zIndex: 2000 }} anchor="left" open={openNotificationDrawer} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default NotificationDrawer;
