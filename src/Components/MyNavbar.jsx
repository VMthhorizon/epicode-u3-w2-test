import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { useState } from "react";

const MyNavbar = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <Navbar expand="md" className="bg-body-tertiary bg-opacity-50">
      <Container fluid>
        <Link className="navbar-brand" to="/">
          Il METEO
        </Link>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link className="nav-link" to="/">
              Home
            </Link>
          </Nav>
          <Form
            className="d-flex"
            onSubmit={(e) => {
              e.preventDefault();
              props.setCity(inputValue);
            }}
          >
            <Form.Control
              type="search"
              placeholder="Cerca una Città"
              className="me-2"
              aria-label="Città"
              value={inputValue}
              onChange={(e) => {
                setInputValue(e.target.value);
              }}
            />
            <Button variant="outline-dark">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
