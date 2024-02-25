import React from 'react'
import './Playlist.css'
import google from '../src/assests/images/google.png'
import apple from '../src/assests/images/apple-logo.png'
import facebook from '../src/assests/images/facebook.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function Login() {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const [errors, setErrors] = useState({
        username: '',
        password: '',
    });

    const validUsers = {
        user1: 'password1',
        user2: 'password2',
        user3: 'password3',
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const newErrors = {
            username: formData.username.trim() === '' ? 'Username is required' : '',
            password: formData.password.trim() === '' ? 'Password is required' : '',
        };

        setErrors(newErrors);


        if (Object.values(newErrors).every((error) => error === '')) {

            const isValidUser =
                validUsers[formData.username] && validUsers[formData.username] === formData.password;

            if (isValidUser) {

                console.log('Login successful for user:', formData.username);
                navigate('/')
            } else {

                setErrors({
                    username: 'Invalid username or password',
                    password: 'Invalid username or password',
                });
            }
        }
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    return (

        <div style={{ backgroundColor: "#121212" }}>
            <div className="header">
                <div>
                    <img
                        src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"
                        alt=""
                    />
                </div>
            </div>
            <div className="login-main" >
                <p className="login-to-spotify">Login to Spotify</p>
                <div className="error" style={{ background: 'red', color: 'white' }}>{errors.username}</div>
                <div className="error" style={{ background: 'red', color: 'white' }}>{errors.password}</div>
                <div className="buttons">
                    <button>
                        <div className="button-align">
                            <div className="img">
                                <img src={google} width="24px" height="24px" />
                            </div>
                            <div className="text">Continue with Google</div>
                        </div>
                    </button>
                </div>
                <div className="buttons">
                    <button>
                        <div className="button-align">
                            <div className="img">
                                <img src={facebook} width="24px" height="24px" />
                            </div>
                            <div className="text">Continue with Facebook</div>
                        </div>
                    </button>
                </div>
                <div className="buttons">
                    <button>
                        <div className="button-align">
                            <div className="img">
                                <img src={apple} width="24px" height="24px" />
                            </div>
                            <div className="text">Continue with Apple</div>
                        </div>
                    </button>
                </div>
                <div className="buttons">
                    <button>
                        <div className="button-align">
                            <div className="img" />
                            <div className="text" style={{ paddingTop: 3, paddingBottom: 3 }}>
                                Continue with phone number
                            </div>
                        </div>
                    </button>
                </div>
                <hr className="hr" />
                <form onSubmit={handleSubmit}>
                    <div className="mb-20">
                        <div className="mb-5">
                            <p >Email or username</p>
                        </div>
                        <div>
                            <input
                                type="text"
                                placeholder="Email or username"
                                className="input-text"
                                id="username"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-20">
                        <div className="mb-5">
                            <p>Password</p>
                        </div>
                        <div>
                            <input
                                type="password"
                                name=""
                                id="password"
                                placeholder="Password"
                                className="input-text"
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="mb-20" style={{ width: 350 }}>
                        <div style={{ display: "flex", gap: 10 }}>
                            <label className="switch-outer">
                                <label className="switch">
                                    <input type="checkbox" />
                                    <span className="slider round" />
                                </label>
                            </label>
                            <p>Remember me</p>
                        </div>
                    </div>
                    <div className="buttons mb-20">
                        <button type='submit'>
                            <div className="log-in">
                                <div>Log In</div>
                            </div>
                        </button>
                    </div>
                    <div className="mb-20">
                        <div>
                            <a href="#" className="forgot-password">
                                Forgot your password?
                            </a>
                        </div>
                    </div>
                </form>
                <hr className="hr" />
                <div className="buttons">
                    <div className="mb-20">
                        <div>
                            <label>Don't have an account?</label>&nbsp;&nbsp;&nbsp;
                           <Link to="/Signup"> <a href="#" className="forgot-password">
                                Sign up for Spotify
                            </a></Link>
                        </div>
                    </div>
                </div>
                <div className="buttons footer">
                    <div>
                        <p>
                            This site is protected by reCAPTCHA and the Google{" "}
                            <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>{" "}
                            apply.
                        </p>
                    </div>
                </div>
            </div>
        </div>


    )
}
