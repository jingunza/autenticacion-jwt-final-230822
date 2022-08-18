import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const register = () => {
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
      "https://3001-jingunza-jwtprimeravers-num7fxip0rf.ws-eu62.gitpod.io/api/register",
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
        console.log(respAsJson);
        navigate("/login");
      })
      .catch((error) => console.error("There was an error: ", error));
  };
  return (
    <div className="container text-center py-5">
      <div className="container col-12 col-md-8 col-lg-6 col-xl-4 ">
        <div className="border rounded-3 border-primary bg-light p-5">
          <h3 className="titulo py-5">Registrese Aquí</h3>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="ingrese su email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="mb-3">
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="ingrese su password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <Link
            to={
              email.trim().length > 0 && password.trim().length > 0
                ? "/login"
                : ""
            }
          >
            <button
              onClick={register}
              type="button"
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
        </div>
      </div>
    </div>
  );
};
