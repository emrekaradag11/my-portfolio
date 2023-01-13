import React, { useEffect, useRef, useState } from 'react'
import { changeLang } from '../store/reducers'
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

function Header() {
  const { t, lang } = useTranslation('common')
  const dispatch = useDispatch()
  const handleChangeLang = (id: Number) => dispatch(changeLang(id))
  const [mobileMenu, setMobileMenu] = useState(0)

  const headerRef = useRef<HTMLDivElement>(null);


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
            <a href={lang === 'en' ? '/tr' : '/en'} className='changeLangBtn mr-4 align-middle'>{t("getLangName")}</a>
            <Link href={`/Blog`} className='siteBtn mr-4 !hidden lg:!inline-block'> {t("blog")}</Link>
            <a href='mailto:emrekaradag11@hotmail.com' rel='nofollow' className='siteBtn colored mr-4 !hidden lg:!inline-block'>
              <Image
                src={"/images/letter-v.png"}
                alt={t("letsworktogether")}
                width={30}
                height={30}
                className="mr-2"
              />
              {t("letsworktogether")}
            </a>
            <a href='https://www.buymeacoffee.com/emrekaradag' target='_blank' rel="nofollow noreferrer" className='siteBtn colored !hidden lg:!inline-block'>
              <Image
                src={"/images/coffee-cup.png"}
                alt={t("buymecoffee")}
                width={30}
                height={30}
                className="mr-2"
              />
              {t("buymecoffee")}
            </a>
            <div className="mobileMenu !inline-block lg:!hidden  align-middle">
              <div className={(mobileMenu === 0 ? '' : 'active') + " menuBtn"} onClick={() => setMobileMenu(mobileMenu === 0 ? 1 : 0)}><div className="inner"></div></div>
            </div>
          </div>
        </div>
        <div className={(mobileMenu === 0 ? '' : 'active') + " mobileInner"}>

        </div>
      </header>
    </>
  )
}

export default Header