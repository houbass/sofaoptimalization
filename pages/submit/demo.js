import { Inter } from 'next/font/google'
import Image from 'next/image'
import Head from 'next/head'

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic4 from "@/components/pic/background4_v3.webp";

//COMPONENTS
import SubmitdemoV2 from '@/components/SubmitdemoV2'


const inter = Inter({ subsets: ['latin'] })

const Demo = () => {

    return(
        <>
        <Head>
            <title>Sofa Lofi demo submission</title>
            <meta name="description" content="submit your music to label consideration" key="desc"/>
            
            <meta
            property="og:description"
            content="submit your music to label consideration"
            />

            <meta name="twitter:card" content="summary" />
            <meta
            property="og:title"
            content="Sofa Lofi demo submission" 
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

            <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />        
            <link rel="preconnect" href="https://fonts.googleapis.com"></link>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
            <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>

        </Head> 

        <div
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            minHeight: "1400px",
        }}>

        <div 
        className='maincardsAnimation4 imgmargin' 
        style={{
          maxWidth: "1000px",  
          width: "100%",
          position: "absolute",
          top: "0",
          zIndex: "0",
          
        }}>
          <Image 
          className='submitImg' 
          style={{
            height: "1153px"
          }}
        src={backgroundPic4} 
        alt='background'
        placeholder='blur'>
          </Image>

        </div>

        <div 
        style={{
            height: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            width: "100%",
            maxWidth: "1000px",            
            border: "solid 20px transparent",
            borderImage: `url(${backgroundPic2.src}) 20 round`,
            borderImageRepeat: "repeat",
            borderBottomStyle: "none",
            borderTopStyle: "none",
            zIndex: "1",
        }}>
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
                <div 
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                }}>
                    <SubmitdemoV2 />
                </div>
            </main>
        </div>
        </div>
        </>
    )
}

export default Demo;