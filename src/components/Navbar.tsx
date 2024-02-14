import Link from 'next/link';
import { useState } from 'react';
import { FiMenu } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  
  return (
    <>
    <div className='navbar'>
      <div className='navbar__logo'>nextmap</div>
      <div className='navbar__list'>
        <Link className='navbar__list-item' href="/stores" >맛집 목록</Link>
        <Link className='navbar__list-item' href="/stores/new" >맛집 등록</Link>
        <Link className='navbar__list-item' href="/users/likes" >찜한 가게</Link>
        <Link className='navbar__list-item' href="/stores/mypage" >마이페이지</Link>
        <Link className='navbar__list-item' href="/user/login" >로그인</Link>
      </div>
      {/* mobile button */}
      <div className='navbar__button' role='presentation' onClick={() => setIsOpen(prev => !prev)}>
        { isOpen ? <IoMdClose />: <FiMenu /> }
      </div>
    </div>
    {
      isOpen && (
        <div className='navbar--mobile'>
          <div className='navbar__list--mobile'>
            <Link className='navbar__list-item--mobile' href="/stores" >맛집 목록</Link>
            <Link className='navbar__list-item--mobile' href="/stores/new" >맛집 등록</Link>
            <Link className='navbar__list-item--mobile' href="/users/likes" >찜한 가게</Link>
            <Link className='navbar__list-item--mobile' href="/stores/mypage" >마이페이지</Link>
            <Link className='navbar__list-item--mobile' href="/user/login" >로그인</Link>
          </div>
        </div>
      )
    }
    </>
  );
}