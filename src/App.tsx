import { FormClima } from "./components/clima/FormClima";
import { Loading } from "./components/loading/Loading";
import { WeatherResults } from "./components/weather/WeatherResults";
import { useWeather } from "./hooks/useWeather";
import { Weather } from "./types";

function App() {
  const { weather, loading, isWeatherResults, getWeather  , error} = useWeather();

  return (
    <>
      <header>
        <h1 className="title">Weather App Clima</h1>
      </header>

      <main className="wrapper main">
        <FormClima
          getWeather={getWeather}
          isWeatherResults={isWeatherResults}
          error={error}
        />
        {loading && <Loading />}
        {isWeatherResults && (
          <WeatherResults
            weather={weather as Weather}
          />
        )}
      </main>
    </>
  );
}

export default App;
