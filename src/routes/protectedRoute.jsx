// react router
import { Navigate } from "react-router";

function ProtectedRoute({ children }) {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (isLoggedIn === "true") {
        return children
    }
    return <Navigate to="/login" replace={true}></Navigate>
}

export default ProtectedRoute;