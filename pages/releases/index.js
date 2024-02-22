
//fonts and styles
import { Inter } from 'next/font/google'
import Image from 'next/image';
import Head from 'next/head';

//firebase database
import { db } from "config/firebase";
import { getDocs, collection } from "firebase/firestore";

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic4 from "@/components/pic/background5_v3.png";

//components
import Releases from '@/components/Releases';

const inter = Inter({ subsets: ['latin'] })

//SERVER SIDER RENDER (firebase data)
export async function getServerSideProps() {
  const contentCollectionRef = collection(db, "content");
  const contentCollectionRef2 = collection(db, "streamingurl");

  // Fetch data from external API
  const res = await getDocs(contentCollectionRef);
  const data2 = await getDocs(contentCollectionRef2);

  const filteredData = res.docs.map((doc) => ({
      ...doc.data(), 
      id: doc.id, 
  }));

  const filteredData2 = data2.docs.map((doc) => ({
    ...doc.data(), 
    id: doc.id, 
  }));
 
  // Pass data to the page via props
  return { props: { filteredData, filteredData2 } }
}


const ReleasesPage = ({ filteredData, filteredData2 }) => {

    return(
        <>
            <Head>
            <title>Sofa Lofi releases</title>
            <meta name="description" content="check out our latest lofi releases" key="desc"/>
            
            <meta
            property="og:description"
            content="check out our latest lofi releases"
            />
            <meta name="twitter:card" content="summary" />
            <meta
              property="og:title"
              content="Sofa Lofi releases" 
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
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            height: "100vh",
            minHeight: "1550px",
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
            height: "1550px"
          }}
          src={backgroundPic4} 
          alt="background"
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
        
        className={` ${inter.className}`} 
        style={{
            marginTop: "100px",
            width: "100%"
        }}
        >
          <div 
          style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
          }}>
              <div 
              className='brush'
              style={{
                  display: "flex",
                  flexDirection: "column",
                  marginTop: "50px",
                  alignItems: "center",
                  textAlign: "center",
                  background: "orange",
                  padding: "30px 15px",
                  borderRadius: "50px",
                  background: "rgba(20,20,20,0.9)",
                  boxShadow: "0px 5px 40px rgba(0, 0, 0, 0.637)",
                  margin: "0px 10px"
                  

              }}>
                  <h1 
                  style={{
                      paddingBottom: "30px",
                      
                  }}>Latest Sofa Lofi releases</h1>
                  <Releases filteredData={filteredData}/>
                  <div className='brush center mt'>
                      <h2>wanna hear more?</h2>
                      <p>check out Sofa Lofi Releases playlist or our 24/7 Youtube live stream</p>
                      <a href="https://open.spotify.com/playlist/6xYInAFbEiRecBuFYqXvK7?si=6ed439a031744eed" target="_blank">
                          <button className="nicebutton mt" >playlist</button>
                      </a>
                      <a href={filteredData2[0].url} target="_blank">
                          <button className="nicebutton mt" >live stream</button>
                      </a>
                  </div>

              </div>
          </div>
        </main>
        </div>
        </div>
        </>
    )
}

export default ReleasesPage;