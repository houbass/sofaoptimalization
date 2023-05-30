import Link from "next/link";
import styles from '@/styles/Home.module.css'

//top navbar
const Navbar = () => {

    return (
        <nav className={`${styles.navbar}`}>

            <Link href="/">
                <button>home</button>
            </Link>

            <Link href="/releases">
                <button>releases</button>
            </Link>

            <Link href="/submit">
                <button>submit music</button>
            </Link>

            <Link href="/workplace">
                <button>workplace</button>
            </Link>

            <Link href="/contact">
                <button>contact</button>
            </Link>

        </nav>
    )
}

export default Navbar;