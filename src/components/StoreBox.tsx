import Image from 'next/image';
import { Dispatch, SetStateAction, useCallback } from 'react';
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { CiCircleChevDown } from "react-icons/ci";
import { IoCheckmarkOutline } from "react-icons/io5";
import { IoCloseOutline } from "react-icons/io5";

interface StoreBoxProps {
  store: any;
  setStore: Dispatch<SetStateAction<any>>;
}

export default function StoreBox({ store, setStore }: StoreBoxProps) {
  return (
    <>
      <div className='fixed transition ease-in-out delay-150 inset-x-0 mx-auto bottom-20 rounded-lg max-w-sm md:max-w-xl z-10 w-full bg-white'>
        { store && (
          <>
          <div className="p-8">
            <div className="flex justify-between">
              <div className="flex items-center gap-4 w-full">
                  <Image 
                      src={store?.bizcnd_code_nm
                      ? `/images/markers/${store?.bizcnd_code_nm}.png`
                      : "/images/markers/default.png"
                      }
                      width={50}
                      height={50}
                      alt="아이콘"
                    />
                    <div className="px-4 w-full">
                      <div className="font-[600]">{store?.upso_nm}</div>
                      <div className='text-sm'>{store?.cob_code_nm}</div>
                    </div>
                    <div className="cursor-pointer">
                      <button><IoCloseOutline onClick={() => setStore(null)} /></button>
                    </div>
                </div>            
            </div>
            <div className="flex pt-4">
              <div><HiOutlineLocationMarker /></div>
              <div className="px-2">{store?.rdn_code_nm}</div>
            </div>
            <div className="flex pt-4">
              <div><FiPhone /></div>
              <div className="px-2">{store?.tel_no || '연락처 없음'}</div>
            </div>
            <div className="flex pt-4">
              <div><CiCircleChevDown /></div>
              <div className="px-2">{store?.cob_code_nm}</div>
            </div>
            <div className="flex pt-4">
              <div><IoCheckmarkOutline /></div>
              <div className="px-2">{store?.bizcnd_code_nm}</div>
            </div>
          </div>
          <button className="bg-blue-700 text-white w-full rounded-b-md h-12 hover:bg-blue-500 focus:bg-blue-500" onClick={() => window.alert('상세보기')} >상세보기</button>
          </>
        ) }
      </div>
    </>
  );
}

/*

 
*/