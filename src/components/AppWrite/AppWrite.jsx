import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./auth.service";
import { login, logout } from "./store/authSlice";
import Header from "./appWiteComponents/Header/Header";
import Footer from "./appWiteComponents/footer/Footer";
import { Outlet } from "react-router-dom";

function AppWrite() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService
      .getCurrentUser()
      .then((user) => {
        if (user) {
          dispatch(login({ userData: user }));
        } else {
          dispatch(logout());
        }
      })
      .finally(() => setLoading(false));
  }, []);

  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block" >
        <Header/>
        <main>
         <Outlet/> 
        </main>
        <Footer/>
      </div>
    </div>
  ) : null;
}

export default AppWrite;
