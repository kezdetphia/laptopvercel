
import React, { useState, useEffect } from "react";

const Person = () => {
  // const BASE_URLlocal = "http://localhost:3333";
  const BASE_URL = "https://laptopvercel-back-10547fydg-kezdetphia.vercel.app/";

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

  return (
    <div>
      <div>
        <h1>Person Information</h1>
        <p>Name: {person.name}</p>
        <p>Age: {person.age}</p>
        <p>i deployed the ting haha</p>
      </div>
      
    </div>
  );
};

export default Person;