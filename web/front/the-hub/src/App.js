import logo from './logo.svg';
import './App.css';
import { createUser } from './firebase';



function App() {


  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    console.log(email, password);
    createUser(email, password);
  }

  return (
    <div className="App">
      <form>
        <input type="text" id="email" placeholder="email" />
        <input type="password" id="password" placeholder="password" />
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
      </form>
      
      
    </div>
  );
}

export default App;
