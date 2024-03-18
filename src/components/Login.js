import '../css/App.css';
import React, { useState } from 'react';

function Login() {
    return (
        <div id="login-card" className="login-form">
            <form>
                <div className="username-form-group">
                    <label id="username">Username:</label>
                    <input className="username-input" type="text"></input>
                </div>
                <div className="password-form-group">
                    <label id="password">Password:</label>
                    <input className="password-input" type="password"></input>
                </div>
                <div id="login-button">
                    <button id="login-button-text" type="submit">Login</button>
                </div>
            </form>
            <div className="additional-links">
                <a id="forgotten-details" href="/forgot-username-or-password">Forgot username or password?</a>
                <a id="get-help" href="/get-help">Get help signing in</a>
            </div>
        </div>
    )
}

export default Login;
