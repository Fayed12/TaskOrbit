// local 
import MainInput from "../input";

function SignStatus({ isSignUp }) {
  return (
    <>
      <form className="auth-form">
        {isSignUp && <MainInput inpType="text" inpPlaceholder="Full Name" />}
        <MainInput inpType="email" inpPlaceholder="example@gmail.com " />
        <MainInput inpType="password" inpPlaceholder="Password" />
              {isSignUp && (
                  <MainInput inpType="password" inpPlaceholder="Confirm Password" />
        )}
        <button type="submit" className="submit-btn">
          {isSignUp ? "Sign Up" : "Sign In"}
        </button>
      </form>
    </>
  );
}

export default SignStatus;