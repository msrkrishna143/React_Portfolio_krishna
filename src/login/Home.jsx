import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from '@/components/utility/Sidebar';

function Home(route) {

    return (
    <>
        <div>
            <Sidebar/>
        </div>
        <div style={contentStyles}>
             <h1>Welcome to the Home Page</h1>
              
        </div>
        </>
    );
  
}
const contentStyles = {
    marginLeft: '250px',
    padding: '20px',
    marginTop: '60px', // Adjusted to account for the header bar
  };
export default Home;