import React from "react";
import { useDispatch } from "react-redux";
import authService from "../../auth.service";
import { logout } from "../../store/authSlice";

function Logoutbtn() {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await authService.logout().then(() => {
        dispatch(logout());
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };
  return <div className="inline-block px-6 py-2 duration-200 hover:bg-blue-300 rounded-full" >Logout</div>;
}

export default Logoutbtn;
