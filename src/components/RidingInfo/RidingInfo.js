import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleRight } from "@fortawesome/free-solid-svg-icons";

const RidingInfo = () => {
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
              Mirpur
            </span>{" "}
            <FontAwesomeIcon icon={faAngleDoubleRight} size="2x" />{" "}
            <span
              style={{
                fontSize: "20px",
                fontWeight: "400",
                paddingLeft: "5px",
              }}
            >
              Uttara
            </span>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default RidingInfo;
