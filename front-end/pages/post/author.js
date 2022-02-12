import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import React, { Component } from 'react'
import utilStyle from '../styles/utils.module.css'

export default class Author extends Component {
  render() {
    return (
      <Layout home>
        <Head>
          <title>{this.props.setTitle}</title>
        </Head>
        <section className={utilStyle.headingMd}>
          <p>[Я программист]</p>
          <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
          </p>
        </section>
      </Layout>
    )
  }
}
