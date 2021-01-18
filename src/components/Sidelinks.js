import styled from 'styled-components';
import React, { useRef, useState } from 'react';
import { useSpring, config, animated} from 'react-spring';
import Icons from './Social'
//import './index.css';



const Inter = styled(animated.div)`
font-family:'Source Code Pro', monospace;
color: #5C5C5C;
font-size: 80%;
`

export default function Side(props){
    const [hovered, setHover] = useState(false);
    const [active, setActive] = useState(false);

    const glow = useSpring({
        color: hovered ? "white" : "rgb(64,64,64)",
        config: config.gentle
      });

    return(
      <>
      
        <Inter onClick={() => setActive(true)} style={glow} onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}>
        {props.text}
        </Inter>
     
      </>
        );
}