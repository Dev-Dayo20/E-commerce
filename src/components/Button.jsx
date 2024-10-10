import React from 'react'

function Button(props) {
    const title = props.title
  return (
    <div>
      <button>{title}</button>
    </div>
  )
}

export default Button
