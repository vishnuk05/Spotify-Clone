import React from 'react'
import './Playlist.css'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook, faHouse, faPlus, faGlobe, faPlay } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'

export default function Home() {
    return (
        <div>
            <div className="content-container">
                <div className="sidebar">
                    <div className="logo">
                        <a>
                            <img
                                src="https://www.edigitalagency.com.au/wp-content/uploads/Spotify-Logo-png-RGB-White.png"
                                alt="Logo"
                            />
                        </a>
                        <ul>
                            <li>
                                <a>
                                    <span><FontAwesomeIcon icon={faHouse} /></span>
                                    <span>Home</span>
                                </a>
                            </li>
                            <li>
                                <a>

                                    <span><FontAwesomeIcon icon={faMagnifyingGlass} /></span>
                                    <span>Search</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="your-library-card">
                        <div className="your-library">
                            <div className="fixed">
                                <div className='fixed-item'>
                                    <span><FontAwesomeIcon icon={faBook} /></span>
                                    <span>Your Library</span>
                                </div>
                                <span><FontAwesomeIcon icon={faPlus} /></span>
                            </div>
                            <div className="scrollbar">
                                <div className="create-your-first-playlist">
                                    <h5>Create your first playlist</h5>
                                    <h5>It's easy, we'll help you</h5>
                                    <button>Create playlist</button>
                                </div>
                                <div className="lets-find">
                                    <h5>Let's find some podcasts to follow</h5>
                                    <h5>We 'll keep you updated on new episodes</h5>
                                    <button>Browse podcasts</button>
                                </div>
                            </div>
                        </div>
                        <div className="policies">
                            <ul>
                                <li>
                                    <a>Legal</a>
                                </li>
                                <li>
                                    <a>Privacy Center</a>
                                </li>
                                <li>
                                    <a>Privacy Policy</a>
                                </li>
                                <li>
                                    <a>Cookies</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a>About Ads</a>
                                </li>
                                <li>
                                    <a>Accessibility</a>
                                </li>
                                <li>
                                    <a>Notice at Collection</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a>Your Privacy Choices</a>
                                </li>
                            </ul>
                            <ul>
                                <li>
                                    <a>Cookies</a>
                                </li>
                            </ul>
                        </div>
                        <div className="language">
                            <button>
                                <span>
                                    <FontAwesomeIcon icon={faGlobe} style={{ color: "#ffffff", }} />
                                </span>
                                <span>English</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="main">
                    <div className="topbar">
                        <div className="prev-next-buttons">
                            <button><FontAwesomeIcon icon={faChevronLeft} /></button>
                            <button><FontAwesomeIcon icon={faChevronRight} /></button>
                        </div>
                        <div className="navbar">
                            <ul>
                                <li>
                                    <Link to="/SignUp"> <a href="">Sign Up</a></Link>
                                </li>
                                <li>

                                    <Link to="/Login">
                                        <button className="login" type="button">
                                            Log In
                                        </button>
                                    </Link>


                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className='playlists'>
                    <div className="spotify-playlists">
                        <h2>Spotify Playlist</h2>
                        <div className="list">
                            <Link to="/Playlists">
                            <div className="item">
                                <img src="https://charts-images.scdn.co/assets/locale_en/regional/weekly/region_global_default.jpg" />
                                <div className="play">
                                    <span><FontAwesomeIcon icon={faPlay} className='fa' /></span>
                                </div>
                                <h4>Top songs global</h4>
                                <p>Your weely update of the most played tracks rights now</p>
                            </div>
                            </Link>
                            <Link to="/Playlists">
                            <div className="item">
                                <img src="	https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg" />
                                <div className="play">
                                    <span><FontAwesomeIcon icon={faPlay} className='fa' /></span>
                                </div>
                                <h4>Top 50 India</h4>
                                <p>Your weely update of the most played tracks rights now</p>
                            </div></Link>

                            <Link to="/Playlists">
                            <div className="item">
                                <img src="https://charts-images.scdn.co/assets/locale_en/viral/daily/region_global_default.jpg" />
                                <div className="play">
                                    <span><FontAwesomeIcon icon={faPlay} className='fa' /></span>
                                </div>
                                <h4>Viral 50 Global</h4>
                                <p>Your weely update of the most played tracks rights now</p>
                            </div>
                            </Link>
                            <Link to="/Playlists">
                            <div className="item">
                                <img src="	https://charts-images.scdn.co/assets/locale_en/viral/daily/region_in_default.jpg" />
                                <div className="play">
                                    <span><FontAwesomeIcon icon={faPlay} className='fa' /></span>
                                </div>
                                <h4>Viral 50 India</h4>
                                <p>Your weely update of the most played tracks rights now</p>
                            </div>
                            </Link>
                            <Link to="/Playlists">
                            <div className="item">
                                <img src="https://i.scdn.co/image/ab67616d00001e02760921b9de555a27f9f79322" />
                                <div className="play">
                                    <span><FontAwesomeIcon icon={faPlay} className='fa' /></span>
                                </div>
                                <h4>Top 2023</h4>
                                <p>Your weely update of the most played tracks rights now</p>
                            </div>
                            </Link>
                        </div>
                    </div>
                    <div>
                        <div className='footer'>
                            <div className='about'>
                                <ul>
                                    <li className='head'>Company</li>
                                    <li>About</li>
                                    <li>Jobs</li>
                                    <li>For the Record</li>
                                </ul>
                                <ul>
                                    <li className='head'>Communities</li>
                                    <li>For Artists</li>
                                    <li>Developers</li>
                                    <li>Advertising</li>
                                    <li>Investors</li>
                                    <li>Vendors</li>
                                </ul>
                                <ul>
                                    <li className='head'>Useful links</li>
                                    <li>Support</li>
                                    <li>Free Mobile App</li>
                                </ul>
                            </div>
                            <div className='socialmedia'>
                                <div className='socialitem'><FontAwesomeIcon icon={faInstagram} style={{ color: "#ffffff", }} /></div>
                                <div className='socialitem'><FontAwesomeIcon icon={faTwitter} style={{ color: "#ffffff", }} /></div>
                                <div className='socialitem'><FontAwesomeIcon icon={faFacebook} style={{ color: "#ffffff", }} /></div>
                            </div>
                        </div>

                        <hr />
                        <div className='copyright'>
                            <p>&copy; 2023 Spotify AB</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="preview">
                    <div className="text">
                        <h6>Preview of Spotify</h6>
                        <p>
                            Sign up to get unlimited songs and podcasts with occasional ads. No
                            credit card needed.
                        </p>
                    </div>
                   <Link to="/Signup"> <button type="button">Sign up free</button></Link>
                </div>
            </div>

        </div>
    )
}
