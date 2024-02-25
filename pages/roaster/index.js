import Head from "next/head";

//firebase database
import { db } from "config/firebase";
import { getDocs, collection } from "firebase/firestore";

//components
import Roaster from "@/components/Roaster";

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

export default function RoasterPage({ filteredData, filteredData2 }) {


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
        
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />        
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
        <link href="https://fonts.googleapis.com/css2?family=Alfa+Slab+One&display=swap" rel="stylesheet"></link>
        </Head>

        <main 
        className="roasterpage"
        style={{

        }}>
            <Roaster filteredData={filteredData} filteredData2={filteredData2}/>
        </main>
        </>
    )
}