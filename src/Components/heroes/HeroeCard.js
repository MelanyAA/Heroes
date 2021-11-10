import React from "react";
import { Link } from "react-router-dom";
import "./heroes.css";

export const HeroeCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  return (
    <div className="card mt-4 shadow-lg ">
      <h3
        className={
          publisher === "Marvel Comics"
            ? "card-title text-center marvel"
            : "card-title text-center dcclass "
        }
      >
        {superhero}
      </h3>
      <img
        src={`./assets/heroes/${id}.jpg`}
        className="card-img swing bordercard "
        alt={superhero}
      />

      <div className="card body mx-2">
        <h3
          className={
            publisher === "Marvel Comics"
              ? "card-title text-center marvel"
              : "card-title text-center dcclass "
          }
        >
          {publisher}
        </h3>
        <h3 className="text-center letter">{characters}</h3>

        <p className=" text-end letter mt-2">
          {alter_ego} alias:
          <small className="mx-2">{superhero}</small>
        </p>
      </div>
      <div className="card-footer text-center ">
        <Link className="btn btn-outline-warning swing" to={`/hero/${id}`}>
          Ver más...
        </Link>
      </div>
    </div>
  );
};
