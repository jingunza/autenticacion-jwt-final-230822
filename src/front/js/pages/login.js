import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";

import { Context } from "../store/appContext";

export const LogIn = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="contenedor_login container-fluid text-center py-5">
      <div className="container col-4">
        <form className="formulario_acceso border rounded-3 border-primary p-5">
          <h3 className="titulo py-5 text-success">Acceso de socios</h3>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label text-success">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="ingrese su email"
              value={store.input_email}
              onChange={actions.actualizar_input_email}
            />
          </div>
          <div className="mb-3">
            <label
              for="exampleInputPassword1"
              className="form-label text-success"
            >
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="ingrese su password"
              value={store.input_password}
              onChange={actions.actualizar_input_password}
            />
          </div>
          <Link
            to={
              store.input_email.trim().length > 0 &&
              store.input_password.trim().length > 0
                ? "/private"
                : "/login"
            }
          >
            <button
              onClick={() => {
                actions.reset_inputs;
                actions.iniciar_session;
              }}
              type="submit"
              className="btn btn-primary my-3"
            >
              Acceder
            </button>
          </Link>
          <div id="emailHelp" className="form-text py-2">
            <Link to="/signup">
              <span>
                Aún no está registrado? Haga click aquí para registrarse
              </span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
