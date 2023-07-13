import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

//COMPONENTS
import Clocks from '@/components/Clocks'
import Calendar from '@/components/Calendar'
import Todos from '@/components/Todos'
import Calculator from '@/components/Calculator'

const inter = Inter({ subsets: ['latin'] })

const Workplace = () => {

    return(
        <main  className={`${styles.main} ${inter.className}`}>
            <Clocks />
            <Calendar />

            <div 
            style={{
                paddingTop: "70px", 
                color: "white",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>

                <Todos />

            </div>
        </main>
    )
}

export default Workplace;