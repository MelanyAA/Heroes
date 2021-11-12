import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

export const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="container height-img mt-5">
        <div className="row ">
          <h1 className="text-center letter">Dc && Marvel</h1>
          <div className="col-md-4">
            <img
              className="w-100 imgHome animate__animated animate__bounceInLeft"
              src={"./assets/heroes/Dc.png"}
            />
            <div className="text-center">
              <button
                className="btn btn-outline-primary mt-2 button-width letter"
                onClick={() => navigate("/dc")}
              >
                DC
              </button>
            </div>
          </div>
          <div className="col-md-4">
            <img
              className="w-100 animate__animated  animate__slideInDown"
              src={"./assets/heroes/vs.png"}
            />
          </div>
          <div className="col-md-4">
            <img
              className="w-100 imgHome animate__animated animate__bounceInRight"
              src={"./assets/heroes/marvel.png"}
            />
            <div className="text-center">
              <button
                className="btn btn-outline-danger mt-2 button-width letter "
                onClick={() => navigate("/marvel")}
              >
                MARVEL
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
