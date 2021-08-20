import React from 'react';
import '../App.css';
import './GenSection.css';
import { Button } from './Button'

function GenSection() {
    return (
        <div className='gen-container'>
            <video src="assets/video2.mp4"
            autoPlay loop muted/>
            <h1>ADVENTURE AWAITS</h1>
            <p>what are you waiting for?</p>
            <div className='gen-btns'>
                <Button
                 className='btns'
                 buttonStyle='btn--outline'
                 buttonSize='btn--large'
                >
                    GET STARTED
                </Button>
                <Button
                 className='btns'
                 buttonStyle='btn--primary'
                 buttonSize='btn--large'
                >
                    WATCH TRAILER <i className='far fa-play-circle'/>
                </Button>
            </div>
        </div>
    )
}

export default GenSection
