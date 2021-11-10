import React from "react";
import { HeroeList } from "../heroes/HeroeList";

export const MarvelScreen = () => {
  const publisher = "Marvel Comics";
  return (
    <div>
      <HeroeList publisher={publisher} />
    </div>
  );
};
