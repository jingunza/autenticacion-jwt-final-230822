import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);

  return (
    <div className="container">
      <div className="container d-flex justify-content-between p-2">
        <h5>
          Lo sentimos!, En este momento esta zona privada se encuentra en
          mantenimiento, regrese más tarde...
        </h5>
        <Link to="/login">
          <button onClick={actions.cerrar_session} className="btn btn-primary">
            Cerrar Sesión
          </button>
        </Link>
      </div>
      <div className="text-center">
        <img src="https://i.ytimg.com/vi/VkGeUKlKgx4/maxresdefault.jpg" />
      </div>
    </div>
  );
};
