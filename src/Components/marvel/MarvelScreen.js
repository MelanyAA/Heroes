import React from "react";
import { HeroeList } from "../heroes/HeroeList";

export const MarvelScreen = () => {
  const publisher = "Marvel Comics";
  return (
    <div>
        <h1 className="text-center letter">Heroes de Comic Marvel</h1>
      <HeroeList publisher={publisher} />
    </div>
  );
};
