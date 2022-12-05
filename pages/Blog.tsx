import React from 'react'
import Layout from '../components/Layout/Layout';
import Item from '../components/Blog/Item'
import BlogDetail from './BlogDetail'
import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/router';

type Props = {}

export default function Blog({ }: Props) {

  
  const router = useRouter()
  const { slug } = router.query

  if(slug != null){
    return <BlogDetail slug={slug} />
  }
  
  const blogList = useSelector((state: any) => {
    return (state.reducers.blogList) ?? {}
  })
  return (
    <Layout>
      <div className='appPage'>
        <strong className="sectionTitle mb-5">Blog</strong>
        <div className="container mx-auto">
          <div className='blogList grid grid-cols-2 gap-6'>
            {blogList.map((item: object, key: number) => {
                return <Item
                    key = {key}
                    title = {item.title}
                    propClass = ''
                    desc = {item.desc}
                    date = {item.date}
                    link = {item.slug}
                />
            })}
            
          </div>
        </div>
      </div>
    </Layout>
  )
}
