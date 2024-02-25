import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "../Playlist";
import Login from "../Login";
import SignUp from "../SignUp";
import Playlists from "../Playlists";


const AppRouter = () => {
    return (
      <Router>
    
            <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/SignUp" element={<SignUp />} />
            <Route path="/Playlists" element={<Playlists/>}/>
            </Routes>
          
      </Router>
    );
  };
  
  export default AppRouter;