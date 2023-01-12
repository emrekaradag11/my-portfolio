import React from 'react'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image';

interface Item {
  title: string,
  propClass:string,
  desc: string,
  date: string,
  link: string,
  id: number,
}

function Item(props:Item) {
  const { t, lang } = useTranslation('common')
  return (
    <article className={props.propClass}>
      <Link href={props.link} title={props.title} className="wrapper flex flex-row mx-auto">
        <div className='basis-4/12'>
          <div className="img">
            <div className="inner">
              <img src="/images/blog.jpg" alt="" />
            </div>
          </div>
        </div>
        <div className='basis-8/12'>
          <div className="text">
              <div className="labels">
                <div className="category">
                  <svg id="tag-decoration" viewBox="0 0 13.012 13.581">
                      <path d="M10.643,2.259,6.634.649A1.99,1.99,0,0,0,4.664.93L1.263,3.6A1.993,1.993,0,0,0,.522,5.444l.61,4.278A1.99,1.99,0,0,0,2.36,11.288L6.37,12.9a1.99,1.99,0,0,0,1.97-.281l3.4-2.667A1.989,1.989,0,0,0,12.482,8.1l-.61-4.278A1.99,1.99,0,0,0,10.643,2.26Z" transform="translate(0.004 0.017)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                  </svg>
                  Technology
                </div>
                <div className="date">{props.date}</div>
                <div className="read">3 mins read</div>
              </div>
              <strong className='title'>{props.title}</strong>
              <p className='desc'>{props.desc}</p>
              <div className="">
                  <button className="btn siteBtn colored"> 
                    {t('readmore')}
                    
                    <Image
                        src={"/images/letter-r.png"}
                        alt={t("readmore")}
                        width={30}
                        height={30}
                        className="ml-2"
                    />
                  </button> 
              </div>
          </div>
        </div>
      </Link>
    </article>
  )
}

export default Item