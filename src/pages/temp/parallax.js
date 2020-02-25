import React from 'react'
import LettersParallax from '../../components/parallax/letters-parallax/letters-parallax.js'
import ImageParallax from '../../components/parallax/image-parallax/image-parallax'

const logoLetters = ['B', 'E', 'L', 'A', 'R', 'U', 'S', 'I', 'A', 'N', ' ', 'D', 'I', 'R', 'E', 'C', 'T', 'O', 'R', 'S'];
const teamLetters = ['O', 'U', 'R', ' ', 'T', 'E', 'A', 'M'];


export default () => {
    return (
        <React.Fragment>
        <div style={{minHeight: '150vh'}}>
            <LettersParallax letters={logoLetters} />
        </div>
        <div style={{minHeight:'200vh'}}>
            <ImageParallax>
                <h3 style={{textAlign: 'center', color:'#fff'}}>Some text here... </h3>
            </ImageParallax>
        </div>
        </React.Fragment>
    )
}
