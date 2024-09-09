import { useMemo, useState } from "react";
import { weatherSchema,type ISearch } from "../types";

export const useWeather = () => {
  const [weather, setWeather] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const getWeather = async (
    city: ISearch["city"],
    country: ISearch["country"]
  ): Promise<void> => {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${
      import.meta.env.VITE_API_KEY
    }`;

    try {
      setLoading(true);
      setWeather({});
      setError(false);
      const res = await fetch(url);
      if (!res.ok) throw new Error("No se encontro la ciudad");
      const data = await res.json();
      const result = weatherSchema.safeParse(data);

      if(result.success){
        setWeather(result.data);
      }

      
    } catch (error) {
      setTimeout(() => {
        setError(true);
        console.log(error);
      }, 1000);
    } finally {
      setLoading(false);
    }
  };

  const isWeatherResults = useMemo(
    () => Object.values(weather).length > 0,
    [weather]
  );

  return {
    weather,
    isWeatherResults,
    getWeather,
    loading,
    error,
  };
};
