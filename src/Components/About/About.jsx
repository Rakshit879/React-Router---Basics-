import React from 'react';
import "../About/About.css";

export default function About(){
    return(
        <div className='about_container'>
            <div className="about_leftcontainer">
                <img src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" alt="about_image" className='about_image'/>
            </div>
            <div className="about_rightcontainer">
                <h1 className='about_heading'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam, facilis!</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non aliquam laudantium accusantium repellendus est asperiores eum aliquid aut adipisci soluta, quaerat eaque dignissimos eos nam iusto tempora consequatur officiis doloremque eligendi. Adipisci fugiat deserunt, eius tempora in neque quisquam nisi, aperiam impedit magni ipsam? Natus placeat ducimus libero rem earum?</p>
            </div>
        </div>
    )
}