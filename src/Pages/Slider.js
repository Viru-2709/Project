import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import WELCOME from '../Photos/WELCOME.jpg'
import TOURNAMENT from '../Photos/tournamenet.jpg'
const Slider = () => {
    return (
        <>
            <div className="Slider">
                <Carousel fade>
                    <Carousel.Item>
                        <a href="/Home">
                            <img className='w-100' src={WELCOME} alt="" />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="/Tournament">
                            <img className='w-100' src={TOURNAMENT} alt="" />
                        </a>
                    </Carousel.Item>
                    <Carousel.Item>
                        <a href="/Contact">
                            <img className='w-100' src={WELCOME} alt="" />
                        </a>
                    </Carousel.Item>
                </Carousel>
            </div>
        </>
    )
}

export default Slider