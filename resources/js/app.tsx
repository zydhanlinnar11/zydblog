import NavbarLayout from "./components/navbar/NavbarLayout";
import "../css/App.css";
import Footer from "./components/footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import LoadingAnimation from "./components/LoadingAnimation";

const ListOfContents = lazy(() => import("./page/ListOfContents"));
const PostPage = lazy(() => import("./page/PostPage"));

function App() {
    return (
        <Suspense fallback={LoadingAnimation()}>
            <Router>
                <div className="App">
                    <NavbarLayout />
                    <div className="content">
                        <Switch>
                            <Route path="/" exact component={ListOfContents} />
                            <Route
                                path="/post/:slug"
                                exact
                                component={PostPage}
                            />
                        </Switch>
                    </div>
                    <Footer />
                </div>
            </Router>
        </Suspense>
        // <div></div>
    );
}

export default App;
