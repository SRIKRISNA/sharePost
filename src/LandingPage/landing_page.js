import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../assests/bgimg.jpg';
import './landing.css';

const LandingPage = () =>{
    const navigate = useNavigate();
    const handleSubmit = () => {
        navigate('/postview');
    }
    return(
        <>
            <div className='landing_container'>
                <div className='img_bg'>
                     <img src={Banner} alt="BannerImage" id='img-banner'></img>
                </div>
                <div className='content'>
                    <h2>10X Team 04</h2>
                    <button type='button' style={{"cursor":"pointer"}} onClick={handleSubmit}>Enter</button>
                </div>
            </div>
        </>
    )
}
export default LandingPage;