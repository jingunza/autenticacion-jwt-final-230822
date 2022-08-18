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
      {localStorage.getItem("token") == null ||
      localStorage.getItem("token") == "" ||
      localStorage.getItem("token") == undefined ||
      store.sessionStatus == false ? (
        navigate("/login")
      ) : (
        <div className="container">
          <div className="container d-flex justify-content-evenly p-2">
            <h5>
              Lo sentimos!, En este momento esta zona privada se encuentra en
              mantenimiento...
            </h5>
            <button
              onClick={() => {
                alert("El nombre de este gato es: " + store.message);
              }}
              className="btn btn-success"
            >
              Cat's Name from JWT
            </button>
          </div>
          <div className="text-center">
            <img
              style={{ height: "80vh", width: "auto" }}
              src="https://i.ytimg.com/vi/VkGeUKlKgx4/maxresdefault.jpg"
            />
          </div>
        </div>
      )}
    </>
  );
};
