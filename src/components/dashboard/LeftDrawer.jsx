import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { useState, useEffect } from "react";
import buttonImg from "../../assets/images/dashboard/Favirite1.png";
import "./LeftDrawer.css";

const favoriteCards = [
  {
    title: "Partial KYC List",
    description: "DASHBOARD / List View",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#BE185D",
  },
  {
    title: "Full KYC List",
    description: "DASHBOARD / Detailed View",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#BE185D",
  },
  {
    title: "Transaction History",
    description: "DASHBOARD / Summary",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#BE185D",
  },
  {
    title: "User Analytics",
    description: "DASHBOARD / Insights",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#3B82F6",
  },
  {
    title: "User Feedback",
    description: "DASHBOARD / Reviews",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#E11D48",
  },
  {
    title: "Payment History",
    description: "DASHBOARD / Transactions",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#22C55E",
  },
  {
    title: "Project Overview",
    description: "DASHBOARD / Project Status",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#F97316",
  },
  {
    title: "User Access Control",
    description: "DASHBOARD / Permissions",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#9333EA",
  },
  {
    title: "Audit Logs",
    description: "DASHBOARD / Activity",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#10B981",
  },
  {
    title: "Financial Reports",
    description: "DASHBOARD / Overview",
    iconPath:
      "M10.4899 2.73L5.49991 4.61C4.34991 5.04 3.40991 6.4 3.40991 7.62V15.05C3.40991 16.23 4.18991 17.78 5.13991 18.49L9.43991 21.7C10.8499 22.76 13.1699 22.76 14.5799 21.7L18.8799 18.49C19.8299 17.78 20.6099 16.23 20.6099 15.05V7.62C20.6099 6.39 19.6699 5.03 18.5199 4.6L13.5299 2.73C12.6799 2.42 11.3199 2.42 10.4899 2.73Z",
    stroke: "#2563EB",
  },
];

const LeftDrawer = ({ openLeftDrawer, onClose }) => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (openLeftDrawer) {
      // Show the button after a short delay
      const timer = setTimeout(() => setShowButton(true), 100); // Adjust the delay as needed
      return () => clearTimeout(timer);
    } else {
      // Hide the button immediately when the drawer closes
      setShowButton(false);
    }
  }, [openLeftDrawer]);

  const DrawerList = (
    <Box
      sx={{
        width: "360px",
        paddingRight: "50px",
        height: "100%",
        overflowY: "scroll", // Make sure the content can still scroll vertically
        overflowX: "hidden", // Corrected camelCase
        background: "#F0F9F9",
        // Hide the scrollbar for webkit browsers
        "&::-webkit-scrollbar": {
          display: "none",
        },
        // Hide the scrollbar for Firefox
        scrollbarWidth: "none",
      }}
      role="presentation"
    >
      <div
        className=""
        style={{
          border: "1px solid #BFE8E8",
          height: "70px",
          width: "360px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "10px 15px",
          marginBottom: "20px",
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#f0f9f9",
        }}
      >
        <h4
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "8px",
            fontWeight: 540,
            fontSize: "16px",
            lineHeight: "16px",
            color: "#000000",
          }}
        >
          <svg
            width="17"
            height="18"
            viewBox="0 0 17 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.72547 2.98617L10.9721 5.4795C11.1421 5.82659 11.5955 6.1595 11.978 6.22325L14.2376 6.59867C15.6826 6.8395 16.0226 7.88784 14.9813 8.922L13.2246 10.6787C12.9271 10.9762 12.7642 11.5499 12.8563 11.9608L13.3592 14.1353C13.7559 15.8566 12.8421 16.5224 11.3192 15.6228L9.20131 14.3691C8.81881 14.1424 8.18839 14.1424 7.79881 14.3691L5.68089 15.6228C4.16506 16.5224 3.24422 15.8495 3.64089 14.1353L4.14381 11.9608C4.23589 11.5499 4.07297 10.9762 3.77547 10.6787L2.01881 8.922C0.984641 7.88784 1.31756 6.8395 2.76256 6.59867L5.02214 6.22325C5.39756 6.1595 5.85089 5.82659 6.02089 5.4795L7.26756 2.98617C7.94756 1.63325 9.05256 1.63325 9.72547 2.98617Z"
              stroke="#222222"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          My Favorite Menu
        </h4>
        <button style={{ background: "none", border: "none" }}>
          <svg
            width="30"
            height="18"
            viewBox="0 0 30 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 4.875H18"
              stroke="#969696"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M10.5 4.875H7.5"
              stroke="#969696"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M13.5 7.5C14.9497 7.5 16.125 6.32475 16.125 4.875C16.125 3.42525 14.9497 2.25 13.5 2.25C12.0503 2.25 10.875 3.42525 10.875 4.875C10.875 6.32475 12.0503 7.5 13.5 7.5Z"
              stroke="#969696"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M22.5 13.125H19.5"
              stroke="#969696"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 13.125H7.5"
              stroke="#969696"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.5 15.75C17.9497 15.75 19.125 14.5747 19.125 13.125C19.125 11.6753 17.9497 10.5 16.5 10.5C15.0503 10.5 13.875 11.6753 13.875 13.125C13.875 14.5747 15.0503 15.75 16.5 15.75Z"
              stroke="#969696"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>

      <Box
        sx={{
          paddingRight: "50px",
          height: "100%",
          background: "#F0F9F9",
          position: "relative",
        }}
      >
        {favoriteCards.map((card, index) => (
          <div className="favorite-card-section" key={index}>
            <div className="Favorite-card">
              <svg
                width="26"
                height="26"
                viewBox="0 0 24 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d={card.iconPath}
                  stroke={card.stroke}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <div className="favorite-content">
                <h4>{card.title}</h4>
                <p>{card.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Box>
    </Box>
  );

  return (
    <div style={{ position: "relative" }}>
      {/* Conditionally render the button only after the delay */}
      {showButton && (
        <button
          style={{
            position: "absolute",
            left: "337px", // Adjust this value to control the button's offset
            top: "40%",
            transform: "translateY(-10%)",
            cursor: "pointer",
            height: "222px",
            background: "none",
            border: "none",
          }}
          onClick={onClose}
        >
          <img style={{ background: "none" }} src={buttonImg} alt="" />
        </button>
      )}

      <Drawer anchor="left" open={openLeftDrawer} onClose={onClose}>
        {DrawerList}
      </Drawer>
    </div>
  );
};

export default LeftDrawer;
