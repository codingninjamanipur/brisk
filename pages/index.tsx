import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Hero from '../components/Hero'
import { UserProvider } from '../contexts/UserContext'
import Layout from '../lib/Layout'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {


  return (
    <div className="text-xs md:text-sm">
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <UserProvider>
      <Layout>
          <Hero/>
      </Layout>
      </UserProvider>
    </div>
  )
}

export default Home
