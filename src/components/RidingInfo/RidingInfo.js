import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const RidingInfo = ({ pickFrom, pickTo, handleFormContainerSubmit }) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col sm={8}>
            <span
              style={{
                fontSize: "20px",
                fontWeight: "400",
                paddingLeft: "5px",
              }}
            >
              {pickFrom}
            </span>{" "}
            <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "400",
                paddingLeft: "5px",
              }}
            >
              {pickTo}
            </span>
          </Col>
          <Col sm={4}>
            <Button onClick={handleFormContainerSubmit}>Reset</Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RidingInfo;
