import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import useTranslation from 'next-translate/useTranslation'

function Header() {
  const { t, lang } = useTranslation('common')
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
            <Link href={`/blog`} className='siteBtn mr-4 !hidden sm:!inline-block'> {t("blog")}</Link>
            <a href='mailto:emrekaradag11@hotmail.com' rel='nofollow' className='siteBtn colored mr-4 !hidden sm:!inline-block'>
              <Image
                src={"/images/letter-v.png"}
                alt={t("letsworktogether")}
                width={30}
                height={30}
                className="mr-2"
              />
              {t("letsworktogether")}
            </a>
            <a href='https://www.buymeacoffee.com/emrekaradag' target='_blank' rel="nofollow noreferrer" className='siteBtn colored !hidden sm:!inline-block'>
              <Image
                src={"/images/coffee-cup.png"}
                alt={t("buymecoffee")}
                width={30}
                height={30}
                className="mr-2"
              />
              {t("buymecoffee")}
            </a>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header