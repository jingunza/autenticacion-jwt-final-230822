import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  return (
    <div className="contenedor_login container-fluid text-center py-5">
      <div className="container col-4">
        <div className="formulario border rounded-3 border-primary p-5">
          <h3 className="titulo py-5 text-success">Acceso de socios</h3>
          <div className="py-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="ingrese su email"
              value={store.input_email}
              onChange={actions.actualizar_input_email}
            />
          </div>
          <div className="py-3">
            <input
              type="password"
              className="form-control my-2"
              id="exampleInputPassword1"
              placeholder="ingrese su password"
              value={store.input_password}
              onChange={actions.actualizar_input_password}
            />
          </div>

          {/* <Link
            to={
              store.input_email.trim().length > 0 &&
              store.input_password.trim().length > 0
                ? "/private"
                : "/login"
            }
          > */}
          <button
            type="button"
            onClick={actions.loginfy}
            className="btn btn-primary my-3"
          >
            Acceder
          </button>
          {/* </Link> */}
          {/* <div id="emailHelp" className="form-text py-2">
            <Link to="/signup">
              <span>
                Aún no está registrado? Haga click aquí para registrarse
              </span>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
};
