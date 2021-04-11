import styled, { css } from 'styled-components'
import { useSpring, config, animated} from 'react-spring';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const Rdiv = styled(animated.div)`
position: fixed;
width: ${props => props.third? '33.33vw' : '50vw'};
height: 100%;
right: 0;
background-color: black;
//z-index: 5;
color: white;
`


const Desc = styled.div`
font-family: 'Source Code Pro', monospace;
margin-left: 4%;
margin-top: 4%;
font-size: 1.5rem;

`
const Sa = styled.a`
color: white;
margin-right: 2em;


`

export default function Panel(props){
    const rightpeek = useSpring({
        right: "0%", opacity: 1,
      from: { right: "-100%", opacity: 0 },
      config: config.fast
    });
    
    
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

        <Rdiv third={props.third}>
          {props.images &&
          
          <Slider {...settings}>
        {props.images.map((i)=>
          <img src={i} />
        )}

        </Slider>}
        
        <Desc>
        {props.desc}
        </Desc>
        <Desc>
          {props.label?
          props.label.map((i,index)=>
           <Sa href={props.link[index]} target="_blank" >{i}</Sa> 
          
          ):""}
        </Desc>
        

        </Rdiv>
    )

    

}