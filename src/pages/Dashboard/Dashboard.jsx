import { Grid } from "@mui/material";
import "./Dashboard.css";
import img1 from "../../assets/images/dashboard/cardImages/User.png";
import chartImage1 from "../../assets/images/dashboard/cardImages/Chart.png";
import chartImage2 from "../../assets/images/dashboard/cardImages/Chart1.png";

//Card Images................!
import card1 from "../../assets/images/dashboard/cardImages/Icon.png";
import card2 from "../../assets/images/dashboard/cardImages/Icon1.png";
import card3 from "../../assets/images/dashboard/cardImages/Icon2.png";
import card4 from "../../assets/images/dashboard/cardImages/Icon3.png";
import card5 from "../../assets/images/dashboard/cardImages/Icon4.png";
import card6 from "../../assets/images/dashboard/cardImages/Icon5.png";
import card7 from "../../assets/images/dashboard/cardImages/Icon6.png";
import card8 from "../../assets/images/dashboard/cardImages/Icon8.png";
import card9 from "../../assets/images/dashboard/cardImages/Icon9.png";
import card10 from "../../assets/images/dashboard/cardImages/Icon10.png";
import { useNavigate } from "react-router-dom";
import React from "react";

const Dashboard = () => {
  const navigate = useNavigate();
  //NavigatePortalListPage
  const NavigatePortalListPage = () => {
    navigate("/listView");
  };
  //page top on position...............!
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="dashboard-container">
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        direction="row"
      >
        <Grid item xs={12} lg={3}>
          <div className="dashboard-card-one">
            <div className="">
              <img src={img1} alt="" />
            </div>
            <div className="">
              <p className="card-title">Welcome back!</p>
              <p className="card-user-name">Cameron Williamson</p>
              <p className="card-user-type">User Type Goes Here</p>

              <div className="card-btn-section">
                <button className="card-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.01333 1.33337C5.55999 1.33337 3.57333 3.32004 3.57333 5.77337V7.17337C3.57333 7.62671 3.38666 8.30671 3.15333 8.69337L2.30666 10.1067C1.78666 10.98 2.14666 11.9534 3.10666 12.2734C6.29333 13.3334 9.73999 13.3334 12.9267 12.2734C13.8267 11.9734 14.2133 10.92 13.7267 10.1067L12.88 8.69337C12.6467 8.30671 12.46 7.62004 12.46 7.17337V5.77337C12.4533 3.33337 10.4533 1.33337 8.01333 1.33337Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                    <path
                      d="M10.22 12.5466C10.22 13.7666 9.22003 14.7666 8.00003 14.7666C7.39336 14.7666 6.83336 14.5133 6.43336 14.1133C6.03336 13.7133 5.78003 13.1533 5.78003 12.5466"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                    />
                    <path
                      d="M8 4.29333V6.51334"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                    />
                  </svg>
                </button>

                <button className="card-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.35331 8.27997C1.59331 11.7133 4.50664 14.5066 7.99331 14.66C10.4533 14.7666 12.6533 13.62 13.9733 11.8133C14.52 11.0733 14.2266 10.58 13.3133 10.7466C12.8666 10.8266 12.4066 10.86 11.9266 10.84C8.66664 10.7066 5.99998 7.97997 5.98664 4.75997C5.97998 3.89331 6.15998 3.07331 6.48664 2.32664C6.84664 1.49997 6.41331 1.10664 5.57998 1.45997C2.93998 2.57331 1.13331 5.23331 1.35331 8.27997Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>

                <button className="card-btn">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.00002 13.5133C10.3534 13.5133 12.5467 12.1266 14.0734 9.72665C14.6734 8.78665 14.6734 7.20665 14.0734 6.26665C12.5467 3.86665 10.3534 2.47998 8.00002 2.47998C5.64668 2.47998 3.45335 3.86665 1.92668 6.26665C1.32668 7.20665 1.32668 8.78665 1.92668 9.72665C3.45335 12.1266 5.64668 13.5133 8.00002 13.5133Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.3867 7.99995C10.3867 9.31995 9.32001 10.3866 8.00001 10.3866C6.68001 10.3866 5.61334 9.31995 5.61334 7.99995C5.61334 6.67995 6.68001 5.61328 8.00001 5.61328C9.32001 5.61328 10.3867 6.67995 10.3867 7.99995Z"
                      stroke="#BE185D"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-card-two">
            <div className="">
              <h3 className="card-user-name">Total KYC Growth</h3>
              <p className="card-icon">
                6 Month Report{" "}
                <svg
                  width="17"
                  height="16"
                  viewBox="0 0 17 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  // style={{ cursor: 'pointer' }}
                >
                  <path
                    d="M13.78 5.96667L9.4333 10.3133C8.91997 10.8267 8.07997 10.8267 7.56664 10.3133L3.21997 5.96667"
                    stroke="#969696"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </p>
              <p className="card-user-count">4,673</p>
              <button className="card-view-btn">View All</button>
            </div>
            <div className="">
              <img
                style={{ height: "110px", width: "115px" }}
                src={chartImage1}
                alt=""
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-card-three">
            <div className="">
              <h3 className="card-user-name">KYC on hold</h3>
              <p className="card-icon">Month Report</p>
              <p className="card-user-count">4,673</p>
              <button className="card-count-btn">+15.2%</button>
            </div>
            <div className="">
              <img
                style={{ height: "110px", width: "124px" }}
                src={chartImage2}
                alt=""
              />
            </div>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-card-four">
            <div className="card-nav-header">
              {" "}
              <span
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "7px",
                }}
              >
                <svg
                  width="27"
                  height="26"
                  viewBox="0 0 27 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5217 2.16663C9.53501 2.16663 6.30668 5.39496 6.30668 9.38163V11.6566C6.30668 12.3933 6.00334 13.4983 5.62418 14.1266L4.24834 16.4233C3.40334 17.8425 3.98834 19.4241 5.54834 19.9441C10.7267 21.6666 16.3275 21.6666 21.5058 19.9441C22.9683 19.4566 23.5967 17.745 22.8058 16.4233L21.43 14.1266C21.0508 13.4983 20.7475 12.3825 20.7475 11.6566V9.38163C20.7367 5.41663 17.4867 2.16663 13.5217 2.16663Z"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                  <path
                    d="M17.1075 20.3883C17.1075 22.3708 15.4825 23.9958 13.5 23.9958C12.5141 23.9958 11.6041 23.5841 10.9541 22.9341C10.3041 22.2841 9.89246 21.3741 9.89246 20.3883"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                  />
                  <path
                    d="M13.5 6.97668V10.5842"
                    stroke="#222222"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                  />
                </svg>
                <span className="card-user-name">Imitate Action Needed</span>{" "}
              </span>{" "}
              <span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.4301 5.92993L20.5001 11.9999L14.4301 18.0699M3.5 12H20.33"
                    stroke="#BE185D"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </span>{" "}
            </div>
            <div className="overflow-container">
              <div className="overflow-content">
                <p className="overflow-content-title">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 17.5H18"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.8125 4V17.5H12.1875V4C12.1875 3.175 11.85 2.5 10.8375 2.5H10.1625C9.15 2.5 8.8125 3.175 8.8125 4Z"
                        stroke="#606060"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.75 8.5V17.5H6.75V8.5C6.75 7.675 6.45 7 5.55 7H4.95C4.05 7 3.75 7.675 3.75 8.5Z"
                        stroke="#606060"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.25 12.25V17.5H17.25V12.25C17.25 11.425 16.95 10.75 16.05 10.75H15.45C14.55 10.75 14.25 11.425 14.25 12.25Z"
                        stroke="#606060"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  It has survived not only five.
                </p>
                <span className="overflow-content-time">07:40 am</span>
                <span className="overflow-content-allow">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "5px" }}
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 7.00004L5.41412 9.16671L9.75 4.83337"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 10.25L9.75 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.75 10.25L3.25 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
              </div>

              <div className="overflow-content">
                <p className="overflow-content-title">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49999 17.5H13.5C16.515 17.5 17.055 16.2925 17.2125 14.8225L17.775 8.8225C17.9775 6.9925 17.4525 5.5 14.25 5.5H6.74999C3.54749 5.5 3.02249 6.9925 3.22499 8.8225L3.78749 14.8225C3.94499 16.2925 4.48499 17.5 7.49999 17.5Z"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 5.5V4.9C7.5 3.5725 7.5 2.5 9.9 2.5H11.1C13.5 2.5 13.5 3.5725 13.5 4.9V5.5"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 10.75V11.5C12 11.5075 12 11.5075 12 11.515C12 12.3325 11.9925 13 10.5 13C9.015 13 9 12.34 9 11.5225V10.75C9 10 9 10 9.75 10H11.25C12 10 12 10 12 10.75Z"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.7375 9.25C16.005 10.51 14.025 11.26 12 11.515"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.46497 9.45251C5.15247 10.6075 7.05747 11.305 8.99997 11.5225"
                        stroke="#555555"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Leslie - Hi, Can you help me
                </p>
                <span className="overflow-content-time">02:40 am</span>
                <span className="overflow-content-allow">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "5px" }}
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 7.00004L5.41412 9.16671L9.75 4.83337"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 10.25L9.75 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.75 10.25L3.25 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
              </div>

              <div className="overflow-content">
                <p className="overflow-content-title">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.62 9.1525C10.545 9.145 10.455 9.145 10.3725 9.1525C8.58754 9.0925 7.17004 7.63 7.17004 5.83C7.17004 3.9925 8.65504 2.5 10.5 2.5C12.3375 2.5 13.83 3.9925 13.83 5.83C13.8225 7.63 12.405 9.0925 10.62 9.1525Z"
                        stroke="#606060"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M6.87004 11.92C5.05504 13.135 5.05504 15.115 6.87004 16.3225C8.93254 17.7025 12.315 17.7025 14.3775 16.3225C16.1925 15.1075 16.1925 13.1275 14.3775 11.92C12.3225 10.5475 8.94004 10.5475 6.87004 11.92Z"
                        stroke="#606060"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  It has survived not only five.
                </p>
                <span className="overflow-content-time">09:40 am</span>
                <span className="overflow-content-allow">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "5px" }}
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 7.00004L5.41412 9.16671L9.75 4.83337"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 10.25L9.75 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.75 10.25L3.25 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
              </div>

              <div className="overflow-content">
                <p className="overflow-content-title">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49999 17.5H13.5C16.515 17.5 17.055 16.2925 17.2125 14.8225L17.775 8.8225C17.9775 6.9925 17.4525 5.5 14.25 5.5H6.74999C3.54749 5.5 3.02249 6.9925 3.22499 8.8225L3.78749 14.8225C3.94499 16.2925 4.48499 17.5 7.49999 17.5Z"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 5.5V4.9C7.5 3.5725 7.5 2.5 9.9 2.5H11.1C13.5 2.5 13.5 3.5725 13.5 4.9V5.5"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 10.75V11.5C12 11.5075 12 11.5075 12 11.515C12 12.3325 11.9925 13 10.5 13C9.015 13 9 12.34 9 11.5225V10.75C9 10 9 10 9.75 10H11.25C12 10 12 10 12 10.75Z"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.7375 9.25C16.005 10.51 14.025 11.26 12 11.515"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.46497 9.45251C5.15247 10.6075 7.05747 11.305 8.99997 11.5225"
                        stroke="#555555"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Leslie - Hi, Can you help me
                </p>
                <span className="overflow-content-time">11:40 am</span>
                <span className="overflow-content-allow">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "5px" }}
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 7.00004L5.41412 9.16671L9.75 4.83337"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 10.25L9.75 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.75 10.25L3.25 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
              </div>

              <div className="overflow-content">
                <p className="overflow-content-title">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3 17.5H18"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M8.8125 4V17.5H12.1875V4C12.1875 3.175 11.85 2.5 10.8375 2.5H10.1625C9.15 2.5 8.8125 3.175 8.8125 4Z"
                        stroke="#606060"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.75 8.5V17.5H6.75V8.5C6.75 7.675 6.45 7 5.55 7H4.95C4.05 7 3.75 7.675 3.75 8.5Z"
                        stroke="#606060"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M14.25 12.25V17.5H17.25V12.25C17.25 11.425 16.95 10.75 16.05 10.75H15.45C14.55 10.75 14.25 11.425 14.25 12.25Z"
                        stroke="#606060"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  It has survived not only five.
                </p>
                <span className="overflow-content-time">07:40 am</span>
                <span className="overflow-content-allow">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "5px" }}
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 7.00004L5.41412 9.16671L9.75 4.83337"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 10.25L9.75 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.75 10.25L3.25 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
              </div>

              <div className="overflow-content">
                <p className="overflow-content-title">
                  <span>
                    <svg
                      width="21"
                      height="20"
                      viewBox="0 0 21 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.49999 17.5H13.5C16.515 17.5 17.055 16.2925 17.2125 14.8225L17.775 8.8225C17.9775 6.9925 17.4525 5.5 14.25 5.5H6.74999C3.54749 5.5 3.02249 6.9925 3.22499 8.8225L3.78749 14.8225C3.94499 16.2925 4.48499 17.5 7.49999 17.5Z"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M7.5 5.5V4.9C7.5 3.5725 7.5 2.5 9.9 2.5H11.1C13.5 2.5 13.5 3.5725 13.5 4.9V5.5"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M12 10.75V11.5C12 11.5075 12 11.5075 12 11.515C12 12.3325 11.9925 13 10.5 13C9.015 13 9 12.34 9 11.5225V10.75C9 10 9 10 9.75 10H11.25C12 10 12 10 12 10.75Z"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M17.7375 9.25C16.005 10.51 14.025 11.26 12 11.515"
                        stroke="#606060"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M3.46497 9.45251C5.15247 10.6075 7.05747 11.305 8.99997 11.5225"
                        stroke="#555555"
                        stroke-miterlimit="10"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </span>{" "}
                  Leslie - Hi, Can you help me
                </p>
                <span className="overflow-content-time">11:40 am</span>
                <span className="overflow-content-allow">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ marginRight: "5px" }}
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 7.00004L5.41412 9.16671L9.75 4.83337"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 13 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g opacity="0.2">
                      <path
                        d="M3.25 10.25L9.75 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M9.75 10.25L3.25 3.75"
                        stroke="#222222"
                        stroke-width="1.5"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </Grid>
      </Grid>
      <div className="dashboard-header-title">
        <p className="dashboard-header-title-content">KYC Requests</p>
        <button
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3333 7.41663H15.3333"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.00008 7.41663H3.66675"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3334 10.3333C11.9442 10.3333 13.2501 9.0275 13.2501 7.41667C13.2501 5.80584 11.9442 4.5 10.3334 4.5C8.72258 4.5 7.41675 5.80584 7.41675 7.41667C7.41675 9.0275 8.72258 10.3333 10.3334 10.3333Z"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.3333 16.5834H17"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66675 16.5834H3.66675"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.6667 19.5C15.2775 19.5 16.5833 18.1941 16.5833 16.5833C16.5833 14.9725 15.2775 13.6666 13.6667 13.6666C12.0558 13.6666 10.75 14.9725 10.75 16.5833C10.75 18.1941 12.0558 19.5 13.6667 19.5Z"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
      <Grid
        container
        alignItems="center"
        justifyContent="flex-start"
        sx={{ marginTop: "30px" }}
        spacing={3}
      >
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card" onClick={NavigatePortalListPage}>
            <img src={card1} alt="" />
            <div className="">
              <h2>628K</h2>
              <p>
                Partial <span>LIST</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card">
            <img src={card3} alt="" />
            <div className="">
              <h2>426K</h2>
              <p>
                Pending <span>ACTIVE</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card">
            <img src={card2} alt="" />
            <div className="">
              <h2>256K</h2>
              <p>
                ReUploaded <span>ACTIVE</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card">
            <img src={card4} alt="" />
            <div className="">
              <h2>907K</h2>
              <p>
                Partially <span>Declined</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card">
            <img src={card5} alt="" />
            <div className="">
              <h2>324K</h2>
              <p>
                Declined <span>Fully</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card">
            <img src={card6} alt="" />
            <div className="">
              <h2>121K</h2>
              <p>
                Operation <span>Verified</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card">
            <img src={card7} alt="" />
            <div className="">
              <h2>689K</h2>
              <p>
                AML <span>Verified</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card-extra">
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17H26"
                  stroke="#969696"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 25.5V8.5"
                  stroke="#969696"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
      </Grid>

      <div className="dashboard-header-title">
        <p className="dashboard-header-title-content">KYC Requests</p>
        <button
          style={{ background: "none", border: "none", cursor: "pointer" }}
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M20.3333 7.41663H15.3333"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M7.00008 7.41663H3.66675"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M10.3334 10.3333C11.9442 10.3333 13.2501 9.0275 13.2501 7.41667C13.2501 5.80584 11.9442 4.5 10.3334 4.5C8.72258 4.5 7.41675 5.80584 7.41675 7.41667C7.41675 9.0275 8.72258 10.3333 10.3334 10.3333Z"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.3333 16.5834H17"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M8.66675 16.5834H3.66675"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M13.6667 19.5C15.2775 19.5 16.5833 18.1941 16.5833 16.5833C16.5833 14.9725 15.2775 13.6666 13.6667 13.6666C12.0558 13.6666 10.75 14.9725 10.75 16.5833C10.75 18.1941 12.0558 19.5 13.6667 19.5Z"
              stroke="#969696"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <Grid
        container
        alignItems="center"
        justifyContent="flex-start"
        sx={{ marginTop: "6px" }}
        spacing={3}
      >
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card">
            <img src={card8} alt="" />
            <div className="">
              <h2>520K</h2>
              <p>
                Pending <span>LIST</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card">
            <img src={card9} alt="" />
            <div className="">
              <h2>123K</h2>
              <p>
                User <span>Verified</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card">
            <img src={card10} alt="" />
            <div className="">
              <h2>556K</h2>
              <p>
                User <span>Blocked</span>
              </p>
            </div>
            <button>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 6C13.3284 6 14 5.32843 14 4.5C14 3.67157 13.3284 3 12.5 3C11.6716 3 11 3.67157 11 4.5C11 5.32843 11.6716 6 12.5 6Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 21C13.3284 21 14 20.3284 14 19.5C14 18.6716 13.3284 18 12.5 18C11.6716 18 11 18.6716 11 19.5C11 20.3284 11.6716 21 12.5 21Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.5 13C13.3284 13 14 12.3284 14 11.5C14 10.6716 13.3284 10 12.5 10C11.6716 10 11 10.6716 11 11.5C11 12.3284 11.6716 13 12.5 13Z"
                  stroke="#969696"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
        <Grid item xs={12} lg={3}>
          <div className="dashboard-main-card-extra">
            <button
              style={{ background: "none", border: "none", cursor: "pointer" }}
            >
              <svg
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 17H26"
                  stroke="#969696"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M17.5 25.5V8.5"
                  stroke="#969696"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
