import React, { useEffect } from 'react'
import Image from 'next/image'
import useTranslation from 'next-translate/useTranslation'
import links from '../../shared/jsons/links.json'

function Connect() {


    const { t, lang } = useTranslation('common')
    const connectElems: any = links

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    });

    const handleScroll = () => {
        const boxes = document.getElementsByClassName('box')!;
        if (boxes != null) {
            for (let s = 0; s < boxes.length; s++) {
                let elemInner: any = boxes[s].getElementsByClassName('boxInner')[0];
                if (s % 2 === 1) {
                    elemInner.style.setProperty('transform', `translateX(-${window.scrollY / 5}px)`);
                } else {
                    elemInner.style.setProperty('transform', `translateX(${window.scrollY / 5}px)`);
                }
            }
        }
    };

    return (
        <section id='connectBoxWrapper'>
            <strong className='sectionTitle mb-14'>{t("connectWithMe")}</strong>
            <section id='connectBox'>
                {
                    connectElems.map((item: any) => {
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