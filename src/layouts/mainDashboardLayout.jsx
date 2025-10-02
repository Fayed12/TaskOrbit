// react router
import { Outlet } from "react-router";

// react
import { useState } from "react";

// local
import DashboardNavBar from "../components/dashboard-components/dashboard-navBar/dashboardNavBar";
import DashboardSideBar from "../components/dashboard-components/dashboard-sideBar/dashboardSideBar";

// ==================================================================================================================
function MainDashboardLayout() {
    const [openSideBar, setOpenSideBar] = useState(false);
  return (
    <div className="flex">
      <div className=" side-bar">
        <DashboardSideBar openSideBar={openSideBar} />
      </div>
      <div className="dashboard-content flex-1">
        <div className="nav">
          <DashboardNavBar setOpenSideBar={setOpenSideBar} />
        </div>
        <div className="content">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default MainDashboardLayout;
