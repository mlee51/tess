import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function OSlider(props){
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
        <Slider {...settings}>
        <img src={props.source} />
        <img src={props.source} />
        {/*<Simg src={props.source} />
        <Simg src={props.source} />*/}
        </Slider>
    );
}