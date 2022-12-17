import React from 'react'
import Layout from '../../components/Layout/Layout';
import Item from '../../components/Blog/Item'
import { useDispatch, useSelector } from 'react-redux';

interface blogItem {
    id: string;
    title: string;
    desc: string;
    date: string;
    slug: string;
}

export default function Blog() {

    const blogList = useSelector((state: any) => (state.reducers.blogList ?? {}))
    return (
        <Layout>
            <div className='appPage'>
                <strong className="sectionTitle mb-5">Blog</strong>
                <div className="container mx-auto">
                    <div className='blogList grid grid-cols-2 gap-6'>
                        {blogList.map((item: blogItem) => {
                            return <Item
                                key={item.id}
                                title={item.title}
                                propClass=''
                                desc={item.desc}
                                date={item.date}
                                link={item.slug}
                            />
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
