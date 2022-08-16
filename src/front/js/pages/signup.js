import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const SignUp = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container text-center py-5">
      <div className="container col-4">
        <form className="border rounded-3 border-primary bg-light p-5">
          <h3 className="titulo py-5">Registrese Aquí</h3>
          <div className="mb-3">
            <label for="exampleInputEmail1" className="form-label">
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
            <label for="exampleInputPassword1" className="form-label">
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
                ? "/login"
                : ""
            }
          >
            <button
              onClick={actions.registrar_usuario}
              type="submit"
              className="btn btn-primary my-3"
            >
              Registrarse
            </button>
          </Link>
          <div id="emailHelp" className="form-text py-2">
            <Link to="/login">
              <span>Ya está registrado? Haga click aquí para acceder</span>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};
