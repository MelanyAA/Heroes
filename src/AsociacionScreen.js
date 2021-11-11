import React from "react";
import { HeroeCard } from "./Components/heroes/HeroeCard";
import { heroes } from "./data/heroes";
import "./Components/heroes/heroes.css";

export const AsociacionScreen = () => {
  const arrayHeroe = heroes;
  return (
    <>
      <h1 className="text-center letter"> Heroes de Comic DC y Marvel</h1>
      <div className="row">
        {arrayHeroe.map((heroe) => (
          <div className="col-md-3">
            <HeroeCard key={heroe.id} {...heroe} />
          </div>
        ))}
      </div>
    </>
  );
};
