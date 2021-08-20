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
                          src="/assets/img-6.webp"
                          text="Visit one of the new seven wonders of the modern world"
                          label="Popular"
                          path="/service"
                        />
                        <CardItem
                          src="/assets/img-3.webp"
                          text="Get to Know one of the most visited and emblematic places in the world"
                          label="Popular"
                          path="/service"
                        />  
                    </ul>
                    <ul className="cards__items">
                        <CardItem
                          src="/assets/img-2.webp"
                          text="Explore and beats to your rhythm in Argentina"
                          label="Adventure"
                          path="/service"
                        />
                        <CardItem
                          src="/assets/img-1.webp"
                          text="Enjoy the luxury and relax in one island in Bora Bora"
                          label="Luxury"
                          path="/service"
                        />
                        <CardItem
                          src="/assets/img-4.webp"
                          text="The most special day of your lives in Cancun"
                          label="Romance"
                          path="/products"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
