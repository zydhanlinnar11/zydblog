import './title-box.css'
import React from 'react'

const TitleBox = ({ title = "This page isn't available", background }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className="title-box-container"
    >
      <h1 className="title-box-post-title">{title}</h1>
    </div>
  )
}

export default TitleBox
