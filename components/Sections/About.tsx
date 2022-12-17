import React, { useEffect, useRef } from 'react'
import transated from '../../helpers/helper'
import Image from 'next/image'

function About() {

    const aboutTitleRef =  useRef<HTMLDivElement>(null);
    let imgHoverRef =  useRef<HTMLDivElement>(null);

    const handleTitleEffect = () => {
        const elem:any = aboutTitleRef.current!
        const slider: HTMLElement = document.getElementById('slider')!
        if (slider != null) {
            const calc = (-window.scrollY + slider.offsetHeight) / 10;
            if (elem != null && calc > 0) {
                elem.style.setProperty('letter-spacing',`${calc}px`);
            }
        }
    }

    /*burayı daha mantıklı hesaplayabilirdim ama çok önemli değil. 
    sadece arayüzde gözükecek küçük bi yapı için */
    const nowDate = new Date();
    const currentDate = new Date('2023-01-01 ' + nowDate.getHours().toString().padStart(2, '0') + ':' + nowDate.getMinutes().toString().padStart(2, '0'));


    let statusList = [
        {
            icon: "freeIcon.png",
            img: "freeImg.webp",
            text: transated('free_time'),
            startTime: "2023-01-01 18:30",
            endTime: "2023-01-01 23:59",
        },
        {
            icon: "sleepingIcon.png",
            img: "sleepingImg.webp",
            text: transated('sleeping'),
            startTime: "2023-01-01 00:00",
            endTime: "2023-01-01 08:20",
        },
        {
            icon: "workingIcon.png",
            img: "workingImg.gif",
            text: transated('working'),
            startTime: "2023-01-01 08:30",
            endTime: "2023-01-01 18:30",
        },
    ];

    const status = statusList.find(x => {
        let startDate = new Date(x.startTime);
        let endDate = new Date(x.endTime);
        return startDate.getTime() <= currentDate.getTime() && endDate.getTime() >= currentDate.getTime()
    })

    useEffect(() => {
        window.addEventListener('scroll', handleTitleEffect);
    })

    const handleHoverEffect = (e: any) => {
        if (null !== imgHoverRef.current) {
            imgHoverRef.current.style.setProperty('left',`${e.clientX}px`);
            imgHoverRef.current.style.setProperty('top',`${e.clientY}px`);
        }
    }

    return (
        <section id='about'>
            <div className="inner">
                <strong className='title sectionTitle' ref={aboutTitleRef}>{transated("who_am_i")}</strong>
                <div className="container mx-auto">
                    <div className='flex flex-row'>
                        <div className="mt-6 md:basis-7/12 basis-1/1 mx-auto text-center">
                            <div className="siteText text-xl" dangerouslySetInnerHTML={{ __html: transated('about_text').replace('{{img}}', `<img width='30' class="inline-block align-middle" src="/images/waving-hand.svg" alt="" />`) }}></div>
                            <div className="myStatus" onMouseMove={(e) => handleHoverEffect(e)} id='myStatus'>
                                <div className="imgHover" ref={imgHoverRef} id='imgHover'>
                                    <Image
                                        src={"/images/status/" + status?.img}
                                        alt='HoverImage'
                                        className="block"
                                        width={376}
                                        height={190}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="clock"> {currentDate.getHours().toString().padStart(2, '0')}<span className='clockDot'>:</span>{currentDate.getMinutes().toString().padStart(2, '0')}</div>
                                <div className="status">
                                    <span className="icon inline-block align-middle mr-2">
                                        <Image
                                            src={"/images/status/" + status?.icon}
                                            alt={status?.text ?? 'image'}
                                            width={32}
                                            height={32}
                                            className="block"
                                        />
                                    </span>
                                    {status?.text}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About