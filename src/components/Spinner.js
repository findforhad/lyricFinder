import React from 'react'
import Img from '../components/spinner.gif'

export default function Spinner() {
  return (
    <div>
      <img alt='Loading...' src={Img} style={{
          width: "200px",
          margin : "40px auto",
          display: 'block'
      }}/>
    </div>
  )
}
