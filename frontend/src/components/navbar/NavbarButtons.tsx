import { useState } from 'react'
import blogTheme from '../../utilities/theme'
import { Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const HomeButton = (key: string) => {
  return (
    <Link key={key} style={{ textDecoration: 'none' }} to="/">
      <Button className="nav-btn">
        <h6>Home</h6>
      </Button>
    </Link>
  )
}

const ResumeButton = (key: string) => {
  const RESUME_URL = 'https://zydhanlinnar11.github.io/resume/'
  return (
    <Button
      key={key}
      className="nav-btn"
      onClick={() => {
        window.open(RESUME_URL)
      }}
    >
      <h6>Resume</h6>
    </Button>
  )
}

const ToggleThemeButton = (key: string) => {
  const [navDarkMode, setNavDarkMode] = useState(!blogTheme.isLight())
  return (
    <Button
      key={key}
      className="nav-btn"
      onClick={() => {
        if (!navDarkMode) {
          blogTheme.setDark()
          setNavDarkMode(true)
        } else {
          blogTheme.setLight()
          setNavDarkMode(false)
        }
      }}
    >
      <h6>{navDarkMode ? 'Light' : 'Dark'} mode</h6>
    </Button>
  )
}

const VerticalDivider = (key: string) => (
  <div key={key} className="vertical-bar"></div>
)

const navbarButtonsArray = [
  HomeButton,
  VerticalDivider,
  ResumeButton,
  VerticalDivider,
  ToggleThemeButton,
]

const getNavbarButtons = () => {
  let key = 0
  return navbarButtonsArray.map((item) => item(String(key++)))
}

export default getNavbarButtons
