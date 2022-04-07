import React, { useState } from 'react'

function Hog({ name, image, specialty, weight, greased, medal }) {
  const [details, setDetails] = useState(false)

  function handleClick() {
    setDetails(!details)
  }

  return (
    <div onClick={handleClick}>
      <div className='pigTile'>
        <h3>{name}</h3>
        <img src={image} alt={name} />
        {details ? <>
          <p>Specialty: {specialty}</p>
          <p>Weight: {weight}</p>
          <p>Greased? {greased ? 'Yes' : 'No'}</p>
          <p>Highest Medal: {medal}</p>
        </>
        : null}
      </div>
    </div>
  )
}
export default Hog