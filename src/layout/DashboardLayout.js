import React from "react";
import PrivateNav from "../components/PrivateNav";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import UserProfile from "../pages/UserProfile";

const DashboardLayout = () => {
  return (
    <>
      <PrivateNav />
      <div className='row'>
        <div className='col-4 bg-danger min-vh-100'></div>
        <div className='col-8'>
          <Routes>
            <Route index element={<Dashboard />} />
            <Route path='/user-profile' element={<UserProfile />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default DashboardLayout;
