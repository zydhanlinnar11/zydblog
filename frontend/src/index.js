import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'

ReactDOM.render(<App />, document.getElementById('root'))
if (
  localStorage.getItem('darkMode') === 'false' ||
  (localStorage.getItem('darkMode') == null &&
    !(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark))')))
)
  document.body.classList.add('light-mode')
else {
  document.body.classList.add('dark-mode')
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
