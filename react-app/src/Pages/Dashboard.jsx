import "../Components/style.css";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsIcon from "@mui/icons-material/Notifications";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import DescriptionIcon from "@mui/icons-material/Description";
import PersonIcon from "@mui/icons-material/Person";
import ContactsIcon from "@mui/icons-material/Contacts";
import { useState } from "react";
import LineChart from "../Components/LineChart";
import BarChart from "../Components/BarChart";
import Popup from "../Components/Popup";

function Dashboard() {
  const [dashboardColor, setDashboardColor] = useState("green");
  const [accountColor, setAccountColor] = useState("white");
  const [payrollColor, setPayrollColor] = useState("white");
  const [reportColor, setReportColor] = useState("white");
  const [advisorColor, setAdvisorColor] = useState("white");
  const [contactColor, setContactColor] = useState("white");
  const [isOpenPopup, setIsOpenPopup] = useState(false);

  const handleOpenPopup = () => {
    setIsOpenPopup(true);
  };

  const handleClosePopup = () => {
    setIsOpenPopup(false);
  };

  const handleDashboard = () => {
    setDashboardColor("green");
    setAccountColor("white");
    setPayrollColor("white");
    setReportColor("white");
    setAdvisorColor("white");
    setContactColor("white");
  };

  const handleAccount = () => {
    setDashboardColor("white");
    setAccountColor("green");
    setPayrollColor("white");
    setReportColor("white");
    setAdvisorColor("white");
    setContactColor("white");
  };

  const handlePayroll = () => {
    setDashboardColor("white");
    setAccountColor("white");
    setPayrollColor("green");
    setReportColor("white");
    setAdvisorColor("white");
    setContactColor("white");
  };

  const handleReport = () => {
    setDashboardColor("white");
    setAccountColor("white");
    setPayrollColor("white");
    setReportColor("green");
    setAdvisorColor("white");
    setContactColor("white");
  };

  const handleAdvisor = () => {
    setDashboardColor("white");
    setAccountColor("white");
    setPayrollColor("white");
    setReportColor("white");
    setAdvisorColor("green");
    setContactColor("white");
  };

  const handleContact = () => {
    setDashboardColor("white");
    setAccountColor("white");
    setPayrollColor("white");
    setReportColor("white");
    setAdvisorColor("white");
    setContactColor("green");
  };

  const data = [10, 30, 40, 20, 50, 70, 40, 80, 30, 10];
  const bdata = [10, 30, 40, 20, 50, 70];

  return (
    <div>
      <nav>
        <div>
          <div>
            <img
              src="https://www.assiduusglobal.com/images/assiduus-logo-dark.webp"
              alt="logo"
            />
          </div>
        </div>
        <div className="nav-child-right">
          <div className="search-box">
            <SearchIcon color="gray" fontSize="small" />
            <input type="text" />
          </div>
          <div>
            <NotificationsIcon />
          </div>
          <div style={{ width: "6%" }}>
            <img
              src="https://tse1.mm.bing.net/th?id=OIP.JAAd31mxF33HqZEgYq9zgAHaHv&pid=Api&rs=1&c=1&qlt=95&w=119&h=124"
              alt="profile"
            />
          </div>
          <div>
            <ArrowDropDownIcon fontSize="large" />
          </div>
        </div>
      </nav>
      <div className="container">
        <div className="container-box-first">
          <div
            className="container-box-first-child"
            onClick={handleDashboard}
            style={{
              backgroundColor: dashboardColor,
              color: dashboardColor == "green" ? "white" : "black",
            }}
          >
            <div>
              <DashboardIcon fontSize="18px" />
            </div>
            <div style={{ fontSize: "18px", paddingBottom: "5px" }}>
              Dashboard
            </div>
          </div>
          <div
            className="container-box-first-child"
            onClick={handleAccount}
            style={{
              backgroundColor: accountColor,
              color: accountColor == "green" ? "white" : "black",
            }}
          >
            <div>
              <AccountBalanceWalletIcon fontSize="18px" />
            </div>
            <div style={{ fontSize: "18px", paddingBottom: "5px" }}>
              Accounts
            </div>
          </div>
          <div
            className="container-box-first-child"
            onClick={handlePayroll}
            style={{
              backgroundColor: payrollColor,
              color: payrollColor == "green" ? "white" : "black",
            }}
          >
            <div>
              <AttachMoneyIcon fontSize="18px" />
            </div>
            <div style={{ fontSize: "18px", paddingBottom: "5px" }}>
              Payroll
            </div>
          </div>
          <div
            className="container-box-first-child"
            onClick={handleReport}
            style={{
              backgroundColor: reportColor,
              color: reportColor == "green" ? "white" : "black",
            }}
          >
            <div>
              <DescriptionIcon fontSize="18px" />
            </div>
            <div style={{ fontSize: "18px", paddingBottom: "5px" }}>
              Reports
            </div>
          </div>
          <div
            className="container-box-first-child"
            onClick={handleAdvisor}
            style={{
              backgroundColor: advisorColor,
              color: advisorColor == "green" ? "white" : "black",
            }}
          >
            <div>
              <PersonIcon fontSize="18px" />
            </div>
            <div style={{ fontSize: "18px", paddingBottom: "5px" }}>
              Advisor
            </div>
          </div>
          <div
            className="container-box-first-child"
            onClick={handleContact}
            style={{
              backgroundColor: contactColor,
              color: contactColor == "green" ? "white" : "black",
            }}
          >
            <div>
              <ContactsIcon fontSize="18px" />
            </div>
            <div style={{ fontSize: "18px", paddingBottom: "5px" }}>
              Contacts
            </div>
          </div>
        </div>
        <div className="container-box-second">
          <div className="container-box-second-child">
            <div className="chart-box-heading">
              <div>
                <h3>Checking account</h3>
              </div>
              <div>
                <select>
                  <option value="manage">Manage</option>
                  <option value="date">Dates</option>
                </select>
                <select>
                  <option value="">January</option>
                  <option value="">February</option>
                  <option value="">March</option>
                </select>
              </div>
            </div>
            <hr />
            <div>
              <LineChart data={data} />
            </div>
            <div className="chart-box-bottom">
              <span>09</span>
              <span>10</span>
              <span>11</span>
              <span>12</span>
              <span>13</span>
              <span>14</span>
              <span>15</span>
              <span>16</span>
              <span>17</span>
              <span>18</span>
            </div>
          </div>
          <div className="container-box-second-child">
            <div className="chart-box-heading">
              <div>
                <h3>Invoices owed to you</h3>
              </div>
              <div>
                <button onClick={handleOpenPopup}>New Sales Invoice</button>
                <Popup isOpen={isOpenPopup} onClose={handleClosePopup} />
              </div>
            </div>
            <hr />
            <div>
              <BarChart data={bdata} />
            </div>
            <div className="chart-box-bottom">
              <span>Older</span>
              <span>Jan 01-08</span>
              <span>Jan 09-16</span>
              <span>Jan 17-24</span>
              <span>Jan 25-31 </span>
              <span>Future</span>
            </div>
          </div>
          <div className="container-box-second-child">
            <div className="chart-box-heading">
              <div>
                <h3>Total cash flow</h3>
              </div>
              <div className="chart-box-fourth">
                <div className="chart-box-fourth">
                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      backgroundColor: "green",
                    }}
                  ></div>
                  <span>In</span>
                </div>
                <div className="chart-box-fourth">
                  <div
                    style={{
                      height: "15px",
                      width: "15px",
                      backgroundColor: "#21cd1e",
                    }}
                  ></div>
                  <span>Out</span>
                </div>
              </div>
            </div>
            <hr />
            <div>
              <BarChart data={bdata} />
            </div>
            <div className="chart-box-bottom">
              <span>August</span>
              <span>September</span>
              <span>Octomber</span>
              <span>November</span>
              <span>December</span>
              <span>January</span>
            </div>
          </div>
          <div className="container-box-second-child">
            <div className="chart-box-heading">
              <div>
                <h3>Account watchlist</h3>
              </div>
              <div></div>
            </div>
            <hr />

            <div className="chart-box-bottom">
              <div style={{ textAlign: "left" }}>
                <p>Account</p>
                <h4>Sales</h4>
                <h4>Advertising</h4>
                <h4>Inventory</h4>
                <h4>Entertainment</h4>
                {/* <h4>Product</h4> */}
              </div>
              <div className="chart-box-fourth">
                <div style={{ textAlign: "left" }}>
                  <p>This Month</p>
                  <h4>1,194.58</h4>
                  <h4>6,894.02</h4>
                  <h4>4,692.07</h4>
                  <h4>4,652.10</h4>
                  {/* <h4>Product</h4> */}
                </div>
                <div style={{ textAlign: "left" }}>
                  <p>YTD</p>
                  <h4>11,468.02</h4>
                  <h4>9,271.36</h4>
                  <h4>9,768.09</h4>
                  <h4>2,529.90</h4>
                  {/* <h4>Product</h4> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
