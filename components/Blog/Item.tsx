import React from 'react'
import transated from '../../helpers/helper'
import Link from 'next/link'

interface Item {
  title: string,
  propClass:string,
  desc: string,
  date: string,
  link: string,
}

function Item(props:Item) {
  return (
    <article className={props.propClass}>
      <Link href={props.link} className="wrapper">
        <div className="img"><img src="/images/blog.jpg" alt="" /></div>
        <div className="text">
            <strong className='title'>{props.title}</strong>
            <p className='desc'>{props.desc}</p>
            <div className="flex mt-4 items-center justify-between">
                <div> <button className="btn siteBtn colored"> {transated('readmore')}</button> </div>
                <div> <div className="date">{props.date}</div> </div>
            </div>
        </div>
      </Link>
    </article>
  )
}

export default Item