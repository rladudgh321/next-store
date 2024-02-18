import { Dispatch, SetStateAction, useCallback, useEffect } from "react";

interface MarkersProps {
  map: any;
  stores: any[];
  setCurrentStore: Dispatch<SetStateAction<any>>;
}

export default function Markers({map, stores, setCurrentStore}: MarkersProps) {
  const loadKakaoMarkers = useCallback(()=>{
    //식당 데이터 마커 띄우기
    stores?.map((store) => {

      var imageSrc = store?.bizcnd_code_nm ? `/images/markers/${store?.bizcnd_code_nm}.png` : '/images/markers/default.png', // 마커이미지의 주소입니다
        imageSize = new window.kakao.maps.Size(40, 40), // 마커이미지의 크기입니다
        imageOption = {offset: new window.kakao.maps.Point(27, 69)}; // 마커이미지의 옵션입니다. 마커의 좌표와 일치시킬 이미지 안에서의 좌표를 설정합니다

      // 마커가 표시될 위치입니다
      var markerImage = new window.kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);
      
      var markerPosition = new window.kakao.maps.LatLng(store?.y_dnts, store?.x_cnts);

      // 마커를 생성합니다
      var marker = new window.kakao.maps.Marker({
          position: markerPosition,
          image: markerImage // 마커이미지 설정
      });

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);


      var content = `<div class="infowindow">${store?.upso_nm}</div>`

      //커스텀 오버레이
      var customOverlay = new window.kakao.maps.CustomOverlay({
        content,
        position: markerPosition,
        xAnchor: 0.6,
        yAnchor: 0.91,
    });

      window.kakao.maps.event.addListener(marker, 'mouseover', function() {
        // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
        customOverlay.setMap(map)
      });
      
      // 마커에 마우스아웃 이벤트를 등록합니다
      window.kakao.maps.event.addListener(marker, 'mouseout', function() {
          // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
          customOverlay.setMap(null)
      });

      window.kakao.maps.event.addListener(marker, 'click', function() {
        setCurrentStore(store);
      })

    });
  },[map, setCurrentStore, stores]);
  useEffect(() => {
    if(map) {
      loadKakaoMarkers();
    }
  },[loadKakaoMarkers, map]);
  return (
    <></>
  );
}