import '../css/App.css';
import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        // don't allow an empty form to be submitted
        event.preventDefault(); 

        // if username or password is empty
        if (!username.trim() || !password.trim()) {
            // display error msg
            alert('Enter a username and password.');
            return;
        }
    }

    return (
        <div id="login-card" className="login-form">
            <form onSubmit={handleSubmit}>
                {/* username input */}
                <div className="username-form-group">
                    <label id="username">Username:</label>
                    <input 
                        className="username-input" 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                {/* password input */}
                <div className="password-form-group">
                    <label id="password">Password:</label>
                    <input 
                        className="password-input" 
                        type="password"
                        value = {password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {/* login button to submit form */}
                <div id="login-button">
                    <button id="login-button-text" type="submit">Login</button>
                </div>
            </form>
            {/* additional links */}
            <div className="additional-links">
                <a id="forgotten-details" href="/forgot-username-or-password">Forgot username or password?</a>
                <a id="get-help" href="/get-help">Get help signing in</a>
            </div>
        </div>
    )
}

export default Login;
