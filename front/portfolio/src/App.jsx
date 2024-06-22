import { useState } from 'react'
import './App.css'
import About from "../components/about/About.jsx"
import Projects from '../components/projects/projects.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container'>
      <About />
      <Projects />
    </div>
  )
}

export default App
