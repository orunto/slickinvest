import Head from 'next/head'
import Image from 'next/image'
import { Manrope } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const manrope = Manrope({ subsets: ['latin'] })

export default function TestimonialSection() {
  return (
    <section className={`${styles.TestimonialSection} ${manrope.className}`}>
        <h2>Join 15+ million people who already trust us with their money</h2>

        <div className={styles.testimonial_details_container}>
            <Image src="/Testimonial1.webp" width={583} height={645} alt="app image" />

            <div className={styles.testimonial_details}>
                <p>Experience the freedom of hassle-free money transfers with our free transfer admin finance app. Say goodbye to unnecessary fees and enjoy seamless transactions.</p>

                <div className={styles.testimonial_customer}>
                    <header>John Timothy</header>

                    <div className={styles.testimonial_button_container}>
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                                <path d="M9.57 19.4682C9.38 19.4682 9.19 19.3982 9.04 19.2482L2.97 13.1782C2.68 12.8882 2.68 12.4082 2.97 12.1182L9.04 6.04819C9.33 5.75819 9.81 5.75819 10.1 6.04819C10.39 6.33819 10.39 6.81819 10.1 7.10819L4.56 12.6482L10.1 18.1882C10.39 18.4782 10.39 18.9582 10.1 19.2482C9.96 19.3982 9.76 19.4682 9.57 19.4682Z" fill="#292D32"/>
                                <path d="M20.5 13.3982H3.66998C3.25998 13.3982 2.91998 13.0582 2.91998 12.6482C2.91998 12.2382 3.25998 11.8982 3.66998 11.8982H20.5C20.91 11.8982 21.25 12.2382 21.25 12.6482C21.25 13.0582 20.91 13.3982 20.5 13.3982Z" fill="#292D32"/>
                            </svg>
                        </button>
                        
                        <button>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                            <path d="M14.43 19.4682C14.24 19.4682 14.05 19.3982 13.9 19.2482C13.61 18.9582 13.61 18.4782 13.9 18.1882L19.44 12.6482L13.9 7.10819C13.61 6.81819 13.61 6.33819 13.9 6.04819C14.19 5.75819 14.67 5.75819 14.96 6.04819L21.03 12.1182C21.32 12.4082 21.32 12.8882 21.03 13.1782L14.96 19.2482C14.81 19.3982 14.62 19.4682 14.43 19.4682Z" fill="white"/>
                            <path d="M20.33 13.3982H3.5C3.09 13.3982 2.75 13.0582 2.75 12.6482C2.75 12.2382 3.09 11.8982 3.5 11.8982H20.33C20.74 11.8982 21.08 12.2382 21.08 12.6482C21.08 13.0582 20.74 13.3982 20.33 13.3982Z" fill="white"/>
                            </svg>
                        </button>
                    </div>

                </div>
            </div>

        </div>
    </section>
  )
}
