import { Outlet, useNavigate } from "react-router-dom";
import { Avatar, Container, Tooltip } from "@mui/material";
import { useState } from "react";
import TopDrawer from "../../components/dashboard/TopDrawer";
import { styled } from "@mui/material/styles";
import LeftDrawer from "../../components/dashboard/LeftDrawer";
import buttonImg from "../../assets/images/dashboard/Favirite.png";
import NotificationDrawer from "../../components/dashboard/NotificationDrawer";
import AddModal from "../../components/AddModal/AddModal";
import SearchModal from "../../components/SearchModal/SearchModal";
import "./Main.css";

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "#ffffff",
    color: "#000",
    borderRadius: "4px",
    padding: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    fontSize: "0.875rem",
    marginLeft: "6px",
  },
  [`& .MuiTooltip-arrow`]: {
    color: "#ffffff",
  },
});

const CustomTooltipUser = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "#ffffff",
    color: "#000",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    fontSize: "0.875rem",
    marginLeft: "13px",
    padding: "0px",
  },
  [`& .MuiTooltip-arrow`]: {
    color: "#ffffff",
  },
});

const CustomTooltipQuestion = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .MuiTooltip-tooltip`]: {
    backgroundColor: "#ffffff",
    color: "#000",
    borderRadius: "4px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    fontSize: "0.875rem",
    marginRight: "12px",
    padding: "0px",
  },
  [`& .MuiTooltip-arrow`]: {
    color: "#2b335e",
  },
});

const Main = () => {
  const [open, setOpen] = useState(false);
  const [openUser, setOpenUser] = useState(false);
  const [openQuestion, setOpenQuestion] = useState(false);
  const [openDrawer, setDrawerOpen] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const [openLeftDrawer, setOpenLeftDrawer] = useState(false);
  const [openSearchModal, setOpenSearchModal] = useState(false);
  const [openNotificationDrawer, setOpenNotificationDrawer] = useState(false);
  const navigate = useNavigate();

  // Toggle drawer state
  const toggleDrawer = () => {
    setDrawerOpen((prevOpen) => !prevOpen);
  };

  //toggleLeftDrawer
  const toggleLeftDrawer = () => {
    setOpenLeftDrawer(!openLeftDrawer);
    setOpenUser(false);
    setOpen(false);
  };

  //handleNotificationDrawer
  const handleNotificationDrawer = () => {
    setOpenNotificationDrawer(!openNotificationDrawer);
  };

  //handleAddModal
  const handleAddModal = () => {
    setOpenAddModal(!openAddModal);
  };

  //handleSearchModal
  const handleSearchModal = () => {
    setOpenSearchModal(!openSearchModal);
  };

  //handleUser-ToolTip
  const handleClickUser = () => {
    setOpenUser(!openUser);
  };

  //handleClickQuestion
  const handleClickQuestion = () => {
    setOpenQuestion(!openQuestion);
  };

  const handleClick = () => {
    setOpen(!open);
  };

  //handleHomeNavigation
  const handleHomeNavigation = () => {
    navigate("/");
  };

  return (
    <section>
      <div className="dashboard">
        <div className="left-top-button">
          <CustomTooltip
            title={
              <ul
                style={{
                  padding: "15px",
                  margin: 0,
                  listStyle: "none",
                  paddingLeft: "20px",
                }}
              >
                {[
                  "Marketing Panel",
                  "Marketing Panel",
                  "Marketing Panel",
                  "Marketing Panel",
                  "Tech. Help Desk",
                ].map((text, index) => (
                  <li key={index} className="hover-effect">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d={
                          index === 0
                            ? "M11.1917 12.5H3.66666C2.15 12.5 1.18333 10.875 1.91666 9.5417L3.85833 6.00835L5.675 2.70001C6.43333 1.32501 8.41666 1.32501 9.17499 2.70001L11 6.00835L11.875 7.60002L12.9417 9.5417C13.675 10.875 12.7083 12.5 11.1917 12.5Z"
                            : "M14.1417 10.2083V13.9583C14.1417 17.0833 12.8917 18.3333 9.76666 18.3333H6.01666C2.89166 18.3333 1.64166 17.0833 1.64166 13.9583V10.2083C1.64166 7.08331 2.89166 5.83331 6.01666 5.83331H9.76666C12.8917 5.83331 14.1417 7.08331 14.1417 10.2083Z"
                        }
                        stroke="#2B335E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d={
                          index === 0
                            ? "M18.3333 12.9167C18.3333 15.9083 15.9083 18.3333 12.9167 18.3333C9.925 18.3333 7.5 15.9083 7.5 12.9167C7.5 12.775 7.50833 12.6417 7.51667 12.5H11.1917C12.7083 12.5 13.675 10.875 12.9417 9.54168L11.875 7.6C12.2083 7.53333 12.5583 7.5 12.9167 7.5C15.9083 7.5 18.3333 9.925 18.3333 12.9167Z"
                            : "M18.3083 6.25002C18.3083 8.64169 16.4833 10.6 14.1417 10.8084V10.2084C14.1417 7.08335 12.8917 5.83335 9.76666 5.83335H9.16666C9.37499 3.49169 11.3333 1.66669 13.725 1.66669C16.05 1.66669 17.9667 3.39169 18.2583 5.64169C18.2917 5.83335 18.3083 6.04169 18.3083 6.25002Z"
                        }
                        stroke="#2B335E"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ padding: "12px" }}>{text}</span>
                  </li>
                ))}
              </ul>
            }
            arrow
            open={open}
            onClick={handleClick}
          >
            <button className="btn-one" onClick={handleClick}>
              <svg
                width="24"
                height="34"
                viewBox="0 0 24 34"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13 32.1025C14.1046 32.1025 15 31.2071 15 30.1025C15 28.998 14.1046 28.1025 13 28.1025C11.8954 28.1025 11 28.998 11 30.1025C11 31.2071 11.8954 32.1025 13 32.1025Z"
                  fill="white"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 19C14.1046 19 15 18.1046 15 17C15 15.8954 14.1046 15 13 15C11.8954 15 11 15.8954 11 17C11 18.1046 11.8954 19 13 19Z"
                  fill="white"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M13 5.89746C14.1046 5.89746 15 5.00203 15 3.89746C15 2.79289 14.1046 1.89746 13 1.89746C11.8954 1.89746 11 2.79289 11 3.89746C11 5.00203 11.8954 5.89746 13 5.89746Z"
                  fill="white"
                  stroke="#2B2B2B"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </CustomTooltip>

          <button className="btn-two" onClick={handleHomeNavigation}>
            <svg
              width="24"
              height="25"
              viewBox="0 0 26 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.06869 24.028C3.86335 24.028 3.67935 23.9947 3.51669 23.928C3.35402 23.8613 3.22335 23.7627 3.12469 23.632C3.02869 23.5013 2.97802 23.344 2.97269 23.16H3.70069C3.71135 23.264 3.74735 23.344 3.80869 23.4C3.87002 23.4533 3.95002 23.48 4.04869 23.48C4.15002 23.48 4.23002 23.4573 4.28869 23.412C4.34735 23.364 4.37669 23.2987 4.37669 23.216C4.37669 23.1467 4.35269 23.0893 4.30469 23.044C4.25935 22.9987 4.20202 22.9613 4.13269 22.932C4.06602 22.9027 3.97002 22.8693 3.84469 22.832C3.66335 22.776 3.51535 22.72 3.40069 22.664C3.28602 22.608 3.18735 22.5253 3.10469 22.416C3.02202 22.3067 2.98069 22.164 2.98069 21.988C2.98069 21.7267 3.07535 21.5227 3.26469 21.376C3.45402 21.2267 3.70069 21.152 4.00469 21.152C4.31402 21.152 4.56335 21.2267 4.75269 21.376C4.94202 21.5227 5.04335 21.728 5.05669 21.992H4.31669C4.31135 21.9013 4.27802 21.8307 4.21669 21.78C4.15535 21.7267 4.07669 21.7 3.98069 21.7C3.89802 21.7 3.83135 21.7227 3.78069 21.768C3.73002 21.8107 3.70469 21.8733 3.70469 21.956C3.70469 22.0467 3.74735 22.1173 3.83269 22.168C3.91802 22.2187 4.05135 22.2733 4.23269 22.332C4.41402 22.3933 4.56069 22.452 4.67269 22.508C4.78735 22.564 4.88602 22.6453 4.96869 22.752C5.05135 22.8587 5.09269 22.996 5.09269 23.164C5.09269 23.324 5.05135 23.4693 4.96869 23.6C4.88869 23.7307 4.77135 23.8347 4.61669 23.912C4.46202 23.9893 4.27935 24.028 4.06869 24.028ZM6.18563 21.192V22.872C6.18563 23.04 6.22696 23.1693 6.30963 23.26C6.39229 23.3507 6.51363 23.396 6.67363 23.396C6.83363 23.396 6.95629 23.3507 7.04163 23.26C7.12696 23.1693 7.16963 23.04 7.16963 22.872V21.192H7.85363V22.868C7.85363 23.1187 7.80029 23.3307 7.69363 23.504C7.58696 23.6773 7.44296 23.808 7.26163 23.896C7.08296 23.984 6.88296 24.028 6.66163 24.028C6.44029 24.028 6.24163 23.9853 6.06563 23.9C5.89229 23.812 5.75496 23.6813 5.65363 23.508C5.55229 23.332 5.50163 23.1187 5.50163 22.868V21.192H6.18563ZM10.4739 22.096C10.4739 22.2587 10.4366 22.408 10.3619 22.544C10.2873 22.6773 10.1726 22.7853 10.0179 22.868C9.86327 22.9507 9.67127 22.992 9.44194 22.992H9.01794V24H8.33394V21.192H9.44194C9.66594 21.192 9.85527 21.2307 10.0099 21.308C10.1646 21.3853 10.2806 21.492 10.3579 21.628C10.4353 21.764 10.4739 21.92 10.4739 22.096ZM9.38994 22.448C9.5206 22.448 9.61794 22.4173 9.68194 22.356C9.74594 22.2947 9.77794 22.208 9.77794 22.096C9.77794 21.984 9.74594 21.8973 9.68194 21.836C9.61794 21.7747 9.5206 21.744 9.38994 21.744H9.01794V22.448H9.38994ZM12.97 22.096C12.97 22.2587 12.9327 22.408 12.858 22.544C12.7834 22.6773 12.6687 22.7853 12.514 22.868C12.3594 22.9507 12.1674 22.992 11.938 22.992H11.514V24H10.83V21.192H11.938C12.162 21.192 12.3514 21.2307 12.506 21.308C12.6607 21.3853 12.7767 21.492 12.854 21.628C12.9314 21.764 12.97 21.92 12.97 22.096ZM11.886 22.448C12.0167 22.448 12.114 22.4173 12.178 22.356C12.242 22.2947 12.274 22.208 12.274 22.096C12.274 21.984 12.242 21.8973 12.178 21.836C12.114 21.7747 12.0167 21.744 11.886 21.744H11.514V22.448H11.886ZM14.6541 24.028C14.3901 24.028 14.1475 23.9667 13.9261 23.844C13.7075 23.7213 13.5328 23.5507 13.4021 23.332C13.2741 23.1107 13.2101 22.8627 13.2101 22.588C13.2101 22.3133 13.2741 22.0667 13.4021 21.848C13.5328 21.6293 13.7075 21.4587 13.9261 21.336C14.1475 21.2133 14.3901 21.152 14.6541 21.152C14.9181 21.152 15.1595 21.2133 15.3781 21.336C15.5995 21.4587 15.7728 21.6293 15.8981 21.848C16.0261 22.0667 16.0901 22.3133 16.0901 22.588C16.0901 22.8627 16.0261 23.1107 15.8981 23.332C15.7701 23.5507 15.5968 23.7213 15.3781 23.844C15.1595 23.9667 14.9181 24.028 14.6541 24.028ZM14.6541 23.404C14.8781 23.404 15.0568 23.3293 15.1901 23.18C15.3261 23.0307 15.3941 22.8333 15.3941 22.588C15.3941 22.34 15.3261 22.1427 15.1901 21.996C15.0568 21.8467 14.8781 21.772 14.6541 21.772C14.4275 21.772 14.2461 21.8453 14.1101 21.992C13.9768 22.1387 13.9101 22.3373 13.9101 22.588C13.9101 22.836 13.9768 23.0347 14.1101 23.184C14.2461 23.3307 14.4275 23.404 14.6541 23.404ZM17.9027 24L17.3187 22.94H17.1547V24H16.4707V21.192H17.6187C17.84 21.192 18.028 21.2307 18.1827 21.308C18.34 21.3853 18.4573 21.492 18.5347 21.628C18.612 21.7613 18.6507 21.9107 18.6507 22.076C18.6507 22.2627 18.5973 22.4293 18.4907 22.576C18.3867 22.7227 18.232 22.8267 18.0267 22.888L18.6747 24H17.9027ZM17.1547 22.456H17.5787C17.704 22.456 17.7973 22.4253 17.8587 22.364C17.9227 22.3027 17.9547 22.216 17.9547 22.104C17.9547 21.9973 17.9227 21.9133 17.8587 21.852C17.7973 21.7907 17.704 21.76 17.5787 21.76H17.1547V22.456ZM21.1 21.192V21.74H20.356V24H19.672V21.74H18.928V21.192H21.1Z"
                fill="#2B335E"
              />
              <path
                d="M18.152 13.017H13.6915L13.6915 19.9992H10V1.68842C10.0016 1.24738 10.1743 0.824902 10.4804 0.513257C10.7864 0.201612 11.201 0.026114 11.6335 0.0250813C13.8638 0.0188075 15.6518 0 18.152 0C27.7191 0.00235266 27.7476 13.017 18.152 13.017ZM13.6915 9.56642H18.152C22.8802 9.56642 22.8518 3.59799 18.152 3.59799H13.6915L13.6915 9.56642Z"
                fill="#2B335E"
              />
              <path
                d="M0.418091 20V1.7229C0.418091 1.28176 0.58995 0.858676 0.895855 0.546741C1.20176 0.234805 1.61665 0.0595703 2.04927 0.0595703H14.4896V2.02012C14.4896 2.23855 14.4474 2.45485 14.3654 2.65666C14.2834 2.85846 14.1633 3.04183 14.0118 3.19629C13.8604 3.35074 13.6805 3.47324 13.4826 3.55683C13.2847 3.64042 13.0726 3.68346 12.8584 3.68346H4.11112V9.56638H7.94066H11.4633V11.3819C11.4626 12.8753 10.3799 13.0457 9.25429 13.0452H4.11112V20H0.418091Z"
                fill="#FC2861"
              />
            </svg>
          </button>
        </div>

        <div className="left-button">
          {!openLeftDrawer &&
            !open &&
            !openUser &&
            !openAddModal &&
            !openSearchModal && (
              <button
                style={{
                  height: "222px",
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
                onClick={toggleLeftDrawer}
              >
                <img style={{ paddingLeft: "0px" }} src={buttonImg} alt="" />
              </button>
            )}

          <LeftDrawer
            openLeftDrawer={openLeftDrawer}
            onClose={toggleLeftDrawer}
          />
        </div>

        {/* TopDrawer */}
        <TopDrawer openDrawer={openDrawer} onClose={toggleDrawer} />

        <div className="right-top-button">
          <button className="btn-three" onClick={toggleDrawer}>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20.4635 9.69496C22.0486 9.69496 23.3335 8.41001 23.3335 6.82496C23.3335 5.2399 22.0486 3.95496 20.4635 3.95496C18.8784 3.95496 17.5935 5.2399 17.5935 6.82496C17.5935 8.41001 18.8784 9.69496 20.4635 9.69496Z"
                stroke="#037777"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.53676 9.69496C9.12181 9.69496 10.4067 8.41001 10.4067 6.82496C10.4067 5.2399 9.12181 3.95496 7.53676 3.95496C5.9517 3.95496 4.66675 5.2399 4.66675 6.82496C4.66675 8.41001 5.9517 9.69496 7.53676 9.69496Z"
                stroke="#037777"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20.4635 24.0449C22.0486 24.0449 23.3335 22.76 23.3335 21.1749C23.3335 19.5899 22.0486 18.3049 20.4635 18.3049C18.8784 18.3049 17.5935 19.5899 17.5935 21.1749C17.5935 22.76 18.8784 24.0449 20.4635 24.0449Z"
                stroke="#037777"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.53676 24.0449C9.12181 24.0449 10.4067 22.76 10.4067 21.1749C10.4067 19.5899 9.12181 18.3049 7.53676 18.3049C5.9517 18.3049 4.66675 19.5899 4.66675 21.1749C4.66675 22.76 5.9517 24.0449 7.53676 24.0449Z"
                stroke="#037777"
                stroke-width="1.5"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
        </div>

        {/* Apply Outlet */}
        <div className="outlet-style">
            <Outlet />
        </div>

        {/* NotificationDrawer */}
        <NotificationDrawer
          openNotificationDrawer={openNotificationDrawer}
          onClose={handleNotificationDrawer}
        />

        {/* add-modal */}
        <AddModal
          openAddModal={openAddModal}
          onClose={() => setOpenAddModal(false)}
        />

        {/* Search-modal */}
        <SearchModal
          openSearchModal={openSearchModal}
          onClose={() => setOpenSearchModal(false)}
        />

        <div className="left-bottom-button">
          {/* Add-Modal */}
          <button className="btn-four" onClick={handleAddModal}>
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.5 13V36M14 24.5H37"
                stroke="#155C9E"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M34 13V19M31 16H37"
                stroke="#FC2861"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
          <button className="btn-four" onClick={handleSearchModal}>
            <svg
              width="27"
              height="26"
              viewBox="0 0 27 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="12.0488"
                cy="12.2442"
                r="11.0489"
                stroke="#155C9E"
                stroke-width="2"
              />
              <path
                d="M21.5609 20.4885L26 24.9276"
                stroke="#2B2B2B"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M14.7201 7.46967C11.907 5.84554 8.44161 6.58133 6.97989 9.1131C5.51818 11.6449 6.61367 15.0139 9.42674 16.638"
                stroke="#FC2861"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <button className="btn-four" onClick={handleNotificationDrawer}>
            <svg
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.28 21.24C9.28255 21.9713 9.62261 22.6721 10.2259 23.1892C10.8292 23.7063 11.6468 23.9978 12.5 24C13.3532 23.9978 14.1708 23.7063 14.7741 23.1892C15.3774 22.6721 15.7175 21.9713 15.72 21.24"
                fill="#FC2861"
              />
              <path
                d="M24 21.4444C21.5459 18.9906 20.167 15.6625 20.1667 12.1921V11.2222C20.1654 9.62998 19.6684 8.07763 18.7447 6.7807C17.821 5.48377 16.5165 4.50661 15.0121 3.98489C15.0383 3.84321 15.0529 3.69962 15.0556 3.55556C15.0556 2.87778 14.7863 2.22776 14.3071 1.7485C13.8278 1.26925 13.1778 1 12.5 1C11.8222 1 11.1722 1.26925 10.6929 1.7485C10.2137 2.22776 9.94444 2.87778 9.94444 3.55556C9.94713 3.69962 9.96166 3.84321 9.98789 3.98489C8.48355 4.50661 7.17897 5.48377 6.25527 6.7807C5.33158 8.07763 4.8346 9.62998 4.83333 11.2222V12.1908C4.83334 13.9094 4.49481 15.6111 3.83709 17.1989C3.17936 18.7866 2.21531 20.2293 1 21.4444H24Z"
                stroke="#155C9E"
                stroke-width="2"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>

          <CustomTooltipUser
            arrow
            open={openUser}
            onClick={handleClickUser}
            title={
              <ul
                style={{
                  margin: 0,
                  listStyle: "none",
                  height: "256px",
                  width: "200px",
                }}
              >
                <li className="userToolTip-header">Cameron Williamson</li>
                <li className="userToolTip-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.5 7.59169V12.4C2.5 14.1667 2.5 14.1667 4.16667 15.2917L8.75 17.9417C9.44167 18.3417 10.5667 18.3417 11.25 17.9417L15.8333 15.2917C17.5 14.1667 17.5 14.1667 17.5 12.4084V7.59169C17.5 5.83336 17.5 5.83336 15.8333 4.70836L11.25 2.05836C10.5667 1.65836 9.44167 1.65836 8.75 2.05836L4.16667 4.70836C2.5 5.83336 2.5 5.83336 2.5 7.59169Z"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Manage Profile
                </li>
                <li className="userToolTip-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.84164 15L2.49998 11.6583C1.38331 10.5417 1.38331 9.43333 2.49998 8.31666L8.06664 2.75L14.1916 8.87503C14.5 9.18336 14.5 9.68334 14.1916 9.99167L9.17497 15.0084C8.07497 16.1084 6.95831 16.1083 5.84164 15Z"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.95831 1.625L8.07498 2.74164"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M1.72498 9.93334L14.325 9.38336"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M2.5 18.3333H13.3333"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M15.7084 12.5C15.7084 12.5 14.1667 14.175 14.1667 15.2C14.1667 16.05 14.8584 16.7416 15.7084 16.7416C16.5584 16.7416 17.25 16.05 17.25 15.2C17.25 14.175 15.7084 12.5 15.7084 12.5Z"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Dark Mode
                </li>
                <li className="userToolTip-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.3333 5.41669H13.3333"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.00002 5.41669H1.66669"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M8.33335 8.33333C9.94418 8.33333 11.25 7.0275 11.25 5.41667C11.25 3.80584 9.94418 2.5 8.33335 2.5C6.72252 2.5 5.41669 3.80584 5.41669 5.41667C5.41669 7.0275 6.72252 8.33333 8.33335 8.33333Z"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M18.3333 14.5833H15"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M6.66669 14.5833H1.66669"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M11.6667 17.5C13.2775 17.5 14.5833 16.1942 14.5833 14.5834C14.5833 12.9725 13.2775 11.6667 11.6667 11.6667C10.0558 11.6667 8.75 12.9725 8.75 14.5834C8.75 16.1942 10.0558 17.5 11.6667 17.5Z"
                      stroke="#222222"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Customize Dashboard
                </li>
                <li className="userToolTip-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.41669 6.30001C7.67502 3.30001 9.21669 2.07501 12.5917 2.07501H12.7C16.425 2.07501 17.9167 3.56668 17.9167 7.29168V12.725C17.9167 16.45 16.425 17.9417 12.7 17.9417H12.5917C9.24169 17.9417 7.70002 16.7333 7.42502 13.7833"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.5 10H3.01666"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4.87498 7.20831L2.08331 9.99998L4.87498 12.7916"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Logout
                </li>
              </ul>
            }
          >
            <Avatar
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
              sx={{
                width: 47,
                height: 47,
                border: "1px solid #fff",
                boxShadow: "0 1px 2px rgba(0, 0, 0, 0.25)", // Adjusted the boxShadow opacity to match the format
                cursor: "pointer",
              }}
              onClick={handleClickUser}
            />
          </CustomTooltipUser>
        </div>

        <div className="right-bottom-button">
          <button className="btn-four-extra">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                stroke="#035B77"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M12 15.5V9.5"
                stroke="#035B77"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9 11.5L12 8.5L15 11.5"
                stroke="#035B77"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </button>
          <button className="btn-four">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.25 7.50001C21.25 9.57107 19.5711 11.25 17.5 11.25C15.4289 11.25 13.75 9.57107 13.75 7.50001C13.75 5.42895 15.4289 3.75002 17.5 3.75002L20.2098 3.75001L21.25 3.75001V3.75487V3.76362V3.7724V3.78123V3.79009V3.79899V3.80792V3.8169V3.8259V3.83495V3.84402V3.85314V3.86229V3.87147V3.88069V3.88995V3.89923V3.90856V3.91791V3.9273V3.93672V3.94618V3.95567V3.96519V3.97474V3.98433V3.99395V4.0036V4.01328V4.02299V4.03273V4.04251V4.05231V4.06215V4.07201V4.0819V4.09183V4.10178V4.11176V4.12178V4.13182V4.14188V4.15198V4.16211V4.17226V4.18244V4.19265V4.20288V4.21314V4.22343V4.23374V4.24408V4.25445V4.26484V4.27526V4.2857V4.29616V4.30666V4.31717V4.32771V4.33828V4.34886V4.35947V4.37011V4.38077V4.39145V4.40215V4.41288V4.42362V4.43439V4.44518V4.456V4.46683V4.47768V4.48856V4.49946V4.51037V4.52131V4.53226V4.54324V4.55423V4.56525V4.57628V4.58733V4.5984V4.60949V4.62059V4.63172V4.64286V4.65402V4.66519V4.67638V4.68759V4.69882V4.71006V4.72131V4.73259V4.74387V4.75517V4.76649V4.77782V4.78917V4.80053V4.81191V4.82329V4.83469V4.84611V4.85754V4.86898V4.88043V4.8919V4.90337V4.91486V4.92637V4.93788V4.9494V4.96094V4.97248V4.98404V4.9956V5.00718V5.01876V5.03036V5.04196V5.05358V5.0652V5.07683V5.08847V5.10012V5.11177V5.12343V5.1351V5.14678V5.15846V5.17016V5.18185V5.19356V5.20527V5.21698V5.2287V5.24043V5.25216V5.2639V5.27564V5.28738V5.29913V5.31088V5.32264V5.3344V5.34616V5.35793V5.3697V5.38147V5.39325V5.40502V5.4168V5.42858V5.44036V5.45214V5.46392V5.47571V5.48749V5.49927V5.51106V5.52284V5.53462V5.54641V5.55819V5.56997V5.58175V5.59352V5.6053V5.61707V5.62884V5.64061V5.65237V5.66414V5.67589V5.68765V5.6994V5.71115V5.72289V5.73463V5.74636V5.75809V5.76981V5.78153V5.79324V5.80495V5.81665V5.82834V5.84003V5.85171V5.86338V5.87505V5.88671V5.89836V5.91V5.92164V5.93326V5.94488V5.95649V5.96809V5.97968V5.99126V6.00283V6.01439V6.02594V6.03748V6.049V6.06052V6.07203V6.08352V6.09501V6.10648V6.11793V6.12938V6.14081V6.15224V6.16364V6.17504V6.18642V6.19778V6.20914V6.22047V6.2318V6.24311V6.2544V6.26568V6.27694V6.28819V6.29942V6.31064V6.32184V6.33302V6.34419V6.35533V6.36647V6.37758V6.38867V6.39975V6.41081V6.42185V6.43287V6.44388V6.45486V6.46583V6.47677V6.4877V6.4986V6.50949V6.52035V6.53119V6.54201V6.55281V6.56359V6.57435V6.58509V6.5958V6.60649V6.61716V6.6278V6.63842V6.64902V6.6596V6.67015V6.68067V6.69118V6.70165V6.71211V6.72253V6.73294V6.74331V6.75367V6.76399V6.77429V6.78456V6.79481V6.80503V6.81522V6.82538V6.83552V6.84563V6.85571V6.86576V6.87579V6.88578V6.89575V6.90569V6.91559V6.92547V6.93532V6.94514V6.95493V6.96468V6.97441V6.9841V6.99377V7.0034V7.013V7.02257V7.0321V7.0416V7.05107V7.06051V7.06992V7.07929V7.08862V7.09793V7.1072V7.11643V7.12563V7.1348V7.14393V7.15302V7.16208V7.1711V7.18009V7.18904V7.19796V7.20683V7.21567V7.22448V7.23324V7.24197V7.25066V7.25932V7.26793V7.27651V7.28504V7.29354V7.302V7.31042V7.3188V7.32714V7.33544V7.3437V7.35191V7.36009V7.36823V7.37632V7.38437V7.39238V7.40035V7.40828V7.41616V7.42401V7.4318V7.43956V7.44727V7.45494V7.46256V7.47014V7.47768V7.48517V7.49261V7.50001Z"
                stroke="#969696"
                stroke-width="1.5"
              />
              <path
                d="M2.75 7.50001C2.75 9.57107 4.42893 11.25 6.5 11.25C8.57107 11.25 10.25 9.57107 10.25 7.50001C10.25 5.42895 8.57107 3.75002 6.5 3.75002L3.7902 3.75001L2.75 3.75001V3.75487V3.76362V3.7724V3.78123V3.79009V3.79899V3.80792V3.8169V3.8259V3.83495V3.84402V3.85314V3.86229V3.87147V3.88069V3.88995V3.89923V3.90856V3.91791V3.9273V3.93672V3.94618V3.95567V3.96519V3.97474V3.98433V3.99395V4.0036V4.01328V4.02299V4.03273V4.04251V4.05231V4.06215V4.07201V4.0819V4.09183V4.10178V4.11176V4.12178V4.13182V4.14188V4.15198V4.16211V4.17226V4.18244V4.19265V4.20288V4.21314V4.22343V4.23374V4.24408V4.25445V4.26484V4.27526V4.2857V4.29616V4.30666V4.31717V4.32771V4.33828V4.34886V4.35947V4.37011V4.38077V4.39145V4.40215V4.41288V4.42362V4.43439V4.44518V4.456V4.46683V4.47768V4.48856V4.49946V4.51037V4.52131V4.53226V4.54324V4.55423V4.56525V4.57628V4.58733V4.5984V4.60949V4.62059V4.63172V4.64286V4.65402V4.66519V4.67638V4.68759V4.69882V4.71006V4.72131V4.73259V4.74387V4.75517V4.76649V4.77782V4.78917V4.80053V4.81191V4.82329V4.83469V4.84611V4.85754V4.86898V4.88043V4.8919V4.90337V4.91486V4.92637V4.93788V4.9494V4.96094V4.97248V4.98404V4.9956V5.00718V5.01876V5.03036V5.04196V5.05358V5.0652V5.07683V5.08847V5.10012V5.11177V5.12343V5.1351V5.14678V5.15846V5.17016V5.18185V5.19356V5.20527V5.21698V5.2287V5.24043V5.25216V5.2639V5.27564V5.28738V5.29913V5.31088V5.32264V5.3344V5.34616V5.35793V5.3697V5.38147V5.39325V5.40502V5.4168V5.42858V5.44036V5.45214V5.46392V5.47571V5.48749V5.49927V5.51106V5.52284V5.53462V5.54641V5.55819V5.56997V5.58175V5.59352V5.6053V5.61707V5.62884V5.64061V5.65237V5.66414V5.67589V5.68765V5.6994V5.71115V5.72289V5.73463V5.74636V5.75809V5.76981V5.78153V5.79324V5.80495V5.81665V5.82834V5.84003V5.85171V5.86338V5.87505V5.88671V5.89836V5.91V5.92164V5.93326V5.94488V5.95649V5.96809V5.97968V5.99126V6.00283V6.01439V6.02594V6.03748V6.049V6.06052V6.07203V6.08352V6.09501V6.10648V6.11793V6.12938V6.14081V6.15224V6.16364V6.17504V6.18642V6.19778V6.20914V6.22047V6.2318V6.24311V6.2544V6.26568V6.27694V6.28819V6.29942V6.31064V6.32184V6.33302V6.34419V6.35533V6.36647V6.37758V6.38867V6.39975V6.41081V6.42185V6.43287V6.44388V6.45486V6.46583V6.47677V6.4877V6.4986V6.50949V6.52035V6.53119V6.54201V6.55281V6.56359V6.57435V6.58509V6.5958V6.60649V6.61716V6.6278V6.63842V6.64902V6.6596V6.67015V6.68067V6.69118V6.70165V6.71211V6.72253V6.73294V6.74331V6.75367V6.76399V6.77429V6.78456V6.79481V6.80503V6.81522V6.82538V6.83552V6.84563V6.85571V6.86576V6.87579V6.88578V6.89575V6.90569V6.91559V6.92547V6.93532V6.94514V6.95493V6.96468V6.97441V6.9841V6.99377V7.0034V7.013V7.02257V7.0321V7.0416V7.05107V7.06051V7.06992V7.07929V7.08862V7.09793V7.1072V7.11643V7.12563V7.1348V7.14393V7.15302V7.16208V7.1711V7.18009V7.18904V7.19796V7.20683V7.21567V7.22448V7.23324V7.24197V7.25066V7.25932V7.26793V7.27651V7.28504V7.29354V7.302V7.31042V7.3188V7.32714V7.33544V7.3437V7.35191V7.36009V7.36823V7.37632V7.38437V7.39238V7.40035V7.40828V7.41616V7.42401V7.4318V7.43956V7.44727V7.45494V7.46256V7.47014V7.47768V7.48517V7.49261V7.50001Z"
                stroke="#969696"
                stroke-width="1.5"
              />
              <path
                d="M8.41603 10.376C8.07138 10.1462 7.60573 10.2393 7.37596 10.584C7.1462 10.9286 7.23933 11.3943 7.58397 11.624L8.41603 10.376ZM12 15L11.3292 15.3354C11.4562 15.5895 11.7159 15.75 12 15.75C12.2841 15.75 12.5438 15.5895 12.6708 15.3354L12 15ZM16.416 11.624C16.7607 11.3943 16.8538 10.9286 16.624 10.584C16.3943 10.2393 15.9286 10.1462 15.584 10.376L16.416 11.624ZM13 13L12.584 12.376L12.4183 12.4864L12.3292 12.6646L13 13ZM11 13L11.6708 12.6646L11.5817 12.4864L11.416 12.376L11 13ZM12.6708 15.3354L13.6708 13.3354L12.3292 12.6646L11.3292 14.6646L12.6708 15.3354ZM13.416 13.624L16.416 11.624L15.584 10.376L12.584 12.376L13.416 13.624ZM7.58397 11.624L10.584 13.624L11.416 12.376L8.41603 10.376L7.58397 11.624ZM10.3292 13.3354L11.3292 15.3354L12.6708 14.6646L11.6708 12.6646L10.3292 13.3354Z"
                fill="#969696"
              />
              <path
                d="M7 16L11.2929 20.2929C11.6834 20.6834 12.3166 20.6834 12.7071 20.2929L17 16"
                stroke="#969696"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <circle
                cx="17"
                cy="7"
                r="1.25"
                stroke="#969696"
                stroke-width="1.5"
              />
              <circle
                cx="7"
                cy="7"
                r="1.25"
                stroke="#969696"
                stroke-width="1.5"
              />
            </svg>
          </button>

          <CustomTooltipQuestion
            arrow
            open={openQuestion}
            onClick={handleClickQuestion}
            title={
              <ul
                style={{
                  margin: 0,
                  listStyle: "none",
                  height: "256px",
                  width: "200px",
                  position: "relative",
                }}
              >
                <li className="questionToolTip-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.275 10.125L8.21669 12.1833C7.07502 13.325 7.07502 15.1667 8.21669 16.3083C9.35836 17.45 11.2 17.45 12.3417 16.3083L15.5834 13.0667C17.8584 10.7917 17.8584 7.09166 15.5834 4.81666C13.3084 2.54166 9.60836 2.54166 7.33336 4.81666L3.80002 8.35C1.85002 10.3 1.85002 13.4667 3.80002 15.425"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Privacy Policy
                </li>
                <li className="questionToolTip-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16.4917 12.4417C14.775 14.15 12.3167 14.675 10.1584 14L6.23337 17.9167C5.95004 18.2083 5.39171 18.3833 4.99171 18.325L3.17504 18.075C2.57504 17.9917 2.01671 17.425 1.92504 16.825L1.67504 15.0083C1.61671 14.6083 1.80837 14.05 2.08337 13.7667L6.00004 9.85C5.33337 7.68333 5.85004 5.225 7.56671 3.51666C10.025 1.05833 14.0167 1.05833 16.4834 3.51666C18.95 5.975 18.95 9.98333 16.4917 12.4417Z"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M5.7417 14.575L7.65837 16.4917"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M12.0834 9.16669C12.7737 9.16669 13.3334 8.60704 13.3334 7.91669C13.3334 7.22633 12.7737 6.66669 12.0834 6.66669C11.393 6.66669 10.8334 7.22633 10.8334 7.91669C10.8334 8.60704 11.393 9.16669 12.0834 9.16669Z"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Trams & Condation
                </li>
                <li className="questionToolTip-item">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.8333 7.50002C15.8333 8.70835 15.475 9.8167 14.8583 10.7417C13.9583 12.075 12.5333 13.0167 10.875 13.2584C10.5916 13.3084 10.3 13.3334 9.99996 13.3334C9.69996 13.3334 9.40829 13.3084 9.12496 13.2584C7.46663 13.0167 6.04163 12.075 5.14163 10.7417C4.52496 9.8167 4.16663 8.70835 4.16663 7.50002C4.16663 4.27502 6.77496 1.66669 9.99996 1.66669C13.225 1.66669 15.8333 4.27502 15.8333 7.50002Z"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M17.7084 15.3917L16.3334 15.7167C16.025 15.7917 15.7834 16.025 15.7167 16.3333L15.425 17.5583C15.2667 18.225 14.4167 18.425 13.975 17.9L10 13.3333L6.02503 17.9083C5.58336 18.4333 4.73336 18.2333 4.57502 17.5667L4.28336 16.3417C4.20836 16.0333 3.96669 15.7917 3.66669 15.725L2.29169 15.4C1.65836 15.25 1.43336 14.4583 1.89169 14L5.14169 10.75C6.04169 12.0833 7.46669 13.025 9.12503 13.2667C9.40836 13.3167 9.70003 13.3417 10 13.3417C10.3 13.3417 10.5917 13.3167 10.875 13.2667C12.5334 13.025 13.9584 12.0833 14.8584 10.75L18.1084 14C18.5667 14.45 18.3417 15.2417 17.7084 15.3917Z"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M10.4834 4.98331L10.9751 5.96664C11.0417 6.09997 11.2167 6.23331 11.3751 6.25831L12.2667 6.40831C12.8334 6.49997 12.9667 6.91664 12.5584 7.32498L11.8667 8.01663C11.7501 8.1333 11.6834 8.35831 11.7251 8.52498L11.9251 9.38331C12.0834 10.0583 11.7251 10.325 11.1251 9.96663L10.2917 9.47497C10.1417 9.3833 9.89173 9.3833 9.74173 9.47497L8.90839 9.96663C8.30839 10.3166 7.95006 10.0583 8.10839 9.38331L8.30839 8.52498C8.34173 8.36665 8.28339 8.1333 8.16673 8.01663L7.47506 7.32498C7.06673 6.91664 7.20006 6.50831 7.76673 6.40831L8.65839 6.25831C8.80839 6.23331 8.98339 6.09997 9.05006 5.96664L9.54173 4.98331C9.78339 4.44998 10.2167 4.44998 10.4834 4.98331Z"
                      stroke="#2B335E"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  About
                </li>
                <li className="questionToolTip-bottom">
                  <span>Version - 12.4.02</span>
                  <span>Copyright 2024</span>
                </li>
              </ul>
            }
          >
            <button className="btn-four" onClick={handleClickQuestion}>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.5 17.25H12.75V19.5H10.5V17.25Z" fill="#969696" />
                <path
                  d="M6.375 8.64813C6.96129 5.74253 9.72328 3.78559 12.6896 4.17409C15.6559 4.56258 17.8092 7.16327 17.6125 10.1199C17.4159 13.0765 14.9368 15.3751 11.9446 15.375H10.5V13.2115H11.9446C13.7155 13.2115 15.4615 11.6971 15.4615 9.75C15.4615 7.80288 13.768 6.50481 12 6.50481C9.57296 6.50481 8.53846 9.10096 8.53846 9.10096L6.375 8.64813Z"
                  fill="#969696"
                />
              </svg>
            </button>
          </CustomTooltipQuestion>
        </div>
      </div>
    </section>
  );
};

export default Main;
