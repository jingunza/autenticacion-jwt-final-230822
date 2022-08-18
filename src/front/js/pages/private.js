import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Private = () => {
  const { store, actions } = useContext(Context);
  const [data, setData] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    actions.activateSession();
    actions.getMessage();
  }, []);

  return (
    <>
      {!sessionStorage.getItem("token") ||
      sessionStorage.getItem("token") == "" ||
      sessionStorage.getItem("token") == undefined ||
      store.sessionStatus == false ? (
        navigate("/login")
      ) : (
        <div className="container">
          <div className="container d-flex justify-content-between p-2">
            <h5>
              Lo sentimos!, En este momento esta zona privada se encuentra en
              mantenimiento...
            </h5>
            <button
              onClick={() =>
                alert("El nombre de este gato es: " + store.message)
              }
              className="btn btn-primary"
            >
              Cat's Name
            </button>
            <Link to="/login">
              <button
                onClick={actions.deactivateSession}
                className="btn btn-primary"
              >
                Cerrar Sesión
              </button>
            </Link>
          </div>
          <div className="text-center">
            <img src="https://i.ytimg.com/vi/VkGeUKlKgx4/maxresdefault.jpg" />
          </div>
        </div>
      )}
    </>
  );
};
