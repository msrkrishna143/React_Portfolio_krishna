import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CountryList from './CountryList';


export function ReduxCountry() {

    return (
        <div>
            <div className="grid-container">
               <div className="grid-item">
                    <div className="header">
                            <b>Redux Counter component - Counry</b>
                            <br/><br/>
                    </div>
                    <CountryList/>
              </div>   
            </div>
        </div>


    );


}