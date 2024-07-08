import { Sidebar } from './sidePart/Sidebar'
import Home from './Links/Home'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './Components/project/Project'
import Contact from "./Components/contact/Contact"
import About from "./Components/about/About"

function App() {
  // Ensure that the paths and components are correct
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home/>
    },
    {
      path: '/Project',
      element: <Project/>
    },
    {
      path: '/Contact',
      element: <Contact/>
    },
    {
      path: '/AboutUs',
      element: <About/>
    }
  ])

  return (
    <div className='All'>
      <Sidebar />
      <RouterProvider router={router} />
    </div>
  )
}

export default App
