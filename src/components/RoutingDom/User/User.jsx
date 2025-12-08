import React from 'react'
import { useParams } from 'react-router-dom'

function User() {

  const {userid} = useParams()
  return (
    <div className='text-2xl font-bold text-black' >User : {userid}</div>
  )
}

export default User