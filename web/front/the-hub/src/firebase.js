import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { getDatabase, ref, set } from "firebase/database";


//el config por secret, importar lo tengo vacio para que no haya errores
const firebaseConfig = "";

//poner esto en un usestate
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export const auth = getAuth(app);


export const createUser = (email, password) => {
    
    createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
        // Signed in
        const uuid = getUUID();
            console.log(uuid);
            writeUserData(uuid, email, password);

        // ...
    })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
};


//obtener UUID de usuario en firebase auth

const getUUID = () => {
    return auth.currentUser.uid;
};

function writeUserData(uuid, name, email, ) {
    set(ref(db, 'users/' + uuid), {
      username: name,
      email: email,
      address: ""
    });
  }
  



