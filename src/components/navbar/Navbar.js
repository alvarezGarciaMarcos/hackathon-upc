import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import style from "./Navbar.css";

const MyNav = () => {
  return (
    <Navbar className={style.navbar} bg="light" variant="light">
      <Navbar.Brand href="#home">Navbar</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link className={style.link} href="#home">
          Home
        </Nav.Link>
        <Nav.Link href="#countries">Countries</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNav;
