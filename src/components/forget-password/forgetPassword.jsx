// react 
import { useState } from "react";

// local
import EmailChecker from "./emailChecker";
import ManagePassword from "./newPassword";

function ForgotPassword() {
    const [openNewPassword, setOpenNewPassword] = useState(false);
    const [userId, setUserId] = useState()
    return (
      <>
        {openNewPassword ? (
                <ManagePassword userId={ userId} />
        ) : (
                    <EmailChecker setOpenNewPassword={setOpenNewPassword} setUserId={ setUserId} />
        )}
      </>
    );
}

export default ForgotPassword;