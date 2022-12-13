import logo from './logo.svg';
import './App.css';
import { createUser } from './firebase';
import { getUUID } from './firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { async } from '@firebase/util';




function App() {

  const[uuid, setUUID] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    if(uuid === ""){
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [uuid]);


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    handleCreateUser(email, password);
  }

  const handleCreateUser = (email, password) => {
    createUser(email, password).then(() => {
      handleUUID();
      console.log(uuid);
    });
  }


  async function handleUUID () {
    setUUID(getUUID());
  }


  return (
    <div className="App">

      <>
      {!isLoading && <h1>{uuid}</h1>
      }
      
      <form>
        <input type="text" id="email" placeholder="email" />
        <input type="password" id="password" placeholder="password" />
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
      
      </>
    </div>

  );
}

export default App;
