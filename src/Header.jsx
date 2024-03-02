import React from 'react'

function Header() {
  return (
    <div className='flex gap-16 px-8 py-4'>
    <h1 className='text-xl font-medium'>Kevin Mahusay</h1>
    <nav>
      <ul className='flex gap-2 tracking-wide'>
        <li> Home </li>
        <li> About </li>
        <li> Services </li>
        <li> Contact </li>
      </ul>
    </nav>
  </div>
  )
}

export default Header