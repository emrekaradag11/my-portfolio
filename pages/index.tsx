import Head from 'next/head'
import Slider from '../components/Sections/Slider'
import About from '../components/Sections/About'
import Skills from '../components/Sections/Skills';
import Blog from '../components/Sections/Blog';
import Connect from '../components/Sections/Connect';
import Layout from '../components/Layout/Layout';

type Props = {}

export default function Home({ }: Props) {
  return (
    <Layout>
      <Head>
        <title>Emre Karadağ | Frontend Developer</title>
        <meta name="desscription" content="Emre Karadağ | Frontend Developer" />
      </Head>
      <Slider />
      <About />
      <Skills />
      <Blog />
      <Connect />
    </Layout>
  )
}
