import React from "react";
import "./HomePage.style.css";
import { Form, Button } from "react-bootstrap";
import { fetchBooks } from "@/hooks/fetchBooks";


const HomePage = () => {
  const { data } = fetchBooks()
  console.log(data) 

  return (
    <div className="home-page-search-bar">
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>

    </div>
  );
};

export default HomePage;
