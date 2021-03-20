import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";

const RidingOptions = () => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <img
              src="https://happybikeshop.com/wp-content/uploads/2017/09/prk_yel_r_16x9.jpg"
              width="50"
              alt=""
            />
          </Col>
          <Col>Bike</Col>
          <Col>2</Col>
          <Col>$20</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RidingOptions;
