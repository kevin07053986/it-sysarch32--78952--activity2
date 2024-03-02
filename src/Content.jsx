import React from 'react'
import Card from './Student'

function Content() {
  const student = [
    {
        image:"https://filmfare.wwmindia.com/content/2023/nov/avatarthelastairbender41699598878.jpg",
        name:"Gordon Cormier",
        email: "gc@gmail.com"
    },

    {
        image:"https://media1.tenor.com/m/HZ417QSs3N4AAAAd/looking-up-katara.gif",
        name:"Kiawentiio",
        email: "kiawentiio@gmail.com"
    },
    {
        image:"https://64.media.tumblr.com/67fdbe247b29d433a51c6381cb327bae/d3fb5b7922b025ee-1d/s1280x1920/959f2b6329ce8fc35633ff6a0da7ff7f9801492d.jpg",
        name:"Elizabeth Yu",
        email: "elizabethyu@gmail.com"
    },
    {
        image:"https://filmfare.wwmindia.com/content/2023/nov/avatarthelastairbender41699598878.jpg",
        name:"Gordon Cormier",
        email: "gc@gmail.com"
    },

    {
        image:"https://media1.tenor.com/m/HZ417QSs3N4AAAAd/looking-up-katara.gif",
        name:"Kiawentiio",
        email: "kiawentiio@gmail.com"
    },

    {
        image:"https://media1.tenor.com/m/HZ417QSs3N4AAAAd/looking-up-katara.gif",
        name:"Kiawentiio",
        email: "kiawentiio@gmail.com"
    }
  ]
  return (
    <div> 
        <h2 className = 'font-semibold'> Content </h2>
        <div className='flex flex-wrap gap-10 mt-2'>
            {student.map(student => {
                return <Card student={student} key={student.name} />
            })}
        </div>
    </div>
  )
}

export default Content