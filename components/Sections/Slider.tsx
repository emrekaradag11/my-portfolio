import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Tilt from 'react-parallax-tilt';

function Slider() {
  const { t, lang } = useTranslation('common')

  const sliderCenterRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [tiltStatus, setTiltStatus] = useState(true)
  const handleClick = () => {
    window.scrollTo({
      top: 500,
      left: 0,
      behavior: 'smooth'
    });
  };


  useEffect(() => {
    function handleResize() {
      if (document.body.clientWidth <= 576) {
        setTiltStatus(false)
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      sliderCenterRef.current?.classList.add('loaded')
      setTimeout(() => {
        sliderCenterRef.current?.classList.add('loadedEnd')
      }, 2000);
    }, 100);
    SliderText()
  }, [])

  const SliderText = () => {
    const title = titleRef.current
    title?.querySelectorAll('.word').forEach(item => {
      const innerElement = item.querySelector('.wordInner') as HTMLElement
      const newElemCounter = innerElement.querySelector('span') as HTMLElement
      if (!newElemCounter) {
        const html = innerElement?.innerHTML
        let newElem = '';
        let delay = 0;
        html?.split('').forEach(item => {
          delay++
          newElem += `<span style="animation-delay:${delay / 20}s">${item}</span>`;
        })
        innerElement.innerHTML = newElem;
      }

    })
  }

  const skilList: any = ['Html', 'Php', 'Javascript', 'TypeScript', 'React.js', 'Redux', 'Css', 'S(a|c)ss', 'Tailwind', 'Pixel Perfect', 'Responsive Design', 'UI/UX', 'Cross-Browser', 'Git', 'Npm', 'Node.js', 'Express.js', 'Mysql']

  return (
    <section id='slider'>
      <div className="sliderInner flex flex-col content-between">
        <div className="sliderCenter" ref={sliderCenterRef} id='sliderCenter'>
          <div className="flex justify-center h-full items-center">
            <div className='relative'>
              <h1 className='title' ref={titleRef}>
                <div className="word">
                  <div className="wordInner">{t('frontend')}</div>
                </div>
                <div className="word">
                  <div className="wordInner align-middle">{t('software')}</div>
                  <button onClick={handleClick} className="siteBtn btnLg colored align-middle ">
                    <Image
                      src={"/images/letter-l.png"}
                      alt={t("who_am_i")}
                      width={35}
                      height={35}
                      className="mr-2 rotate-180"
                    />
                    {t("who_am_i")}</button>
                </div>
                <div className="word">
                  <div className="wordInner">{t('developer')}</div>
                </div>
              </h1>
              <div className="img">
                <Tilt tiltEnable={tiltStatus} className='h-full' trackOnWindow={true} tiltReverse={true} transitionSpeed={10000} >
                  <video loop
                    muted
                    autoPlay
                    playsInline>
                    <source src="./introduction.mp4" type="video/mp4" />
                  </video>
                </Tilt>
              </div>
            </div>
          </div>

        </div>
        <div className="bottomText marquee" ref={marqueeRef} >
          <ul className="inner">

            {[...Array(3)].map((x, i) =>
              skilList.map((item: any, key: number) => (
                <li key={key}>
                  <Image
                    src="/images/star.svg"
                    alt="star"
                    width={30}
                    height={30}
                  />
                  {item}</li>
              ))
            )}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Slider