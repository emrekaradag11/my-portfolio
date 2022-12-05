import React, { useEffect } from 'react'
import Lottie from 'react-lottie-player'
import Image from 'next/image'

function Slider() {
  useEffect(() => {
    Marquee(0.5)
  })

  useEffect(() => {
    setTimeout(() => {
      const sliderCenter: Element = document.getElementById('sliderCenter')!
      if (sliderCenter != null) {
        sliderCenter.classList.add('loaded')
      }
    }, 100);
  }, []) 

  const Marquee = (speed: number) => {

    const selector: Element = document.querySelector('.marquee')!;

    if (selector != null) {
      const clone = selector.innerHTML;
      const firstElement: any = selector.children[0]!;
      let i = 0;
      selector.insertAdjacentHTML('beforeend', clone);
      selector.insertAdjacentHTML('beforeend', clone);

      setInterval(function () {
        if (firstElement != null) {
          firstElement.style.marginLeft = `-${i}px`;
          if (i > firstElement.clientWidth) {
            i = 0;
          }
          i = i + speed;
        }
      }, 0);
    }
  }

  const skilList: any = ['Html', 'Php', 'Css', 'S(a|c)ss', 'Mysql', 'Node.js', 'Javascript', 'React.js', 'Git', 'Express.js']

  return (
    <section id='slider'>
      <div className="sliderInner flex flex-col content-between">
        <div className="sliderCenter" id='sliderCenter'>
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
                path="https://lottie.host/876f2818-9e3b-4484-b605-0f29dd32ab0d/0XKkksk0zH.json"
                style={{ height: '700px', width: '700px' }}
              >
              </Lottie>
            </div>
          </div>

        </div>
        <div className="bottomText marquee">
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