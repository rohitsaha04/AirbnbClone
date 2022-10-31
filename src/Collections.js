import React from 'react';
import "./Collection.css";
import img1 from "./img1.webp";
import img2 from "./img2.webp";
import img3 from "./img3.webp";



function Collections() {
    return (
        <div className='main-scroll-div'>
            <div className='cover'>
                <div className='scroll-images'>
                    <div className='child'>
                        <img className='img' src={img1} alt=''></img>
                        <h5 className='img-title'>Collection</h5>
                        <h2 className='img-para'>Most popular around the world</h2>
                        <button className='show'>Show all</button>
                    </div>
                    <div className='child'>
                        <img className='img' src={img2} alt=''></img>
                        <h5 className='img-title'>Collection</h5>
                        <h2 className='img-para'>Great for team building</h2>
                        <button className='show'>Show all</button>
                    </div>
                    <div className='child'>
                        <img className='img' src={img3} alt=''></img>
                        <h5 className='img-title'>Collection</h5>
                        <h2 className='img-para'>Fun for the family</h2>
                        <button className='show'>Show all</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Collections


// https://docs.google.com/document/d/1eyF66kd1BW3To5zuqpG3O-CdAwHb26TUuKt-4Jv6IEk/edit?usp=drivesdk