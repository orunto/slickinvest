import Head from 'next/head'
import Image from 'next/image'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './containers/NavBar'
import Hero from './containers/Hero'
import CardSection from './containers/CardSection'
import WhySection from './containers/WhySection'
import TestimonialSection from './containers/TestimonialSection'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>SlickInvest by Orunto and Banjoko</title>
        <meta name="description" content="SlickInvest was is a product of a collaboration between Orunto Eniola (Dev) and Banjoko Timothy (Design)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${styles.main} ${manrope.className}`}>
        <NavBar/>
        <Hero/>
        <CardSection/>
        <WhySection/>
        <TestimonialSection/>
      </main>
    </>
  )
}
