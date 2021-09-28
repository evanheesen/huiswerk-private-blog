import React, {useState} from "react";
import {useHistory} from "react-router-dom";
import {useForm} from "react-hook-form";
import users from '../data/users.json';

function Login({isAuth, toggleAuth}) {

    const [messageError, setMessageError] = useState("");

    // voor meegeven van browsergeschiedenis
    const history = useHistory();

    // React Hook Form
    const {register, handleSubmit, getValues} = useForm();

    // bij submitten formulier
        function handleClick(data) {
        const thisUser = users.find((user) =>
            user.username === data.username);

        if (thisUser && thisUser.password === data.password) { //als wachtwoord gelijk is aan ingevuld wachtwoord
            toggleAuth(!isAuth);
            history.push("/blogposts");
        } else {
            setMessageError("Deze combinatie van gebruikersnaam en wachtwoord is niet bekend.")
        }
    }

    return (
        <>
            <h1>Login pagina</h1>
            <p className="info-text">Klik hieronder om in te loggen of uit te loggen.</p>

            <div className="loginForm">
                <form onSubmit={handleSubmit(handleClick)}>
                    <fieldset>
                        <label htmlFor="username">
                            Gebruikersnaam:
                            <input
                                className="inputField"
                                type="text"
                                id="username"
                                {...register("username")}
                            />
                        </label>
                        {}

                        <label htmlFor="password">
                            Wachtwoord:
                            <input
                                className="inputField"
                                type="password"
                                id="password"
                                {...register("password")}
                            />
                        </label>

                        <button
                            className="loginButton"
                            type="submit"
                            disabled={!!isAuth}
                        >
                            Inloggen
                        </button>
                        <p className="error-message">{messageError}</p>
                    </fieldset>
                </form>
            </div>
        </>
    )
}

export default Login;