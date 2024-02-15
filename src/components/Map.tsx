/* global kakao */

import * as stores from '@/data/store_data.json';
import Script from 'next/script';
import { Dispatch, SetStateAction } from 'react';

declare global {
  interface Window {
    kakao: any;
  }
}

const DEFAULT_LAT = 37.56720;
const DEFAULT_LNG = 126.97798;

interface MapProps {
  setMap: Dispatch<SetStateAction<any>>;
}

export default function Map({setMap}: MapProps) {
  const loadkakaoMap = () => {
    window.kakao.maps.load(() => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOption = {
        center: new window.kakao.maps.LatLng(DEFAULT_LAT, DEFAULT_LNG), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOption);
      setMap(map);
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