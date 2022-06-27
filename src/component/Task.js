import React, { useState } from 'react'
import "../css/task.css"

export default function Task() { 
  const availableColor = ["red", "green", "blue", "yellow","orange", "purple"]
  const [color, setColor] = useState("black")
  const [perviousColor, setNewColor] = useState([])

  const randColor = availableColor[Math.floor(Math.random() * availableColor.length)];

  const changeColor = (e) =>{
    let colour = e.target.style.backgroundColor
    setNewColor(oldArray => [...oldArray, colour ])
    e.preventDefault();
    if(colour === "red"){
      setColor(colour = "purple")
    }else{
      setColor(colour = randColor)
    }
  }

  return (
    <div className='container'>
      <h1 className='heading'>WELCOME TO REACT</h1>
      <button style={{ backgroundColor: color }} className="button"  onClick = {changeColor}>
        Click me
      </button>
     <h4>Button Clicked: </h4> <span style = {{ color: color }}>{color}</span>
     { perviousColor.map((listColor, id) => (
      <ul key = {id}>
        <li> { listColor } </li>
      </ul>
     ))
    }
    </div>
  )
}
