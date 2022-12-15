import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";
import firebaseConfig from "./firebaseconfig.js";

//el config por secret, importar lo tengo vacio para que no haya errores

//poner esto en un usestate
const app = initializeApp(firebaseConfig);
// const app = initializeApp({});
const db = getDatabase(app);
export const auth = getAuth(app);

export async function createUser(email: string, password: string) {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const uuid = getUUID();
      console.log(uuid);
      if (uuid) {
        writeUserData(uuid, email, password);
      }

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
}

//obtener UUID de usuario en firebase auth

export const getUUID = () => {
  return auth.currentUser?.uid ?? null;
};

function writeUserData(uuid: string, name: string, email: string) {
  set(ref(db, "users/" + uuid), {
    username: name,
    email: email,
    address: "",
  });
}
