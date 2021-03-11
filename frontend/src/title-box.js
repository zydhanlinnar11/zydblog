import './title-box.css'
import React from 'react'
import defaultBackground from './title-bg.webp'

const TitleBox = ({
  title = "This page isn't available",
  background = defaultBackground,
}) => {
  if (background === 'noThumbnail') background = defaultBackground
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
