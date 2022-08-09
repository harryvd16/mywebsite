import React from 'react'
import Portfolio_data from './Portfolio_data'
import Card from './Card'
import "./Portfolio.css"


const Portfolio = () => {
  return (
    <>
        <section className='portfolio top' id='portfolio'>
            <div className="container">
                <div className="heading text-center">
                    <h4>CHECKOUT MY PORTFOLIO</h4>
                    <h1>My portfolio</h1>
                    <h2>In a process of Optimising/Automating the complete pre-sales process, which majorly benefits/helps a sales professionals, marketing & presales team in preparing a presentation/quote in just few clicks.</h2>
                </div>

                <div className="content grid">
                    {Portfolio_data.map((val, index) => {
                        return<Card key={index} image={val.image} title={val.title} 
                        desc={val.desc}
                        price={val.price} 
                        category={val.category} 
                        variant1={val.variant1}
                        variant2={val.variant2}
                        variant3={val.variant3}
                        variant4={val.variant4}
                        variant5={val.variant5}/>
                    })}
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Portfolio