import React from 'react'
import './Cards.css'
import CardItem from './CardItem'

function Cards() {
    return (
        <div className="cards">
            <h1>Check out these AWSOME Destinations!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                          src="/assets/machu-pichu-540145_1920.jpg"
                          text="Visit one of the new seven wonders of the modern world"
                          label="Popular"
                          path="/services"
                        />
                        <CardItem
                          src="/assets/canal-1209808_1280.jpg"
                          text="Get to Know one of the most visited and emblematic places in the world"
                          label="Popular"
                          path="/services"
                        />  
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                          src="/assets/girl-1561989_1920.jpg"
                          text="Explore and beats to your rhythm in Argentina"
                          label="Adventure"
                          path="/services"
                        />
                        <CardItem
                          src="/assets/bora-bora-3023437_1280.jpg"
                          text="Enjoy the luxury and relax in one island in Bora Bora"
                          label="Luxury"
                          path="/services"
                        />
                        <CardItem
                          src="/assets/mexico-2673734_1280.jpg"
                          text="The most special day of your lives in Cancun"
                          label="Romance"
                          path="/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
