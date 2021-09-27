import React from "react";
import {useHistory} from "react-router-dom";

function Login({isAuth, toggleAuth}) {

    const history = useHistory();

    function handleClick() {
        toggleAuth(true)
        history.push("/blogposts")
    }

    function handleClickLogOut() {
        toggleAuth(false)
        history.push("/")
    }

    return (
        <>
            <h1>Login pagina</h1>
            <p>Klik hieronder om in te loggen of uit te loggen.</p>
            <button type="button" onClick={handleClick}>
                Login
            </button>
            <button type="button" onClick={handleClickLogOut}>
                Log uit
            </button>
        </>
    )
}

export default Login;