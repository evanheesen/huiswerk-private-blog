import React, {useState} from 'react';
import './App.css';
import Home from "./pages/Home";
import Login from "./pages/Login";
import BlogPosts from "./pages/BlogPosts";
import Blog from "./pages/Blog";
import TopMenu from "./components/TopMenu";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    useParams
} from "react-router-dom";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)
    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <Router>
            <TopMenu/>

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/blogposts">
                    <BlogPosts/>
                </Route>
                <Route path="/blog/:id">
                    <Blog/>
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
