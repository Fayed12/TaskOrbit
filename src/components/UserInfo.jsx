// MUI
import {
  Avatar,
  Box,
  Typography,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// react 
import { useState, useEffect } from "react";

// toast
import toast from "react-hot-toast";

// react router
import { useNavigate } from "react-router";


export default function UserInfo() {
  const navigate = useNavigate()
  const [anchorEl, setAnchorEl] = useState(null);
  const [userData, setUserData] = useState({
    name: "",
    email:"",
  })

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  // user info after mount
  useEffect(() => {
    const userInfo = JSON.parse(sessionStorage.getItem("RegisteredUser"));
    if (!userInfo) {
      return;
    } 
    setUserData({ name: userInfo.name, email: userInfo.email });
  }, [])

  // logout function
  function handleLogout() {
    const isLoggedIn = sessionStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      return;
    }
    const confirmQ = window.confirm("Are you sure you want to log out?");
    if (!confirmQ) {
      toast.error("The logout process has been stopped!", {
        id: "logout-toast",
      });
      handleCloseMenu();
    } else {
      toast.loading("loading....", { id: "logout-toast" });
      handleCloseMenu();
      setTimeout(() => {
        toast.success("logout successful", { id: "logout-toast" });
      }, 2000);
      setTimeout(() => {
        sessionStorage.setItem("isLoggedIn", "false");
        navigate("/home", { replace: true });
      }, 3000);
    }
    
  }

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        p: 1,
        borderRadius: 2,
        "&:hover": { backgroundColor: "action.hover" },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Avatar
          alt={userData.name}
        />
        <Box>
          <Typography variant="subtitle1" fontWeight="bold">
            {userData.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {userData.email}
          </Typography>
        </Box>
      </Box>

      <IconButton onClick={handleOpenMenu}>
        <MoreVertIcon />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleCloseMenu}
      >
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </Box>
  );
}
