import Head from 'next/head'
import Image from 'next/image'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Card.module.css'

const manrope = Manrope({ subsets: ['latin'] })

export default function CardSection() {
  return (
    <section className={`${styles.CardSection} ${manrope.className}`}>
        <h2>FEEL THE BEST EXPERIENCE WITH OUR FEATURES</h2>
        <div className={styles.card_container}>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.0878906" y="0.74231" width="69" height="69" rx="34.5" fill="#902A9C"/>
                <path d="M47.9212 31.5757H21.2546C20.7079 31.5757 20.2546 31.1224 20.2546 30.5757C20.2546 30.029 20.7079 29.5757 21.2546 29.5757H47.9212C48.4679 29.5757 48.9212 30.029 48.9212 30.5757C48.9212 31.1224 48.4679 31.5757 47.9212 31.5757Z" fill="white"/>
                <path d="M29.2546 42.2423H26.5879C26.0412 42.2423 25.5879 41.789 25.5879 41.2423C25.5879 40.6956 26.0412 40.2423 26.5879 40.2423H29.2546C29.8012 40.2423 30.2546 40.6956 30.2546 41.2423C30.2546 41.789 29.8012 42.2423 29.2546 42.2423Z" fill="white"/>
                <path d="M37.9212 42.2423H32.5879C32.0412 42.2423 31.5879 41.789 31.5879 41.2423C31.5879 40.6956 32.0412 40.2423 32.5879 40.2423H37.9212C38.4679 40.2423 38.9212 40.6956 38.9212 41.2423C38.9212 41.789 38.4679 42.2423 37.9212 42.2423Z" fill="white"/>
                <path d="M42.0012 47.5756H27.1746C21.8679 47.5756 20.2546 45.9756 20.2546 40.7223V29.7623C20.2546 24.5089 21.8679 22.9089 27.1746 22.9089H41.9879C47.2946 22.9089 48.9079 24.5089 48.9079 29.7623V40.7089C48.9212 45.9756 47.3079 47.5756 42.0012 47.5756ZM27.1746 24.9089C22.9879 24.9089 22.2546 25.6289 22.2546 29.7623V40.7089C22.2546 44.8423 22.9879 45.5623 27.1746 45.5623H41.9879C46.1746 45.5623 46.9079 44.8423 46.9079 40.7089V29.7623C46.9079 25.6289 46.1746 24.9089 41.9879 24.9089H27.1746Z" fill="white"/>
            </svg>

        </div>

        <div className={styles.card_container}>
            <svg width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="0.75" y="0.74231" width="69" height="69" rx="34.5" fill="#902A9C"/>
                <path d="M47.25 27.2423L39.9571 34.5352C39.5666 34.9257 38.9334 34.9257 38.5429 34.5352L35.9571 31.9494C35.5666 31.5589 34.9334 31.5589 34.5429 31.9494L28.5833 37.909" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M23.25 23.2423V44.0423C23.25 45.1624 23.25 45.7225 23.468 46.1503C23.6597 46.5266 23.9657 46.8326 24.342 47.0243C24.7698 47.2423 25.3299 47.2423 26.45 47.2423H47.25" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>

        </div>
    </section>
  )
}
