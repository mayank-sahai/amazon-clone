import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './Login.css';
import { auth } from './firebase';
function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPasswrd] = useState('');

    const signIn = e => {
        e.preventDefault();
        //firebase things
        auth.signInWithEmailAndPassword(email, password)
            .then((auth) => {
                history.push('/');
            }).catch(error => alert(error.message));
    }

    const register = e => {
        e.preventDefault();

        auth.createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                console.log(auth);
                if (auth) {
                    history.push('/');
                }
            })
            .catch(error => alert(error.message));
    }

    return (
        <div className="login">
            <Link to="/">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className="login__container">
                <h1>Sign-in</h1>
                <form className="login__form">
                    <h5>E-mail (phone for mobile accounts)</h5>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPasswrd(e.target.value)} />

                    <button type="submit" onClick={signIn} className="login__signInButton">Sign In</button>

                </form>
                <p>
                    By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className="login__registerButton">Create your Amazon Account</button>
            </div>
        </div>
    )
}


export default Login
