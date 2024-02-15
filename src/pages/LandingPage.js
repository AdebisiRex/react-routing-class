import React from 'react'
import Nav from '../components/Nav';
import axios from 'axios';

const LandingPage = () => {
  const fetchCocktails= async()=>{
    const response = await axios.get(
      "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a"
    );
    console.log(response.data)
  }
  return (
    <>
    <Nav/>
    <div className='App'>
      <header className='App-header'>
        <h1> Landing Page</h1>
        <button onClick={fetchCocktails}>Fetch</button>
      </header>
    </div>
    </>
  );
}

export default LandingPage