import React from 'react'
import { Parallax } from "react-parallax";

const img = "https://images.unsplash.com/photo-1554941071-8ec75d5379b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80";
const ImageParallax = ({ children }) => {
    return (
        <Parallax bgImage={img} strength={300}>
          <div style={{ height: '500px'}}>
            { children }
          </div>
        </Parallax>
    )
}

export default ImageParallax
