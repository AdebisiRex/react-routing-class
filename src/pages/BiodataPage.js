import React from "react";
import Nav from "../components/Nav";
import { useParams } from "react-router-dom";

const BiodataPage = () => {
    const param = useParams()
    // console.log(param)
  return (
    <>
    <Nav/>
      <div>
        <table className='table table-bordered'>
          <tr className="bg-warning">
            <td>Name</td>
            <td>{param.userData}</td>
          </tr>
        </table>
      </div>
    </>
  );
};

export default BiodataPage;
