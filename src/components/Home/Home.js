import React from 'react';
import img from '../../images/20216911550_1_2.jpg'
const Home = () => {
    return(
        <div className="home">
            <div className='container-image'>
            <img className='image' src={img} alt=''/>
            </div>
            
            <div className='contain'>
                <h1>Rick and morty</h1>
                <div className='episodes'>

                </div>
            </div>
            
        </div>
    )
}

export default Home;