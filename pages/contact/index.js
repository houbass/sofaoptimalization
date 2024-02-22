import { Inter } from 'next/font/google'
import Head from 'next/head'
import Image from 'next/image'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic7 from "@/components/pic/background7_v3.png";

//components
import Contact from '@/components/Contact';

const inter = Inter({ subsets: ['latin'] })

const ContactPage = () => {

    return(
      <>
        <Head>
            <title>Sofa Lofi contact</title>
            <meta name="description" content="Wanna ask something? Send us a message." key="desc"/>
            
            <meta
            property="og:description"
            content="Wanna ask something? Send us a message."
            />

            <meta name="twitter:card" content="summary" />
            <meta
              property="og:title"
              content="Sofa Lofi contact" 
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

        <div
        className={`${inter.className}`}
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            
        }}>

        <div 
        className='maincardsAnimation4 imgmargin' 
        style={{
          marginTop: "70px",
          maxWidth: "1000px",  
          width: "100%",
          position: "absolute",
          zIndex: "0",
        }}>
          <Image 
          className='submitImg'
          style={{
            height: "1400px"
          }}
          src={backgroundPic7} 
          alt='background'
          placeholder='blur'>
          </Image>

        </div>


        <div 
        style={{
            minHeight: "1470px",
            height: "100vh",
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
            zIndex: "1",
        }}>
          <div 

          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: "100%",
              paddingTop: "100px",
          }}
          >      
            <Contact />
          </div> 

        </div> 
        </div> 
        </>
    )
}

export default ContactPage;