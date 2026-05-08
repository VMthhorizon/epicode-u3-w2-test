import { Container, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";
import MeteoSingleCard from "./MeteoSingleCard";

const Homepage = (props) => {
  const [weather, setWeather] = useState({});

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=822a96b5649a0776f633a8da96309795&units=metric`;
  const getWeather = async () => {
    try {
      const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);

        setWeather(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getWeather();
  }, [props.city]);

  return (
    <Container fluid className="bg-info bg-opacity-50 rounded-3 p-5 my-3">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <MeteoSingleCard weather={weather}></MeteoSingleCard>
        </Col>
      </Row>
    </Container>
  );
};

export default Homepage;
