import styled from 'styled-components'
import React, { useRef, useState } from 'react';
import { useSpring, config, animated} from 'react-spring';

const Simg = styled(animated.img)`
//flex: 1 1 auto;
width:12%;
margin-right: 5%;
filter: invert(0.25);

`


export default function Iimage(props){
    const [hovered, setHover] = useState(false);

    const glow = useSpring({
        filter: hovered ? "invert(1)" : "invert(0.25)",
        config: config.gentle
      });

    return(
        <a href={props.link} target="_blank" >
        <Simg style={glow}
        onPointerOver={(e) => setHover(true)}
        onPointerOut={(e) => setHover(false)}
        src={props.image} />
        </a>
    );

}