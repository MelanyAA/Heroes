import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="text-center letter">Dc && Marvel</h1>
      <div className="row">
        <div className="col-md-4">
          <img className="w-100 imgHome" src={"./assets/heroes/Dc.png"} />
          <div className="text-center">
            <button
              className="btn btn-outline-primary mt-2 buttonHome letter"
              onClick={() => navigate("/dc")}
            >
              DC
            </button>
          </div>
        </div>
        <div className="col-md-4">
          <img className="w-100" src={"./assets/heroes/vs.png"} />
        </div>
        <div className="col-md-4">
          <img className="w-100 imgHome" src={"./assets/heroes/marvel.png"} />
          <div className="text-center">
            <button
              className="btn btn-outline-danger mt-2 buttonHome letter "
              onClick={() => navigate("/marvel")}
            >
              MARVEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
