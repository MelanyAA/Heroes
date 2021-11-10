import React, { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getHeroeById } from "../../Selector/getHeroeById";

export const HeroesScreen = () => {
  const { heroeId } = useParams();
  //   console.log(heroeId);
  const hero = useMemo(() => getHeroeById(heroeId), [heroeId]);

  if (!hero) {
    // return <Link className="nav-link" to="/" />;
  }

  const navigate = useNavigate();

  const { superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  console.log(hero);
  return (
    <>
      <div className="container mt-5">
        <h1
          className={
            publisher === "Marvel Comics"
              ? "text-center letter marvel"
              : "text-center letter  dcclass"
          }
        >
          {publisher}
        </h1>
        <hr />
        <div className="row mt-5">
          <div className="col-md-6">
            <img
              src={`../assets/heroes/${heroeId}.jpg`}
              alt={superhero}
              className="img-thumbnail shadow-lg w-75 animate__animated animate__slideInDown"
            />
          </div>

          <div className=" col-md-6 text-center letter mt-5">
            <h4 className="letter">Heroe</h4>
            <h2 className="text-center letter">{superhero}</h2>
            <h4 className="letter">Aparición</h4>
            <h2 className="text-center letter">{first_appearance}</h2>
            <h4 className="letter">Nombre</h4>
            <h2 className="text-center letter">{characters}</h2>
            <h2 className=" letter mt-4">
              {alter_ego} alias:
              <small className="mx-2">{superhero}</small>
            </h2>
            <div className="text-center mt-4">
              <button
                className="btn btn-outline-primary btn-block"
                onClick={() => navigate(-1)}
              >
                Salir..
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
