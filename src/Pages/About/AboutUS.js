import React from 'react'

const AboutUS = () => {
    return (
        <>
            <div className="Aboutus bg-black text-white">
                <div className="infoo p-5">
                    <h2>Our Story</h2>
                    <p className='pt-5'>We are trying to create an eco system for esports this is where you want to organize esports tournaments or analyze esports tournaments</p>
                    <p className='pt-5'>We can explain to you how we can do that</p>
                    <p className='pt-5'>there are two part to doing it first is organize an esports tournament and second one is analyze the tournament</p>
                </div>
                <div className="organizing pt-5 d-flex g-0">
                    <div className="description border round p-5 w-75">
                        <div className="Title">
                            <h5>Organizing E-Sports Tournament :-</h5>
                        </div>
                        <div className="heading pt-3">1. Define Tournament Structure</div>
                        <div className="list">
                            <ul>
                                <li className='pt-2'>Decide on the game(s) you want to include in your tournament.</li>
                                <li className='pt-2'>Determine the format (single-elimination, double-elimination, round-robin, etc.).</li>
                                <li className='pt-2'>Establish rules and guidelines for participants.</li>
                            </ul>
                        </div>
                        <div className="heading pt-3">2. Online Platform</div>
                        <div className="list">
                            <ul>
                                <li className='pt-2'>Choose a reliable online platform for hosting the tournament.</li>
                                <li className='pt-2'>Platforms like ESL Play, Battlefy, and Toornament provide tournament organization tools.</li>
                            </ul>
                        </div>
                        <div className="heading pt-3">3. Registration and Promotion</div>
                        <div className="list">
                            <ul>
                                <li className='pt-2'>Create a user-friendly registration process for participants.</li>
                                <li className='pt-2'>Promote your tournament through social media, partnerships, and gaming communities.</li>
                            </ul>
                        </div>
                        <div className="heading pt-3">4. Prize Pool and Sponsors</div>
                        <div className="list">
                            <ul>
                                <li className='pt-2'>Define a prize pool to attract participants.</li>
                                <li className='pt-2'>Seek sponsorships from gaming-related companies for additional support.</li>
                            </ul>
                        </div>
                        <div className="heading pt-3">5. Streaming and Commentary</div>
                        <div className="list">
                            <ul>
                                <li className='pt-2'>Set up a streaming platform (Twitch, YouTube, etc.) for live coverage.</li>
                                <li className='pt-2'>Consider having professional commentators for a better viewer experience.</li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="imggg w-100">
                        <img src="https://esl.com/wp-content/uploads/2022/06/LAN-Events-and-eSports-Header_0.jpg" alt="" />
                    </div> */}
                </div>
            </div>
        </>
    )
}

export default AboutUS