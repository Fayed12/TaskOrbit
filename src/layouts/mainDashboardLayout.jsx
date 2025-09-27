// react router
import { Outlet } from "react-router";

// local
import DashboardNavBar from "../components/dashboard-components/dashboard-navBar/dashboardNavBar";
import DashboardSideBar from "../components/dashboard-components/dashboard-sideBar/dashboardSideBar";

function MainDashboardLayout() {
  return (
    <div className="flex">
      <div className=" side-bar">
        <DashboardSideBar />
      </div>
      <div className="dashboard-content">
        <div className="nav">
          <DashboardNavBar />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainDashboardLayout;
