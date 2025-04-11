import Logout from '@/login/Logout';
import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { Outlet, Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <Container fluid>
      <Navbar bg="dark" variant="light" fixed="top">
        <Navbar.Brand href="#home"> <img src="https://www.aezion.com/wp-content/themes/aezion/assets/images/logo.png" alt="bug" height={100} /></Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
        
          <Logout />
        </Navbar.Collapse>
      </Navbar>
      <div style={sidebarStyles}>
      <nav>
        <ul>
          <li>
              <Link to="/home">Home</Link>
          </li>
         
          <li>
              <Link to="/components">Components</Link>
          </li>
		  <li>
              <Link to="/survey">Survey</Link>
          </li>

        </ul>
      </nav>
      </div>
      
    </Container>
  );
};

const sidebarStyles = {
  position: 'fixed',
  top: '80px', // Adjusted to account for the header bar
  left: '0',
  width: '250px',
  height: 'calc(100vh - 60px)', // Adjusted to account for the header bar
  backgroundColor: '#f8f9fa',
  boxShadow: '2px 0 5px rgba(0, 0, 0, 0.1)',
  padding: '60px',
};

const contentStyles = {
  marginLeft: '250px',
  padding: '20px',
  marginTop: '60px', // Adjusted to account for the header bar
};

export default Sidebar;
