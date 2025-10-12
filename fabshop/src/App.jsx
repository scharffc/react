import React from "react";

// Router 6
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

// Components
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Item from "./components/Item";
import Welcome from "./components/Welcome";
import NoMatch from "./components/NoMatch";

function App() {

  return (
    <>
      <div>
        <Router>
          <Container>
            <Navbar collapseOnSelect expand="md" bg="dark" variant="dark" fixed="top">
            <Container>
            <Navbar.Brand href="/">FabShop</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav" >
            <Nav className="justify-content-center" fill variant="pills">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/shop">Shop</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="/about">About</Nav.Link>
              </Nav.Item>
            </Nav>
            </Navbar.Collapse>.
            </Container>
            </Navbar>
            </Container>
            <br />
            <Container>
            <Routes>
              <Route exact path="/" element={<Home/>}>
              </Route>
              <Route path="/shop" element={<Shop/>}>
              </Route>
              <Route path="/about" element={<About/>}>
              </Route>
              <Route path="/shop/:id" element={<Item/>}>
              </Route>
              <Route path="/welcome" element={<Welcome/>}>
              </Route>
              <Route path="*" element={<NoMatch/>}>
              </Route>
            </Routes>
            </Container>
        </Router>
      </div>
    </>
  )
}

export default App
