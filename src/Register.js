import React, { useState } from 'react'
import signup_image from './assets/images/signup_image.png'
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios'; // Don't forget to install axios via npm or yarn

export default function Register() {
    const [nom, setNom] = useState('');
    const [prenom, setPrenom] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState('https://cdn-icons-png.flaticon.com/512/149/149071.png');
    const navigate = useNavigate();
    const Register = async (e) => {
        e.preventDefault();
        const response = await fetch('http://127.0.0.1:8001/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nom,
                prenom,
                email,
                password,
                image
            })
        });
        const content = await response.json();
        console.log(content);
        localStorage.setItem('content', JSON.stringify(content));
        navigate("/login");
    }
    return (
        <div class="main mt-5 pt-5">

            <section class="signup my-5">
                <div class="containerLogin">
                    <div class="signup-content">
                        <div class="signup-form">
                            <h2 class="form-title">Sign up</h2>
                            <form onSubmit={Register}  class="register-form" id="register-form">
                                <div class="form-group">
                                    <label for="name"><i class="mdi mdi-account"></i>
                                    </label>
                                    <input type="text" name="name" id="name" placeholder="Entre Nom"
                                    onChange={e => setNom(e.target.value)} />
                                </div>
                                <div class="form-group">
                                    <label for="name"><i class="mdi mdi-account"></i></label>
                                    <input type="text" name="name" id="name" placeholder="Entre Prenom" 
                                    onChange={e => setPrenom(e.target.value)}/>
                                </div>
                                <div class="form-group">
                                    <label for="email"><i className="mdi mdi-email"></i>
                                    </label>
                                    <input type="email" name="email" id="email" placeholder="Entre Email"
                                    onChange={e => setEmail(e.target.value)}  />
                                </div>
                                <div class="form-group">
                                    <label for="pass"><i className="mdi mdi-lock"></i>
                                    </label>
                                    <input type="password" name="pass" id="pass"
                                     placeholder="Entre Password"
                                     onChange={e => setPassword(e.target.value)} />
                                </div>

                                <div class="form-group form-button">
                                    <input type="submit" name="signup" id="signup" class="form-submit btn" value="Register" />
                                </div>
                            </form>
                        </div>
                        <div class="signup-image">
                            <figure><img src={signup_image} alt="sing up image" />
                            </figure>
                            <Link className='signup-image-link fw-bold' to="/login">Vous avez déjà un compte ?</Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
