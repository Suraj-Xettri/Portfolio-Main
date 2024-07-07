import { Sidebar } from './sidePart/Sidebar'
import { Nav } from './Components/Nav'
import { Body } from './Components/Body'
import { BodyTwo } from './Components/BodyTwo'
function App() {
  return (
    <div className='All'>
      <Sidebar/>
      <div className="overall">
        <Nav/>
        <Body/>
      </div>
      
    </div>
  )
}

export default App
