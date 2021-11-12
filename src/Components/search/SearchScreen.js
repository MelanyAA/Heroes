import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { useForm } from "../../hook/useForm";
import { HeroeCard } from "../heroes/HeroeCard";
import queryString from "query-string";
import { getHeroeByName } from "../../Selector/getHeroeByName";
import Swal from "sweetalert2";
import "../../index.css";

export const SearchScreen = () => {
  ///---Si tengo Muchos Queri String escribo en la ruta o en input ejem : batman&casa=dcs
  //---Rendriamos que paciar el search que nos muestra la consola manualmente se trabaja con la instalacio npm Query string
  const location = useLocation();
  // console.log(location.search, "Location");
  // console.log(queryString.parse(location.search, "Location"));
  //---Desestructuro mi q  query que es lo unico que necesito y lo igualo a un string basio si no hay nada en la ruta paara que no de error
  ///--Selo mando a mi inicio de ValuesForm
  const { q = "" } = queryString.parse(location.search);
  console.log(q);
  //------Importamos nuestro Hook useForm llamamos el nombre del input
  const [ValuesForm, handleInputChange, reset] = useForm({
    descripcion: q,
  });
  //-----Desestructuramos el name descripcion del input que viene del ValueForm
  const { descripcion } = ValuesForm;

  //Rraemos la funcion getHeroeByName
  const heroesFiltered = getHeroeByName(descripcion);

  // Validacion si el elemento no es encontrado
  if (descripcion !== "") {
    if (heroesFiltered.length === 0) {
      Swal.fire("No Encontrado", `El Heroe "${descripcion}" no Existe`, "info");
    }
  }

  //Declaramos la constante para Navegar
  const navigate = useNavigate();
  const handleSearch = (e) => {
    e.preventDefault();
    //Pasamos el Query string del Url
    navigate(`?q=${descripcion}`);
    reset();
  };

  return (
    <>
      <div className="container">
        <h1 className="text-center letter">Busqueda</h1>

        <div className="row">
          <div className="col-md-3">
            <h4 className="text-center letter">Nombre del Heroe</h4>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Buscar heroe"
                className="form-control"
                name="descripcion"
                value={descripcion}
                onChange={handleInputChange}
              />
              <div className="text-center mt-3">
                <button
                  type="submit"
                  className="btn btn-outline-success mx-2 button-width"
                >
                  Buscar
                </button>
                <button
                  className="btn btn-outline-warning button-width"
                  onClick={() => navigate("/")}
                >
                  Regresar
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-9">
            <div className="row">
              <h4 className="text-center letter">Resultado</h4>
              <hr />

              {heroesFiltered.map((heroe) => (
                <div className="col-md-6">
                  <HeroeCard key={heroe.id} {...heroe} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
