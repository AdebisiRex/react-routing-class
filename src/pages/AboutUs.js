import React, { useState } from "react";
import Nav from "../components/Nav";
import { useEffect } from "react";

const AboutUs = () => {
  const [number, setNumber] = useState(1)
  useEffect(()=>{
    console.log("Arrived at about")


    return ()=>{
      console.log("We are leaving About ")
    }

  }, [number])
  return (
    <>
      <Nav />
      <div className='App'>
        <div className='App-header'>
          <h1>{number}</h1>
          <button onClick={()=> setNumber(number +1)}> Change Num</button>
          <h1>About us Page</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil cumque itaque tenetur rem repellat possimus placeat sit eum provident deserunt quibusdam voluptates fugit quidem adipisci non aliquam atque, distinctio repellendus tempora! Consequatur obcaecati totam, vel, neque modi voluptatibus voluptas delectus nulla cum, eaque atque quam eius officiis sint itaque provident!</p>
        </div>
      </div>
    </>
  );
};

export default AboutUs;
