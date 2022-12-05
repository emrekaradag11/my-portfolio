import React from 'react'
import Item from '../Blog/Item'
import { useDispatch, useSelector } from 'react-redux';


function Index() {

    let blogList = useSelector((state: any) => {
        return (state.reducers.blogList) ?? {}
    })

    return (
        <section id='blog'>
            <div className="container mx-auto">
                <div className="flex flex-row">
                    <div className="basis-1/3">
                        <strong className="sectionTitle">Blog</strong>
                    </div>
                    <div className="basis-2/3">
                        <div className='blogList'>
                            {blogList.map((item: object, key: number) => {
                                return <Item
                                    key={key}
                                    title={item.title}
                                    desc={item.desc}
                                    date={item.date}
                                    link={item.slug}
                                />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index