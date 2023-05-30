import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

const Workplace = () => {

    return(
        <main className={`${styles.main} ${inter.className}`}>

            <div className={styles.center}>

                <h2>WORKPLACE PAGE</h2>

                <div className={styles.description}>
                    <p>Description</p>
                </div>

            </div>
        </main>
    )
}

export default Workplace;