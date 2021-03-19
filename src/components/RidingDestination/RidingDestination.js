import React from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";

const RidingDestination = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col sm={12} md={4}>
            <Card className="w-100" style={{ maxWidth: "400px" }}>
              <Card.Body>
                <Form>
                  <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                      type="name"
                      placeholder="Enter name"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="email">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter password"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Form.Group controlId="confirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Confirm Password"
                      required
                    ></Form.Control>
                  </Form.Group>
                  <Button type="submit" variant="primary">
                    Create an account
                  </Button>
                </Form>
              </Card.Body>
            </Card>
          </Col>
          <Col
            sm={12}
            md={8}
            className="d-flex justify-content-center align-items-center"
          >
            <img
              src="https://cnet2.cbsistatic.com/img/1wA7hlqSUmY0hvKq8gYvEX84v8Q=/2019/08/28/ae269afb-d3ab-4d3b-80e1-d0a89206e3a1/google-maps-2.jpg"
              width="500"
              alt=""
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default RidingDestination;
