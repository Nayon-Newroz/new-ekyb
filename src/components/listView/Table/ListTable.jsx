import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import "./ListTable.css";
import img1 from "../../../assets/images/listview/ico1.png";
import img2 from "../../../assets/images/listview/ico2.png";
import icon from "../../../assets/images/listview/item07.png";
import { useNavigate } from "react-router-dom";

const columns = [
  {
    field: "basicInfo",
    headerName: "Basic Info",
    width: 250,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <img
          src={img1}
          alt="Avatar"
          style={{
            width: 40,
            height: 40,
            borderRadius: "50%",
            marginRight: "10px",
          }}
        />
        <span style={{ color: "#035B77" }}>{`${params.row.firstName || ""} ${
          params.row.lastName || ""
        }`}</span>
      </div>
    ),
  },
  {
    field: "type",
    headerName: "Type",
    width: 120,
  },
  {
    field: "progress",
    headerName: "Progress",
    width: 180,
    renderCell: (params) => (
      <div style={{ display: "flex", alignItems: "center", width: "100%" }}>
        <div
          style={{
            width: "100%",
            backgroundColor: "#f3f3f3",
            borderRadius: "4px",
            overflow: "hidden",
            marginRight: "10px",
          }}
        >
          <div
            style={{
              height: "8px",
              width: `${params.row.progress || 0}%`,
              backgroundColor: "#76c7c0",
            }}
          />
        </div>
        {params.row.progress || 0}%
      </div>
    ),
  },
  {
    field: "email",
    headerName: "Email",
    width: 200,
  },
  {
    field: "docType",
    headerName: "Doc Type",
    width: 150,
  },
  {
    field: "docId",
    headerName: "Doc ID",
    width: 150,
  },
  {
    field: "registrationDate",
    headerName: "Registration Date",
    width: 220,
    renderCell: (params) => {
      const date = new Date(params.row.registrationDate);
      return date.toLocaleString("en-GB", {
        weekday: "short",
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  {
    field: "action",
    headerName: "Action",
    width: 300,
    renderCell: (params) =>
      (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "start",
            gap: "8px",
            width: "100%",
            height: "100%",
          }}
        >
          <button className="list-btn-one">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00016 14.6667H10.0002C13.3335 14.6667 14.6668 13.3334 14.6668 10V6.00004C14.6668 2.66671 13.3335 1.33337 10.0002 1.33337H6.00016C2.66683 1.33337 1.3335 2.66671 1.3335 6.00004V10C1.3335 13.3334 2.66683 14.6667 6.00016 14.6667Z"
                stroke="#426DF3"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M9.99984 10.2533H6.71984C5.58651 10.2533 4.6665 9.33327 4.6665 8.19994C4.6665 7.06661 5.58651 6.14661 6.71984 6.14661H11.2332"
                stroke="#426DF3"
                stroke-miterlimit="10"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.2866 7.17995L11.3333 6.12662L10.2866 5.07996"
                stroke="#426DF3"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Forward
          </button>
          <button className="list-btn-two">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.9999 14.0133C10.3532 14.0133 12.5466 12.6266 14.0732 10.2266C14.6732 9.28665 14.6732 7.70665 14.0732 6.76665C12.5466 4.36665 10.3532 2.97998 7.9999 2.97998C5.64656 2.97998 3.45323 4.36665 1.92656 6.76665C1.32656 7.70665 1.32656 9.28665 1.92656 10.2266C3.45323 12.6266 5.64656 14.0133 7.9999 14.0133Z"
                stroke="#035B77"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M10.3866 8.49995C10.3866 9.81995 9.31995 10.8866 7.99995 10.8866C6.67995 10.8866 5.61328 9.81995 5.61328 8.49995C5.61328 7.17995 6.67995 6.11328 7.99995 6.11328C9.31995 6.11328 10.3866 7.17995 10.3866 8.49995Z"
                stroke="#035B77"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Details
          </button>
          <button className="list-btn-three">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.99344 1.98667L3.66677 3.24C2.9001 3.52667 2.27344 4.43333 2.27344 5.24666V10.2C2.27344 10.9867 2.79344 12.02 3.42677 12.4933L6.29344 14.6333C7.23344 15.34 8.7801 15.34 9.7201 14.6333L12.5868 12.4933C13.2201 12.02 13.7401 10.9867 13.7401 10.2V5.24666C13.7401 4.42666 13.1134 3.52 12.3468 3.23333L9.0201 1.98667C8.45344 1.78 7.54677 1.78 6.99344 1.98667Z"
                stroke="#68C81C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M6.0332 8.41333L7.10654 9.48666L9.9732 6.62"
                stroke="#68C81C"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Verify Me
          </button>
        </div>
      ) || (
        <div className="">
          <button className="list-btn-four">
            <svg
              width="16"
              height="17"
              viewBox="0 0 16 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.3335 15.1666H4.66683C2.00016 15.1666 1.3335 14.5 1.3335 11.8333V10.5C1.3335 7.83329 2.00016 7.16663 4.66683 7.16663H11.3335C14.0002 7.16663 14.6668 7.83329 14.6668 10.5V11.8333C14.6668 14.5 14.0002 15.1666 11.3335 15.1666Z"
                stroke="#F23836"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M4 7.16671V5.83337C4 3.62671 4.66667 1.83337 8 1.83337C11.3333 1.83337 12 3.62671 12 5.83337V7.16671"
                stroke="#F23836"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M8.00016 12.8333C8.92064 12.8333 9.66683 12.0871 9.66683 11.1667C9.66683 10.2462 8.92064 9.5 8.00016 9.5C7.07969 9.5 6.3335 10.2462 6.3335 11.1667C6.3335 12.0871 7.07969 12.8333 8.00016 12.8333Z"
                stroke="#F23836"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Cameron Williamson Working on this item
          </button>
        </div>
      ),
  },
];

const rows = [
  {
    id: 1,
    firstName: "Jon",
    lastName: "Snow",
    type: "Personal",
    progress: 80,
    email: "jon.snow@got.com",
    docType: "Passport",
    docId: "123456789",
    registrationDate: "2023-01-15 20:30:00",
    avatar: "../../../assets/images/listview/ico2.png",
  },
  {
    id: 2,
    firstName: "Cersei",
    lastName: "Lannister",
    type: "Admin",
    progress: 60,
    email: "cersei.lannister@got.com",
    docType: "ID",
    docId: "987654321",
    registrationDate: "2022-12-20 15:15:00",
    avatar: { img2 },
  },
  {
    id: 3,
    firstName: "Jaime",
    lastName: "Lannister",
    type: "Personal",
    progress: 75,
    email: "jaime.lannister@got.com",
    docType: "Driver's License",
    docId: "1122334455",
    registrationDate: "2023-02-10 23:45:00",
    avatar: "https://example.com/jaime_lannister_avatar.jpg",
  },
  {
    id: 4,
    firstName: "Arya",
    lastName: "Stark",
    type: "User",
    progress: 90,
    email: "arya.stark@got.com",
    docType: "ID",
    docId: "5566778899",
    registrationDate: "2023-03-25 17:00:00",
    avatar: "https://example.com/arya_stark_avatar.jpg",
  },
  {
    id: 5,
    firstName: "Tyrion",
    lastName: "Lannister",
    type: "Personal",
    progress: 85,
    email: "tyrion.lannister@got.com",
    docType: "Passport",
    docId: "2233445566",
    registrationDate: "2023-04-05 13:30:00",
    avatar: "https://example.com/tyrion_lannister_avatar.jpg",
  },
  {
    id: 6,
    firstName: "Sansa",
    lastName: "Stark",
    type: "User",
    progress: 70,
    email: "sansa.stark@got.com",
    docType: "ID",
    docId: "6677889900",
    registrationDate: "2023-05-12 16:45:00",
    avatar: "https://example.com/sansa_stark_avatar.jpg",
  },
  {
    id: 7,
    firstName: "Bran",
    lastName: "Stark",
    type: "Admin",
    progress: 90,
    email: "bran.stark@got.com",
    docType: "Driver's License",
    docId: "9988776655",
    registrationDate: "2023-06-20 08:00:00",
    avatar: "https://example.com/bran_stark_avatar.jpg",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const ListTable = () => {
  const [selectedRow, setSelectedRow] = React.useState(null);
  const navigate = useNavigate();

  //handleToDocumentPage
  const handleToDocumentPage = () => {
    navigate("/document");
  };

  const handleRowClick = (params) => {
    setSelectedRow(params.row);
  };

  const handleRowClose = () => {
    setSelectedRow(null);
  };

  return (
    <div className="list-container">
      <div className={`table-container ${selectedRow ? "shrink" : ""}`}>
        <Paper sx={{ height: "100%", width: "100%", marginTop: "20px" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: { paginationModel: { pageSize: 10, page: 0 } },
            }}
            pageSizeOptions={[10, 20]}
            sx={{
              border: 0,
              cursor: "pointer",
              "& .MuiDataGrid-columnHeaderTitleContainer": {
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                "& .MuiDataGrid-iconButtonContainer": {
                  visibility: "visible",
                },
              },
              "& .Mui-selected": {
                backgroundColor: "#fffae6 !important",
                border: "none !important",
                outline: "none !important",
              },
              "& .MuiDataGrid-cell:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-cell--editable:focus": {
                outline: "none",
              },
              "& .MuiDataGrid-cell--selected": {
                backgroundColor: "rgba(0, 123, 255, 0.25)",
                "&:hover": {
                  backgroundColor: "rgba(0, 123, 255, 0.35)",
                },
              },
            }}
            onRowClick={handleRowClick}
          />
        </Paper>
      </div>
      {selectedRow && (
        <div className="Details-User">
          <div>
            <button className="details-close-btn" onClick={handleRowClose}>
              <svg
                width="16"
                height="16"
                viewBox="0 0 12 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 9L9 3"
                  stroke="#222222"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9 9L3 3"
                  stroke="#222222"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </button>
          </div>
          <div className="details-header">
            <img src={icon} alt="" />
            <div className="">
              <h3>{selectedRow.firstName + " " + selectedRow.lastName}</h3>
              <p>+{selectedRow.docId}</p>
              <div className="details-header-bottom">
                {" "}
                <h6>gafura1992@newroztech.com</h6>
                <button>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="0.25"
                      y="0.25"
                      width="15.5"
                      height="15.5"
                      rx="7.75"
                      stroke="#68C81C"
                      stroke-width="0.5"
                    />
                    <path
                      d="M6 8L7.99765 10L12 6"
                      stroke="#68C81C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 8L5.99765 10L10 6"
                      stroke="#68C81C"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="details-content">
            <h4>
              Personal Information{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2797 5.96667L8.93306 10.3133C8.41973 10.8267 7.57973 10.8267 7.06639 10.3133L2.71973 5.96667"
                  stroke="#222222"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h4>
            <p>
              <span>User Type:</span> {selectedRow.type}
            </p>
            <p>
              <span>Current Level:</span> {selectedRow.progress}%
            </p>
            <p>
              <span>User:</span> <button className="extra-btn">Unblock</button>
            </p>
          </div>
          <div className="details-content">
            <h4>
              ACCOUNT DETAILS{" "}
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M13.2797 5.96667L8.93306 10.3133C8.41973 10.8267 7.57973 10.8267 7.06639 10.3133L2.71973 5.96667"
                  stroke="#222222"
                  stroke-miterlimit="10"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h4>
            <p>
              <span>User Type:</span> {selectedRow.type}
            </p>
            <p>
              <span>Balance:</span> {selectedRow.progress}
            </p>
            <p>
              <span>count Status:</span>{" "}
              <button className="extra-btn-two">Unverified</button>
            </p>
          </div>
          <div className="details-bottom">
            <button onClick={handleToDocumentPage}>
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99987 16.8918C12.9415 16.8918 15.6832 15.1584 17.5915 12.1584C18.3415 10.9834 18.3415 9.00843 17.5915 7.83343C15.6832 4.83343 12.9415 3.1001 9.99987 3.1001C7.0582 3.1001 4.31654 4.83343 2.4082 7.83343C1.6582 9.00843 1.6582 10.9834 2.4082 12.1584C4.31654 15.1584 7.0582 16.8918 9.99987 16.8918Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12.9833 9.99993C12.9833 11.6499 11.6499 12.9833 9.99993 12.9833C8.34993 12.9833 7.0166 11.6499 7.0166 9.99993C7.0166 8.34993 8.34993 7.0166 9.99993 7.0166C11.6499 7.0166 12.9833 8.34993 12.9833 9.99993Z"
                  stroke="white"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              View Details
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ListTable;
