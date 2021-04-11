import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components'
import {useTransition, useSpring, config, animated} from 'react-spring';
import Panel from './components/Sidepanel';


const Iwrap = styled(animated.div)`
display: flex;
justify-content: center;
padding: 0;
`
const Simg = styled(animated.img)`
width: 33.33vw;
height: 33.33vw;
//filter: grayscale(100%);
object-fit: cover;
`

const Sdiv = styled(animated.div)`
position: absolute;
`

const Lb = styled(animated.div)`
    z-index: 3;
    position: fixed;
    top: 0;
    left: 33.33vw;
    width:66.66vw;
    height: 100%;
  
    backdrop-filter: blur(10px);
    display: flex;
    align-items: center;
    justify-content: space-between;
`


const Clickout = styled.div`
left:0;
width:${props => props.third? '50%' : '25%'};
height:100%;
//background-color: red;
`
export default function Item(props) {
    const [hovered, setHover] = useState(false);
    const [lightbox, setLightbox] = useState(false);

    const hideLightbox = () =>{
        setLightbox(false);
        //console.log("hidden");
    }


    const big = useSpring({
      filter: hovered ? "saturate(100%)" : "saturate(0%)",
      
      config: config.slow
    });

    const blur = useSpring({
        backdropFilter: lightbox? "blur(5px)" : "blur(0px)",
        backgroundColor: lightbox? "rgba(0,0,0, 0.7)" : "rgba(0,0,0,0)",
        config: config.fast
    });

    const ratio = window.innerWidth/window.innerHeight > 2 ? true : false;
   


    return(
        <>
        
        <Iwrap onPointerOver={(e) => setHover(true)}
       onPointerOut={(e) => setHover(false)} 
       onClick={() => setLightbox(true)}  >
          
        <Simg  src={props.cell.images[0]}  />
        
        </Iwrap>
        {lightbox ? <Lb style={blur}  >
            <Clickout third={ratio} onClick={hideLightbox}/>

            <Panel third={ratio}
             images={props.cell.images}
             desc={props.cell.desc}
             link={props.cell.link}
             label={props.cell.label}
             />
            </Lb>: ""}
        </>
    );

}