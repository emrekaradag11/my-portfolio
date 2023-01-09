import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import Tilt from 'react-parallax-tilt';

function Slider() {
  const { t, lang } = useTranslation('common')

  const sliderCenterRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Marquee(0.5)
  })

  useEffect(() => {
    setTimeout(() => {
      sliderCenterRef.current?.classList.add('loaded')
      setTimeout(() => {
        sliderCenterRef.current?.classList.add('loadedEnd')
      }, 2000);
    }, 100);
    SliderText()
  }, [])

  const Marquee = (speed: number) => {

    const clone: any = marqueeRef.current?.innerHTML;
    const firstElement: any = marqueeRef.current?.children[0]!;
    let i = 0;
    marqueeRef.current?.insertAdjacentHTML('beforeend', clone);
    marqueeRef.current?.insertAdjacentHTML('beforeend', clone);

    setInterval(function () {
      if (firstElement != null) {
        firstElement.style.setProperty('margin-left', `-${i}px`);

        if (i > firstElement.clientWidth)
          i = 0;

        i = i + speed;
      }
    }, 0);

  }

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

  const skilList: any = ['Html', 'Php', 'Css', 'S(a|c)ss', 'Pixel Perfect', 'Mysql', 'Node.js', 'Javascript', 'React.js', 'Git', 'Express.js']




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
                  <button className="siteBtn btnLg colored align-middle ">
                    <Image
                      src={"/images/letter-l.png"}
                      alt={t("discover")}
                      width={35}
                      height={35}
                      className="mr-2 rotate-180"
                    />
                    {t("discover")}! </button>
                </div>
                <div className="word">
                  <div className="wordInner">{t('developer')}</div>
                </div>
              </h1>
              <div className="img">
                <Tilt className='h-full' trackOnWindow={true} tiltReverse={true} transitionSpeed={10000} >
                  <video autoPlay loop>
                    <source src="./introduction.mp4" type="video/mp4" />
                  </video>
                </Tilt>
              </div>
            </div>
          </div>

        </div>
        <div className="bottomText marquee" ref={marqueeRef} >
          <ul className="inner">
            {skilList.map((item: any, key: number) => (
              <li key={key}>
                <Image
                  src="/images/star.svg"
                  alt="star"
                  width={30}
                  height={30}
                />
                {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Slider