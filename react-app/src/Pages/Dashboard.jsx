import "../Components/style.css";

function Dashboard() {
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
          <div>input search</div>
          <div>bell button</div>
          <div>profile</div>
          <div>down arrow</div>
        </div>
      </nav>
      <div className="container">
        <div className="container-box-first">
          <div className="container-box-first-child">
            <div>icon</div>
            <div>Dashboard</div>
          </div>
          <div className="container-box-first-child">
            <div>icon</div>
            <div>Accounts</div>
          </div>
          <div className="container-box-first-child">
            <div>icon</div>
            <div>Payroll</div>
          </div>
          <div className="container-box-first-child">
            <div>icon</div>
            <div>Reports</div>
          </div>
          <div className="container-box-first-child">
            <div>icon</div>
            <div>Advisor</div>
          </div>
          <div className="container-box-first-child">
            <div>icon</div>
            <div>Contacts</div>
          </div>
        </div>
        <div className="container-box-second">
            <div className="container-box-second-child"></div>
            <div className="container-box-second-child"></div>
            <div className="container-box-second-child"></div>
            <div className="container-box-second-child"></div>
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
