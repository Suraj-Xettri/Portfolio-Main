import { FaHome} from "react-icons/fa";
import { SiSurrealdb } from "react-icons/si";
import { MdContactMail, MdDeveloperBoard  } from "react-icons/md";
import { BsArchiveFill } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";

import {Link, NavLink} from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="mainSide">
        <div className="side-top">
            <div className="image">
                <img src="../images/profile.jpg"  alt="image" />
            </div>
            <div className="side-writing">
                <h2>Developer</h2>
            </div>
            <div className="icon">
                 <p><SiSurrealdb /> Suraj Thapa</p>
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
