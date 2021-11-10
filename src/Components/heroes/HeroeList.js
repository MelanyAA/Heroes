import React, { useMemo } from "react";
import { getHeroeByPublisher } from "../../Selector/getHeroeByPublisher";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ publisher }) => {
  const Superheroe = useMemo(() => getHeroeByPublisher(publisher), [publisher]);

  return (
    <>
      <div className="container mt-5">
        <div className="row">
          {Superheroe.map((heroe) => (
            <div className="col-md-4">
              <HeroeCard key={heroe.id} {...heroe} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
