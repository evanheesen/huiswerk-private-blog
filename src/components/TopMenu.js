import React from "react";
import {NavLink} from "react-router-dom"

function TopMenu({isAuth}) {
    return (
        <nav>

            <div className="nav-container">

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>

                    <li>
                        {/*<PrivateRoute>*/}
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                        {/*</PrivateRoute>*/}
                    </li>

                    <li>
                        {/*<PrivateRoute>*/}
                        <NavLink to="/blogposts" activeClassName="active-link">Blog Overzicht</NavLink>
                        {/*</PrivateRoute>*/}
                    </li>
                </ul>

            </div>

        </nav>
    )
}

export default TopMenu;