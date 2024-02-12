import Head from "next/head";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';


//components
import Subscribtion from "@/components/Subscribtion";


export default function SubscribeMe() {
    const router = useRouter();
    const [formVisibility, setFormVisibility] = useState("visible");

    //redirecting function
    async function redirecting() {
        setTimeout(() => {
            router.push('/');
        }, 500)
    }

    //redirect when
    useEffect(() => {
        if(formVisibility === "hideAnim") {
            redirecting();
        }
    }, [formVisibility])


    return(
        <>
        <Head>
        <title>Sofa Lofi newsletter</title>
        <meta name="description" content="subscribe to the newsletter" key="desc"/>
        
        <meta
          property="og:description"
          content="subscribe to the newsletter"
        />

        <meta name="twitter:card" content="summary" />
        <meta
          property="og:title"
          content="Sofa Lofi newsletter" 
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

        <main className="roasterpage">
            <Subscribtion formVisibility={formVisibility} setFormVisibility={setFormVisibility}/>
        </main>

        </>
    )
}