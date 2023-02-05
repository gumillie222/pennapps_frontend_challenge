import React from 'react';
import './App.css';


import About from './Components/About';
import Apply from './Components/Apply';
import Beleaf from './Components/Beleaf';
import Navbar from './Components/Navbar';
import Countdown from './Components/Countdown';
import Footer from './Components/Footer';


import { BrowserRouter } from 'react-router-dom';

import banner from './images/banner.png';
import landing from './images/landing-background.png';



function App() {
    
    return(
        <BrowserRouter>
        
            <div id="frontpage">
                
            <img src={banner} class="banner" alt="PENNAPPS XXIII" />
            <h3 class="date">September 8-10, 2023</h3>

            <Countdown />

            <img src={landing} class="background" alt="iamge here" />

            </div>

                <Navbar />
                <Beleaf />
                <About />
                <Apply />
                <Footer />

        </BrowserRouter>
    );
}

export default App;




