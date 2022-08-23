const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      token: null,
      message: "",
      sessionStatus: false,
      email: "",
      password: "",
    },
    actions: {
      getMessage: () => {
        const store = getStore();
        const opts = {
          headers: {
            Authorization: "Bearer " + store.token,
          },
        };
        // fetching data from the Backend, direccion opcional: process.env.BACKEND_URL + "/api/hello"
        fetch(
          process.env.BACKEND_URL + "/api/hello",
          // "https://3001-jingunza-jwtprimeravers-num7fxip0rf.ws-eu62.gitpod.io/api/hello",
          opts
        )
          .then((resp) => resp.json())
          .then((data) => setStore({ message: data.message }))
          .catch((error) =>
            console.error("There was an error fetching the message", error)
          );
      },

      activateSession: () => {
        const store = getStore();
        setStore({ sessionStatus: true });
        setStore({ token: localStorage.getItem("token") });
      },

      deactivateSession: () => {
        const store = getStore();
        localStorage.removeItem("token");
        setStore({ message: "" });
        setStore({ sessionStatus: false });
        setStore({ token: null });
      },
    },
  };
};

export default getState;

// FUNCIONES NO UTILIZADAS: //////////////////////////////////////////////////////////////////////////////////////////////////

// const login = () => {
//   const opts = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     }),
//   };
//   fetch(
//     "https://3001-jingunza-jwtprimeravers-num7fxip0rf.ws-eu62.gitpod.io/api/token",
//     opts
//   )
//     .then((resp) => {
//       if (resp.status !== 200) {
//         alert("There has been some error");
//       } else {
//         return resp.json();
//       }
//     })
//     .then((respAsJson) => {
//       sessionStorage.setItem("token", respAsJson.access_token);
//       console.log("this came from the backend", respAsJson);
//       actions.activateSession();
//       navigate("/private");
//     })
//     .catch((error) => console.error("There was an error: ", error));
// };

// login: async (email, password) => {
//   const store = getStore();
//   const opts = {
//     // aqui se definen las opciones del fetch
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email: email,
//       password: password,
//     }),
//   };
//   try {
//     const resp = await fetch(
//       // esto es equivalente al .then() que va junto al fetch el cual espera su respuesta para hacer algo
//       "https://3001-jingunza-jwtprimeravers-num7fxip0rf.ws-eu62.gitpod.io/api/token",
//       opts
//     ); // aqui el fetch no se definio como funcion, sino como una accion invocada dentro de una funcion asincrona
//     if (resp.status !== 200) {
//       // este condicional se coge de la variable resp (que seria el response del fetch)
//       alert("There has been some error");
//       return false;
//     }
//     const data = await resp.json(); //igual, es un then() a continuacion del resp (el segundo then que toma el return del anterior)
//     console.log("this came from the backend", data);
//     sessionStorage.setItem("token", data.access_token);
//     setStore({ token: data.access_token });
//   } catch (error) {
//     console.error("There has been an error loging in");
//   }
// },
// syncTokenFromSessionStore: () => {
//   const store = getStore();
//   const token = sessionStorage.getItem("token");
//   console.log(
//     "Application just loaded, synching the session storage token"
//   );
//   if (token && token != "" && token != undefined) {
//     setStore({ token: token });
//   }
// },
// cerrar_session: () => {
//   sessionStorage.removeItem("token");
// },
// },
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
// reset_inputs: () => {
//   const store = getStore();
//   setStore({ input_email: "" });
//   setStore({ input_password: "" });
//   console.log(store.input_email);
//   console.log(store.input_password);
// }, // resetea los inputs con onChange
// //reset the global store

// localStorage.setStore({ demo: demo })
