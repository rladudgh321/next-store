import Map from '@/components/Map';
import Markers from '@/components/Markers';
import StoreBox from '@/components/StoreBox';
import { StoreType } from '@/interface';
import { useState } from 'react';
``

export default function Home({stores} : { stores: StoreType[] }) {
  const [map, setMap] = useState(null);
  const [currentStore, setCurrentStore] = useState(null);
  return (
    <>
      <Map setMap={setMap} />
      <Markers map={map} stores={stores} setCurrentStore={setCurrentStore} />
      <StoreBox store={currentStore} setStore={setCurrentStore} />
    </>
  );
}

export async function getStaticProps() {
  const stores = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`)
  const res = await stores.json();
  return {
    props: { stores: res },
    revalidate: 60 *60,
  }
}