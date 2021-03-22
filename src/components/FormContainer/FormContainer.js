import React from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const FormContainer = (props) => {
  return (
    <>
      <Card className="w-100" style={{ maxWidth: "400px" }}>
        <Card.Body>
          <Form onSubmit={props.handleFormContainerSubmit}>
            <Form.Group id="pick-from">
              <Form.Label>Pick From</Form.Label>
              <Form.Control
                type="text"
                placeholder="Where are you?"
                value={props.pickFrom}
                onChange={(e) => props.setPickFrom(e.target.value)}
                required
              />
            </Form.Group>
            <Form.Group id="pick-to">
              <Form.Label>Pick To</Form.Label>
              <Form.Control
                type="text"
                placeholder="Destination point?"
                value={props.pickTo}
                onChange={(e) => props.setPickTo(e.target.value)}
                required
              />
            </Form.Group>

            <Form.Group id="pick-date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" placeholder="Date" required />
            </Form.Group>
            <Form.Group id="pick-time">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" placeholder="Time" />
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center">
              <Button variant="primary" type="submit">
                {props.vehicles[0]?.name
                  ? `Search for ${props.vehicles[0].name}`
                  : "Please select vehicle"}
              </Button>
              <Link to="/home">
                <Button variant="success" type="submit">
                  change option
                </Button>
              </Link>
            </div>
          </Form>
        </Card.Body>
      </Card>
    </>
  );
};

export default FormContainer;
