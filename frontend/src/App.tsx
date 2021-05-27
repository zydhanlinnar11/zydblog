import NavbarLayout from './components/navbar/NavbarLayout'
import './css/App.css'
import Footer from './components/footer'
import ListContent from './components/post/ListOfContents'
import Post from './components/post/Post'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">
        <NavbarLayout />
        <div className="content">
          <Switch>
            <Route path="/" exact component={ListContent} />
            <Route path="/post/:slug" exact component={Post} />
          </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  )
}

export default App
