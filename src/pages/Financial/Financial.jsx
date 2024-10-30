import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import "./Financial.css";
import { TextField } from "@mui/material";
import React from "react";

const Financial = () => {
  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className="list-header">
        <div className="list-header-left">
          <button
            style={{ background: "none", border: "none", cursor: "pointer" }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.9866 2.97333L7.3333 5.48C5.79996 6.05333 4.54663 7.86666 4.54663 9.49333V19.4C4.54663 20.9733 5.58663 23.04 6.8533 23.9867L12.5866 28.2667C14.4666 29.68 17.56 29.68 19.44 28.2667L25.1733 23.9867C26.44 23.04 27.48 20.9733 27.48 19.4V9.49333C27.48 7.85333 26.2266 6.04 24.6933 5.46666L18.04 2.97333C16.9066 2.56 15.0933 2.56 13.9866 2.97333Z"
                stroke="#770332"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.0667 15.8267L14.2133 17.9733L19.9467 12.24"
                stroke="#770332"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="list-header-left-text">
            <h4>Partial KYC List</h4>
            <p>
              <span>DASHBOARD /</span> Financial Info
            </p>
          </div>
        </div>
        <div className="list-header-right">
          <div className="list-header-right-input">
            <select className="list-header-right-input-select">
              <option value="Short By">Short By</option>
              <option value="option2">Option 2</option>
            </select>

            <select className="list-header-right-input-select">
              <option value="Progress">Progress</option>
              <option value="optionB">Option B</option>
            </select>
          </div>
          <button className="list-header-right-btn">
            <svg
              width="38"
              height="38"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="31"
                height="31"
                rx="15.5"
                stroke="#E5E5E5"
              />
              <rect
                width="18"
                height="18"
                transform="translate(7 7)"
                fill="white"
              />
              <path
                d="M17.2977 9.63248L18.6177 12.2725C18.7977 12.64 19.2777 12.9925 19.6827 13.06L22.0752 13.4575C23.6052 13.7125 23.9652 14.8225 22.8627 15.9175L21.0027 17.7775C20.6877 18.0925 20.5152 18.7 20.6127 19.135L21.1452 21.4375C21.5652 23.26 20.5977 23.965 18.9852 23.0125L16.7427 21.685C16.3377 21.445 15.6702 21.445 15.2577 21.685L13.0152 23.0125C11.4102 23.965 10.4352 23.2525 10.8552 21.4375L11.3877 19.135C11.4852 18.7 11.3127 18.0925 10.9977 17.7775L9.13768 15.9175C8.04268 14.8225 8.39518 13.7125 9.92518 13.4575L12.3177 13.06C12.7152 12.9925 13.1952 12.64 13.3752 12.2725L14.6952 9.63248C15.4152 8.19998 16.5852 8.19998 17.2977 9.63248Z"
                fill="#E0B313"
                stroke="#E0B313"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="financial-header">
        <div className="Financial-step-one">
          <h4>financial Info</h4>
          <AvatarGroup sx={{ "& .MuiAvatar-root": { height: 20, width: 20 } }}>
            <Avatar alt="Remy Sharp" src="https://via.placeholder.com/32" />
            <Avatar alt="Travis Howard" src="https://via.placeholder.com/32" />
            <Avatar alt="Agnes Walker" src="https://via.placeholder.com/32" />
          </AvatarGroup>
        </div>
        <div className="Financial-step-border"></div>
        <div className="Financial-step-two">
          <h4>Personal Information</h4>
          <AvatarGroup sx={{ "& .MuiAvatar-root": { height: 20, width: 20 } }}>
            <Avatar alt="Remy Sharp" src="https://via.placeholder.com/32" />
            <Avatar alt="Travis Howard" src="https://via.placeholder.com/32" />
            <Avatar alt="Agnes Walker" src="https://via.placeholder.com/32" />
          </AvatarGroup>
        </div>
        <div className="Financial-step-border"></div>
        <div className="Financial-step-three">
          <h4>Address</h4>
          <AvatarGroup sx={{ "& .MuiAvatar-root": { height: 20, width: 20 } }}>
            <Avatar alt="Remy Sharp" src="https://via.placeholder.com/32" />
            <Avatar alt="Travis Howard" src="https://via.placeholder.com/32" />
            <Avatar alt="Agnes Walker" src="https://via.placeholder.com/32" />
          </AvatarGroup>
        </div>
        <div className="Financial-step-border"></div>
        <div className="Financial-step-four">
          <h4>Financial Info</h4>
          <AvatarGroup sx={{ "& .MuiAvatar-root": { height: 20, width: 20 } }}>
            <Avatar alt="Remy Sharp" src="https://via.placeholder.com/32" />
            <Avatar alt="Travis Howard" src="https://via.placeholder.com/32" />
            <Avatar alt="Agnes Walker" src="https://via.placeholder.com/32" />
          </AvatarGroup>
        </div>
        <div className="Financial-step-border-extra"></div>
        <div className="Financial-step-five">
          <h4>Selfie</h4>
          <AvatarGroup sx={{ "& .MuiAvatar-root": { height: 20, width: 20 } }}>
            <Avatar alt="Remy Sharp" src="https://via.placeholder.com/32" />
            <Avatar alt="Travis Howard" src="https://via.placeholder.com/32" />
            <Avatar alt="Agnes Walker" src="https://via.placeholder.com/32" />
          </AvatarGroup>
        </div>
      </div>
      <div className="financial-content">
        <div className="financial-content-header">
          <p>Address</p>
        </div>
        <div className="financial-content-content">
          <div className="row-one">
            <p style={{ textAlign: "left", width: "500px" }}>Occupation</p>
            <p>Service Holder</p>
          </div>
          <div className="row-two">
            <p style={{ textAlign: "left", width: "500px" }}>Monthly income</p>
            <p>5 million to 10 million IQD</p>
          </div>
          <div className="row-one">
            <p style={{ textAlign: "left", width: "500px" }}>
              Politically Exposed Person
            </p>
            <p>Yes</p>
          </div>
          <div className="financial-content-content-input-field">
            <label htmlFor="">Write a Comment</label>
            <TextField
              placeholder="Write Here.."
              multiline
              minRows={4}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&:hover fieldset": {
                    borderColor: "none",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "none",
                  },
                },
              }}
            />
          </div>
        </div>
      </div>
      <div className="financial-bottom">
        <button className="financial-bottom-one">
          <svg
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.66699 7.22206C1.66699 4.60354 1.66699 3.29336 2.48088 2.48039C3.29384 1.6665 4.60403 1.6665 7.22255 1.6665H13.8633C14.2411 1.6665 14.4309 1.6665 14.6003 1.73687C14.7707 1.80724 14.905 1.94058 15.1725 2.2091L17.7911 4.82762C18.0596 5.09613 18.1929 5.22947 18.2633 5.39984C18.3337 5.56928 18.3337 5.7591 18.3337 6.13687V12.7776C18.3337 15.3961 18.3337 16.7063 17.5198 17.5193C16.7068 18.3332 15.3966 18.3332 12.7781 18.3332H7.22255C4.60403 18.3332 3.29384 18.3332 2.48088 17.5193C1.66699 16.7063 1.66699 15.3961 1.66699 12.7776V7.22206Z"
              stroke="#426DF3"
            />
            <path
              d="M13.7044 18.3334V16.4815C13.7044 14.7352 13.7044 13.863 13.1618 13.3204C12.6192 12.7778 11.747 12.7778 10.0007 12.7778H9.0748C7.3285 12.7778 6.45628 12.7778 5.91369 13.3204C5.37109 13.863 5.37109 14.7352 5.37109 16.4815V18.3334"
              stroke="#426DF3"
            />
            <path
              d="M5.37109 6.2959H10.0007"
              stroke="#426DF3"
              stroke-linecap="round"
            />
          </svg>
          Save & Exit
        </button>
        <div
          className=""
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "15px",
          }}
        >
          <button className="financial-bottom-three">
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.5 15L15.5 5"
                stroke="#F23836"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M15.5 15L5.5 5"
                stroke="#F23836"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Decline
          </button>
          <button className="financial-bottom-two">
            <svg
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 9.99984L8.32941 13.3332L15 6.6665"
                stroke="white"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Approve
          </button>
        </div>
      </div>
    </div>
  );
};

export default Financial;
