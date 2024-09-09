export const formatWeather = (weather: number) => {
  return Math.round(weather - 273.15);
}