import { FaHome} from "react-icons/fa";
import { SiSurrealdb } from "react-icons/si";
import { MdContactMail, MdDeveloperBoard  } from "react-icons/md";
import { BsArchiveFill } from "react-icons/bs";
import { DiGithubBadge } from "react-icons/di";
export const Sidebar = () => {

   
  return (
    <div className="mainSide">
        <div className="side-top">
            <div className="image">
                <img src="../public/images/images.jpg"  alt="image" />
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
                <FaHome className="abc"/><a href="">Home</a>
            </div>
            <div className="one">
                <BsArchiveFill className="a" /> <a href="">Project</a>
            </div>
            <div className="one">
                <DiGithubBadge className="ab"/><a href=""> GithUb</a>
            </div>
            <div className="one">
               
                <MdDeveloperBoard className="abc"/> <a href="">About</a>
            </div>
            <div className="one">
              
                <MdContactMail className="a"/> <a href="">Contact</a>
            </div>
        </div>

    </div>
  )
}
