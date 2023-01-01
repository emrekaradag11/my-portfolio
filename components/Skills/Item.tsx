import React from 'react'
import workJpeg from '../../public/images/work.webp'
import Image from 'next/image'

type Props = {
    title : string
    desc : string
}

function Item(props: Props) {
  return (
    <>
        <div className='item'>
            <div className="left">
                <strong className='title'>{props.title}</strong>
                <p className='desc'>{props.desc}</p>
            </div>
            <div className="right">
                <div className="img">
                    <Image
                        src={workJpeg}
                        alt='HoverImage'
                        className="block"
                        width={376}
                        height={190}
                    />
                </div>
            </div>
        </div>
    </>
  )
}

export default Item