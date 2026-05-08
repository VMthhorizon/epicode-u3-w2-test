import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

function MeteoSingleCard(props) {
  if (!props.weather || !props.weather.main) {
    return <h2 className="text-center">LOADING</h2>;
  }

  const navigate = useNavigate();

  return (
    <Card>
      <Card.Img
        variant="top"
        src={`https://openweathermap.org/img/wn/${props.weather.weather[0].icon}@2x.png`}
        style={{ width: "100px", margin: "0 auto" }}
      />
      <Card.Body>
        <Card.Title>
          <span className="fw-lighter">Città:</span>{" "}
          {props.weather.name.toUpperCase()}
        </Card.Title>
        <Card.Text>
          <span className="fw-lighter">Nazione:</span>{" "}
          {props.weather.sys.country.toUpperCase()}
        </Card.Text>
        <Card.Text>
          <span className="fw-lighter">Cielo Attuale:</span>{" "}
          {props.weather.weather[0].description.toUpperCase()}
        </Card.Text>
        <Card.Text>
          <span className="fw-lighter">Temperatura Attuale:</span>{" "}
          {props.weather.main.temp} Celsius
        </Card.Text>
        <Button
          variant="primary"
          onClick={() => {
            navigate(`/details/${props.weather.name}`);
          }}
        >
          Clicca per i Dettagli
        </Button>
      </Card.Body>
    </Card>
  );
}

export default MeteoSingleCard;
