import { FaHome} from "react-icons/fa";
import { SiSurrealdb } from "react-icons/si";
import { MdContactMail, MdDeveloperBoard  } from "react-icons/md";
import { BsArchiveFill } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";
import "./side.css"

import {Link, NavLink} from "react-router-dom"

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
                <FaHome className="abc"/>
                <NavLink to="/" className={({isActive}) => isActive ? "text-orange-700": "text-white"}>Home</NavLink>
            </div>
            <div className="one">
                <BsArchiveFill className="a" />
                 <NavLink to="/Project" className={({isActive}) => isActive ? "text-orange-700": "text-white"}>Project</NavLink>
            </div>
            <div className="one">
                <DiGithubBadge className="ab"/>
                <a href="https://github.com/Suraj-Xettri" className="text-white"> GithUb</a>
            </div>
            <div className="one">
               
                <MdDeveloperBoard className="abc"/>
                 <NavLink to="/AboutUs" className={({isActive}) => isActive ? "text-orange-700": "text-white"}>About</NavLink>
            </div>
            <div className="one">
              
                <MdContactMail className="a"/>
                 <NavLink to="/Contact" className={({isActive}) => isActive ? "text-orange-700": "text-white"}>Contact</NavLink>
            </div>
        </div>

    </div>
  )
}
