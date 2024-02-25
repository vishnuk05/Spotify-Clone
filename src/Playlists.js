import React from 'react';
import { Link } from 'react-router-dom';
import './Playlist.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faPlay } from '@fortawesome/free-solid-svg-icons';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faBook } from '@fortawesome/free-solid-svg-icons';
import { faLessThan } from '@fortawesome/free-solid-svg-icons';
import { faGreaterThan } from '@fortawesome/free-solid-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons';
export default function Playlists() {
    return (
        <div >
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
                        <div className='playlist'>
                            <div className='details'>
                                <div ><img src='https://charts-images.scdn.co/assets/locale_en/regional/daily/region_in_default.jpg'></img></div>
                                <div className='information'>
                                    <p>Playlist</p>
                                    <p className='title'>Top 50-India</p>
                                    <p className='description'>Your daily update of the most played tracks right now- India .</p>
                                    <span className='likes'><FontAwesomeIcon icon={faSpotify} style={{ color: "#16cd13", fontSize: '25px', marginRight: '5px' }} /><b>Spotify</b><b>&#183;</b>465,822 likes<b>&#183;</b>1 new entry</span>

                                </div>
                            </div>
                            <div className='playlist-container'>
                                <div className='playlist-main'>
                                    <div className='list'>
                                        <div className='playlist-play' style={{ color: "#1db954" }}><FontAwesomeIcon icon={faPlay} className='play' /></div>
                                        <div><svg xmlns="http://www.w3.org/2000/svg" height="" width="40" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></div>
                                        <div><FontAwesomeIcon icon={faEllipsis} style={{ color: "#949494", fontSize: '25px' }} /></div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center' }}><span style={{ fontSize: '16px', color: '#949494' }}>List &nbsp;</span><svg xmlns="http://www.w3.org/2000/svg" height="" width="18" viewBox="0 0 448 512"><path fill="#a3a3a3" d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg></div>
                                </div>
                                <div>
                                    <table>
                                        <tr>
                                            <th style={{ width: "20px" }}>#</th>
                                            <th style={{ width: "500px" }}>Title</th>
                                            <th style={{ width: "300px" }}>Plays</th>
                                            <th style={{ width: "250px" }}>Album</th>
                                            <th><FontAwesomeIcon icon={faClock} /></th>
                                        </tr>
                                        <tr>
                                            <td colSpan={5}><hr style={{ height: '1px', color: '#b3b3b3', opacity: '0.5' }} /></td>
                                        </tr>
                                        <tr>
                                            <td>1</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='	https://i.scdn.co/image/ab67616d000048515f3ede47954a93aa03efe5f9'></img>
                                                <div>
                                                    <p className='title'>Arjan Vaily</p>
                                                    <p>Manan Bhardwaj,Bhupinder..</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>1,935,687</td>
                                            <td>ANIMAL</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>2</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='	https://i.scdn.co/image/ab67616d000048515f3ede47954a93aa03efe5f9'></img>
                                                <div>
                                                    <p className='title'>Phele Bhi Main</p>
                                                    <p>Vishal Mishra</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>1,839,093</td>
                                            <td>ANIMAL</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>3</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='https://i.scdn.co/image/ab67616d00004851021d7017f73387b008eab271'></img>
                                                <div>
                                                    <p className='title'>Satarnga(From "ANIMAL")</p>
                                                    <p>Arjit Singh</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>1,696,157</td>
                                            <td>Satranga (From "ANIMAL")</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>4</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='	https://i.scdn.co/image/ab67616d000048515f3ede47954a93aa03efe5f9'></img>
                                                <div>
                                                    <p className='title'>Saari Duniya Jalaa Denge</p>
                                                    <p>Jaani</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td> 1,923,876</td>
                                            <td>ANIMAl</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>5</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='	https://i.scdn.co/image/ab67616d00004851ac2f40efa7f20f169acfb46f'></img>
                                                <div>
                                                    <p className='title'>Tu hai kahan</p>
                                                    <p>AUR</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>1,982,232</td>
                                            <td>Tu hai kahan</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>6</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='https://i.scdn.co/image/ab67616d00004851e452a6e11147f3e56aee6f5b'></img>
                                                <div>
                                                    <p className='title'>Chaleya</p>
                                                    <p>Anirudh Ravichander</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>2,999,999</td>
                                            <td>Jawan</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>7</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='https://i.scdn.co/image/ab67616d00004851d7eb20034ff1c7b7bb3629de'></img>
                                                <div>
                                                    <p className='title'>One Love</p>
                                                    <p>Shubh</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>33,343</td>
                                            <td>One Love</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>8</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='https://i.scdn.co/image/ab67616d000048514a60872ae145776164540a7f'></img>
                                                <div>
                                                    <p className='title'>Heeriye</p>
                                                    <p>Jasleen Royal</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>735,452</td>
                                            <td>Heeriye(feat.Arjit Singh)</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>9</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='https://i.scdn.co/image/ab67616d0000485158200188973884bfc739d0a5'></img>
                                                <div>
                                                    <p className='title'>Unakku Thann -From "Chitha"</p>
                                                    <p>Santhosh Narayan</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>635,854</td>
                                            <td>Chitha</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>10</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='https://i.scdn.co/image/ab67616d0000485174a99276badeec2675a9eaec'></img>
                                                <div>
                                                    <p className='title'>Hass Hass</p>
                                                    <p>Diljit Dosanjh</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>587,321</td>
                                            <td>Hass Hass</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                        <tr>
                                            <td>11</td>
                                            <td><div style={{ display: 'flex' }}>
                                                <img src='https://i.scdn.co/image/ab67616d00004851bb25239324c4e16ae01fda36'></img>
                                                <div>
                                                    <p className='title'>Softly</p>
                                                    <p>Karan</p>
                                                </div>
                                            </div>
                                            </td>
                                            <td>504,213</td>
                                            <td>Making Memories</td>
                                            <td style={{ display: 'flex', alignItems: 'center', gap: '20px', marginTop: '10px' }}><span><svg xmlns="http://www.w3.org/2000/svg" height="" width="20" viewBox="0 0 512 512"><path fill="#787878" d="M225.8 468.2l-2.5-2.3L48.1 303.2C17.4 274.7 0 234.7 0 192.8v-3.3c0-70.4 50-130.8 119.2-144C158.6 37.9 198.9 47 231 69.6c9 6.4 17.4 13.8 25 22.3c4.2-4.8 8.7-9.2 13.5-13.3c3.7-3.2 7.5-6.2 11.5-9c0 0 0 0 0 0C313.1 47 353.4 37.9 392.8 45.4C462 58.6 512 119.1 512 189.5v3.3c0 41.9-17.4 81.9-48.1 110.4L288.7 465.9l-2.5 2.3c-8.2 7.6-19 11.9-30.2 11.9s-22-4.2-30.2-11.9zM239.1 145c-.4-.3-.7-.7-1-1.1l-17.8-20c0 0-.1-.1-.1-.1c0 0 0 0 0 0c-23.1-25.9-58-37.7-92-31.2C81.6 101.5 48 142.1 48 189.5v3.3c0 28.5 11.9 55.8 32.8 75.2L256 430.7 431.2 268c20.9-19.4 32.8-46.7 32.8-75.2v-3.3c0-47.3-33.6-88-80.1-96.9c-34-6.5-69 5.4-92 31.2c0 0 0 0-.1 .1s0 0-.1 .1l-17.8 20c-.3 .4-.7 .7-1 1.1c-4.5 4.5-10.6 7-16.9 7s-12.4-2.5-16.9-7z" /></svg></span> 3:10</td>
                                        </tr>
                                    </table>
                                </div>
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
                    <button type="button">Sign up free</button>
                </div>
            </div>

        </div>
    )
}