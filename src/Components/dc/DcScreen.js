import React from "react";
import { HeroeList } from "../heroes/HeroeList";

export const DcScreen = () => {
  const publisher = "DC Comics";
  return (
    <div>
      <HeroeList publisher={publisher} />
    </div>
  );
};
