function setDark() {
  document.body.classList.add('dark-mode')
  document.body.classList.remove('light-mode')
  localStorage.setItem('darkMode', 'true')
}

function setLight() {
  document.body.classList.add('light-mode')
  document.body.classList.remove('dark-mode')
  localStorage.setItem('darkMode', 'false')
}

const isLight = () => {
  return !isDark
}

const isDark = () => {
  const isSetDarkModeInLocalStorage =
    localStorage.getItem('darkMode') === 'true'
  const isSetDarkModeInSystemSetting =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark))')
  return isSetDarkModeInLocalStorage || isSetDarkModeInSystemSetting
}

export default { setDark, setLight, isLight }
