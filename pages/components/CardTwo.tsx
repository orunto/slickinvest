import Head from 'next/head'
import Image from 'next/image'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Components.module.css'

const manrope = Manrope({ subsets: ['latin'] })

export default function CardTwo() {
  return (
        <div className={styles.card}>
            <div className={styles.card_details}>
                <div>
                    <Image src="/purple logo.svg" width={27} height={37} alt="slickinvest logo" />

                    <svg width="52" height="40" viewBox="0 0 52 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g opacity="0.8">
                    <rect x="1.03862" y="1.16936" width="50.0265" height="37.8208" rx="5.78928" fill="#A39C9C" fill-opacity="0.15" stroke="#2F2F2F" stroke-width="1.2374"/>
                    <path d="M1.22092 12.5656H14.8379C16.6074 12.5656 18.0419 14.0001 18.0419 15.7696V21.9773M18.0419 38.8384V31.3891M18.0419 31.3891V21.9773M18.0419 31.3891H1.22092M18.0419 21.9773H1.22092" stroke="#2F2F2F" stroke-width="1.2374"/>
                    <path d="M50.8828 12.5656H34.8628M34.8628 12.5656V21.9773M34.8628 12.5656V1.35162M34.8628 38.8383V31.3891M34.8628 31.3891V21.9773M34.8628 31.3891H50.8828M34.8628 21.9773H50.8828" stroke="#2F2F2F" stroke-width="1.2374"/>
                    </g>
                    </svg>

                </div>

                <article>
                    <p>
                        <span>Card Number</span>
                        <p>6277 7654 2527 4778</p>
                    </p>

                    <p className={styles.card_details_bottom}>
                        <p>
                            <span>Card holder name</span>
                            <p>JOHN C.</p>
                        </p>

                        <p>
                            <span>Expiry date</span>
                            <p>02/30</p>
                        </p>
                    </p>
                </article>

            </div>

            <div className={styles.card_bg}>
                <div className={styles.card_bg_bottom}></div>
            </div>
        </div>
  )
}
