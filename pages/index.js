
import Head from 'next/head'
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Script from 'next/script';


//pic 
import backgroundPic2 from "@/components/pic/background2.svg"
import backgroundPic3 from "@/components/pic/background3_v3.webp"

//mainpage components
import Topic1 from '@/components/mainpage/Topic1'
import Topic2 from '@/components/mainpage/Topic2'
import Topic3 from '@/components/mainpage/Topic3'
import Topic4 from '@/components/mainpage/Topic4'
import LiveStream from '@/components/mainpage/LiveStream';
import Subscribe from '@/components/mainpage/Subscribe';
import Footer from '@/components/mainpage/Footer'

const inter = Inter({ subsets: ['latin'] })


//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";


//SERVER SIDER RENDER (firebase data)
export async function getServerSideProps() {
  const contentCollectionRef2 = collection(db, "streamingurl");

  // Fetch data from external API
  const data2 = await getDocs(contentCollectionRef2);

  const streamUrl = data2.docs.map((doc) => ({
    ...doc.data(), 
    id: doc.id, 
  }));
 
  // Pass data to the page via props
  return { props: { streamUrl } }
}


export default function Home({ streamUrl }) {

  //SETTINGS
  const maxWidth = 1000;

  return (
    <>
      <Head>
        <title>Sofa Lofi music</title>

        <meta name="description" content="lo-fi hip hop beats, music to chill, study and work" key="desc"/>
        
        <meta name="twitter:card" content="summary" />
        <meta
          property="og:title"
          content="Sofa Lofi music" 
        />
        <meta
          property="og:description"
          content="lo-fi hip hop beats, music to chill, study and work"
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


    <div>
      
      <main 
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        zIndex: "-5",
        //backgroundImage: `url(${backgroundPic2.src})`
        //backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
        
      }} 
      className={`${inter.className} `}>

        <div 
        className='maincardsAnimation2 imgmargin2' 
        style={{
          maxWidth: `${maxWidth}px`,  
          width: "100%",
          position: "fixed",
          zIndex: "0",
          
        }}>
          <Image         
          style={{
          width: "100%",
          height: "auto",
          }} 
          src={backgroundPic3} 
          placeholder='blur'
          >
          </Image>
          <div 
          style={{
            background: "linear-gradient(to bottom, rgba(20,23,39,1), rgba(20,23,39,0))",
            width: "100%",
            height: "500px",
          }}>

          </div>
        </div>

        <div 
        style={{
          display: "flex",
          flexDirection: "column",
          
          color: "white",
          maxWidth: `${maxWidth}px`,
          width: "100%",
          //background: "rgba(20,20, 20, 1)",
          //backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
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
        }}> 


        <div 
        className='welcometext' 
        style={{
          maxWidth: `${maxWidth}px`,
          width: "100%"
        }}
        >
          <svg 
          className='welcomesvg'
          xmlns="http://www.w3.org/2000/svg" 
          width="500" 
          height="120" 
          viewBox="-20 -55 500 100"
          >
              <text 
              className='textPath'
              x="11" 
              y="41"
              >Welcome</text>
            </svg>
            <p 
            className='sofalofiAnim'
              > to Sofa Lofi</p>
          </div>
          </div>

          <div
          style={{
            height: "100vw",
            maxHeight: "1100px"
          }}>

          </div>

          <Topic1 />
          <LiveStream streamUrl={streamUrl}/>
          <Topic2 />
          <Topic3 />
          <Topic4 />
          <Subscribe />

          <Footer />

        </div>

      </main>
      </div>
    </>
  )
}



