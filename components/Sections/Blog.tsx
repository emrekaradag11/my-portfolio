import React from 'react'
import Item from '../Blog/Item'
import { useSelector } from 'react-redux';
interface blogItem {
    id: number;
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
                <div className="xl:flex flex-row md:w-10/12 mx-auto">
                    <div className="basis-1/3 xl:mb-0 mb-10">
                        <strong className="sectionTitle">Blog</strong>
                    </div>
                    <div className="basis-2/3">
                        <div className='blogList'>
                            {blogList.map((item: blogItem) => {
                                return <Item
                                    key={item.id}
                                    id={item.id}
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