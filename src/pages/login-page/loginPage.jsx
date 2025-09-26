// react
import { useState } from "react";

// local
import "./loginPage.css";
import SignUp from "../../components/signUp";
import SignIn from "../../components/signIn";

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
              {isSignUp? <SignUp/> :<SignIn/> }
        {!isSignUp && <p className="forgot">Forgot Password?</p>}
      </div>
    </div>
  );
}

export default LoginPage;
