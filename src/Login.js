import React, { useState } from 'react'
import { useNavigate,Link } from "react-router-dom";
import './assets/css/StyleLogin.css';
import signin_image from './assets/images/signin_image.png'
import '@mdi/font/css/materialdesignicons.min.css';

export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const Login = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8001/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            credentials: 'include',
            body: JSON.stringify({
                email,
                password,
            })
        });
        const res = await response.json();
        console.log(res); // Log the entire response object
        // Check if the response contains a token
        if (res && res.message) {
            const token = res.message; // Extract the token from the response
            localStorage.setItem('token', token); // Store the token in localStorage
            console.log(token);
            navigate("/"); // Navigate to another page if needed
        } else {
            console.error('Token not found in response');
        }
        // navigate("/"); // Navigate to another page if needed
    }
    return (
        <div className='main mt-5 pt-5'>
        <section class="sign-in my-5 mt-5">
        <div class="containerLogin">
            <div class="signin-content">
                <div class="signin-image">
                    <figure><img className='img_Auth' src={signin_image} alt="sing up image"/></figure>
                    <Link to="/register" class="signup-image-link">Créer un compte</Link>
                </div>

                <div class="signin-form">
                    <h2 class="form-title">Connectez Vous</h2>
                    <form method="POST" class="register-form" id="login-form" onSubmit={Login}>
                        <div class="form-group">
                            <label for="your_name"><i className="mdi mdi-email"></i></label>
                            <input type="text"  id="your_name" placeholder="Entre Name"
                            name='email' 
                            onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div class="form-group">
                            <label for="your_pass"><i className="mdi mdi-lock"></i></label>
                            <input type="password" id="your_pass" placeholder="Entre Password"
                            name='password'
                            onChange={e => setPassword(e.target.value)}/>
                        </div>
                        <div class="form-group form-button">
                            <input type="submit" name="signin" id="signin" class="form-submit" value="Log in"/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}
