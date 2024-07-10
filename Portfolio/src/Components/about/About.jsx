import React from 'react'

const About = () => {
  return (
    <div className='except bg-black h-screen gap-14 overflow-hidden flex flex-col items-center pt-6'>
      <div className='flex gap-9 p-3  items-center justify-center flex-col w-full'>
        <h1 className='font-black text-white text-5xl'>About Me</h1>
        <div className='w-8 h-2 bg-purple-600 rounded-2xl mt-[-20px]'>
      </div>

      <div className='flex p-5 gap-10'>
        <div className=' w-[250px] h-[320px] bg-blue-300 rounded-md'>
          <img src="" alt="" />
        </div>

        <div className='flex flex-col text-white gap-6'>
          <div className='flex flex-col w-[55vw] gap-3'>
            <p className='font-semibold text-start text-base'>Welcome to my portfolio! I am a passionate front-end developer with a keen eye for design and creating responsive, and dynamic user interfaces. With a strong foundation in web performance optimization, I strive to deliver seamless user experiences across all devices. </p>
            <p className='font-semibold'>Explore my projects to see my work in action and get a glimpse of the creativity and technical expertise I bring to every project.</p>
          </div>
           <div className='flex flex-col gap-5'>
            <div className='flex items-center gap-6'>
              <span className='w-[100px] cursor-pointer'>HTML & CSS</span>
              <div className='w-[300px] h-3 rounded-3xl bg-yellow-300'></div>
            </div>
            <div className='flex items-center gap-6'>
              <span className='w-[100px] cursor-pointer'>Java Script</span>
              <div className='w-[400px] h-3 rounded-3xl bg-yellow-300'></div>
            </div>

            <div className='flex items-center gap-6'>
              <span className='w-[100px] cursor-pointer'>React</span>
              <div className='w-[450px] h-3 rounded-3xl bg-yellow-300'></div>
            </div>

            <div className='flex items-center gap-6'>
              <span className='w-[100px] cursor-pointer'>Tailwind CSS</span>
              <div className='w-[300px] h-3 rounded-3xl bg-yellow-300'></div>
            </div>
          </div>
        </div>
      </div>

      <div className='flex text-white justify-around items-center pt-10 w-full'>
          <div className="flex-1 flex justify-center items-center flex-col border-r p-5">
            <p><span>1</span>Years</p>
            <p id="op">Working as frontend</p>
          </div>

          <div className="flex-1 flex justify-center items-center flex-col border-r p-5">
            <p>20+</p>
            <p id="op">Completed Projects</p>
          </div>

          <div className="flex-1 flex justify-center items-center flex-col p-5">
            <p><span>20+</span></p>
            <p>Satisfied Client</p>
          </div>
        </div>
    </div>
    </div>
  )
}

export default About