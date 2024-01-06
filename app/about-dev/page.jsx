import React from 'react'

function page() {
  return (
    <div className='min-h-screen p-5 flex flex-row'>
      <div className='flex flex-col gap-5'>
        <h1 className='text-[100px] leading-[80px]'>Gulam Raza</h1>
        <p className='text-gray-500 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo repellendus tenetur quidem facere excepturi. Consequuntur, totam est. Blanditiis tenetur ullam cum incidunt asperiores, voluptate voluptatem et at laudantium voluptatum distinctio.</p>
        <ul className='max-w-[600px] flex flex-wrap mt-5 gap-3' id='skill-list'>
            <li>JavaScript</li>
            <li>ReactJS</li>
            <li>NextJS</li>
            <li>Rust</li>
            <li>SQL</li>
            <li>Java</li>
            <li>C/C++</li>
            <li>Python</li>
            <li>p5js</li>
            <li>ThreeJS</li>
            <li>Blender</li>
            <li>Ae</li>
            <li>Ai</li>
            <li>Etc</li>
        </ul>
        <div className='flex flex-row p-5 gap-5 w-full rounded-3xl  bg-gray-900 mt-10'>
          <div className='w-[33%] p-5 bg-gray-950 rounded-2xl '>Github</div>
          <div className='w-[33%] p-5 bg-gray-950 rounded-2xl '>LinkedIn</div>
          <div className='w-[33%] p-5 bg-gray-950 rounded-2xl '>Insta</div>
        </div>
      </div>
        <div className=' ml-20 p-5 w-[600px] aspect-square rounded-2xl overflow-hidden hidden' style={{
          backgroundImage : "url(profilepic.png)",
          backgroundSize : "cover",
          opacity : "200%",
          mixBlendMode : " overlay",
          backgroundPositionX : "-70px",
          backgroundPositionY : "-50px"

        }}>
        </div>
    </div>
  )
}

export default page