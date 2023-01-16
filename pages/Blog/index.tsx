import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout/Layout';
import Item from '../../components/Blog/Item'
import { useDispatch, useSelector } from 'react-redux';

interface blogItem {
    id: number;
    title: string;
    desc: string;
    date: string;
    slug: string;
}

export default function Blog() {

    const blogList = useSelector((state: any) => (state.reducers.blogList ?? {}))
    return (
        <Layout>
            <Head>
                <title>Blog - Emre Karadağ | Frontend Developer</title>
                <meta name="description" content="Blog - Emre Karadağ | Frontend Developer" />
            </Head>
            <div className='appPage'>
                <strong className="sectionTitle mb-5">Blog</strong>
                <div className="container mx-auto">
                    <div className='blogList grid xl:grid-cols-2 gird-cols-1 gap-6'>
                        {blogList.map((item: blogItem) => {
                            return <Item
                                key={item.id}
                                id={item.id}
                                title={item.title}
                                desc={item.desc}
                                date={item.date}
                                link={item.slug}
                                propClass={''}
                            />
                        })}
                    </div>
                </div>
            </div>
        </Layout>
    )
}
