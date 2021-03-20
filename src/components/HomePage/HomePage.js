import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import bike from "../../images/bike.png";
import bus from "../../images/bus.png";
import car from "../../images/car.png";
import train from "../../images/train.png";

const HomePage = () => {
  const options = [
    { name: "Bike", image: bike, idVehicle: 1 },
    { name: "Bus", image: bus, idVehicle: 2 },
    { name: "Car", image: car, idVehicle: 3 },
    { name: "Train", image: train, idVehicle: 4 },
  ];

  return (
    <div>
      <Container style={{ marginTop: "15%" }}>
        <Row>
          {options.map((option) => {
            return (
              <Col
                sm={12}
                md={6}
                lg={3}
                className="d-flex justify-content-sm-center align-items-sm-center p-2"
              >
                <Link to={`/vehicles/${option.idVehicle}`}>
                  <Card
                    style={{
                      width: "14rem",
                      height: "15rem",
                      padding: "15px",
                      borderRadius: "10px",
                    }}
                  >
                    <Card.Img variant="top" src={option.image} />

                    <Card.Title className="text-center">
                      {option.name}
                    </Card.Title>
                  </Card>
                </Link>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default HomePage;
