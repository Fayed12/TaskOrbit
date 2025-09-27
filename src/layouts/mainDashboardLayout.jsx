// react router
import { Outlet } from "react-router";

// local
import DashboardNavBar from "../components/dashboard-components/dashboard-navBar/dashboardNavBar";
import DashboardSideBar from "../components/dashboard-components/dashboard-sideBar/dashboardSideBar";


function MainDashboardLayout() {
    return (  
        <>
        <Outlet/>
        </>
    );
}

export default MainDashboardLayout;