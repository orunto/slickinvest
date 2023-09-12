import { useState, useRef } from "react";
import { motion, AnimatePresence, useScroll } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import { Manrope } from 'next/font/google'
import Card from '../components/Card'
import CardTwo from '../components/CardTwo'
import styles from '@/styles/Card.module.css'

const manrope = Manrope({ subsets: ['latin'] })

export default function CardSection() {
    // const ref = useRef(null);
    // const { scrollYProgress } = useScroll({
    //     target: ref,
    //     offset: ["end end", "start start"]
    // });
    // const logProgress = () => {
    //     console.log(scrollYProgress)
    // }
    // const [cardPop, setCardPop] = useState(false);

    // const handleCard = () => {
    //     setCardPop(true);
    // };

    // const [cardPopTwo, setCardPopTwo] = useState(false);

    // const handleCardTwo = () => {
    //     setCardPopTwo(true);
    // };

    // const [cardPopThree, setCardPopThree] = useState(false);

    // const handleCardThree = () => {
    //     setCardPopThree(true);
    // };

  return (
    <AnimatePresence>
        <section className={`${styles.CardSection} ${manrope.className}`} >
                <>
                    <motion.h2
                        initial={{ opacity: 0, x: -300 }} 
                        whileInView={{ opacity: 1, x: 0 }} 
                        transition={{ duration: 0.5 }}
                    >FEEL THE BEST EXPERIENCE WITH OUR FEATURES</motion.h2>
                    
                    <div className={styles.card_container} >
                            <>
                                <motion.div className={styles.card_container_div}
                                    initial={{ opacity: 0 }} 
                                    whileInView={{ opacity: 1 }} 
                                    transition={{ duration: 0.5 }}
                                >
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.0878906" y="0.74231" width="69" height="69" rx="34.5" fill="#902A9C"/>
                                        <path d="M47.9212 31.5757H21.2546C20.7079 31.5757 20.2546 31.1224 20.2546 30.5757C20.2546 30.029 20.7079 29.5757 21.2546 29.5757H47.9212C48.4679 29.5757 48.9212 30.029 48.9212 30.5757C48.9212 31.1224 48.4679 31.5757 47.9212 31.5757Z" fill="white"/>
                                        <path d="M29.2546 42.2423H26.5879C26.0412 42.2423 25.5879 41.789 25.5879 41.2423C25.5879 40.6956 26.0412 40.2423 26.5879 40.2423H29.2546C29.8012 40.2423 30.2546 40.6956 30.2546 41.2423C30.2546 41.789 29.8012 42.2423 29.2546 42.2423Z" fill="white"/>
                                        <path d="M37.9212 42.2423H32.5879C32.0412 42.2423 31.5879 41.789 31.5879 41.2423C31.5879 40.6956 32.0412 40.2423 32.5879 40.2423H37.9212C38.4679 40.2423 38.9212 40.6956 38.9212 41.2423C38.9212 41.789 38.4679 42.2423 37.9212 42.2423Z" fill="white"/>
                                        <path d="M42.0012 47.5756H27.1746C21.8679 47.5756 20.2546 45.9756 20.2546 40.7223V29.7623C20.2546 24.5089 21.8679 22.9089 27.1746 22.9089H41.9879C47.2946 22.9089 48.9079 24.5089 48.9079 29.7623V40.7089C48.9212 45.9756 47.3079 47.5756 42.0012 47.5756ZM27.1746 24.9089C22.9879 24.9089 22.2546 25.6289 22.2546 29.7623V40.7089C22.2546 44.8423 22.9879 45.5623 27.1746 45.5623H41.9879C46.1746 45.5623 46.9079 44.8423 46.9079 40.7089V29.7623C46.9079 25.6289 46.1746 24.9089 41.9879 24.9089H27.1746Z" fill="white"/>
                                    </svg>

                                    <article>
                                        <header>Custom  & designs your card, make it unique  </header>
                                        <p>Create a custom card that reflects your unique stlye and personality. Choose from a range of colors, patterns, and design to customize the look of your card.</p>
                                    </article>

                                    <div className={styles.cards}>
                                        <Image src="/Card Purple.svg" width={314} height={490} alt="Purple card" />

                                        <Image className={styles.card_two} src="/Card White.svg" width={314} height={490} alt="Purple card" />
                                    </div>

                                </motion.div>

                                <motion.div className={styles.card_container_div}
                                    initial={{ x: 200 }} 
                                    whileInView={{ x: 0 }} 
                                    transition={{ duration: 0.5 }}
                                >
                                    <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="0.75" y="0.74231" width="69" height="69" rx="34.5" fill="#902A9C"/>
                                        <path d="M47.25 27.2423L39.9571 34.5352C39.5666 34.9257 38.9334 34.9257 38.5429 34.5352L35.9571 31.9494C35.5666 31.5589 34.9334 31.5589 34.5429 31.9494L28.5833 37.909" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                        <path d="M23.25 23.2423V44.0423C23.25 45.1624 23.25 45.7225 23.468 46.1503C23.6597 46.5266 23.9657 46.8326 24.342 47.0243C24.7698 47.2423 25.3299 47.2423 26.45 47.2423H47.25" stroke="white" stroke-width="2" stroke-linecap="round"/>
                                    </svg>

                                    <article>
                                        <header>Personalize your financial insights and goals</header>
                                        <p>Track your spending patterns, analyze income or expenses easily, and receive personalized recommendations to optimize to ur financial habits.</p>
                                    </article>

                                    <Image src='/chart.svg' width={450} height={454} alt="chart"/>

                                </motion.div>
                            </>

                    </div>

                    <div className={styles.map}>
                            <>
                                <motion.div 
                                    initial={{ opacity: 0, x: -100  }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    transition={{ duration: 0.5 }}
                                >
                                    <svg width="69" height="70" viewBox="0 0 69 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect y="0.104248" width="69" height="69" rx="34.5" fill="#902A9C"/>
                                        <path d="M36.3667 41.8309H33.02C30.8333 41.8309 29.06 39.9909 29.06 37.7242C29.06 37.1776 29.5133 36.7242 30.06 36.7242C30.6067 36.7242 31.06 37.1776 31.06 37.7242C31.06 38.8842 31.94 39.8309 33.02 39.8309H36.3667C37.2333 39.8309 37.9533 39.0576 37.9533 38.1242C37.9533 36.9642 37.54 36.7376 36.86 36.4976L31.4867 34.6042C30.4467 34.2442 29.0467 33.4709 29.0467 31.0842C29.0467 29.0309 30.66 27.3776 32.6333 27.3776H35.98C38.1667 27.3776 39.94 29.2176 39.94 31.4842C39.94 32.0309 39.4867 32.4842 38.94 32.4842C38.3933 32.4842 37.94 32.0309 37.94 31.4842C37.94 30.3242 37.06 29.3776 35.98 29.3776H32.6333C31.7667 29.3776 31.0467 30.1509 31.0467 31.0842C31.0467 32.2442 31.46 32.4709 32.14 32.7109L37.5133 34.6042C38.5533 34.9642 39.9533 35.7376 39.9533 38.1242C39.94 40.1642 38.34 41.8309 36.3667 41.8309Z" fill="white"/>
                                        <path d="M34.5 43.6042C33.9533 43.6042 33.5 43.1509 33.5 42.6042V26.6042C33.5 26.0576 33.9533 25.6042 34.5 25.6042C35.0467 25.6042 35.5 26.0576 35.5 26.6042V42.6042C35.5 43.1509 35.0467 43.6042 34.5 43.6042Z" fill="white"/>
                                        <path d="M34.5 48.9376C26.5933 48.9376 20.1667 42.5109 20.1667 34.6042C20.1667 26.6976 26.5933 20.2709 34.5 20.2709C42.4067 20.2709 48.8333 26.6976 48.8333 34.6042C48.8333 42.5109 42.4067 48.9376 34.5 48.9376ZM34.5 22.2709C27.7 22.2709 22.1667 27.8042 22.1667 34.6042C22.1667 41.4042 27.7 46.9376 34.5 46.9376C41.3 46.9376 46.8333 41.4042 46.8333 34.6042C46.8333 27.8042 41.3 22.2709 34.5 22.2709Z" fill="white"/>
                                    </svg>
                    
                                    <article>    
                                        <header>Free transfer any where around the world </header>
                                        <p>Experience the freedom of hassle-free money transfers with our free transfer admin finance app. Say goodbye to unnecessary fees and enjoy seamless transactions.</p>
                                    </article>   
                                </motion.div>
                    
                                <motion.img src='/Map.svg' width={450} height={454} alt="chart" 
                                    initial={{ opacity: 0, x: 100 }} 
                                    whileInView={{ opacity: 1, x: 0 }} 
                                    transition={{ duration: 0.5 }}
                                />
                            </>
                    </div>
                </>
        </section>
    </AnimatePresence>
  )
}
