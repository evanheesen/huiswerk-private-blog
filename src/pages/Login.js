import React from "react";
import {useHistory} from "react-router-dom";

function Login({isAuth, toggleAuth}) {

    const history = useHistory();

    function handleClick() {
        toggleAuth(true)
        history.push("/")
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