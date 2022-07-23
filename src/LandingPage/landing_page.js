import React from 'react';
import { useNavigate } from 'react-router-dom';
import Banner from '../assests/bgimg.png';
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
                    <h2 id='getinText'>Share Post</h2>
                    <button type='button' style={{"cursor":"pointer"}} onClick={handleSubmit}>Click to get in</button>
                </div>
            </div>
        </>
    )
}
export default LandingPage;