import "./DocumentRight.css";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { styled } from "@mui/material/styles";
import img from "../../../assets/images/Document/photo.png";
import img1 from "../../../assets/images/Document/Frame 48095622.png";
import img2 from "../../../assets/images/Document/img configur Controls.png";
import img3 from '../../../assets/images/Document/24-1.png';
import img4 from '../../../assets/images/Document/24-2.png';
import ImageControl from "../ImageControl/ImageControl";

const CustomCheckbox = styled(Checkbox)(({ theme }) => ({
  "&.Mui-checked": {
    color: "#BE185D", // Replace 'unique-color' with your desired color
  },
}));

const DocumentRight = () => {
  return (
    <div className="document-content-right">
      <div className="document-content-right-header">
        <div className="start-document-content">
          <button>
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="3.5"
                fill="white"
              />
              <rect
                x="0.5"
                y="0.5"
                width="47"
                height="47"
                rx="3.5"
                stroke="#D2D2D2"
              />
              <path
                d="M27.1113 30.4416V33.5532C27.1113 34.6964 27.1113 34.6964 28.1977 35.4244L31.1854 37.1393C31.6363 37.3981 32.3696 37.3981 32.815 37.1393L35.8027 35.4244C36.8891 34.6964 36.8891 34.6964 36.8891 33.5586V30.4416C36.8891 29.3038 36.8891 29.3038 35.8027 28.5757L32.815 26.8609C32.3696 26.602 31.6363 26.602 31.1854 26.8609L28.1977 28.5757C27.1113 29.3038 27.1113 29.3038 27.1113 30.4416Z"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24.0002 24.0001C27.6821 24.0001 30.6668 21.0153 30.6668 17.3334C30.6668 13.6515 27.6821 10.6667 24.0002 10.6667C20.3183 10.6667 17.3335 13.6515 17.3335 17.3334C17.3335 21.0153 20.3183 24.0001 24.0002 24.0001Z"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12.5469 37.3333C12.5469 32.1733 17.6802 28 24.0002 28C25.2802 28 26.5202 28.1733 27.6802 28.4933"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M31.9999 33.7777C32.9818 33.7777 33.7777 32.9818 33.7777 31.9999C33.7777 31.0181 32.9818 30.2222 31.9999 30.2222C31.0181 30.2222 30.2222 31.0181 30.2222 31.9999C30.2222 32.9818 31.0181 33.7777 31.9999 33.7777Z"
                stroke="#222222"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <div className="">
            <h4>Guy Hawkins</h4>
            <p>EKYC Profile ID: 98CSF269S</p>
          </div>
        </div>

        <div className="end-document-content">
          <p>KYC Data</p>
          <FormControlLabel
            control={<CustomCheckbox />}
            label="Current"
            sx={{ marginRight: "0px" }}
          />
          <FormControlLabel control={<CustomCheckbox />} label="Existing" />
        </div>
      </div>
      <div className="document-content-right-middle">
        <div className="document-content-right-middle-top">
          <p>Selfie</p>
          <button>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2797 10.0333L8.93306 5.68664C8.41973 5.1733 7.57973 5.1733 7.06639 5.68664L2.71973 10.0333"
                stroke="#035B77"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="document-content-right-middle-bottom">
          <img src={img} alt="" />
        </div>
        <div className="document-content-right-middle-top">
          <p>Personal ID Card</p>
          <button>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2797 10.0333L8.93306 5.68664C8.41973 5.1733 7.57973 5.1733 7.06639 5.68664L2.71973 10.0333"
                stroke="#035B77"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="document-content-right-middle-bottom-extra-image">
          <ImageControl img1={img1} img2={img2} />
        </div>
        <div className="document-content-right-middle-top">
          <p>Address Card</p>
          <button>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.2797 10.0333L8.93306 5.68664C8.41973 5.1733 7.57973 5.1733 7.06639 5.68664L2.71973 10.0333"
                stroke="#035B77"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>
        <div className="document-content-right-middle-bottom-address">
          <img src={img3} alt="" />
          <img src={img4} alt="" />
        </div>
      </div>
    </div>
  );
};

export default DocumentRight;
