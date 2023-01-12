import Head from 'next/head'
import React from 'react'
import Layout from '../../components/Layout/Layout';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation'
import CommentItem from '../../components/Blog/Comment/Item';
import NewComment from '../../components/Blog/Comment/NewComment';
import {
    FacebookShareCount,
    PinterestShareCount,
    VKShareCount,
    OKShareCount,
    RedditShareCount,
    TumblrShareCount,
    HatenaShareCount,
    FacebookShareButton,
    FacebookMessengerShareButton,
    FacebookMessengerIcon,
    LinkedinShareButton,
    TwitterShareButton,
    PinterestShareButton,
    VKShareButton,
    OKShareButton,
    TelegramShareButton,
    WhatsappShareButton,
    RedditShareButton,
    EmailShareButton,
    TumblrShareButton,
    LivejournalShareButton,
    MailruShareButton,
    ViberShareButton,
    WorkplaceShareButton,
    LineShareButton,
    WeiboShareButton,
    PocketShareButton,
    InstapaperShareButton,
    HatenaShareButton,
    FacebookIcon,
    TwitterIcon,
    LinkedinIcon,
    PinterestIcon,
    VKIcon,
    OKIcon,
    TelegramIcon,
    WhatsappIcon,
    RedditIcon,
    TumblrIcon,
    MailruIcon,
    EmailIcon,
    LivejournalIcon,
    ViberIcon,
    WorkplaceIcon,
    LineIcon,
    PocketIcon,
    InstapaperIcon,
    WeiboIcon,
    HatenaIcon,
} from "react-share";

export default function BlogDetail() {

    const { t, lang } = useTranslation('common')
    const router = useRouter()
    const { slug } = router.query

    const dailyTips = [
        {
            "id": 1,
            "title": "Building your audience with subscriber signups",
        },
        {
            "id": 2,
            "title": "Selling memberships with recurring revenue",
        },
        {
            "id": 3,
            "title": "The spectacle before us was indeed sublime",
        },
        {
            "id": 4,
            "title": "Far far away, behind the word mountains",
        },
    ]


    const commentList = [
        {
            "id": 1,
            "name": "John Doe",
            "comment": "This is a test comment",
            "date": "14 weeks ago",
            "like": "5",
            "children": []
        },
        {
            "id": 1,
            "name": "Emre KARADAĞ",
            "comment": "This is a test comment",
            "date": "10 Days Ago",
            "like": "5",
            "children": []
        },
        {
            "id": 1,
            "name": "Gözde KARADAĞ",
            "comment": "This is a test comment",
            "date": "14 weeks ago",
            "like": "5",
            "children": []
        },
    ]

    const title = "test";
    const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
    const blogImage = "/images/status/freeImg.webp";

    return (
        <Layout>

            <Head>
                <title>{slug} - Emre Karadağ | Frontend Developer</title>
                <meta name="description" content="Blog - Emre Karadağ | Frontend Developer" />
            </Head>
            <div className='appPage'>
                <div className='blogDetail container mx-auto flex flex-row'>
                    <div className="md:basis-10/12 mx-auto">
                        <div className="flex flex-row">
                            <div className='md:basis-8/12 px-3'>
                                <div className="wrapContent">
                                    <strong className="sectionTitleSm mb-5">{slug}</strong>
                                    <div className='img'>
                                        <Image
                                            src={"/images/status/freeImg.webp"}
                                            alt='HoverImage'
                                            className="block"
                                            width={1920}
                                            height={1080}
                                        />
                                    </div>
                                    <div className="labels flex justify-between items-center">
                                        <div className='flex items-center'>
                                            <div className="category">
                                                <svg id="tag-decoration" viewBox="0 0 13.012 13.581">
                                                    <path d="M10.643,2.259,6.634.649A1.99,1.99,0,0,0,4.664.93L1.263,3.6A1.993,1.993,0,0,0,.522,5.444l.61,4.278A1.99,1.99,0,0,0,2.36,11.288L6.37,12.9a1.99,1.99,0,0,0,1.97-.281l3.4-2.667A1.989,1.989,0,0,0,12.482,8.1l-.61-4.278A1.99,1.99,0,0,0,10.643,2.26Z" transform="translate(0.004 0.017)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                </svg>
                                                Technology
                                            </div>
                                            <div className="date">3 nisan 2023</div>
                                            <div className="read">3 mins read</div>
                                        </div>
                                        <div>
                                            <div className="date">231123 views</div>
                                        </div>
                                    </div>
                                    <div className="siteDesc">
                                        <h2>Lorem Ipsum Nedir?</h2>
                                        <p><strong>Lorem Ipsum</strong>, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının  bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 1500lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur.</p>
                                    </div><div>
                                        <h2>Neden Kullanırız?</h2>
                                        <p>Yinelenen bir sayfa içeriğinin okuyucunun dikkatini dağıttığı bilinen bir gerçektir. Lorem Ipsum kullanmanın amacı, sürekli buraya metin gelecek, buraya metin gelecek yazmaya kıyasla daha dengeli bir harf dağılımı sağlayarak okunurluğu artırmasıdır. Şu anda birçok masaüstü yayıncılık paketi ve web sayfa düzenleyicisi, varsayılan mıgır metinler olarak Lorem Ipsum kullanmaktadır. Ayrıca arama motorlarında lorem ipsum anahtar sözcükleri ile arama yapıldığında henüz tasarım aşamasında olan çok sayıda site listelenir. Yıllar içinde, bazen kazara, bazen bilinçli olarak (örneğin mizah katılarak), çeşitli sürümleri geliştirilmiştir.</p>
                                    </div><br /><div>
                                        <h2>Nereden Gelir?</h2>
                                        <p>Yaygın inancın tersine, Lorem Ipsum rastgele sözcüklerden oluşmaz. Kökleri M.Ö. 45 tarihinden bu yana klasik Latin edebiyatına kadar uzanan 2000 yıllık bir geçmişi vardır. Virginiadaki Hampden-Sydney Collegedan Latince profesörü Richard McClintock, bir Lorem Ipsum pasajında geçen ve anlaşılması en güç sözcüklerden biri olan consectetur sözcüğünün klasik edebiyattaki örneklerini incelediğinde kesin bir kaynağa ulaşmıştır. Lorm Ipsum, Çiçero tarafından M.Ö. 45 tarihinde kaleme alınan de Finibus Bonorum et Malorum (İyi ve Kötünün Uç Sınırları) eserinin 1.10.32 ve 1.10.33 sayılı bölümlerinden gelmektedir. Bu kitap, ahlak kuramı üzerine bir tezdir ve Rönesans döneminde çok popüler olmuştur. Lorem Ipsum pasajının ilk satırı olan Lorem ipsum dolor sit amet 1.10.32 sayılı bölümdeki bir satırdan gelmektedir.</p><p>1500lerden beri kullanılmakta olan standard Lorem Ipsum metinleri ilgilenenler için yeniden üretilmiştir. Çiçero tarafından yazılan 1.10.32 ve 1.10.33 bölümleri de 1914 H. Rackham çevirisinden alınan İngilizce sürümleri eşliğinde özgün biçiminden yeniden üretilmiştir.</p>
                                    </div><div>
                                        <h2>Nereden Bulabilirim?</h2>
                                        <p>Lorem Ipsum pasajlarının birçok çeşitlemesi vardır. Ancak bunların büyük bir çoğunluğu mizah katılarak veya rastgele sözcükler eklenerek değiştirilmişlerdir. Eğer bir Lorem Ipsum pasajı kullanacaksanız, metin aralarına utandırıcı sözcükler gizlenmediğinden emin olmanız gerekir. İnternetteki tüm Lorem Ipsum üreteçleri önceden belirlenmiş metin bloklarını yineler. Bu da, bu üreteci İnternet üzerindeki gerçek Lorem Ipsum üreteci yapar. Bu üreteç, 200den fazla Latince sözcük ve onlara ait cümle yapılarını içeren bir sözlük kullanır. Bu nedenle, üretilen Lorem Ipsum metinleri yinelemelerden, mizahtan ve karakteristik olmayan sözcüklerden uzaktır.</p>
                                    </div>

                                    <div className="comments mt-5 ">
                                        <hr className='h-px my-8 border-0 bg-black' />
                                        <strong className="sectionTitleXs">{t('comments')}</strong>

                                        <div className="commentList">

                                            {commentList.map((x: any, y: any) => {
                                                return <CommentItem
                                                    key={x.id}
                                                    name={x.name}
                                                    date={x.date}
                                                    comment={x.comment}
                                                    like={x.like}
                                                />
                                            })}
                                        </div>

                                        <NewComment />
                                    </div>
                                </div>

                            </div>
                            <div className='md:basis-4/12 px-3'>
                                <div className="blogRight">
                                    <div className="wrapContent bg-custom4">
                                        <strong className="sectionTitleXs">{t('populartags')}</strong>
                                        <ul className='labelList'>
                                            <li className="label">
                                                <svg id="tag-decoration" viewBox="0 0 13.012 13.581">
                                                    <path d="M10.643,2.259,6.634.649A1.99,1.99,0,0,0,4.664.93L1.263,3.6A1.993,1.993,0,0,0,.522,5.444l.61,4.278A1.99,1.99,0,0,0,2.36,11.288L6.37,12.9a1.99,1.99,0,0,0,1.97-.281l3.4-2.667A1.989,1.989,0,0,0,12.482,8.1l-.61-4.278A1.99,1.99,0,0,0,10.643,2.26Z" transform="translate(0.004 0.017)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                </svg>
                                                Technology
                                            </li>
                                            <li className="label">
                                                <svg id="tag-decoration" viewBox="0 0 13.012 13.581">
                                                    <path d="M10.643,2.259,6.634.649A1.99,1.99,0,0,0,4.664.93L1.263,3.6A1.993,1.993,0,0,0,.522,5.444l.61,4.278A1.99,1.99,0,0,0,2.36,11.288L6.37,12.9a1.99,1.99,0,0,0,1.97-.281l3.4-2.667A1.989,1.989,0,0,0,12.482,8.1l-.61-4.278A1.99,1.99,0,0,0,10.643,2.26Z" transform="translate(0.004 0.017)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                </svg>
                                                Music
                                            </li>
                                            <li className="label">
                                                <svg id="tag-decoration" viewBox="0 0 13.012 13.581">
                                                    <path d="M10.643,2.259,6.634.649A1.99,1.99,0,0,0,4.664.93L1.263,3.6A1.993,1.993,0,0,0,.522,5.444l.61,4.278A1.99,1.99,0,0,0,2.36,11.288L6.37,12.9a1.99,1.99,0,0,0,1.97-.281l3.4-2.667A1.989,1.989,0,0,0,12.482,8.1l-.61-4.278A1.99,1.99,0,0,0,10.643,2.26Z" transform="translate(0.004 0.017)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                </svg>
                                                Travel
                                            </li>
                                            <li className="label">
                                                <svg id="tag-decoration" viewBox="0 0 13.012 13.581">
                                                    <path d="M10.643,2.259,6.634.649A1.99,1.99,0,0,0,4.664.93L1.263,3.6A1.993,1.993,0,0,0,.522,5.444l.61,4.278A1.99,1.99,0,0,0,2.36,11.288L6.37,12.9a1.99,1.99,0,0,0,1.97-.281l3.4-2.667A1.989,1.989,0,0,0,12.482,8.1l-.61-4.278A1.99,1.99,0,0,0,10.643,2.26Z" transform="translate(0.004 0.017)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1"></path>
                                                </svg>
                                                Life Style
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="wrapContent mt-5 bg-custom2">
                                        <strong className="sectionTitleXs">{t('dailytips')}</strong>
                                        <ul className='customList'>
                                            {dailyTips.map((x: any, y: any) => {
                                                return <li className='listItem' key={x.id}>
                                                    <Link href={`/Blog`} className="listLink">
                                                        <div className="number">{y + 1}</div>
                                                        <div className="text">{x.title}</div>
                                                    </Link>
                                                </li>
                                            })}
                                        </ul>
                                    </div>
                                    <div className="wrapContent mt-5">
                                        <strong className="sectionTitleXs">{t('share')}</strong>
                                        <ul className='shareIconList'>
                                            
                                            <li className="shareButton">
                                                <FacebookShareButton
                                                    url={shareUrl}
                                                    quote={title}
                                                    className="shareButtonLink"
                                                >
                                                    <FacebookIcon bgStyle={{
                                                        fill : "#ffffff"
                                                    }} size={40} iconFillColor="#3b5998" />
                                                </FacebookShareButton>
                                                
                                            </li> 

                                            <li className="shareButton">
                                                <TwitterShareButton
                                                    url={shareUrl}
                                                    title={title}
                                                    className="shareButtonLink"
                                                >
                                                    <TwitterIcon bgStyle={{
                                                        fill : "#ffffff"
                                                    }} size={40} iconFillColor="#00aced" />
                                                </TwitterShareButton>

                                            </li> 

                                            <li className="shareButton">
                                                <LinkedinShareButton url={shareUrl} className="shareButtonLink">
                                                    <LinkedinIcon bgStyle={{
                                                        fill : "#ffffff"
                                                    }} size={40} iconFillColor="#007fb1" />
                                                </LinkedinShareButton>
                                            </li>

                                            <li className="shareButton">
                                                <PinterestShareButton
                                                    url={String(shareUrl)}
                                                    media={`${String(shareUrl)}/${blogImage}`}
                                                    className="shareButtonLink"
                                                >
                                                    <PinterestIcon bgStyle={{
                                                        fill : "#ffffff"
                                                    }} size={40} iconFillColor="#cb2128" />
                                                </PinterestShareButton>
                                            </li>
  
                                            <li className="shareButton">
                                                <RedditShareButton
                                                    url={shareUrl}
                                                    title={title}
                                                    windowWidth={660}
                                                    windowHeight={460}
                                                    className="shareButtonLink"
                                                >
                                                    <RedditIcon bgStyle={{
                                                        fill : "#ffffff"
                                                    }} size={40} iconFillColor="#ff4500" />
                                                </RedditShareButton>
                                            </li>

                                        </ul>
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