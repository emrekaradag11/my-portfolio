import React, { useEffect, useRef } from 'react'
import transated from './../helpers/helper'
import { changeLang } from '../store/reducers'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';

function Header() {

  const dispatch = useDispatch()
  const handleChangeLang = (id: Number) => dispatch(changeLang(id))

  const headerRef =  useRef<HTMLDivElement>(null);

  let lang = useSelector((state: any) => {
    return (state.reducers.language) ?? 1
  })

  const handleScroll = () => {
    if (window.scrollY > 0) headerRef.current?.classList.add('active')
    else headerRef.current?.classList.remove('active')
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
  });


  return (
    <>
      <header id='header' ref={headerRef}>
        <div className="flex justify-between items-center">
          <div>
            <Link href={'/'} className="logo">
              <div className="logoText">{`{Emre K.}`}</div>
            </Link>
          </div>
          <div>
            <button onClick={(e) => handleChangeLang(lang === 1 ? 2 : 1)} className='changeLangBtn mr-4'>{transated("getLangName")}</button>
            <Link href={`/Blog`} className='siteBtn mr-4'> {transated("blog")}</Link>
            <a href='mailto:emrekaradag11@hotmail.com' rel='nofollow' className='siteBtn colored mr-4'>
              <Image
                  src={"/images/letter-v.png"}
                  alt={transated("letsworktogether")}
                  width={30}
                  height={30}
                  className="mr-2"
              />
              {transated("letsworktogether")}
            </a>
            <a href='https://www.buymeacoffee.com/emrekaradag' target='_blank' rel="nofollow noreferrer" className='siteBtn colored'>
              <Image
                  src={"/images/coffee-cup.png"}
                  alt={transated("buymecoffee")}
                  width={30}
                  height={30}
                  className="mr-2"
              />
              {transated("buymecoffee")}
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header