import Map from '@/components/Map';``
import Markers from '@/components/Markers';
import { useState } from 'react';
import * as stores from '@/data/store_data.json';
import StoreBox from '@/components/StoreBox';

export default function Home() {
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  const storeDatas = stores["DATA"];
  console.log({currentStore});
  return (
    <>
      <Map setMap={setMap} />
      <Markers map={map} storeDatas={storeDatas} setCurrentStore={setCurrentStore} />
      <StoreBox store={currentStore} setStore={setCurrentStore} />
    </>
  );
}