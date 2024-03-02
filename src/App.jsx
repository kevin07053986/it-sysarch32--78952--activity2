import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'

function App() {
  return (
    <div className='relative h-dvh'>
      <Header />
      
      <main className='w-[90%] mt-5 flex justify-center'style={{marginInline: "auto"}}>
        <Content />
      </main>

      <Footer />
    </div>
  )
}



export default App