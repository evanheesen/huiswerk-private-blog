import React from "react";
import {NavLink} from "react-router-dom"

function TopMenu({isAuth, toggleAuth}) {

    function logout() {
        toggleAuth(false)
    }

    return (
        <nav>

            <div className="nav-container">

                <ul>
                    <li>
                        <NavLink to="/" exact activeClassName="active-link">Home</NavLink>
                    </li>
                    {/* hide menu items when not logged in */}
                    {isAuth ? <>
                        <li>
                            <NavLink to="/blogposts" activeClassName="active-link">Blog Overzicht</NavLink>
                        </li>
                        <li>
                            <NavLink to="/" onClick={logout}>Uitloggen</NavLink>
                        </li>
                    </> : ""}

                    {/* hide menu item when logged in */}
                    {!isAuth ? <li>
                        <NavLink to="/login" activeClassName="active-link">Login</NavLink>
                    </li> : ""}
                </ul>

            </div>

        </nav>
    )
}

export default TopMenu;