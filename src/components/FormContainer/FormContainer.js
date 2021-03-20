import React from "react";
import { Button, Card, Container, Form } from "react-bootstrap";

const FormContainer = () => {
  const handleClick = (e) => {
    e.preventDefault();
    console.log("working");
  };
  return (
    <>
      <Card className="w-100" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <Form onSubmit={handleClick}>
            <Form.Group id="pick-from">
              <Form.Label>Pick From</Form.Label>
              <Form.Control type="text" placeholder="Where are you?" />
            </Form.Group>
            <Form.Group id="pick-to">
              <Form.Label>Pick To</Form.Label>
              <Form.Control type="text" placeholder="Destination point?" />
            </Form.Group>

            <Form.Group id="pick-date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Date" />
            </Form.Group>
            <Form.Group id="pick-time">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" placeholder="Time" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Search
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default FormContainer;
