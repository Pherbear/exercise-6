import React from 'react'

export default function Display(props) {
  return (
    <div Class='led-screen'>
        <div Class='output'>
            {props.display}
        </div>
    </div>
  )
}
