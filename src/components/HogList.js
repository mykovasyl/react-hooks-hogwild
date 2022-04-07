import React from 'react'
import Hog from './Hog'

function HogList({ hogs }) {

  const hogsToDisplay = hogs.map(hog => {
    return <Hog key={hog.specialty} name={hog.name} image={hog.image} 
    specialty={hog.specialty} weight={hog.weight} greased={hog.greased} medal={hog['highest medal achieved']}/>
  })

  return (
    <div>
      {hogsToDisplay}
    </div>
  )
}

export default HogList