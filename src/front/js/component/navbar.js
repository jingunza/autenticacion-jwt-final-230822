import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);

  return (
    <nav className="navbar navbar-light bg-dark sticky-top">
      <div className="container">
        <Link to="/">
          <span className="h4 text-light">Demo Autenticación JWT</span>
        </Link>
        <div className="ml-auto">
          <Link to="/login">
            <button
              onClick={store.sessionStatus ? actions.deactivateSession : ""}
              className="btn btn-primary"
            >
              {store.sessionStatus ? "Log Out" : "Log In"}
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};
