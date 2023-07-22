import { Inter } from 'next/font/google';
import Image from 'next/image';

//motion lib
import { motion } from 'framer-motion';

//pic 
import backgroundPic2 from "@/components/pic/background2.svg";
import backgroundPic6 from "@/components/pic/background6_v2.jpg"

//COMPONENTS
import Clocks from '@/components/Clocks';
import Calendar from '@/components/Calendar';
import Todos from '@/components/Todos';

const inter = Inter({ subsets: ['latin'] })

const Workplace = () => {

    return(

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
          //marginTop: "70px",
          maxWidth: "1300px",  
          width: "100%",
          position: "absolute",
          zIndex: "0",
          //backgroundImage: "linear-gradient(to bottom, rgb(20, 20, 20) , rgb(40, 40, 40), rgb(20, 20, 20))",
        }}>
          <Image 
          className='submitImg'
          style={{
            height: "1600px"
          }}
        src={backgroundPic6}>
          </Image>

        </div>


        <div 
        style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            color: "white",
            width: "100%",
            maxWidth: "1300px",
            //background: "rgba(20,20, 20, 1)",
            
            border: "solid 20px transparent",
            borderImage: `url(${backgroundPic2.src}) 20 round`,
            borderBottomStyle: "none",
            borderTopStyle: "none",
            height: "100vh",
            minHeight: "1600px",
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

    )
}

export default Workplace;