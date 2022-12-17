import React, { useEffect, useRef } from 'react'
import transated from '../../helpers/helper'
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image'

function Connect() {
    interface connectElems {
        img: string;
        title: string;
        url: string;
        id: string;
    }

    const connectElems = useSelector((state: any) => (state.reducers.connectElems ?? {}))
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });
    
    const handleScroll = () => {
        const boxes = document.getElementsByClassName('box')!;
        if (boxes != null) {
            for (let s = 0; s < boxes.length; s++) {
                let elemInner: any = boxes[s].getElementsByClassName('boxInner')[0];
                if (s % 2 === 0) {
                    elemInner.style.setProperty('transform',`translateX(-${window.scrollY / 5}px)`);
                } else {
                    elemInner.style.setProperty('transform',`translateX(${window.scrollY / 5}px)`);
                }
            }
        } 
    };

    return (
        <section id='connectBoxWrapper'>
            <strong className='sectionTitle mb-14'>{transated("connectWithMe")}</strong>
            <section id='connectBox'>
                {
                    connectElems.map((item:connectElems) => {
                        return (
                            <a key={item.id} href={item.url} target='_blank' title={item.title} rel="nofollow noreferrer" className="box">
                                <div className="boxInner">
                                    {[...Array(10)].map((x, i) =>
                                        <div key={i}>
                                            <span className='title'>{item.title}</span>
                                            <div className="img">
                                                <Image
                                                    src={item.img}
                                                    alt={item.title}
                                                    className="block"
                                                    width={250}
                                                    height={50}
                                                />
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </a>
                        )
                    })
                }
            </section>
        </section>
    )
}

export default Connect