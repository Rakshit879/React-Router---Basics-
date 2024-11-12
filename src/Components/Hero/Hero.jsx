import React from 'react';
import '../Hero/Hero.css'

export default function Hero(){
    return(
        <div className='hero_container'>
            <div className="heroUpperContainer">
                <div className="upperLeft flex">
                    <img src="https://i.ibb.co/5BCcDYB/Remote2.png" alt="logo" id='hero_image'/>
                </div>
                <div className="upperRight flex">
                    <h1 className='text-4xl font-bold'>Download Now</h1>
                    <h1 className='text-3xl font-bold'>Lorem, ipsum.</h1>
                    <button className='download_button'>Download now</button>
                </div>
            </div>
            <div className='lowerHeroContainer flex'>
                <img src="https://i.ibb.co/2M7rtLk/Remote1.png" alt="image" id='hero_lower_image'/>
                <p className='text-4xl mt-3 font-semibold'>Lorem, ipsum dolor.</p>
            </div>
        </div>
    )
}