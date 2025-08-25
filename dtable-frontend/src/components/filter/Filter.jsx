import React from 'react'

const Filter = () => {
  return (
    <div className=" my-3 bg-light my-4 mx-2 py-3 px-3 rounded">
      <div className=" row g-3 align-items-end">
        <div className="col-md-2">
          <label htmlFor="name" className="form-label">Filter by Name:</label>
          <input type="text" id="name" className="form-control" placeholder="Search names..." />
        </div>
        <div className="col-md-2">
          <label htmlFor="task" className="form-label">Filter by Task:</label>
          <input type="text" id="task" className="form-control" placeholder="Search tasks..." />
        </div>
        <div className="col-md-2">
          <label htmlFor="status" className="form-label">Filter by Status:</label>
          <select id="status" className="form-select">
            <option value="">Select status...</option>
            <option value="shifted">Shifted</option>
            <option value="completed">Completed</option>
            <option value="pending">Pending</option>
          </select>
        </div>
        <div className="col-md-2">
          <label htmlFor="date" className="form-label">Filter by Final Date:</label>
          <select id="date" className="form-select">
            <option value="">Select date...</option>
            <option value="2023-01-01">January 1, 2023</option>
            <option value="2023-01-02">January 2, 2023</option>
            <option value="2023-01-03">January 3, 2023</option>
          </select>
        </div>
        <div className='col-md-4'>
            <button className='btn btn-danger col-md-4'>Reset Filters</button>
           
            <button className='btn btn-success col-md-5 mx-3'>Assign New Task</button>
        </div>
      </div>
    </div>
  )
}

export default Filter