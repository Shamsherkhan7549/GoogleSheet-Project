import React from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import './Record.css'

const Record = () => {
  const url = import.meta.env.VITE_API_URL

  const [data, setData] = React.useState([]);

  const handlingStatus = async(event,id) => {
    try {
      const response = await axios.put(`${url}/data/${id}`, {
         status: event.target.value
      });
    } catch (error) {
      console.error('Error updating status:', error);
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get(`${url}/data`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className='my-4 mx-2 overflow-x-auto overflow-y-auto'>
      <table className="record table rounded">
        <thead className='sticky-top top-0'>
          <tr className='bg-light' style={{ lineHeight: '2.2' }}>
            <th>Timestamp</th>
            <th>Task id</th>
            <th>Assingnee</th>
            <th>Names</th>
            <th>Task</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Reason</th>
            <th>Voice Note</th>
            <th>Document</th>
            <th>Proof of Completion</th>
            <th>Proof  Required</th>
            <th>EA Remarks</th>
            <th>MD Remarks</th>
            <th>Follow Up Count</th>
          </tr>
        </thead>
        <tbody>
          {/* Render fetched data here */}

          {
            data.map((row, index) => (
              <tr key={index} style={{ lineHeight: '2.2' }}>
                <td>{row[0]}</td>
                <td>{row[1]}</td>
                <td>{row[2]}</td>
                <td>{row[3]}</td>
                <td>{row[4]}</td>
                <td>{row[5]}</td>
                <td>

                  <select onChange={(event) => handlingStatus(event, row[1].split('/')[1])} className="form-control" aria-label="Default select example">
                    <option className='form-option rounded' value={row[6]} >{row[6]}</option>
                    <option className='form-option rounded' value="pending" >Pending</option>
                    <option className='form-option rounded' value="completed">Completed</option>
                    <option className='form-option rounded' value="shifted">Shifted</option>
                    <option className='form-option rounded' value="approval-waiting">Approval Waiting</option>
                  </select>
                 </td>
                <td>{row[7]}</td>
                <td>{row[8]}</td>
                <td>{row[9]}</td>
                <td>{row[10]}</td>
                <td>{row[11]}</td>
                <td>{row[12]}</td>
                <td>{row[13]}</td>
                <td>{row[14]}</td>
                
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default Record