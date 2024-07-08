import { Sidebar } from './sidePart/Sidebar'
import Home from './Links/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Project from './Components/project/Project'
import Contact from "./Components/contact/Contact"
import About from "./Components/about/About"

function App() {

  return (
    <div className='All'>
      
      <Router>
        <Sidebar/>
          <Routes>
            <Route path= '/' element= {<Home/>} />
            <Route path= '/Contact' element= {<Contact/>} />
            <Route path= '/AboutUs' element= {<About/>} />
            <Route path= '/Project' element= {<Project/>} />
            <Route path= '*' element= {<h1> Page Not Found</h1>} />
          </Routes>
      </Router>
        
    </div>
  )
}

export default App
