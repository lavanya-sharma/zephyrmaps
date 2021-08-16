import next from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Zephyr Picture Map | Home </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/faviconn.ico" />
        <script src="https://d3js.org/d3.v5.min.js"></script>

        </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to the Zephyr Picture Map!
        </h1>
      </main>

      <h2> Follow us along our journey through the Hacker Zephyr!</h2>
      <Link href = "/pics"><a style = {{
        padding: "5px", 
        border: "1px solid red",
        borderRadius: "5px"
      }}> Click here!!!</a></Link>
      <br/>

      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Made with ❤️ and ☕️ 
        </a>
      </footer>
    </div>
  )
}
