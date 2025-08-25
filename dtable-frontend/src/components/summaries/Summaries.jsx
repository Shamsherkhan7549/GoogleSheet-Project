import React, { use } from 'react'
import NumberOfRecord from './NumberOfRecord'
import { useEffect, useState } from 'react'
import axios from 'axios'

const Summaries = () => {
  const url = 'http://localhost:8080/data'
  const [response, setResponse] = useState([]);
  const [total, setTotal] = useState(0);
  const [pending, setPending] = useState(0);
  const [completed, setCompleted] = useState(0);
  const [shifted, setShifted] = useState(0);
  const [waiting, setWaiting] = useState(0);

  const fetchData = async () => {
    try {
      const fetchData = await axios.get(url);
  
      setTotal(fetchData.data.length);
      setResponse(fetchData.data);

    } catch (error) {
      console.error('Error fetching summary data:', error);
    }

  }

  const setAllStatus = () => {
    let pending2 = 0;
    let completed2 = 0;
    let shifted2 = 0;
    let waiting2 = 0;

    response.forEach(ele => {
      if (ele[6] === 'pending') {
        pending2 += 1;
      } else if (ele[6] === 'completed') {
        completed2 += 1;
      } else if (ele[6] === 'shifted') {
        shifted2 += 1;
      } else if (ele[6] === 'approval-waiting') {
        waiting2 += 1;
      }

      setPending(pending2);
      setCompleted(completed2);
      setShifted(shifted2);
      setWaiting(waiting2);
    });
  }

  useEffect(() => {
    setAllStatus();
  }, [response])

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" my-4 mx-2 d-flex flex justify-content-between flex-md-row flex-sm-column">

      <NumberOfRecord image="/totals.svg" count={total} desc="Total Task" />
      <NumberOfRecord style="mx-md-2 my-sm-2 my-md-0" image="/pending.svg" count={pending} desc="Pending" />
      <NumberOfRecord image="/completed.svg" count={completed} desc="Completed" />
      <NumberOfRecord style="mx-md-2 my-sm-2  my-md-0" image="/shifted.svg" count={shifted} desc="Shifted" />
      <NumberOfRecord image="/waiting.svg" count={waiting} desc="Aprovel waiting" />
    </div>
  )
}

export default Summaries