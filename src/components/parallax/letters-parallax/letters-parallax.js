import React from 'react'
import { Parallax } from 'react-scroll-parallax'

import './letters-parallax.css'


const getRandomInt = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

const LettersParallax = ({ letters }) => {
    const letterItems = letters.map((item, i) => {
    const offset = getRandomInt(-150, 150);
    const isSlower = getRandomInt(0, 1) ? true : false;
        return (
            <Parallax className='letter'
                key={i}
                y={[`${-offset +1}px`,`${offset +1}px`]}                        
                slowerScrollRate={isSlower}
                >
                {item}
            </Parallax>
        )
    })

    return (
        <div className="parallax-container">
            <div className="word">
                {letterItems}
            </div>
        </div>
    )

}

export default LettersParallax
