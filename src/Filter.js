import React from 'react';
import "./Filter.css";

function Filter() {
    return (
        <div className='main-scroll-filter'>
            <div className='cover'>
                <div className='scroll-filter'>
                    <div className='child-filter'>
                        <button className='btn'>Dates</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Group size</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>More filters</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Great for groups</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Family-friendly</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Animals</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Arts and writing</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Baking</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Cooking</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Dance</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Drinks</button>
                    </div>
                    <div className='child-filter'>
                    <button className='btn'>Entertainment</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Filter