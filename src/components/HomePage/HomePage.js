import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const HomePage = () => {
  return (
    <div>
      <Container style={{ marginTop: "15%" }}>
        <Row>
          <Col
            sm={12}
            md={6}
            lg={3}
            className="d-flex justify-content-sm-center align-items-sm-center p-2"
          >
            <Card style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src="https://happybikeshop.com/wp-content/uploads/2017/09/prk_yel_r_16x9.jpg"
              />

              <Card.Title className="text-center">Card Title</Card.Title>
            </Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            className="d-flex justify-content-sm-center align-items-sm-center p-2"
          >
            <Card style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src="https://happybikeshop.com/wp-content/uploads/2017/09/prk_yel_r_16x9.jpg"
              />

              <Card.Title className="text-center">Card Title</Card.Title>
            </Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            className="d-flex justify-content-sm-center align-items-sm-center p-2"
          >
            <Card style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src="https://happybikeshop.com/wp-content/uploads/2017/09/prk_yel_r_16x9.jpg"
              />

              <Card.Title className="text-center">Card Title</Card.Title>
            </Card>
          </Col>
          <Col
            sm={12}
            md={6}
            lg={3}
            className="d-flex justify-content-sm-center align-items-sm-center p-2"
          >
            <Card style={{ width: "14rem" }}>
              <Card.Img
                variant="top"
                src="https://happybikeshop.com/wp-content/uploads/2017/09/prk_yel_r_16x9.jpg"
              />

              <Card.Title className="text-center">Card Title</Card.Title>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;