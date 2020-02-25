// import 'bootstrap/dist/css/bootstrap.min.css';
import './src/styles/bootstrap.min.css';
// import './src/styles/main.css';

import React from 'react'
import { ParallaxProvider } from 'react-scroll-parallax'


export const wrapRootElement = ({ element }) => {
  return (
  	    <ParallaxProvider>
  	    	{element}
  	    </ParallaxProvider>
  	    )
}

