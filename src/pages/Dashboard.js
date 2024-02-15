import React, { useEffect } from "react";
import axios from "axios";
import PrivateNav from "../components/PrivateNav";
const Dashboard = () => {
  const fetchCocktails = async () => {
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    console.log(response.data);
  };
  useEffect(() => {
    fetchCocktails();
  }, []);
  return (
    <>
      <div className='bg- min-vh-100 d-flex align-items-center justify-content-center'>
        <div className='text-center text-success'>
          <h1>Welcome to the dashboard </h1>
          <p>In which case you get access to the app </p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
