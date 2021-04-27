import { animated, useSpring,config } from '@react-spring/web';
import React, { useState } from 'react';

const Animation = () => {
    const [flip, set] = useState(false)
    const props = useSpring({
        to: { opacity: 1 },
        from: { opacity: 0.25 },
        reset: true,
        reverse: flip,
        delay: 200,
        config: config.molasses,
        onRest: () => set(!flip),
    })
    return (
     
            <animated.h1 style={props} className="me-5 text-color"><b>No 1. Car Wash Booking System</b></animated.h1>
       
    );
};

export default Animation;