import React, { useRef, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  ListGroup,
  Row,
  Alert,
} from "react-bootstrap";
import { Link, useHistory, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faGooglePlus } from "@fortawesome/free-brands-svg-icons";
import {
  createUserWithEmailAndPassword,
  facebookSignInMethod,
  googleSignInMethod,
} from "../../FirebaseSetup/firebase";
import { useRiderContext } from "../RiderContextProvider/RiderContextProvider";

const SignUp = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const { setLoggedInUser } = useRiderContext();
  const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Passwords do not match");
    }
    createUserWithEmailAndPassword(
      nameRef.current.value,
      emailRef.current.value,
      passwordRef.current.value
    ).then((res) => {
      setLoggedInUser(res);
      changePath(res.isSignedIn);
    });
  };

  const handleGoogleSignIn = () => {
    googleSignInMethod().then((res) => {
      setLoggedInUser(res);
      changePath(res.isSignedIn);
    });
  };

  const handleFacebookSignIn = () => {
    facebookSignInMethod().then((res) => {
      setLoggedInUser(res);
      changePath(res.isSignedIn);
    });
  };

  const changePath = (user) => {
    if (user) {
      setError("");
      history.replace(from);
    } else {
      setError("Either password or email is invalid");
    }
  };
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
                {error && <Alert variant="danger">{error}</Alert>}
                <Form onSubmit={handleSubmit}>
                  <Form.Group id="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="name" ref={nameRef} required />
                  </Form.Group>
                  <Form.Group id="email">
                    <Form.Label>Username or Email</Form.Label>
                    <Form.Control type="email" ref={emailRef} required />
                  </Form.Group>
                  <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" ref={passwordRef} required />
                  </Form.Group>
                  <Form.Group id="password-confirm">
                    <Form.Label>Password Confirmation</Form.Label>
                    <Form.Control
                      type="password"
                      ref={passwordConfirmRef}
                      required
                    />
                  </Form.Group>
                  <Button className="w-100" type="submit">
                    Sign Up
                  </Button>
                </Form>
              </Card.Body>
              <div className="w-100 text-center mt-2">
                Already have an account? <Link to="/login">Log In</Link>
              </div>
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
                <ListGroup.Item
                  onClick={handleFacebookSignIn}
                  style={{ cursor: "pointer" }}
                >
                  <FontAwesomeIcon icon={faFacebook} size="2x" />
                  <span
                    style={{
                      fontSize: "25px",
                      fontWeight: "500",
                      paddingLeft: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Facebook
                  </span>
                </ListGroup.Item>
                <ListGroup.Item
                  onClick={handleGoogleSignIn}
                  style={{ cursor: "pointer" }}
                >
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

export default SignUp;
