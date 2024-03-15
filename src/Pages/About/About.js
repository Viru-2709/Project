import React from 'react'
import { FaRegPlayCircle } from "react-icons/fa";
import Banner from './IMG/Banner.webp'
const About = () => {
    return (
        <>
            <div className="About bg-black text-white">
                <div className="videos">
                    <img className='w-100' src={Banner} alt="" />
                    <a href="https://www.youtube.com/watch?v=mx46LpKitTs"> <FaRegPlayCircle /></a>
                </div>
                <div className="images w-100 border-bottom">
                    <img className='w-25 border' src="https://staticg.sportskeeda.com/editor/2019/03/21188-15528102987421-800.jpg" alt="" />
                    <img className='w-25 border' src="https://www.chapmantaylor.com/uploads/ESports_Arena_2.jpg" alt="" />
                    <img className='w-25 border' src='https://static.toiimg.com/thumb/msid-93835079,width-400,resizemode-4/93835079.jpg' alt="" />
                    <img className='w-25 border' src="https://staticg.sportskeeda.com/editor/2019/03/21188-15528102987421-800.jpg" alt="" />
                </div>
                <div className="Us d-flex">
                    <div className="info-1 p-5 w-100">
                        <h2>Who we are ? </h2>
                        <p className='pt-5 pb-5 ms-5 me-5'>E-Sports Arena is your go-to destination for quality esports content.
                            Our Team strive to provide accurate, trustworthy and timely esports news,
                            gaming content, player statistics, tournament coverage and original stories from around the India.
                        </p>
                        <a href="/Aboutus">Read More..</a>
                    </div>
                    <div className="img">
                        <img className='w-100' src="https://www.talkesport.com/wp-content/uploads/Indian-esports.webp" alt="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About