import { Sidebar } from './sidePart/Sidebar'
import { Nav } from './Components/Nav'
import { Body } from './Components/Body'
import { BodyTwo } from './Components/BodyTwo'
function App() {
  return (
    <div className='All'>
      <Sidebar/>
      <Nav/>
      <Body/>
      <BodyTwo/>
    </div>
  )
}

export default App
