import React from "react";

// Router
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Bootstrap
import { Navbar, Nav, Container } from "react-bootstrap";

// Components
import Home from "./components/Home";
import BootstrapTable from "./components/BootstrapTable";
import BootstrapSelect from "./components/BootstrapSelect";
import BootstrapCarousel from "./components/BootstrapCarousel";
import BootstrapForm from "./components/BootstrapForm";
import LottieAnimation from "./components/LottieAnimation";
import OtherLottieAnimation from "./components/OtherLottie";

class BootstrapNavbar extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Container>
            <Navbar bg="primary" variant="dark" expand="lg" sticky="top">
              <Navbar.Brand href="#home">React Bootstrap Navbar</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav defaultActiveKey="/">
                  <Nav.Item>
                    <Nav.Link href="/">Date Picker</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/BootstrapTable">Table</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/BootstrapSelect">Select</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/BootstrapCarousel">Carousel</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/BootstrapForm">Form</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/Nowhere" disabled>
                      Disabled
                    </Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/LottieAnimation">Lottie</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link href="/OtherLottie">Lottie 2</Nav.Link>
                  </Nav.Item>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
            <br />
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/BootstrapTable">
                <BootstrapTable />
              </Route>
              <Route path="/BootstrapSelect">
                <BootstrapSelect />
              </Route>
              <Route path="/BootstrapCarousel">
                <BootstrapCarousel />
              </Route>
              <Route path="/BootstrapForm">
                <BootstrapForm />
              </Route>
              <Route path="/BootstrapCarousel">
                <BootstrapCarousel />
              </Route>
              <Route path="/BootstrapCarousel">
                <BootstrapCarousel />
              </Route>
              <Route path="/LottieAnimation">
                <LottieAnimation />
              </Route>
              <Route path="/OtherLottie">
                <OtherLottieAnimation />
              </Route>
            </Switch>
          </Container>
        </Router>
      </div>
    );
  }
}

export default BootstrapNavbar;
