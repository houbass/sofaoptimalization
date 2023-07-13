import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

//components
import Playlistsubmit from '@/components/Playlistsubmit'

const inter = Inter({ subsets: ['latin'] })

const Playlist = () => {

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
            <Playlistsubmit />

        </main>
    )
}

export default Playlist;