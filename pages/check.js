
//firebase database
import { db, storage } from "config/firebase";
import { getDocs, collection, addDoc, deleteDoc, updateDoc, doc } from "firebase/firestore";

export async function getServerSideProps() {
    const contentCollectionRef = collection(db, "content");

    // Fetch data from external API
    const res = await getDocs(contentCollectionRef);
    const filteredData = res.docs.map((doc) => ({
        ...doc.data(), 
        id: doc.id, 
    }));
    const data = filteredData;
   
    // Pass data to the page via props
    return { props: { data } }
  }




export default function check({ data }) {

    console.log(data)


    return(
        <>
        <div
        className="center"
        style={{
            color: "white"
        }}>
            <br/><br/><br/><br/><br/>
            <h1>SSR CHECK</h1>
            {data.map((doc) => (
                <p>{doc.artists}</p>
            ))}

        </div>
        </>
    )
}