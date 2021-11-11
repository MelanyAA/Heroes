import React from "react";
import { HeroeList } from "../heroes/HeroeList";

export const DcScreen = () => {
  const publisher = "DC Comics";
  return (
    <div>
      <h1 className="text-center letter">Heroes de Comic Dc</h1>
      <HeroeList publisher={publisher} />
    </div>
  );
};
