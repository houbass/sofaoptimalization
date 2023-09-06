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

        <meta name="twitter:card" content="summary" />
        <meta
          property="og:title"
          content="Sofa Lofi music" 
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
        <main 
        className="roasterpage"
        style={{

        }}>
            <Roaster filteredData={filteredData} />
        </main>
        </>
    )
}