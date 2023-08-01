import Head from "next/head";
import Script from "next/script";
import { useContext, useLayoutEffect } from "react";

//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";


//components
import Roaster from "@/components/Roaster";

//SERVER SIDER RENDER (firebase data)
export async function getServerSideProps() {
  const contentCollectionRef = collection(db, "content");

  // Fetch data from external API
  const res = await getDocs(contentCollectionRef);
  const filteredData = res.docs.map((doc) => ({
      ...doc.data(), 
      id: doc.id, 
  }));
 
  // Pass data to the page via props
  return { props: { filteredData } }
}

export default function RoasterPage({ filteredData }) {

    return(
        <>
        <Head>
        <title>Sofa Lofi roaster</title>
        <meta name="description" content="lo-fi hip hop beats, music to chill, study and work" key="desc"/>
        
        <meta
          property="og:description"
          content="lo-fi hip hop beats, music to chill, study and work"
        />
        <meta
          property="og:image"
          content="https://sofalofi.com//_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbackground3_v2.f374276e.jpg&w=3840&q=75"
        />

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
        <main 
        className="roasterpage"
        style={{

        }}>
            <Roaster filteredData={filteredData} />
        </main>
        </>
    )
}