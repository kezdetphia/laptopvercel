import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const BASE_URL = "http://localhost:3333";
  // const BASE_URL = "laptopvercel-2mipl04um-kezdetphia.vercel.app";

  const [person, setPerson] = useState({});

  useEffect(() => {
    const getPerson = async () => {
      try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setPerson(data);
      } catch (error) {
        console.log({ error: error.message });
      }
    };

    getPerson();
  }, []);

  return (
    <div className="App">
      <div>
        <h1>Person Information</h1>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
      </div>
    </div>
  );
}

export default App;
