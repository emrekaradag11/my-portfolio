import React, { useEffect } from 'react'
import transated from '../../helpers/helper'

function Connect() {
    const connectElems = [
        {
            'title': 'Github',
            'img': '/images/githubWp.png',
            'url': 'https://github.com/emrekaradag11',
        },
        {
            'title': 'Linked-in',
            'img': '/images/linkedinWp.jpg',
            'url': 'https://www.linkedin.com/in/emrekaradag/',
        },
        {
            'title': 'Instagram',
            'img': '/images/instagramWp.jpg',
            'url': '#',
        },
        {
            'title': 'Twitter',
            'img': '/images/twitterWp.jpg',
            'url': '#',
        },
    ]

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);  
    });
    useEffect(() => {
        const contentBox:HTMLElement = document.getElementById('connectBox')!
        const boxes = contentBox.getElementsByClassName('boxInner')
        if(contentBox != null && boxes.length){
            for (let i = 0; i < boxes.length; i++) {
                const element = boxes[i] as HTMLElement;
                let html = "";
                for(let s = 0; s <= 20; s++){
                    html += element.innerHTML
                }
                element.innerHTML = html
            }
        }
    },[]);

    const handleScroll = () =>  {
        const connectBox:Element = document.getElementById('connectBox')!;
        if(connectBox != null){
            const boxes = connectBox.getElementsByClassName('box')!;
            if(boxes != null){
                for(let s = 0; s < boxes.length; s++){
                    let elemInner:any = boxes[s].getElementsByClassName('boxInner')[0];
                    
                    if(s % 2 === 0){
                        elemInner.style.transform = `translateX(-${window.scrollY / 5}px)`;
                    }else{
                        elemInner.style.transform = `translateX(${window.scrollY / 5}px)`;
                    }
                }
            }
        }
    };

    return (
        <section id='connectBoxWrapper'>
            <strong className='sectionTitle mb-14'>{transated("connectWithMe")}</strong>
            <section id='connectBox'>
                {
                    connectElems.map((item, key) => {
                        return (
                            <a key={key} href={item.url} target='_blank' title={item.title} rel="nofollow noreferrer" className="box"><div className="boxInner"><span className='title'>{item.title}</span><div className="img"><img src={'./' + item.img} alt={item.title} /></div></div></a>
                        )
                    })
                }

            </section>
        </section>
    )
}

export default Connect