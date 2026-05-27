import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function showData() {
    if (name === "" || email === "" || password === "") {
      alert("Please Fill All Fields");
    } else {
      alert("Registered Successfully");
    }
  }

  return (
    <div className="form-container">
      <h2>Registration Form</h2>
      
      <input 
        type="text" 
        placeholder="Enter Your Name"
        onChange={(e) => setName(e.target.value)} 
      />
      
      <input 
        type="email"
        placeholder="Enter Your Email"
        onChange={(e) => setEmail(e.target.value)} 
      />
      
      <input 
        type="password"
        placeholder="Enter Your Password"
        onChange={(e) => setPassword(e.target.value)} 
      />

      <button onClick={showData}>
        Submit
      </button>
    </div>
  );
}

export default App;