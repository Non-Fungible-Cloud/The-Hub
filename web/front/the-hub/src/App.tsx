import { useEffect, useState } from 'react';
import './App.css';
import { createUser, getUUID } from './firebase';



function App() {

  const[uuid, setUUID] = useState<string|null>("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    if(uuid === ""){
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
  }, [uuid]);


  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    const target = e.target as typeof e.target & {
      email: { value: string };
      password: { value: string };
    };
    // Get email and password values
    const email = target.email.value;
    const password = target.password.value;
    handleCreateUser(email, password);
  }

  const handleCreateUser = (email: string, password: string) => {
    createUser(email, password).then(() => {
      handleUUID();
      console.log(uuid);
    });
  }


  async function handleUUID () {
    const uuid = getUUID();
    setUUID(uuid);
  }


  return (
    <div className="App">
      {!isLoading && <h1>{uuid}</h1>}
      <form onSubmit={handleSubmit}>
        <input type="text" id="email" name="email" placeholder="email" />
        <input type="password" id="password" name="password" placeholder="password" />
        <button type="submit">Sign Up</button>
      </form>
    </div>

  );
}

export default App;
