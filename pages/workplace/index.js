import { Inter } from 'next/font/google';
import Image from 'next/image';
import Head from 'next/head';
import Script from 'next/script';

//motion lib
import { motion } from 'framer-motion';

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic6 from "@/components/pic/background6_v2.webp";

//COMPONENTS
import Clocks from '@/components/Clocks';
import Calendar from '@/components/Calendar';
import Todos from '@/components/Todos';

const inter = Inter({ subsets: ['latin'] })

const Workplace = () => {

    return(
        <>
        <Head>
            <title>Sofa Lofi workplace</title>
            <meta name="description" content="This feature will help you to work and listen music at one place." key="desc"/>
            
            <meta
            property="og:description"
            content="This feature will help you to work and listen music at one place."
            />

            <meta name="twitter:card" content="summary" />
            <meta
            property="og:title"
            content="Sofa Lofi workplace" 
            />

            <meta
            property="og:image"
            content="background.webp"
            />

            <meta
            property="og:image:type"
            content="image/webp"
            />

            <meta
            property="og:image:width"
            content="500"
            />
            <meta
            property="og:image:height"
            content="500"
            />

            <meta name="author" content="Ondrej Laube" />

            <meta name="viewport" content="width=device-width, initial-scale=1" />


            <link rel="icon" href="/favicon.ico" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />        
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>

        </Head>
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-XQWVQB598P" />
        <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-XQWVQB598P');
            `}
        </Script>
        
        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
        }}>

        <div 
        className='maincardsAnimation4 imgmargin' 
        style={{
          maxWidth: "1000px",  
          width: "100%",
          position: "absolute",
          zIndex: "0",
        }}>
            <Image 
            className='submitImg'
            style={{
                height: "1300px"
            }}
            src={backgroundPic6} 
            alt='background'
            placeholder='blur'
            >
            </Image>
        </div>

        <div 
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            width: "100%",
            maxWidth: "1000px",            
            border: "solid 20px transparent",
            borderImage: `url(${backgroundPic2.src}) 20 round`,
            borderBottomStyle: "none",
            borderTopStyle: "none",
            height: "100vh",
            minHeight: "1300px",
            zIndex: "1"
        }}>
        <motion.div 
        animate={{
            opacity: [0, 1]
        }}
        transition={{
            duration: 1,
            ease: "easeInOut",
        }}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
        }}
        >
        <main 
        className={`${inter.className}`}
        style={{width: "100%"}}
        >
            <div 
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                marginTop: "70px",
                padding: "0px 30px"
            }}>
                <Clocks />
                <Calendar />
            </div>

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
        </motion.div>
        </div>
        </div>
        </>
    )
}

export default Workplace;