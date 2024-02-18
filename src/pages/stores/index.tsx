import { StoreType } from '@/interface';
import Image from 'next/image';

export default function StoreListPage({stores}: { stores: StoreType[] }) {
  console.log({ stores });
  return (
    <>
      <div>
        <ul className="mx-auto text-[12px] divide-y md:max-w-4xl">
          {stores?.map((store, index) => (
            <li key={index}>
              <div className="flex items-center justify-between px-8 py-4">
                <div className="flex">
                  <div>{
                    <Image src={ store?.category
                      ? `/images/markers/${store?.category}.png`
                      : '/images/markers/default.png' }
                      alt="이미지 파일"
                      width={50}
                      height={50}
                  />}
                  </div>
                  <div className="flex flex-col gap-2 ml-2 leading-4">
                    <div className="font-semibold">{store?.name}</div>
                    <div>{store?.storeType}</div>
                  </div>
                </div>
                <div className="hidden sm:flex sm:flex-col text-[12px] sm:items-end">
                  <div>{store?.address}</div>
                  <div>{store?.phone || '번호 없음'} | {store?.foodCertifyName} | {store?.category}</div>
                </div>
              </div>

            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const stores = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/stores`).then((res) => res.json());

  return { props: { stores } };
}