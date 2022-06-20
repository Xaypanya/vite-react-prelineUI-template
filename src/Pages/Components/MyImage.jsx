import React from 'react'
import './MyImage.css'

function MyImage({imgSrc, alter,className}) {
  return (
    <div  id='image-52'>
        <img src={imgSrc} alt={alter} className={className}/>
    </div>
  )
}

export default MyImage