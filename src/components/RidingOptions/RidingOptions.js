import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserFriends } from "@fortawesome/free-solid-svg-icons";

const RidingOptions = ({ vehicle }) => {
  const { image, name, price, capacity } = vehicle;
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
            <img src={image} width="50" alt="" />
          </Col>
          <Col>{name}</Col>
          <Col>
            <FontAwesomeIcon icon={faUserFriends} />
            <span className="ml-2">{capacity}</span>
          </Col>
          <Col>${price}</Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RidingOptions;
