import NavBar from './navbar'
import './App.css'
import Footer from './footer'
import ListContent from './ListContent'
import Post from './Post'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <div className="content">
          <Switch>
            <Route path="/blog" exact component={ListContent} />
            <Route path="/blog/post/:slug" exact component={Post} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
