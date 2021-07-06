import React, { useRef, useState } from 'react';
import styled, { css } from 'styled-components'
import { useSpring, config, animated} from 'react-spring';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const Desc = styled.div`
font-family: 'Nunito Sans', sans-serif;
font-weight: 600;
margin: 4%;
font-size: 3.8vw;
color: #C0C0C0;

`
const Sa = styled.a`
color: #C0C0C0;

margin-right: 2em;
`

export default function Mobilepanel(props){
    const [active, setActive] = useState(false);
    var settings = {
      dots: false,
      infinite: true,
      speed: 600,
      autoplay: true,
      autoplaySpeed: 8000,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false
      };



    return(
        <div>
        <Slider {...settings}>
        {props.project.images && props.project.images.map((i)=>
          <img src={i} />
        )}
        {props.project.videos && props.project.videos.map((i)=>
          <video autoplay="true" muted="true" loop="true" playsinline="true" src={i} />)}

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