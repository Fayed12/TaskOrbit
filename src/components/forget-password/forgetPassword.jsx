/*
1- create email checker components
2- user enter only his email
3- check if this email is exist or not
4- if exist go to new password component, if not return message no user
5- if exist => create put API action to this user account
6- check if the new user password equal to the last user password 
7- if equal , return this password is already exist else return password is update successful
8- create confirm password input to increase protect 
9- if update successful , redirect the user to login in page
*/

// react 
import { useState } from "react";

// local
import EmailChecker from "./emailChecker";
import ManagePassword from "./newPassword";

function ForgotPassword() {
    const [openNewPassword ,setOpenNewPassword ] = useState(false)
    return (
      <>
        {openNewPassword ? (
          <ManagePassword />
        ) : (
          <EmailChecker setOpenNewPassword={setOpenNewPassword} />
        )}
      </>
    );
}

export default ForgotPassword;