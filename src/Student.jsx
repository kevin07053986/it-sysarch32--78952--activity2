import React from 'react'

function Student({student}) {
  return (
    <div className='flex items-center flex-col bg-zinc-200 p-4 rounded-md'>
      <div className='w-[60%]'>
        <img className='aspect-square rounded-full border-2 border-blue' src={student.image}/>
      </div>
        
        <h2>{student.name}</h2>
        <p>{student.email}</p>        
    </div>
  )
}

export default Student