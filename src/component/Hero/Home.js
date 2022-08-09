import React from 'react'
import "./Home.css"
import HTML5 from "../pic/HTML5.png"
import CSS3 from "../pic/CSS3.png"
import JS from "../pic/JS.png"
import REACT from "../pic/REACT.png"
import NODE from "../pic/NODE.png"
import GIT from "../pic/GIT.png"
import MONGODB from "../pic/MONGODB.png"


// import hero from "../pic/hero1.gif"
import Typewriter from 'typewriter-effect';


const Home = () => {
  return (
    <>
        <section className='hero' id='home'>
            <div className="container f_flex top">
                <div className="left top">
                    <h3>WELCOME TO MY WEBSITE</h3>
                    <h1>
                        Hi, I'm <span>HARISH DANDAVATI</span> 
                    </h1>
                    <h2>
                        <span> <Typewriter options={{
                                strings: [' a Professional Web Developer.',' a Digital Marketer.', ' a Lighting Expert.', ' an Electrical Engineer.', ' a Sales Person.',  ' a problem solver.'],
                                autoStart: true,
                                loop: true,
                            }} />
                            
                        </span>                        
                    </h2>

                    <p>Get to Know Harish, <br />
                    Harish Dandavati was Born in Mysore, raised in Dharwad & now in Bangalore, he is an Electrical Engineering graduate with core technical knowledge. Also a professional coder, web developer, digital marketer, lighting enthusiast, healthcare enthusiast & a tech person. 
                    <br />
                    He is very keen to learn new things & implement the same keeping in a view of simplying the complex process.
                    <br />

                    Also, a succesful sales person, who has & is working with Fortune 500 companies.
                    <br />
                    He has helped OEM's capture new business, increase their reach & revenue in newer segments & territories.
                    </p>

                    <br />

                    <div className="hero_btn d_flex">
                        <div className="col-1">
                            <h4>EXPLORE WITH ME</h4>
                            <div className="button">
                                <button className="btn_shadow">
                                    <a href="https://www.facebook.com/harish.dandavati.3/" target="_blank"><i className="fab fa-facebook-f"></i></a>
                                </button>
                                <button className="btn_shadow">
                                    <a href="https://www.instagram.com/harris__d/?hl=en" target="_blank"><i className="fab fa-instagram"></i></a>
                                </button>
                                <button className="btn_shadow">
                                    <a href="https://www.linkedin.com/in/harish-dandavati-63b206200/" target="_blank"><i className="fab fa-linkedin-in"></i></a>
                                </button>
                            </div>
                        </div>

                        <div className="col_1">
                            <h4>BEST SKILL ON </h4>
                            <button className='btn_shadow'>
                                <img src={HTML5} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={CSS3} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={JS} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={REACT} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={NODE} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={GIT} alt="" />
                            </button>
                            <button className='btn_shadow'>
                                <img src={MONGODB} alt="" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* <div className="right">
                    <div className="right_img">
                        <img src={hero} alt="" />
                    </div>
                </div> */}
            </div>
        </section>
    </>
  )
}

export default Home