import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Card } from "react-bootstrap";

function MeteoDetails() {
  const params = useParams();
  const [details, setDetails] = useState("");

  const fetchDetails = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${params.cityName}&appid=822a96b5649a0776f633a8da96309795&units=metric`,
      );
      if (response.ok) {
        const data = await response.json();
        setDetails(data);
      }
    } catch (error) {
      console.error("Errore nel caricamento dettagli:", error);
    }
  };

  useEffect(() => {
    fetchDetails();
  }, [params.cityName]);

  return (
    <Container className="mt-5 text-white">
      {!details ? (
        <h2>Caricamento dettagli per {params.cityName}...</h2>
      ) : (
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="bg-dark text-white border-light bg-opacity-75 p-4">
              <h1 className="display-4 text-center">
                Dettagli di {details.name}
              </h1>
              <hr className="bg-light" />
              <Row>
                <Col sm={6}>
                  <p>
                    <strong>Pressione:</strong> {details.main.pressure}
                  </p>
                  <p>
                    <strong>Umidità:</strong> {details.main.humidity}%
                  </p>
                  <p>
                    <strong>Vento:</strong> {details.wind.speed} m/s
                  </p>
                </Col>
                <Col sm={6} className="text-center">
                  <img
                    src={`https://openweathermap.org/img/wn/${details.weather[0].icon}@4x.png`}
                    alt="icon"
                  />
                  <h3>{details.main.temp}°C</h3>
                  <p>{details.weather[0].description}</p>
                </Col>
              </Row>
            </Card>
          </Col>
        </Row>
      )}
    </Container>
  );
}

export default MeteoDetails;
