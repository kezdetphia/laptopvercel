import React, {useState, useEffect} from 'react';

const Job = () => {

  const [job, setJob] = useState({})

  // const BASE_URLlocal = "http://localhost:3333";
  const BASE_URL = "https://laptopvercel-back-omy99dykf-kezdetphia.vercel.app";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${BASE_URL}/job`);
        // const response = await fetch(`http://localhost:3333/job`);
        const data = await response.json();
        setJob(data);
      } catch (error) {
        console.log({ jobmessage: error.message });
      }
    };
    fetchData();
  }, []);
  

  return (
    <div>
       <div>

        <p>Job: {job.job}</p>
        <p>Salary: {job.salary}</p>
      </div>
    </div>
  );
};

export default Job;