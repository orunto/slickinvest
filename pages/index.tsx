import Head from 'next/head'
import Image from 'next/image'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import NavBar from './containers/NavBar'
import Hero from './containers/Hero'
import CardSection from './containers/CardSection'
import WhySection from './containers/WhySection'
import TestimonialSection from './containers/TestimonialSection'
import Footer from './containers/Footer'

import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll } from 'framer-motion'

const manrope = Manrope({ subsets: ['latin'] })

export default function Home() {
  const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["end end", "start start"]
    });
    const logProgress = () => {
        console.log(scrollYProgress)
    }

  return (
    <>
      <Head>
        <title>SlickInvest by Orunto and Banjoko</title>
        <meta name="description" content="SlickInvest was is a product of a collaboration between Orunto Eniola (Dev) and Banjoko Timothy (Design)" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <motion.main 
        className={`${styles.main} ${manrope.className}`} 
        initial={{ opacity: 0}} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 0.5}}

        ref={ref}
        onClick={logProgress}
      >
        <NavBar/>
        <Hero/>
        <CardSection/>
        <WhySection/>
        <TestimonialSection/>
        <Footer/>
      </motion.main>
    </>
  )
}
