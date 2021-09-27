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
} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";

function App() {
    // We houden in de state bij of iemand is "ingelogd" (simpele versie)

    const [isAuthenticated, toggleIsAuthenticated] = useState(false);

    return (
        <Router>
            <TopMenu
                isAuth={isAuthenticated}
            />

            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login
                        toggleAuth={toggleIsAuthenticated}
                    />
                </Route>
                <PrivateRoute path="/blogposts" isAuth={isAuthenticated}>
                    <BlogPosts/>
                </PrivateRoute>
                <PrivateRoute path="/blog/:id" isAuth={isAuthenticated}>
                    <Blog/>
                </PrivateRoute>
            </Switch>
        </Router>
    );
}

export default App;
