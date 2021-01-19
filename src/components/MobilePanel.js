import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components'
import { useSpring, config, animated} from 'react-spring';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Desc = styled.div`
font-family: 'Source Code Pro', monospace;
margin: 4%;
font-size: 2.5vw;
color: white;
`
const Sa = styled.a`
color: white;
margin-right: 2em;
`

export default function Mobilepanel(props){
    const [active, setActive] = useState(false);
    var settings = {
      dots: false,
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 4000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
      };



    return(
        <div>
        <Slider {...settings}>
        {props.project.images.map((i)=>
          <img src={i} />
        )}

        </Slider>
        <Desc>
        {props.project.desc}
        </Desc>
        <Desc>
          {props.project.label?
          props.project.label.map((i,index)=>
           <Sa href={props.project.link[index]} target="_blank" >{i}</Sa> 
          ):""}
        </Desc>
        </div>
    );
    
}