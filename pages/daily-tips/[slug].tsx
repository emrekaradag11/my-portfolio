import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'


export default function Detail() {


  const { t, lang } = useTranslation('common')
  const router = useRouter()
  const { slug } = router.query

  return (

    <Layout>
      <Head>
        <title>{slug} - Emre Karadağ | Frontend Developer</title>
        <meta name="description" content="Blog - Emre Karadağ | Frontend Developer" />
      </Head>
      <div className='appPage'>
        <div className='pageDetail container mx-auto flex flex-row'>
          <div className="md:basis-10/12 mx-auto">
            <div className="flex flex-row justify-center">
              <div className='md:basis-8/12 px-3'>
                <div className="wrapContent">
                  <strong className="sectionTitleSm mb-5">{slug}</strong>
                  <div className="labels flex justify-between items-center">
                    <div className='flex items-center'> 
                      <div className="date">3 nisan 2023</div>
                      <div className="read">3 mins read</div>
                    </div>
                    <div>
                      <div className="date">231123 views</div>
                    </div>
                  </div>
                  <div className="siteDesc">
                    <div>
                      <h2>Lorem Ipsum Nedir?</h2>
                      <p><strong>Lorem Ipsum</strong>, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının  bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
