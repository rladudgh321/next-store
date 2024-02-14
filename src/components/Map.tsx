/* global kakao */

import Script from 'next/script';

declare global {
  interface Window {
    kakao: any;
  }
}

export default function Map() {
  const loadkakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(37.56720, 126.97798), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      new window.kakao.maps.Map(mapContainer, mapOption);
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