import { useState, React  } from "react";
import "./App.css";

function App() {
  const [firstName, setFirstName] = useState('')
  const [secondName, setSecondtName] = useState('')

  return (
    <>
      <input value={firstName} onChange={(e) => setFirstName(e.target.value)}></input>
      <input value={secondName} onChange={(e) => setSecondtName(e.target.value)}></input>
      <h1>{firstName + ' ' + secondName}</h1>
    </>
  );
}


export default App
