import React, { useEffect, useState } from 'react'
import './projects.css'
import Project_item from '../project-item/Project-item'

export default function Projects() {

  
  const [projects, setProjects] = useState([{}])

  const url = "https://portfolio-iyuo.onrender.com/projects" 
  
  useEffect(() => {
    const getProjects = async () => {
      const result = await fetch(url)
      const myProjects = await result.json()
      setProjects(myProjects);
    }
   getProjects()
   }, [projects]);


  return (
    <>
    <div className="projects_section">
     <div className="p-header bebas-neue-regular"> <h1>Projects</h1></div>
     <div className="p-container">

      {projects.map((projects, i) => {
        return <Project_item name={projects.name} link = {projects.link} description={projects.description} />
      })}

     </div>
    </div>
    </>
  )
}
