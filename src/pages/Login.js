import React from "react";
import {useHistory} from "react-router-dom";

function Login() {

    const history = useHistory();

    function handleClick() {
        history.push("/login")
    }

    return (
        <>
            <h1>Login pagina</h1>
            <p>Klik op de knop om in te loggen</p>
            <button type="button" onClick={handleClick}>
                Login
            </button>
        </>
    )
}

export default Login;