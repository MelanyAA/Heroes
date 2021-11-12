import React from "react";
import { Link } from "react-router-dom";
import "./heroes.css";

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,

  characters,
}) => {
  return (
    <div className="card mt-2 shadow-lg ">
      <h3
        className={
          publisher === "Marvel Comics"
            ? "card-title text-center marvel-tittle"
            : "card-title text-center dc-tittle"
        }
      >
        {superhero}
      </h3>
      <img
        src={`./assets/heroes/${id}.jpg`}
        className="card-img animate__animated animate__flipInX bordercard "
        alt={superhero}
      />

      <div className=" mx-2">
        <h3
          className={
            publisher === "Marvel Comics"
              ? "card-title text-center marvel-tittle"
              : "card-title text-center dc-tittle"
          }
        >
          {publisher}
        </h3>
        <h3 className="text-center letter">{characters}</h3>
        <Link className="btn btn-outline-warning swing" to={`/hero/${id}`}>
          Ver más...
        </Link>
        <p className=" text-end letter mt-2">
          {alter_ego} alias:
          <small className="mx-2">{superhero}</small>
        </p>
      </div>
    </div>
  );
};
