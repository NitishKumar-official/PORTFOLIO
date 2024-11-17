

import Home from './components/Home'
import Layout from './Layout';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Project from './components/Project';
import Skills from './components/homeCompo/util/Skills';
import About from './components/About';
import Education from './components/Education';

 

const appRouter= createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
  {
    path: '/',
    element: <Home/>
  },
  {
    path: '/project',
    element: <Project/>
  },
  {
    path: '/skills',
    element: <Skills/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/education',
    element: <Education/>
  },
    ]

  }
])

function App() {
  return (
      <>
       <RouterProvider router={appRouter} />
      </>
  )
}

export default App;
