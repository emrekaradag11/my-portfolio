import Head from 'next/head';
import React from 'react';
import Layout from '../../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';

export default function index() {

    const dailyTips = [
        {
            "id": 1,
            "title": "Building your audience with subscriber signups",
            "link" : "/daily-tips/Building"
        },
        {
            "id": 2,
            "title": "Selling memberships with recurring revenue",
            "link" : "/daily-tips/Selling"
        },
        {
            "id": 3,
            "title": "The spectacle before us was indeed sublime",
            "link" : "/daily-tips/spectacle"
        },
        {
            "id": 4,
            "title": "Far far away, behind the word mountains",
            "link" : "/daily-tips/far-away"
        },
    ]
    return (
        <Layout>
            <Head>
                <title>Daily Tips - Emre Karadağ | Frontend Developer</title>
                <meta name="description" content="Blog - Emre Karadağ | Frontend Developer" />
            </Head>
            <div className='appPage'>
                <strong className="sectionTitle mb-5">Daily Tips</strong>
                <div className="container mx-auto">
                    <div className='flex flex-row pageDetail justify-center mt-10'> 
                        <div className="wrapContent basis-1/2 !border-0 !p-0 !bg-transparent">
                            <ul className='customList'>
                                {dailyTips.map((x: any, y: any) => {
                                    return <li className='listItem' key={x.id}>
                                        <Link href={x.link} className="listLink">
                                            <div className="number">{y + 1}</div>
                                            <div className="text">{x.title}</div>
                                        </Link>
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}
