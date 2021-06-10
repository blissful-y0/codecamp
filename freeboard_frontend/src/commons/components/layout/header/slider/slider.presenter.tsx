import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import SliderWrapper from './slider.style';

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
  };

  const headerImage = {
    src1: '/header.png',
    src2: '/header2.png',
    src3: '/header3.png',
    src4: '/header.png',
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <div>
          <img
            style={{outline: 'none', width: '100%'}}
            src={headerImage.src1}
          />
        </div>
        <div>
          <img
            style={{outline: 'none', width: '100%'}}
            src={headerImage.src2}
          />
        </div>
        <div>
          <img
            style={{outline: 'none', width: '100%'}}
            src={headerImage.src3}
          />
        </div>
        <div>
          <img
            style={{outline: 'none', width: '100%'}}
            src={headerImage.src4}
          />
        </div>
      </Slider>
    </SliderWrapper>
  );
}
