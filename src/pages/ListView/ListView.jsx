import React from "react";
import "./ListView.css";
import logo from "../../assets/images/listview/shield-tick.png";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import ListTable from "../../components/listView/Table/ListTable";

// Define the time values for the first Autocomplete
const timeValues1 = ["08:00", "12:00", "16:00", "20:00"];

// Define the options for the second Autocomplete
const options2 = ["Option A", "Option B", "Option C", "Option D"];

const ListView = () => {
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
              <span>DASHBOARD /</span> List View
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
      <div className="list-table">
        <ListTable />
      </div>
    </div>
  );
};

export default ListView;
