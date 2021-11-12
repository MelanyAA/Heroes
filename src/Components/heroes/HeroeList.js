import React, { useMemo } from "react";
import { getHeroeByPublisher } from "../../Selector/getHeroeByPublisher";
import { HeroeCard } from "./HeroeCard";

export const HeroeList = ({ publisher }) => {
  const Superheroe = useMemo(() => getHeroeByPublisher(publisher), [publisher]);

  return (
    <>
      <div className=" mx-2 mt-5 pb-5">
        <div className="row ">
          {Superheroe.map((heroe) => (
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <HeroeCard key={heroe.id} {...heroe} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
