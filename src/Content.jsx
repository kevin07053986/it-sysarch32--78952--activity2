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
        image:"https://media-cldnry.s-nbcnews.com/image/upload/rockcms/2024-02/kiawentiio-zz-240208-01-01189c.jpg",
        name:"Kiawentiio",
        email: "kiawentiio@gmail.com"
    },

    {
        image:"https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2023%2F06%2Fnetflix-avatar-the-last-airbender-first-look-images-003.jpg?cbr=1&q=90",
        name:"Ian Ousley",
        email: "ianousley@gmail.com"
    },    

    {
        image:"https://i.redd.it/uhhcc00m6wf71.jpg",
        name:"Dallas Liu",
        email: "dallasliu@gmail.com"
    },

    {
        image:"https://64.media.tumblr.com/67fdbe247b29d433a51c6381cb327bae/d3fb5b7922b025ee-1d/s1280x1920/959f2b6329ce8fc35633ff6a0da7ff7f9801492d.jpg",
        name:"Elizabeth Yu",
        email: "elizabethyu@gmail.com"
    },

    {
        image:"https://i.redd.it/tzmjmc1qlkx71.jpg",
        name:"Daniel Dae Kim",
        email: "danieldaekim@gmail.com"
    },

    {
        image:"https://i0.wp.com/www.thewrap.com/wp-content/uploads/2024/02/Paul-Sun-Hyung-Lee-Iroh.jpg?fit=990%2C557&ssl=1",
        name:"Paul Sun-Hyung Lee",
        email: "paulsun-hyunglee@gmail.com"
    },

    {
        image:"https://images.thedirect.com/media/photos/suki1.png",
        name:"Maria Zhang",
        email: "mariazhang@gmail.com"
    }
  ]
  return (
    <div> 
        <h2 className = 'font-semibold'> Content </h2>
        <div className='grid grid-cols-4 gap-10 mt-2'>
            {student.map(student => {
                return <Card student={student} key={student.name} />
            })}
        </div>
    </div>
  )
}

export default Content