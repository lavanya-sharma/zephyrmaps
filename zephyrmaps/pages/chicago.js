import next from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
    return (
      <div className={styles.container}>
        <Head>
          <title>Zephyr Picture Map | Chicago Adventures!</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/faviconn.ico" />
          <script src="https://d3js.org/d3.v5.min.js"></script>
  
          </Head>
  
        <main className={styles.main}>
            <img src={'/CHI Photos/CHICAGO1.jpg'} />
            <br/>
            <img src={'/CHI Photos/CHICAGO2.jpeg'} />
            <br/>
            <img src={'/CHI Photos/CHICAGO3.jpeg'} />
            <br/>
            <img src={'/CHI Photos/CHICAGO4.jpeg'} />
            <br/>
            <img src={'/CHI Photos/CHICAGO5.jpg'} />
            <br/>
            <img src={'/CHI Photos/CHICAGO6.jpeg'} />
            <br/>
            <img src={'/CHI Photos/CHICAGO7.jpg'} />
            <br/>
            <img src={'/CHI Photos/CHICAGO8.jpeg'} />
            <br/>
            <img src={'/CHI Photos/CHICAGO9.jpg'} />
            <br/>
            <img src={'/CHI Photos/CHICAGO10.jpg'} />
            <br/>
        </main>

    </div>
    )
}

