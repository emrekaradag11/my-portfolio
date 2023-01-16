import React from 'react'

type Props = {
    title : string
    titleSm : string
    desc : string
    id : number
}

function Item(props: Props) {
  return (
    <>
        <div className='item skillItem'>
            <div className="left">
                <div className="number">{props.id}</div>
            </div>
            <div className="right">
                <strong className='titleSm'>{props.titleSm}</strong>
                <strong className='title'>{props.title}</strong>
                <p className='desc'>{props.desc}</p>
            </div>
        </div>
    </>
  )
}

export default Item