import React from 'react'
import './calc.css'

export default function Button(props) {
    
    const handleClick = () => {
        props.onClick(props.button)
    }


  return (
    <button onClick={handleClick} class="button">{props.button}</button>
  )
}
