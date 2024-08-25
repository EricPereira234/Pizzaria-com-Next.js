import Link from "next/link";
import styles from "./header.module.scss";
import Image from "next/image";


//arquivos internos
import Logo from "../../../../../public/logo.svg";


export default function Header() {
    return (
        <header className={styles.headerContainer} >
            <div className={styles.headerContent} >
                <Link href={'/dashboard'} >
                    <Image alt="Logo" src={Logo} width={190} height={60} priority={true} quality={100}/>
                </Link>
                <nav>
                    <Link href={'#'} >Categorias</Link>
                    <Link href={'#'} >Produtos</Link>
                </nav>
            </div>
        </header>
    )
}