/* global kakao */

import * as stores from '@/data/store_data.json';
import Script from 'next/script';

declare global {
  interface Window {
    kakao: any;
  }
}

const DEFAULT_LAT = 37.56720;
const DEFAULT_LNG = 126.97798;

export default function Map() {
  const loadkakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);

      //식당 데이터 마커 띄우기
      stores?.["DATA"]?.map((store) => {

        var imageSrc = store?.bizcnd_code_nm ? `/images/markers/${store?.bizcnd_code_nm}.png` : '/images/markers/default.png', // 마커이미지의 주소입니다
          imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
          imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다.

        // 마커가 표시될 위치입니다
        var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption),
            markerPosition = new window.kakao.maps.LatLng(store?.y_dnts, store?.x_cnts);

        // 마커를 생성합니다
        var marker = new window.kakao.maps.Marker({
            position: markerPosition,
            image: markerImage // 마커이미지 설정
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);
      });
    });
  }

  return (
    <>
      <Script
        strategy='afterInteractive'
        type='text/javascript'
        src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_MAP_CLIENT}&autoload=false`}
        onReady={loadkakaoMap}
      />
      <div id='map' className='w-full h-screen' />
    </>
  );
}