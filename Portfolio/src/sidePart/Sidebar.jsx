import { FaHome} from "react-icons/fa";
import { SiSurrealdb } from "react-icons/si";
import { MdContactMail, MdDeveloperBoard  } from "react-icons/md";
import { BsArchiveFill } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";

import {Link} from "react-router-dom"

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
                <Link to="/">Home</Link>
            </div>
            <div className="one">
                <BsArchiveFill className="a" />
                 <Link to="/Project">Project</Link>
            </div>
            <div className="one">
                <DiGithubBadge className="ab"/>
                <Link to="/GitHUb"> GithUb</Link>
            </div>
            <div className="one">
               
                <MdDeveloperBoard className="abc"/>
                 <Link to="/AboutUs">About</Link>
            </div>
            <div className="one">
              
                <MdContactMail className="a"/>
                 <Link to="/Contact">Contact</Link>
            </div>
        </div>

    </div>
  )
}
