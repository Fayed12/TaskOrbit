// react
import { useState } from "react";

// local
import MainInput from "./input";

// toast
import toast from "react-hot-toast";

// initial values
const initialUser = {
  id: "",
  name: "",
  email: "",
  password: "",
};

const initialLink = "http://localhost:5000/users";


// ================================================================================================
function SignUp() {
  const [newUser, setNewUser] = useState(initialUser);
  const [confirmPass, setConfirmPass] = useState("");

  // 1-ensure that all fields are filled in.
  function filedFilledIN() {
    if (!newUser.name) {
      toast.error("please enter your name" , {id:"signUp-toast"});
      return false;
    }
    if (!newUser.email) {
      toast.error("please enter your email", { id: "signUp-toast" });
      return false;
    }
    if (!newUser.password) {
      toast.error("please enter your password", { id: "signUp-toast" });
      return false;
    }
    if (!confirmPass) {
      toast.error("please confirm your password", { id: "signUp-toast" });
      return false;
    }
    return true;
  }

  // 2-ensure that all string is compatible with regex
  const nameRegex = /^[A-Za-z]+ [A-Za-z]+$/;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  function handleRegex() {
    if (!nameRegex.test(newUser.name)) {
      toast.error("please enter valid name only 2 words, ex.'mohamed fayed' ", {
        id: "signUp-toast",
      });
      return false
    }
    if (!emailRegex.test(newUser.email)) {
      toast.error("please enter valid email , ex.'example@gmail.com ' ", {
        id: "signUp-toast",
      });
      return false
    }
    return true;
  }

  // 3-compare password
  function comparePassword() {
    if (confirmPass !== newUser.password) {
      toast.error("please check you enter a correct confirm password", {
        id: "signUp-toast",
      });
      return false;
    }
    return true;
  }

  // 4-confirm that no user similar
  async function checkUserIsUnique() {
    try {
      const res = await fetch(`${initialLink}/?email=${newUser.email}`);
      if (!res.ok) {
        throw new Error("something error in response!!");
      }
      const userEmail = await res.json();

      if (userEmail.length > 0) {
        toast.error("This email is already exists, try another one.", {
          id: "signUp-toast",
        });
        return false;
      }
      return true;
    } catch (err) {
      console.log(err.message);
      toast.error(err.message, { id: "signUp-toast" });
      return false;
    }
  }

  // 5-post new user to users API
  async function handleAddNewUSer() {
    try {
      const res = await fetch(initialLink, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...newUser, id: Date.now() }),
      });
      if (!res.ok) {
        throw new Error("Failed to register user");
      }
      toast.success("User registered successfully!" , {id:"signUp-toast"});
    } catch (err) {
        console.log(err.message);
        toast.error(err.message, {id:"signUp-toast"});
    }
  }

  // 6-main function
  async function handleSubmit(e) {
    e.preventDefault();
    if (!filedFilledIN()) return;
    if (!comparePassword()) return;
    if (!handleRegex()) return;

    // check first is user exist or not
    const isUnique = await checkUserIsUnique();
    if (!isUnique) return;

    // add user
    await handleAddNewUSer();

    // back to initial values
    setNewUser(initialUser);
    setConfirmPass("");
  }

  return (
    <form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
      <MainInput
        inpType="text"
        inpPlaceholder="Full Name"
        inpValue={newUser.name}
        inpSetValue={(e) =>
          setNewUser({ ...newUser, name: e.target.value.trim().toLowerCase() })
        }
      />
      <MainInput
        inpType="email"
        inpPlaceholder="example@gmail.com "
        inpValue={newUser.email}
        inpSetValue={(e) =>
          setNewUser({ ...newUser, email: e.target.value.trim().toLowerCase() })
        }
      />
      <MainInput
        inpType="password"
        inpPlaceholder="Password"
        inpValue={newUser.password}
        inpSetValue={(e) =>
          setNewUser({
            ...newUser,
            password: e.target.value.trim(),
          })
        }
      />
      <MainInput
        inpType="password"
        inpPlaceholder="Confirm Password"
        inpValue={confirmPass}
        inpSetValue={(e) => setConfirmPass(e.target.value.trim())}
      />
      <button type="submit" className="submit-btn">
        Sign Up
      </button>
    </form>
  );
}

export default SignUp;
