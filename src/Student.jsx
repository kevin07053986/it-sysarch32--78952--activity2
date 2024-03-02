import React from 'react'

function Student({student}) {
  return (
    <div className='w-[15%]'>
        <img src={student.image}/>
        <h2>{student.name}</h2>
        <p>{student.email}</p>
        
    </div>
  )
}

export default Student