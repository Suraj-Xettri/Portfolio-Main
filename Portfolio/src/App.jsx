import { Sidebar } from './sidePart/Sidebar'
import { Nav } from './Components/Nav'
import { Body } from './Components/Body'
function App() {
  return (
    <div className='All'>
      <Sidebar/>
      <Nav/>
      <Body/>
    </div>
  )
}

export default App
