import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";

const inter = Inter({ subsets: ['latin'] })

const Submit = () => {

    return(
        <main 
        style={{
            color: "white",
            paddingTop: "150px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
        }} 
        className={`${inter.className}`}
        >

            <div 
            style={{
                //background: "orange",
                display: "flex",
                flexDirection: "row",
                gap: "40px"
            }}>
                <Link 
                href="submit/demo"
                className="submissionCard" 
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px"
                }}>

                    <div 
                    style={{
                        backgroundImage: `url(${backgroundPic2.src})`, 
                        width: "250px",
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px"
                    }}>
                        <p>SUBMIT DEMO</p>
                    </div>
                </Link>

                <Link 
                href="submit/playlist" 
                className="submissionCard"
                style={{
                    textDecoration: "none",
                    color: "white",
                    fontWeight: "bold",
                    fontSize: "20px"
                }}>
                    <div 
                    style={{
                        backgroundImage: `url(${backgroundPic2.src})`, 
                        width: "250px",
                        height: "200px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                        borderRadius: "20px"
                    }}>
                        <p>SUBMIT PLAYLIST</p>
                    </div>
                </Link>


            </div>

        </main>
    )
}

export default Submit;