import React from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";

const Register = () => {
  return (
    <div>
      <Container className="mt-4">
        <Row>
          <Col
            sm={12}
            md={8}
            className="d-flex justify-content-center align-items-center"
          >
            <Card className="w-100" style={{ maxWidth: "400px" }}>
              <Card.Header as="h5">create an account</Card.Header>
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

                  <Row className="py-1 text-center">
                    <Col>
                      Have an Account ?{" "}
                      <Link to="/login">
                        <span className="text-danger">Login</span>
                      </Link>
                    </Col>
                  </Row>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          <Col
            sm={12}
            md={4}
            className="py-3 text-center d-flex justify-content-center align-items-center"
          >
            <Card className="w-100 mt-md-4" style={{ maxWidth: "300px" }}>
              <Card.Header as="h5">signup with</Card.Header>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      paddingLeft: "5px",
                    }}
                  >
                    Facebook
                  </span>
                </ListGroup.Item>
                <ListGroup.Item>
                  <FontAwesomeIcon icon={faGooglePlus} size="2x" />
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      paddingLeft: "5px",
                    }}
                  >
                    Google
                  </span>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Register;
