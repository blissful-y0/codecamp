import Head from 'next/head';
import React, {useEffect} from 'react';

export function Map({address}) {
  useEffect(() => {
    if (!address) {
      address = '서울특별시 구로구 구로동 197-21';
    }

    const container = document.getElementById('map');
    const options = {
      // @ts-ignore
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    // @ts-ignore
    const map = new window.kakao.maps.Map(container, options);
    // @ts-ignore
    const geocoder = new window.kakao.maps.services.Geocoder();
    geocoder.addressSearch(address, function (result, status) {
      // 정상적으로 검색이 완료됐으면
      // @ts-ignore
      if (status === kakao.maps.services.Status.OK) {
        // @ts-ignore
        var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
        // 결과값으로 받은 위치를 마커로 표시합니다
        // @ts-ignore
        var marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });
        // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
        map.setCenter(coords);
      }
    });
  }, [address]);

  const onClickMap = () => {
    window.open(
      'https://map.kakao.com/link/map/33.450701,126.570667',
      'target:_blank'
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="//dapi.kakao.com/v2/maps/sdk.js?appkey=7b361276d43366bba8247ce0a8956924&libraries=services"
        ></script>
      </Head>
      <div
        id="map"
        style={{width: '450px', height: '250px', border: '1px solid black'}}
      ></div>
    </>
  );
}
export default Map;
