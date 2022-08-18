import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import "../../styles/login.css";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Login = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (
      sessionStorage.getItem("token") &&
      sessionStorage.getItem("token") !== "" &&
      sessionStorage.getItem("token") !== undefined
    ) {
      actions.activateSession();
      navigate("/private");
    }
  }, []);

  const login = () => {
    const opts = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    };
    fetch(
      "https://3001-jingunza-jwtprimeravers-num7fxip0rf.ws-eu62.gitpod.io/api/token",
      opts
    )
      .then((resp) => {
        if (resp.status !== 200) {
          alert("There has been some error");
        } else {
          return resp.json();
        }
      })
      .then((respAsJson) => {
        console.log("this came from the backend", respAsJson);
        sessionStorage.setItem("token", respAsJson.access_token);
        // actions.activate_session();
        navigate("/private");
      })
      .catch((error) => console.error("There was an error: ", error));
  };
  return (
    <>
      {sessionStorage.getItem("token") &&
      sessionStorage.getItem("token") !== "" &&
      sessionStorage.getItem("token") !== undefined ? (
        navigate("/private")
      ) : (
        <div className="contenedor_login container-fluid text-center py-5">
          <div className="container col-12 col-md-8 col-lg-6 col-xl-4 ">
            <div className="formulario border rounded-3 border-primary p-5">
              <h3 className="titulo py-5 text-success">Acceso de socios</h3>
              <div>
                <div className="py-3">
                  <input
                    type="text"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    placeholder="ingrese su email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      // console.log(email);
                    }}
                  />
                </div>
                <div className="py-3">
                  <input
                    type="password"
                    className="form-control my-2"
                    id="exampleInputPassword1"
                    placeholder="ingrese su password"
                    value={password}
                    onChange={(e) => {
                      setPassword(e.target.value);
                      // console.log(password);
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-primary my-3"
                  onClick={login}
                >
                  Acceder
                </button>
                <div id="emailHelp" className="form-text py-2">
                  <Link to="/signup">
                    <span>
                      Aún no está registrado? Haga click aquí para registrarse
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
