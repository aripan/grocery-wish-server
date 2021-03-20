import React, { useEffect, useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";
import MapContainer from "../MapContainer/MapContainer";
import RidingInfo from "../RidingInfo/RidingInfo";
import RidingOptions from "../RidingOptions/RidingOptions";
import vehicleInformation from "../../fake data/fakeData.json";
import { useParams } from "react-router";

const RidingDestination = () => {
  const someValue = true;
  const { idVehicle } = useParams();
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    const selectedVehicles = vehicleInformation.filter(
      (vehicle) => vehicle.vehicleId === Number(idVehicle)
    );
    setVehicles(selectedVehicles);
  }, [idVehicle]);
  console.log(vehicles, idVehicle);

  return (
    <div>
      <h1>{idVehicle}</h1>

      <Container>
        <Row>
          <Col sm={12} md={4} id="newForm" className="mt-4">
            {someValue ? (
              <FormContainer />
            ) : (
              <Card>
                <Row className="m-1">
                  <Col>
                    <RidingInfo />
                  </Col>
                </Row>
                <Card.Body>
                  <Row className="mt-1">
                    <Col>
                      <RidingOptions />
                    </Col>
                  </Row>
                  <Row className="mt-1">
                    <Col>
                      <RidingOptions />
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            )}
          </Col>
          <Col
            sm={12}
            md={8}
            className="d-flex justify-content-center"
            style={{ maxHeight: "500px", marginTop: "20px" }}
          >
            <MapContainer />
          </Col>
        </Row>
      </Container>
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default RidingDestination;
