const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      input_email: "",
      input_password: "",
      // session_activity: false, // esto sirve para validar con una funcion si esta logueado (validate va en el useeffect)
      // users: [
      //   {
      //     email: "administrador@db.com",
      //     password: 123456789,
      //     token: "",
      //   },
      // ],
      // received_token: "",
    },
    actions: {
      //
      // FUNCIONES PARA EL INPUT CONTROLADO, NO MODIFICAR+++++++++++++++++++++++++++++++++++++++++++++++++++++++

      actualizar_input_email: (e) => {
        const store = getStore();
        setStore({ input_email: e.target.value });
        console.log(store.input_email);
      }, // actualiza el input email con onChange

      actualizar_input_password: (e) => {
        const store = getStore();
        setStore({ input_password: e.target.value });
        console.log(store.input_password);
      }, // actualiza el input password con onChange

      // OTRAS FUNCIONES POR UTILIZAR+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

      loginfy: () => {
        const store = getStore();
        if (store.input_email != "" && store.input_password != "") {
          const opts = {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: store.input_email,
              password: store.input_password,
            }),
          };
          fetch(
            "https://3001-jingunza-jwtprimeravers-num7fxip0rf.ws-eu61.gitpod.io/api/token",
            opts
          )
            .then((resp) => {
              if (resp.status === 200) {
                return resp.json();
              } else {
                alert("There has been some error");
              }
            })
            .then((data) => alert("has recibido un:" + data))
            .catch((error) => {
              console.error("There was an error", error);
            });
        }
      },

      // register: () => {
      //   const store = getStore();
      //   let obj_user = {
      //     email: store.input_email,
      //     password: store.input_password,
      //   };
      //   console.log(obj_user);
      //   const opts = {};
      //   fetch;
      //   //fetch(api, post nuew user) //guarda datos del usuario (token es solo "" por ahora) en la bd

      //   setStore({ input_email: "" });
      //   setStore({ input_password: "" });
      //   console.log(store.input_email);
      //   console.log(store.input_password);
      // },

      // iniciar_session: () => {
      //   let user = {
      //     email: store.input_email,
      //     password: store.input_password,
      //   };
      //   console.log(user);
      //   //fetch(api,get token COMPARANDO DATOS DE USER) //el resultado debe guardar el token en store.received_token

      //   if (store.received_token !== "") {
      //     setStore({ session_activity: true });
      //     setStore({ input_email: "" });
      //     setStore({ input_password: "" });
      //   } else {
      //     alert("acceso denegado");
      //   }
      //   console.log(store.session_activity);
      // },

      // validar_actividad: () => {}, // --> validar si el usuario esta logueado cvada vez que se cargue la pagina

      // cerrar_session: () => {
      //   setStore({ session_activity: false });
      //   console.log(store.session_activity);
      //   setStore({ input_email: "" });
      //   setStore({ input_password: "" });
      // },

      // reset_inputs: () => {
      //   const store = getStore();
      //   setStore({ input_email: "" });
      //   setStore({ input_password: "" });
      //   console.log(store.input_email);
      //   console.log(store.input_password);
      // }, // resetea los inputs con onChange

      // //reset the global store
      // localStorage.setStore({ demo: demo })
    },
  };
};

export default getState;
