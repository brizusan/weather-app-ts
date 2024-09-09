import { useState } from "react";
import { countries } from "../../data";
import type { ISearch } from "../../types";
import styles from "./formClima.module.css";
import { Alerta } from "../alerta/Alerta";

type FormClimaProps = {
  getWeather: (city: ISearch["city"], country: ISearch["country"]) => void;
  isWeatherResults: boolean;
  error: boolean;
};

export const FormClima = ({
  getWeather,
  isWeatherResults,
  error,
}: FormClimaProps) => {
  const [search, setSearch] = useState<ISearch>({
    city: "",
    country: "",
  });

  const [alert, setAlert] = useState({
    msg: "",
    error: false,
  });

  const handleChange = ({
    target,
  }: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setSearch({
      ...search,
      [target.name]: target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (Object.values(search).includes("")) {
      setAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    setAlert({
      msg: "Realizando busqueda",
      error: false,
    });

    getWeather(search.city, search.country);

    setTimeout(() => {
      setAlert({
        msg: "",
        error: false,
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.formulario}>
      <legend className={styles.titulo}>Buscar Clima</legend>

      {!isWeatherResults && error && (
        <Alerta error={true}>No tenemos resultados</Alerta>
      )}
      {alert && <Alerta error={alert.error}>{alert.msg}</Alerta>}
      <div className={styles.campo}>
        <label htmlFor="city">Ciudad</label>
        <input
          id="city"
          name="city"
          type="text"
          placeholder="Ciudad"
          onChange={handleChange}
        />
      </div>
      <div className={styles.campo}>
        <label htmlFor="country">Pais</label>
        <select id="country" name="country" onChange={handleChange}>
          <option value=""> --- Seleccione --- </option>
          {countries.map((country, index) => (
            <option key={index} value={country.code}>
              {country.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input type="submit" value="Buscar" className={styles.cta} />
      </div>
    </form>
  );
};
