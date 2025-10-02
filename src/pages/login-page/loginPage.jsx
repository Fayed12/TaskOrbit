// react
import { useState } from "react";

// react router
import { useNavigate } from "react-router";

// local
import "./loginPage.css";
import SignUp from "../../components/signUp";
import SignIn from "../../components/signIn";
import LoadingPage from "../loading-page/loading";

// ==================================================================================================================
function LoginPage() {
  const [openLoading, setOpenLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate()

  return (
    <div className="auth-page">
      <div className="auth-box">
        <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
        <p className="subtitle">
          {isSignUp
            ? "Sign up to start organizing your tasks today"
            : "Sign in to continue managing your productivity"}
        </p>

        <div className="tabs">
          <button
            className={!isSignUp ? "active" : ""}
            onClick={() => setIsSignUp(false)}
          >
            Sign In
          </button>
          <button
            className={isSignUp ? "active" : ""}
            onClick={() => setIsSignUp(true)}
          >
            Sign Up
          </button>
        </div>
        {isSignUp ? <SignUp /> : <SignIn setOpenLoading={setOpenLoading} />}
        {!isSignUp && (
          <p className="forgot" onClick={() => navigate("/managePassword", {replace:true})}>
            Forgot Password?
          </p>
        )}
      </div>
      {openLoading && <LoadingPage />}
    </div>
  );
}

export default LoginPage;
