import React from "react";
import { Outlet } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from "react-router-dom";

  const Layout = () => {
  const navigate = useNavigate();
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand onClick={() => navigate('/home')}>누나 도서관</Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll"/>
          <Navbar.Collapse id="navbarScroll" className="flex-grow-0">
            <Nav
              className="me-auto my-2 my-lg-0" 
              style={{ maxHeight: "150px" }}
              navbarScroll
            >
              <Nav.Link onClick={() => navigate('/home')}>메인 페이지</Nav.Link>
              <Nav.Link onClick={() => navigate('/my-library')}>내 서재</Nav.Link>
              <Nav.Link onClick={() => navigate('/login')}>로그인</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </div>
  );
};

export default Layout;
