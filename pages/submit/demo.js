import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

//COMPONENTS
import SubmitDemo from '@/components/SubmitDemo'

const inter = Inter({ subsets: ['latin'] })

const Demo = () => {

    return(
        <main 
        style={{
            color: "white",
            paddingTop: "100px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }} 
        className={`${inter.className}`}
        >
            <SubmitDemo />
        </main>
    )
}

export default Demo;