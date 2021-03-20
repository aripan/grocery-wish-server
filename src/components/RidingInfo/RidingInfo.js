import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const RidingInfo = ({ pickFrom, pickTo }) => {
  return (
    <Card>
      <Card.Body>
        <Row>
          <Col>
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
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RidingInfo;
