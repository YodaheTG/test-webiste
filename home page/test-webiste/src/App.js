import logo from './logo.svg';
import './App.css';
import { Navbar, Nav, Row, Col, Container, Color, Button, Dropdown } from 'react-bootstrap'
import React, { useState } from "react";
import CloseButton from 'react-bootstrap/CloseButton';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };



  return (
    <div className="App" expand="lg" style={{ padding: "1rem" }}>


      <Row>
        <div>
          {isLoggedIn ? (
            <div>
              <Container>
                <Navbar bg="light" style={{ padding: "1rem" }}>
                  <Nav className="first navbar">
                    <Button><img src="./search.png" alt="my image" /></Button>
                    <CloseButton onClick={handleLogout} />

                  </Nav>
                </Navbar>
              </Container>

            </div>
          ) : (
            <div>
              <Container>
                <Navbar bg="light" style={{ padding: "1rem" }}>
                  <Nav className="first navbar">
                    <Nav.Link href="#Women" bg="dark" >Women</Nav.Link>
                    <Nav.Link href="#Men" bg="dark">Men</Nav.Link>
                    <Nav.Link href="#Kids" bg="dark">Kids</Nav.Link>
                    <Nav.Link href="#Baby" bg="dark">Baby</Nav.Link>
                    <Nav.Link href="#About Us " bg="dark">Baby</Nav.Link>
                    <Nav.Link href="#Account" bg="dark">Baby</Nav.Link>
                    <Nav.Link href="#Cart" bg="dark" placement="right">Baby</Nav.Link>
                    <Button onClick={handleLogin}><img src="./search.png" alt="my image" /></Button>
                    <Nav.Link href="#Language" bg="dark" placement="right">Baby</Nav.Link>
                    
                    <div class="dropdown">
                    <Button Class="btn btn-transparent">hey yoda</Button>
                      <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                      </div>
                    </div>

                  </Nav>
                </Navbar>
              </Container>

            </div>
          )}
        </div>
      </Row>

    </div>
  );
}

export default App;
