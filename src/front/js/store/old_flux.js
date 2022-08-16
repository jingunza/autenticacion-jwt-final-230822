// let aux = [...store.users, obj_user]; // no veo la necesidad de registrar el historico en local
// setStore({ users: aux });

// getToken: async () => {
//   try {
//     // fetching data from the backend
//     const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
//     const data = await resp.json();
//     setStore({ message: data.message });
//     // don't forget to return something, that is how the async resolves
//     return data;
//   } catch (error) {
//     console.log("Error loading message from backend", error);
//   }
// },

// Use getActions to call a function within a fuction
// exampleFunction: () => {
//   getActions().changeColor(0, "green");
// },

// getMessage: async () => {
//   try {
//     // fetching data from the backend
//     const resp = await fetch(process.env.BACKEND_URL + "/api/hello");
//     const data = await resp.json();
//     setStore({ message: data.message });
//     // don't forget to return something, that is how the async resolves
//     return data;
//   } catch (error) {
//     console.log("Error loading message from backend", error);
//   }
// },

//  MIS FUNCIONES DESDE AQUI:

// //reset the global store
// localStorage.setStore({ demo: demo })
