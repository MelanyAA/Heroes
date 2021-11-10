import React from "react";
import { HeroeCard } from "./Components/heroes/HeroeCard";
import { heroes } from "./data/heroes";

export const HomeScreen = () => {
  const arrayHeroe = heroes;
  return (
    <>
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
