import Slider from 'react-slick';
import {SliderWrapper} from './read.slider.style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function SimpleSlider() {
  const headerImage = ['/header.png', '/header2.png', '/header3.png'];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dotsClass: 'slick-dots slick-thumb',
    // customPaging: function (i) {
    //   <div>
    //     <img src={headerImage[i]} />
    //   </div>;
    // },
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {headerImage.map((data, index) => (
          <div key={index}>
            <img src={data} style={{width: '100%', outline: 'none;'}} />
          </div>
        ))}
      </Slider>
    </SliderWrapper>
  );
}
