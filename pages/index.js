import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import Banner from '../components/banner/banner';
import NavBar from '../components/nabar/navbar';
import Card from '../components/card/card';


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Just example of Netflix looks like app with youtube videos" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar username="Bart.Yan"/>

      <Banner 
        title="some movie" 
        subTitle="the great one"
        imgUrl="/static/2.jpg"
      />
      
    <Card imgUrl="/static/2.jspg" size="large"/>
    <Card imgUrl="/static/2.jpg" size="medium"/>
    <Card imgUrl="/static/2.jpg" size="small"/>

    </div>
  )
}