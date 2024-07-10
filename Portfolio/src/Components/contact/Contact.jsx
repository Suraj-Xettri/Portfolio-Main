import React from 'react'
import { FaEnvelope, FaFacebookF, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

const Contact = () => (
  <div className='except bg-black h-screen gap-14 overflow-hidden flex flex-col items-center'>
    <div className='flex gap-9 p-3 text-white items-center justify-center flex-col w-full'>
      <h1 className='font-black text-5xl'>Contact</h1>
      <div className='w-8 h-2 bg-purple-600 rounded-2xl mt-[-20px]'></div>


      
    </div>

    <div className="grid sm:grid-cols-2 items-start gap-16 p-4 mx-auto max-w-[60vw] bg-gray-800 text-white rounded-2xl font-[sans-serif]">
        <div>
          <h1 className="text-gray-400 text-3xl font-extrabold">Let's Talk</h1>
          <p className="text-sm text-gray-400 mt-4">
            Have some big idea or brand to develop and need help? Then reach out we'd love to hear about your project and provide help.
          </p>

          <div className="mt-12">
            <h2 className="text-gray-400 text-base font-bold">Email</h2>
            <ul className="mt-4">
              <li className="flex items-center">
                <div className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-[#007bff] w-5 h-5" />
                </div>
                <a href="mailto:info@example.com" className="text-[#007bff] text-sm ml-4">
                  <small className="block">Mail</small>
                  <strong>surajthapart@gmail.com</strong>
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-12">
            <h2 className="text-gray-400 text-base font-bold">Socials</h2>
            <ul className="flex mt-4 space-x-4">
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.facebook.com/lovely.suraj.5070/">
                  <FaFacebookF className="text-[#007bff] w-5 h-5" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.linkedin.com/in/suraj-thapa-99204b318/">
                  <FaLinkedinIn className="text-[#007bff] w-5 h-5" />
                </a>
              </li>
              <li className="bg-[#e6e6e6cf] h-10 w-10 rounded-full flex items-center justify-center shrink-0">
                <a href="https://www.instagram.com/suraj_khestri/">
                  <FaInstagram className="text-[#007bff] w-5 h-5" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <form className="ml-auto space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="w-full rounded-md py-3 px-4 bg-gray-600 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full rounded-md py-3 px-4 bg-gray-600 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
          
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="w-full rounded-md py-3 px-4 bg-gray-600 text-gray-800 text-sm outline-blue-500 focus:bg-transparent"
            
          />
          <textarea
            name="message"
            placeholder="Message"
            rows="6"
            className="w-full rounded-md px-4 bg-gray-600 text-gray-800 text-sm pt-3 outline-blue-500 focus:bg-transparent"
            
          ></textarea>
          <button
            type="submit"
            className="text-white bg-blue-400 hover:bg-blue-600 tracking-wide rounded-md text-sm px-4 py-3 w-full !mt-6"
          >
            Send
          </button>
        </form>
      </div>


  </div>
)

export default Contact