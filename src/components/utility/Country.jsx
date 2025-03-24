import React, { useState } from 'react';
import { useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
function Country() {
  const apiurl = "https://restcountries.com/v3.1/name/";
 
  const [flag, SetFlag] = useState(false);
  const [list, SetList] = useState({});
  const [country, SetCountry] = useState(null);
 
  
  const handleFind = () => {
    console.log(country);
    SetFlag(true);
    fetch(`https://restcountries.com/v3.1/name/${country}`)
      .then((res) => res.json())
      .then((result) => SetList(...result));
  };
 
  return (
    <>
      <div className="grid-container">
     <div className="grid-item">
           <div className="header">
                <b>Counter component - Country</b>
                <br/><br/>
            </div>
      <div className="container">
        <div className="row mt-4 justify-content-center">
          <div className="col-8">
            <div className="border p-2 rounded">
              <h3>Find Country Capital </h3>
              <div className="d-flex">
                <div className="input-container">
                      <input  type="text" onChange={(event) => {
                          SetCountry(event.target.value);
                        }} />
                     <Button  onClick={handleFind} type="submit">Find</Button>
                </div>
              </div>
            </div>
          </div>
        </div>
 
        {flag && (
          <div className="card">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <img
                  src={list?.flags?.svg}
                  alt="flag"
                  className="img-circle me-3 rounded-5"
                  width="50"
                  height="50"
                />
              
                  <h3 className="mb-0">Country : {list?.name?.common} </h3>
                  <span>capital : {list?.capital} </span>
               
              </div>
            </div>
          </div>
        )}
        {}
      </div>
      </div>
    </div>
    </>
  );
}
 
export default Country;