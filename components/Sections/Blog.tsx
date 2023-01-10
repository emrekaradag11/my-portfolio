import React from 'react'
import Item from '../Blog/Item'
import { useDispatch, useSelector } from 'react-redux';
interface blogItem {
    id: string;
    title: string;
    desc: string;
    date: string;
    slug: string;
}

function Index() {
    
    const blogList = useSelector((state: any) => (state.reducers.blogList ?? {}))

    return (
        <section id='blog'>
            <div className="container mx-auto">
                <div className="flex flex-row w-10/12 mx-auto">
                    <div className="basis-1/3">
                        <strong className="sectionTitle">Blog</strong>
                    </div>
                    <div className="basis-2/3">
                        <div className='blogList'>
                            {blogList.map((item: blogItem) => {
                                return <Item
                                    key={item.id}
                                    title={item.title}
                                    desc={item.desc}
                                    date={item.date}
                                    link={item.slug}
                                    propClass={''} />
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index