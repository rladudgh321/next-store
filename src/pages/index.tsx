import Map from '@/components/Map';
import Markers from '@/components/Markers';
import { useState } from 'react';
import * as stores from '@/data/store_data.json';

export default function Home() {
  const [map, setMap] = useState(null);
  const storeDatas = stores.DATA;
  return (
    <>
      <Map setMap={setMap} />
      <Markers map={map} storeDatas={storeDatas}  />
    </>
  );
}