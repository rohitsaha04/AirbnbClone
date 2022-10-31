import React from 'react';
import "./Trip.css";
import img1 from "./trip1.webp";
import img2 from "./trip2.webp";
import img3 from "./trip3.webp";
import img4 from "./trip4.webp";
import img5 from "./trip5.webp";
import img6 from "./trip6.webp";



function Trip() {
  return (
    <>
    
      <div className='main-scroll-div-trip'>
            <div className='cover'>
                <div className='scroll-images-trip'>
                    <div className='child'>
                        <img className='img' src={img1} alt=''></img>
                        <h4 className='img-title-trip'>Plan The Perfect New York <br /> Vacation</h4>
                        <h5 className='from'> From  ₹1,564 <span className='person'>/person</span></h5>
                    </div>
                    <div className='child'>
                        <img className='img' src={img2} alt=''></img>
                        <h4 className='img-title-trip'>Design your trip to Barcelona <br /> with Gemma</h4>
                        <h5 className='from'> From  ₹3,116 <span className='person'>/person</span></h5>
                    </div>
                    <div className='child'>
                        <img className='img' src={img3} alt=''></img>
                        <h4 className='img-title-trip'>Craft a custom trip to Korea <br /> with Jay</h4>
                        <h5 className='from'> From  ₹3,472 <span className='person'>/person</span></h5>
                    </div>
                    <div className='child'>
                        <img className='img' src={img4} alt=''></img>
                        <h4 className='img-title-trip'>Live Tulum like a local <br /></h4>
                        <h5 className='from'> From  ₹624 <span className='person'>/person</span></h5>
                    </div>
                    <div className='child'>
                        <img className='img' src={img5} alt=''></img>
                        <h4 className='img-title-trip'>Plan a trip to amazing Austin <br /></h4>
                        <h5 className='from'> From  ₹2,058 <span className='person'>/person</span></h5>
                    </div>
                    <div className='child'>
                        <img className='img' src={img6} alt=''></img>
                        <h4 className='img-title-trip'>Create your Rome itinerary <br /> with Debora</h4>
                        <h5 className='from'> From  ₹984 <span className='person'>/person</span></h5>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Trip