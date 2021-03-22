import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import FormContainer from "../FormContainer/FormContainer";
import MapContainer from "../MapContainer/MapContainer";
import RidingInfo from "../RidingInfo/RidingInfo";
import RidingOptions from "../RidingOptions/RidingOptions";
import vehicleInformation from "../../fake data/fakeData.json";
import { useParams } from "react-router";
// import { useRiderContext } from "../RiderContextProvider/RiderContextProvider";

const RidingDestination = () => {
  const { idVehicle } = useParams();
  // const [vehicles, setVehicles] = useRiderContext();
  const [vehicles, setVehicles] = useState([]);
  const [searchRouteParameter, setSearchRouteParameter] = useState(true);
  const [pickFrom, setPickFrom] = useState("");
  const [pickTo, setPickTo] = useState("");

  useEffect(() => {
    const selectedVehicles = vehicleInformation.filter(
      (vehicle) => vehicle.vehicleId === Number(idVehicle)
    );
    setVehicles(selectedVehicles);
  }, [idVehicle]);

  const handleFormContainerSubmit = (e) => {
    e.preventDefault();
    setSearchRouteParameter(!searchRouteParameter);
  };

  return (
    <Container>
      <Row>
        <Col sm={12} md={5} className="mt-4">
          {searchRouteParameter ? (
            <FormContainer
              vehicles={vehicles}
              pickFrom={pickFrom}
              setPickFrom={setPickFrom}
              pickTo={pickTo}
              setPickTo={setPickTo}
              handleFormContainerSubmit={handleFormContainerSubmit}
            />
          ) : (
            <Card>
              <Row className="m-1">
                <Col>
                  <RidingInfo
                    pickFrom={pickFrom}
                    pickTo={pickTo}
                    handleFormContainerSubmit={handleFormContainerSubmit}
                  />
                </Col>
              </Row>
              <Card.Body>
                {vehicles.map((vehicle) => {
                  return (
                    <Row className="mt-1" key={vehicle.id}>
                      <Col>
                        <RidingOptions vehicle={vehicle} />
                      </Col>
                    </Row>
                  );
                })}
              </Card.Body>
            </Card>
          )}
        </Col>
        <Col
          sm={12}
          md={7}
          className="d-flex justify-content-center"
          style={{ maxHeight: "500px", marginTop: "20px" }}
        >
          <MapContainer />
        </Col>
      </Row>
    </Container>
  );
};

export default RidingDestination;
