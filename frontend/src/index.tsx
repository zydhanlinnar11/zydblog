import ReactDOM from 'react-dom'
import App from './App'
import './css/index.css'
import blogTheme from './utilities/theme'

ReactDOM.render(<App />, document.getElementById('root'))
if (blogTheme.isLight()) blogTheme.setLight()
else blogTheme.setDark()
