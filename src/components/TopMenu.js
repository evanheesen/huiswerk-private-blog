import React from "react";
import {NavLink} from "react-router-dom";

function TopMenu() {
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

                    <li>
                        <NavLink to="/blogposts" activeClassName="active-link">Blog Overzicht</NavLink>
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default TopMenu;