import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "../hook/useForm";
import { AuthContext } from "../auth/AuthContext";
import { types } from "../types/types";
import "./Login.css";
import Swal from "sweetalert2";

export const LoginScreen = () => {
  console.log("Login dispatch");
  const { dispatch } = useContext(AuthContext);
  const navigate = useNavigate();

  ///---- QUEDE aQUI===////
  const [ValuesForm, handleInputChange, reset] = useForm({
    user: "",
    password: "",
  });
  const { user, password } = ValuesForm;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("click");
    // navigate("/");
    if (user !== "" && password !== "") {
      dispatch({
        type: types.login,
        payload: {
          user,
          password,
        },
      });
      navigate("/");
      reset();
    } else {
      Swal.fire("Error", "Completa los Campos", "error");
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <div className="container d-flex justify-content-center mt-5 fond-img">
          <div className="transparentbackground w-50">
            <h1 className="text-center fw-bold mt-3 texth1">Login</h1>
            <hr />
            <div className="mt-2 mx-3">
              <div className="form-group text-center">
                <label className="fw-bold textLabel">User</label>
                <input
                  className="form-control mt-1"
                  placeholder="Escriba su Usuario"
                  type="text"
                  name="user"
                  value={user}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mt-2 mx-3">
              <div className="form-group text-center">
                <label className="fw-bold textLabel">Password</label>
                <input
                  className="form-control mt-1"
                  placeholder="Escriba su Contraseña"
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            <div className="mt-2 text-center">
              <button className="btn btn-dark" type="submit">
                Inicio
              </button>
            </div>

            <section className="mb-4 text-center mt-3">
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-facebook-f"></i>
              </a>

              {/* <!-- Twitter --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-twitter"></i>
              </a>

              {/* <!-- Google --> */}
              <a
                className="btn btn-link btn-floating btn-lg text-dark m-1"
                href="#!"
                role="button"
                data-mdb-ripple-color="dark"
              >
                <i className="fab fa-google"></i>
              </a>
            </section>
          </div>
        </div>
      </form>
    </>
  );
};
