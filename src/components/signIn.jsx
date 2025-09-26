// local
import MainInput from "./input";

function SignIn() {
  // the user is enter her/him data
  // fetch all users from API after form submission
  // compare all users after submission to the data user entered
  // return true or false 
  // start loading
  // redirect the user to the dashboard system
    return (
      <form className="auth-form">
        <MainInput inpType="email" inpPlaceholder="example@gmail.com " />
        <MainInput inpType="password" inpPlaceholder="Password" />
        <button type="submit" className="submit-btn">
          Sign In
        </button>
      </form>
    );
}

export default SignIn;