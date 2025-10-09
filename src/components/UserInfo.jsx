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

// sweet alert 
import Swal from "sweetalert2";

// react router
import { useNavigate } from "react-router";

// ==================================================================================================================
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
    const swalWithBootstrapButtons = Swal.mixin({
          customClass: {
            confirmButton: "btn btn-success",
            cancelButton: "btn btn-danger",
          },
          buttonsStyling: true,
        });
        swalWithBootstrapButtons
          .fire({
            title: "are you sure you want to logout?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Yes",
            cancelButtonText: "No!",
            reverseButtons: true,
          })
          .then(async (result) => {
            if (result.isConfirmed) {
              swalWithBootstrapButtons.fire({
                title: "Canceled!",
                text: "Cancel add this task",
                icon: "success",
              });
              // local code
              toast.loading("loading....", { id: "logout-toast" });
              handleCloseMenu();
              setTimeout(() => {
                toast.success("logout successful", { id: "logout-toast" });
              }, 2000);
              setTimeout(() => {
                sessionStorage.setItem("isLoggedIn", "false");
                navigate("/home", { replace: true });
              }, 3000);
            } else if (result.dismiss === Swal.DismissReason.cancel) {
              swalWithBootstrapButtons.fire({
                title: "keep working",
                text: "add new task :)",
                icon: "error",
              });
              toast.error("The logout process has been stopped!", {
                id: "logout-toast",
              });
              handleCloseMenu();
            }
          });
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
        width: "100%",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          overflow: "hidden",
        }}
      >
        <Avatar alt={userData.name} />
        <Box
          sx={{
            display: { xs: "none", sm: "block" },
            "@media (max-width:200px)": {
              display: "none",
            },
          }}
        >
          <Typography
            variant="subtitle1"
            fontWeight="bold"
            noWrap
            sx={{ maxWidth: 200 }}
          >
            {userData.name}
          </Typography>
          <Typography
            variant="body2"
            color="text.secondary"
            noWrap
            sx={{ maxWidth: 200 }}
          >
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
