import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components'
import {useTransition, useSpring, config, animated} from 'react-spring';
import Panel from './components/Sidepanel';
import bio from './bio.json';




const Lb = styled(animated.div)`
    z-index: 6;
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
export default function Itemb() {
    const [lightbox, setLightbox] = useState(false);

    const hideLightbox = () =>{
        setLightbox(false);
        //console.log("hidden");
    }



    const blur = useSpring({
        backdropFilter: lightbox? "blur(5px)" : "blur(0px)",
        backgroundColor: lightbox? "rgba(0,0,0, 0.7)" : "rgba(0,0,0,0)",
        config: config.fast
    });

    const ratio = window.innerWidth/window.innerHeight > 2 ? true : false;
   


    return(
        <>
        <Lb style={blur}  >
            <Clickout third={ratio} onClick={hideLightbox}/>
            <div>hello</div>

            <Panel third={ratio}
           
             desc={bio.text}
             />
            </Lb>
        </>
    );

}