import { Button } from '@material-ui/core'
import './navbar.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const RESUME_URL = 'https://zydhanlinnar11.github.io/resume/'

function isLightMode() {
  return (
    localStorage.getItem('darkMode') == null ||
    localStorage.getItem('darkMode') === 'false'
  )
}

function setDarkMode() {
  document.body.classList.add('dark-mode')
  document.body.classList.remove('light-mode')
  localStorage.setItem('darkMode', 'true')
}

function setLightMode() {
  document.body.classList.add('light-mode')
  document.body.classList.remove('dark-mode')
  localStorage.setItem('darkMode', 'false')
}

function NavBar() {
  const [navDarkMode, setNavDarkMode] = useState(!isLightMode())

  return (
    <header>
      <nav>
        <h1>Zydhan's Blog</h1>
        <div className="nav-btn-group">
          <Link style={{ textDecoration: 'none' }} to="/blog">
            <Button className="nav-btn">
              <h6>Home</h6>
            </Button>
          </Link>
          <div className="vertical-bar"></div>
          <Button
            className="nav-btn"
            onClick={() => {
              window.open(RESUME_URL)
            }}
          >
            <h6>Resume</h6>
          </Button>
          <div className="vertical-bar"></div>
          <Button
            className="nav-btn"
            onClick={() => {
              if (!navDarkMode) {
                setDarkMode()
                setNavDarkMode(true)
              } else {
                setLightMode()
                setNavDarkMode(false)
              }
            }}
          >
            <h6>{navDarkMode ? 'Light' : 'Dark'} mode</h6>
          </Button>
        </div>
      </nav>
    </header>
  )
}

export default NavBar
