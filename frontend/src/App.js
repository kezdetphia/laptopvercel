import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  // const BASE_URLlocal = "http://localhost:3333";
  const BASE_URL = "https://laptopvercel-back-omy99dykf-kezdetphia.vercel.app";

  const [person, setPerson] = useState({});

  useEffect(() => {
    const getPerson = async () => {
      try {
        // const response = await fetch(BASE_URLlocal);
        const response = await fetch(BASE_URL);
        const data = await response.json();
        setPerson(data);
      } catch (error) {
        console.log({ error: error.message });
      }
    };

    getPerson();
  }, []);

  const [job, setJob] = useState({})

  useEffect(()=>{
    const Job = async()=>{
      try{
        // const response = await fetch(`${BASE_URLlocal}/job`)
        const response = await fetch('/job')
        const data = await response.json()
        setJob(data)
      }catch(error){
        console.log({jobmessage: error.message})
      }
    }
    Job()
  })

  return (
    <div className="App">
      <div>
        <h1>Person Information</h1>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>i deployed the ting haha</p> 
      </div>
      <div>
        <p>Job: {job.job}</p>
        <p>Salary: {job.salary}</p>
      </div>
    </div>
  );
}

export default App;
