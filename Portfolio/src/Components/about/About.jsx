import React from 'react'
import "./about.css"

const About = () => {
  return (
    <div className='except bg-black h-screen gap-14 overflow-hidden flex flex-col items-center pt-6'>
      <div className='flex gap-9 p-3  items-center justify-center flex-col w-full'>
        <h1 className='font-black text-white text-5xl'>About Me</h1>
        <div className='w-8 h-2 color rounded-2xl mt-[-20px]'>
      </div>

      <div className='flex p-5 gap-10'>
        <div className=' w-[250px] h-[320px] imgCard rounded-md cursor-pointer'>
          <img src="" alt="" />
        </div>

        <div className='flex flex-col text-white gap-6'>
          <div className='flex flex-col w-[55vw] gap-3'>
            <p className='font-semibold text-start text-base'>Welcome to my portfolio! I am a passionate front-end developer with a keen eye for design and creating responsive, and dynamic user interfaces. With a strong foundation in web performance optimization, I strive to deliver seamless user experiences across all devices. </p>
            <p className='font-semibold'>Explore my projects to see my work in action and get a glimpse of the creativity and technical expertise I bring to every project.</p>
          </div>
           <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-6 hovering'>
              <span className='w-[100px] cursor-pointer'>HTML & CSS</span>
              <div className='color w-[300px] h-3 rounded-3xl'></div>
            </div>
            <div className='flex items-center gap-6 hovering'>
              <span className='w-[100px] cursor-pointer'>Java Script</span>
              <div className='color w-[400px] h-3 rounded-3xl'></div>
            </div>

            <div className='flex items-center gap-6 hovering'>
              <span className='w-[100px] cursor-pointer'>React</span>
              <div className='color w-[450px] h-3 rounded-3xl'></div>
            </div>

            <div className='flex items-center gap-6 hovering'>
              <span className='w-[100px] cursor-pointer'>Tailwind CSS</span>
              <div className='color w-[300px] h-3 rounded-3xl'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex text-white justify-around items-center pt-10 w-full'>
          <div className="botton-up flex-1 flex justify-center items-center flex-col p-5">
            <p className='text-design'><span>1+</span></p>
            <p className='text-xl'>Working as frontend</p>
          </div>

          <div className="botton-up flex-1 flex justify-center items-center flex-col border-l p-5">
            <p className='text-design'>20+</p>
            <p className='text-xl'>Completed Projects</p>
          </div>

          <div className="botton-up flex-1 flex justify-center items-center border-l flex-col p-5">
            <p className='text-design'><span>20+</span></p>
            <p className='text-xl'>Satisfied Client</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About