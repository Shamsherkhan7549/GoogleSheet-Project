import React from 'react'
import './NumberOfIndex.css'
const NumberOfRecord = ({ style,image, count, desc}) => {
  return (
    <div className={`${style} numberOfindex d-flex align-items-center bg-light rounded p-3 shadow-sm w-100`}>
      <img src={image} alt="Total Tasks" width="30" height="30" className="me-3" />
      <div>
        <p className="fw-bold mb-0">{count}</p>
        <p className="text-secondary mb-0 fw-semibold">{desc}</p>
      </div>
    </div>
  )
}

export default NumberOfRecord