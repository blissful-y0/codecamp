import React from 'react';
import Slider from 'react-slick';

export default function SimpleSlider() {
  var settings = {
    dots: true,
  };

  return (
    <div
      style={{padding: '40px', background: '#419be0;'}}
      className="container"
    >
      <Slider {...settings}>
        <div>
          <img
            style={{margin: 'auto'}}
            src="http://placekitten.com/g/400/200"
          />
        </div>
        <div>
          <img
            style={{margin: 'auto'}}
            src="http://placekitten.com/g/400/200"
          />
        </div>
        <div>
          <img
            style={{margin: 'auto'}}
            src="http://placekitten.com/g/400/200"
          />
        </div>
        <div>
          <img
            style={{margin: 'auto'}}
            src="http://placekitten.com/g/400/200"
          />
        </div>
      </Slider>
    </div>
  );
}
