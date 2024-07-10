import "./side.css"
import { FaHome, FaProjectDiagram, FaGithub, FaInfoCircle, FaEnvelope } from "react-icons/fa";

import {NavLink} from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="mainSide bg-black border-r border-gray-700">
        <div class="side-card">
            <div class="image">
                <img src="../images/profile.jpg"  alt="image" />
            </div>
            <div class="card-info">
                <span>Suraj Thapa</span>
                <p>Front-End Developer</p>
            </div>
        </div>

        <div className="side-down">
            <div className="one">
            <NavLink to="/" className={({ isActive }) => `flex gap-4 items-center text-lg ${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 transition ease-out delay-100`}>
                <FaHome className="mr-2 text-2xl" /> <span>Home</span>
            </NavLink>
            </div>
            <div className="one">
            <NavLink to="/Project" className={({ isActive }) => `flex gap-4 items-center text-lg ${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 transition ease-out delay-100`}>
                <FaProjectDiagram className="mr-2 text-2xl" /> <span>Project</span>
            </NavLink>
            </div>
            <div className="one">
            <a href="https://github.com/Suraj-Xettri" className="flex gap-4 items-center text-lg text-white hover:text-orange-700 transition ease-out delay-100">
                <FaGithub className="mr-2 text-2xl" /> <span>GitHub</span>
            </a>
            </div>
            <div className="one ">
            <NavLink to="/AboutUs" className={({ isActive }) => `flex gap-4 items-center text-lg ${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 transition ease-out delay-100`}>
                <FaInfoCircle className="mr-2 text-2xl" /><span>About Me</span></NavLink>
            
            </div>
            <div className="one">
            <NavLink to="/Contact" className={({ isActive }) => `flex items-center gap-4 text-lg ${isActive ? "text-orange-700" : "text-white"} hover:text-orange-700 transition ease-out delay-100`}>
                <FaEnvelope className="mr-2 text-2xl" /><span>Contact</span>
            </NavLink>
            </div>
      </div>
    </div>
  )
}
