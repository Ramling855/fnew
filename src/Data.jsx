import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
const Data = () => {
  const [getdata, setGetdata] = useState([]);
//   const [start, setStart] = useState();
  useEffect(() => {
    axios
      .get("https://thawing-reef-81365.herokuapp.com/form/getall")
      .then((all) => setGetdata(all.data.data))
      .catch(() => console.log("errr"));
  });

  

  return (
    <>
          {getdata.map((ele, i) => {
            return (
              <>

<div key={i} class="card mb-3" style={{width: "100%",height:"1000px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={ele.photo} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h5 className="card-title">Name :{ele.name}</h5>
        <p className="card-text">address :{ele.address}</p>
        <p className="card-text"><small className="text-muted">email: {ele.email}</small></p>
        <p className="card-text"><small className="text-muted">Mo. No.:{ele.phone}</small></p>
        <p className="card-text"><small className="text-muted">educational qualification.:{ele.education}</small></p>
        <p className="card-text"><small className="text-muted">job designation.:{ele.job}</small></p>
        {/* <p className="card-text"><small className="text-muted">job Location.:{ele.location}</small></p> */}
        <p className="card-text"><small className="text-muted">monthly salary:{ele.salary}</small></p>


      </div>
    </div>
  </div>
  
</div>

              </>
            );
          })}
        
    </>
  );
};
export default Data;
