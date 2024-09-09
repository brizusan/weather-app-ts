import { Weather } from "../../types";
import { formatWeather } from "../../utils";
import styles from "./weatherResults.module.css"

type WeatherResultsProps = {
  weather: Weather;
}

export const WeatherResults = ({ weather }: WeatherResultsProps) => {

  return (
    <>
      {
        <div className={styles.weather}>
          <h2 className={styles.title}>Clima de {weather.name}</h2>
            <p className={styles.temperature}>{formatWeather( weather.main.temp)}°C</p>
          <div style={{ display: "flex" , justifyContent: "space-around", fontSize: "1.25rem" , fontWeight: "500" }}>
            <p className="temperature">Max : <span>{formatWeather( weather.main.temp_max)}°C </span></p>
            <p className="temperature">Min : <span>{formatWeather( weather.main.temp_min)}°C </span></p>
          </div>
          <div style={{ fontSize: "1rem" , fontWeight: "700" }}>
            <p>Sencacion Termica : {formatWeather( weather.main.feels_like)}°C</p>
            <p>Humedad : { weather.main.humidity } %</p>
          </div>
        </div>
      }
    </>
  );
};
