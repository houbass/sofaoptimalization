import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useEffect, useRef } from 'react'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

const Contact = () => {

    return(

        <main className={`${styles.main} ${inter.className}`}>

            <div className={styles.center}>

                <h2>CONTACT PAGE</h2>

                <div className={styles.description}>
                    <p>Description</p>

                </div>
            </div>
        </main>


    )
}

export default Contact;