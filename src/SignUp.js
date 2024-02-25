import React from 'react'
import './Playlist.css'
import google from '../src/assests/images/google.png'
import facebook from '../src/assests/images/facebook.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Link } from 'react-router-dom'

export default function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        email: '',
    });

    const [errors, setErrors] = useState({
        email: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();


        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


        const newErrors = {
            email: !emailPattern.test(formData.email) ? 'Invalid email address' : '',
        };

        setErrors(newErrors);


        if (Object.values(newErrors).every((error) => error === '')) {
            navigate('/Login')

            console.log('Form submitted with email:', formData.email);
        }
    };
    return (
        <div>
            <div>

                <div className="header" style={{ backgroundColor: "black", height: 90 }}>
                    <div>
                        <img
                            src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"
                            alt=""
                        />
                    </div>
                </div>
                <div className="main-signup" style={{ background: "black" }}>
                    <div style={{ marginBottom: 40 }}>
                        <p
                            style={{
                                marginLeft: 190,
                                fontSize: 42,
                                color: "#ffffff",
                                fontWeight: "bold"
                            }}
                        >
                            Sign up to start
                        </p>
                        <p
                            style={{
                                marginLeft: 190,
                                fontSize: 42,
                                color: "#ffffff",
                                fontWeight: "bold"
                            }}
                        >
                            listening
                        </p>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-20">
                            <div className="mb-5" style={{ fontWeight: 700 }}>
                                <p>Email address</p>
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="name@domain.com"
                                    style={{ backgroundColor: "#121212" }}
                                    className="input-text"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="mt">
                                <div className="error" style={{ color: 'red', height: '20px', fontSize: '12px' }}>{errors.email}</div>
                                <a
                                    href="#"
                                    style={{ color: "#1db954", fontSize: 12, fontWeight: 700 }}
                                >
                                    Use phone number instead.
                                </a>
                            </div>
                        </div>
                        <div className="buttons mb-20">
                            <button type='submit'>
                                <div className="log-in">
                                    <div>Next</div>
                                </div>
                            </button>
                        </div>
                    </form>
                    <div className="or">
                        <div className="hr-half">
                            <hr />
                        </div>
                        <div className="or-text">or</div>
                        <div className="hr-half">
                            <hr />
                        </div>
                    </div>
                    <div className="buttons">
                        <button style={{ backgroundColor: "#121212" }}>
                            <div className="button-align">
                                <div className="img">
                                    <img src={google} width="24px" height="24px" />
                                </div>
                                <div className="text">Continue with Google</div>
                            </div>
                        </button>
                    </div>
                    <div className="buttons">
                        <button style={{ backgroundColor: "#121212" }}>
                            <div className="button-align">
                                <div className="img">
                                    <img src={facebook} width="24px" height="24px" />
                                </div>
                                <div className="text">Continue with Facebook</div>
                            </div>
                        </button>
                    </div>
                    <hr className="hr" />
                    <div className="buttons">
                        <div className="mb-20">
                            <div>
                                <label>Already have an account?</label>&nbsp;
                                <Link to='/Login'> <a href="#">Login here</a></Link>
                            </div>
                        </div>
                    </div>
                    <div className="buttons footer">
                        <div>
                            <p>This site is protected by reCAPTCHA and the Google </p>
                            <p style={{ textAlign: "center" }}>
                                <a href="#">Privacy Policy</a> and <a href="#">Terms of Service</a>{" "}
                                apply.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
