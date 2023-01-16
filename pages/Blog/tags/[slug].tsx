import Head from 'next/head'
import React from 'react'
import Layout from '../../../components/Layout/Layout';
import Item from '../../../components/Blog/Item'
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';

interface blogItem {
    id: number;
    title: string;
    desc: string;
    date: string;
    slug: string;
}

export default function Blog() {

    const router = useRouter()
    const { slug } = router.query
    const blogList = useSelector((state: any) => (state.reducers.blogList ?? {}))

    return (
        <Layout>
            <Head>
                <title>Blog - Emre Karadağ | Frontend Developer</title>
                <meta name="description" content="Blog - Emre Karadağ | Frontend Developer" />
            </Head>
            
            <div className='appPage'>
                <div className='pageDetail container mx-auto flex flex-row'>
                    <div className="md:basis-10/12 mx-auto">
                        <div className="flex flex-row">
                            <div className='md:basis-8/12 lg:px-3 mx-auto'>
                                <div className="wrapContent bg-custom4">
                                    <div className="lg:flex flex-row mx-auto items-center">
                                        <div className="basis-4/12">
                                            <div className="labels justify-center !m-0 !scale-125">
                                                <div className='block items-center text-center'>
                                                    <div className="category">
                                                        <svg id="tag-decoration" viewBox="0 0 13.012 13.581">
                                                            <path d="M10.643,2.259,6.634.649A1.99,1.99,0,0,0,4.664.93L1.263,3.6A1.993,1.993,0,0,0,.522,5.444l.61,4.278A1.99,1.99,0,0,0,2.36,11.288L6.37,12.9a1.99,1.99,0,0,0,1.97-.281l3.4-2.667A1.989,1.989,0,0,0,12.482,8.1l-.61-4.278A1.99,1.99,0,0,0,10.643,2.26Z" transform="translate(0.004 0.017)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                        </svg>
                                                        Technology
                                                    </div>
                                                    <div className="block"></div>
                                                    <div className="date !mt-4">8 Articles</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="basis-8/12 lg:mt-0 mt-4">
                                            <p className='m-0'>Sometimes you might want to put your site behind closed doors</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
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
