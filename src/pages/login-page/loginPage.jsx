// react
import { useState } from "react";

// local
import "./loginPage.css";
import SignStatus from "../../components/sign-status/signStatus";

function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);

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
        <SignStatus isSignUp={isSignUp}></SignStatus>
        {!isSignUp && <p className="forgot">Forgot Password?</p>}
      </div>
    </div>
  );
}

export default LoginPage;
