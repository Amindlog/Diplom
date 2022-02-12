import React, { Component } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Layout from '../../components/layout'

export default class FirstPost extends Component {
  render() {
    return (
        <Layout>
        <Head>
            <title>FirstPost</title>
            <Script 
                src='https://connect.facebook.net/en_US/sdk.js' 
                strategy="lazyOnload"
                onLoad={() =>
          console.log(`script loaded correctly, window.FB has been populated`)
                } />
        </Head>
      <h2>
          <Link href="/">
              <a>Home</a>
          </Link>
          <Image src="/img/vercel.svg" height={144} width={144} alt="Your name" />

      </h2>
      </Layout>
    )
  }
}
