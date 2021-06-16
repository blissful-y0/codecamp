import Head from 'next/head';
import React, {useEffect} from 'react';

const Map: React.FC = () => {
  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      // @ts-ignore
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    // @ts-ignore
    const map = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7b361276d43366bba8247ce0a8956924"
        ></script>
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
            var container = document.getElementById('map');
            var options = {
              center: new kakao.maps.LatLng(33.450701, 126.570667),
              level: 3,
            };
            var map = new kakao.maps.Map(container, options);
          `,
          }}
        /> */}
      </Head>
      <div id="map" style={{width: '500px', height: '400px'}}></div>
    </>
  );
};

export default Map;
