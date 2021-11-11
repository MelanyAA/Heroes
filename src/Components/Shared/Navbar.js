import React, { useContext } from "react";

import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../../auth/AuthContext";
import { types } from "../../types/types";
import "./shared.css";

export const NavBar = () => {
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    user: { user },
  } = useContext(AuthContext);
  console.log("aqui");
  const handleLogout = (e) => {
    e.preventDefault();
    navigate("/Login");
    dispatch({
      type: types.logout,
    });
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/Asociaciones">
          Asociaciones
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav me-auto mb-2 mb-lg-0">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
            <Link className="nav-link" to="/marvel">
              Marvel
            </Link>
            <Link className="nav-link" to="/dc">
              Dc
            </Link>
            <NavLink className="nav-link" to="/search">
              Search
            </NavLink>
          </div>

          <form className="d-flex ">
            <small className="fw-bold mt-1">Bienvenid@</small>
            <span className=" nav-item  text-success mx-3 fw-bold mt-1 ">
              {user}
            </span>
            <button className="btn btn-outline-warning" onClick={handleLogout}>
              Logout
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};
