import NavbarLayout from "./components/navbar/NavbarLayout";
import "../css/App.css";
import Footer from "./components/footer";
import ListOfContents from "./page/ListOfContents";
import PostPage from "./page/PostPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
    return (
        <Router>
            <div className="App">
                <NavbarLayout />
                <div className="content">
                    <Switch>
                        <Route path="/" exact component={ListOfContents} />
                        <Route path="/post/:slug" exact component={PostPage} />
                    </Switch>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
