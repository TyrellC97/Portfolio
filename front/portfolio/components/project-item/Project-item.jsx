import "./project-item.css"

import React from 'react'

export default function Project_item(props) {
  return (
    <div className="item-container">
        <div className="title"> <h3 className="title bebas-neue-regular">{props.name}</h3> <h5 className=" desc bebas-neue-regular"> {props.description}</h5>
        <a href={props.link} target="_blank"><button className=" p-button bebas-neue-regular"> Open</button>  </a>
        
        </div>


    </div>
  )
}
 