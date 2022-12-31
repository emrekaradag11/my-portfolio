import React, { useEffect, useRef } from 'react'
import transated from '../../helpers/helper'
import Image from 'next/image'
import moment from 'moment';
import statusListJson from '../../shared/jsons/statusList.json'

function About() {

    const aboutTitleRef = useRef<HTMLDivElement>(null);
    let imgHoverRef = useRef<HTMLDivElement>(null);

    const handleTitleEffect = () => {
        const elem: any = aboutTitleRef.current!
        const slider: HTMLElement = document.getElementById('slider')!
        if (slider != null) {
            const calc = (-window.scrollY + slider.offsetHeight) / 10;
            if (elem != null && calc > 0) {
                elem.style.setProperty('letter-spacing', `${calc}px`);
            }
        }
    }

    /*
    
    burayı aslında api'dan listelesem daha sağlıklı olacaktı ama çok önemli değil. 
    sadece arayüzde gözükecek küçük bi yapı için 
    
    */

    
    const format = 'HH:mm:ss'
    const currentDate = moment()
    const currentWeekDay = currentDate.format('dddd').toLocaleLowerCase()
    const currentTime = moment(currentDate.format(format), format);

    const iconList : any = {
        free : {
            icon: "freeIcon.png",
            img: "freeImg.webp",
            text: transated('free_time'),
        },
        sleep : {
            icon: "sleepingIcon.png",
            img: "sleepingImg.webp",
            text: transated('sleeping'),
        },
        work : {
            icon: "workingIcon.png",
            img: "workingImg.gif",
            text: transated('working'),
        },
    }

    
    
    const status = statusListJson[currentWeekDay].find(item => {
        const startTime = moment(item.startTime, format);
        const endTime = moment(item.endTime, format);
        return currentTime.isBetween(startTime, endTime)
    })

    useEffect(() => {
        window.addEventListener('scroll', handleTitleEffect);
    })

    const handleHoverEffect = (e: any) => {
        if (null !== imgHoverRef.current) {
            imgHoverRef.current.style.setProperty('left', `${e.clientX}px`);
            imgHoverRef.current.style.setProperty('top', `${e.clientY}px`);
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
                                        src={"/images/status/" + iconList[status.type].img}
                                        alt='HoverImage'
                                        className="block"
                                        width={376}
                                        height={190}
                                        layout="fixed"
                                    />
                                </div>
                                <div className="clock"> {currentDate.hours()}<span className='clockDot'>:</span>{currentDate.minute().toString().padStart(2, '0')}</div>
                                <div className="status">
                                    <span className="icon inline-block align-middle mr-2">
                                        <Image
                                            src={"/images/status/" + iconList[status.type].icon}
                                            alt={iconList[status.type].text ?? 'image'}
                                            width={32}
                                            height={32}
                                            className="block"
                                        />
                                    </span>
                                    {iconList[status.type].text}
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