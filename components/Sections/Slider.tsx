import React, { useEffect, useRef } from 'react'
import Lottie from 'react-lottie-player'
import Image from 'next/image'
import LottieJson from '../../public/lottie.json'

function Slider() {

  const sliderCenterRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    Marquee(0.5)
  })

  useEffect(() => {
    setTimeout(() => {
      sliderCenterRef.current?.classList.add('loaded')
    }, 100);
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

  const skilList: any = ['Html', 'Php', 'Css', 'S(a|c)ss', 'Mysql', 'Node.js', 'Javascript', 'React.js', 'Git', 'Express.js']

  return (
    <section id='slider'>
      <div className="sliderInner flex flex-col content-between">
        <div className="sliderCenter" ref={sliderCenterRef} id='sliderCenter'>
          <div className="flex justify-between items-center">
            <div>
              <h1 className='title'>
                <div className="word">
                  <div className="wordInner">Frontend</div>
                </div>
                <div className="word">
                  <div className="wordInner">Software</div>
                </div>
                <div className="word">
                  <div className="wordInner">Developer</div>
                </div>
              </h1>
            </div>
            <div>
              <Lottie
                play
                loop
                animationData={LottieJson}
                style={{ height: '700px', width: '700px' }}
              >
              </Lottie>
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