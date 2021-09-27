import React from "react";
import {NavLink} from "react-router-dom"

function TopMenu({isAuth, classHidden}) {
    return (
        <nav>

            <div className="nav-container">

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li>
                    <li id={isAuth ? "" : "hiddenList"}>
                        <NavLink to="/blogposts" activeClassName="active-link">Blog Overzicht</NavLink>
                    </li>
                    <li>
                        <NavLink to="/login" activeClassName="active-link">{isAuth ? "Uitloggen" : "Inloggen"}</NavLink>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default TopMenu;