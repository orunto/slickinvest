import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion"
import NavLogo from "../components/NavLogo";


import styles from '@/styles/Components.module.css'
import { Raleway } from 'next/font/google'
const raleway = Raleway({ subsets: ['latin'], weight: ['100','200','300','400','500','600','700','800','900'] })

const NavDropVariant = {
    hidden: {
        y: -100
    },
    visible: {
        y: 0,
        transition: { 
            delay: 0.5, 
            duration: 0.5
        }
    }
}
export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(!isOpen);
        // const nav = document.getElementById("nav") | null

        // if (isOpen == false ) {
        //     setTimeout(() => {
                
        //         nav.style.backgroundColor= "rgb(7, 5, 27, 0.6)"
        //     }, 300);

        // }

        // else {
        //     setTimeout(() => {
                
        //         nav.style.backgroundColor= "transparent"
        //     }, 300);

        // }
    };

    const [productOpen, setProductOpen] = useState(false);

    const handleProductOpen = () => {
        setProductOpen(!productOpen);
    };

    const [productOpenToo, setProductOpenToo] = useState(false);

    const handleProductOpenToo = () => {
        setProductOpenToo(!productOpenToo);
    };

    const colourNav = () => {
    }

    return(
        <AnimatePresence>

            <motion.nav className={`${styles.nav} ${raleway.className} `} id="nav" >
                <div className={styles.desktop_nav}>
                    <NavLogo />

                    <ul>
                        <motion.li variants={NavDropVariant} initial="hidden" animate="visible"><Link activeClass="active" to="how" spy={true} smooth={true} offset={-70} duration={500}>About</Link></motion.li>
                        <motion.li variants={NavDropVariant} initial="hidden" animate="visible"><Link activeClass="active" to="how" spy={true} smooth={true} offset={-70} duration={500}>Features</Link></motion.li>
                        <motion.li variants={NavDropVariant} initial="hidden" animate="visible"><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Partners</Link></motion.li>
                        <motion.li variants={NavDropVariant} initial="hidden" animate="visible" className={styles.product_dropdown} onMouseEnter={handleProductOpen}><span>
                                Wallet
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                    <path d="M4.74818 6.78448L9.15198 11.2156L13.5558 6.78448" stroke="#fff" stroke-width="1.76697" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </span>

                            
                        </motion.li>
                    </ul>

                    <svg onClick={handleOpen} className={styles.hamburger} xmlns="http://www.w3.org/2000/svg" width="26" height="18" viewBox="0 0 26 18" fill="none">
                    <g clip-path="url(#clip0_168_7402)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0374 8.09058C24.7661 8.09058 25.3568 8.51591 25.3568 9.04058V9.14058C25.3568 9.66525 24.7661 10.0906 24.0374 10.0906H1.67626C0.947547 10.0906 0.356812 9.66525 0.356812 9.14058V9.04058C0.356812 8.51591 0.947547 8.09058 1.67626 8.09058H24.0374Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0374 15.5906C24.7661 15.5906 25.3568 16.0159 25.3568 16.5406V16.6406C25.3568 17.1652 24.7661 17.5906 24.0374 17.5906H1.67626C0.947547 17.5906 0.356812 17.1652 0.356812 16.6406V16.5406C0.356812 16.0159 0.947547 15.5906 1.67626 15.5906H24.0374Z" fill="white"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0374 0.590576C24.7661 0.590576 25.3568 1.01591 25.3568 1.54058V1.64058C25.3568 2.16525 24.7661 2.59058 24.0374 2.59058H1.67626C0.947547 2.59058 0.356812 2.16525 0.356812 1.64058V1.54058C0.356812 1.01591 0.947547 0.590576 1.67626 0.590576H24.0374Z" fill="white"/>
                    </g>
                    <defs>
                        <clipPath id="clip0_168_7402">
                        <rect width="25" height="17" fill="white" transform="translate(0.356812 0.590576)"/>
                        </clipPath>
                    </defs>
                    </svg>

                    <ul>
                        <li>Login</li>
                        <button className={styles.NavButton}>Sign Up</button>
                    </ul>
                </div>

                <AnimatePresence>

                    {isOpen && (
                            <motion.div onMouseLeave={handleOpen} className={styles.mobile_nav} 
                                initial={{ y: -1000 }} 
                                animate={{ y: 0 }} 
                                exit={{ y: -1000 }}
                                transition={{ duration: 0.5 }}
                            >
                                <ul>
                                <li><Link activeClass="active" to="how" spy={true} smooth={true} offset={-70} duration={500}>About</Link></li>
                                <li><Link activeClass="active" to="how" spy={true} smooth={true} offset={-70} duration={500}>Features</Link></li>
                                <li><Link activeClass="active" to="contact" spy={true} smooth={true} offset={-70} duration={500}>Partners</Link></li>
                                <li className={styles.product_dropdown} onMouseEnter={handleProductOpen}><span>
                                        Wallet
                                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                            <path d="M4.74818 6.78448L9.15198 11.2156L13.5558 6.78448" stroke="#008DC9" stroke-width="1.76697" stroke-linecap="round" stroke-linejoin="round"/>
                                        </svg>
                                    </span>

                                    
                                </li>
                                </ul>

                                <ul>
                                    <li>Login</li>
                                    <button className={styles.NavButton}>Sign Up</button>
                                </ul>
                            </motion.div>
                        )
                    }
                </AnimatePresence>

            </motion.nav>
        </AnimatePresence>
    )
}