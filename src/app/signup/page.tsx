import styles from "../page.module.scss";
import Image from "next/image";


import logoImg from "/public/logo.svg";
import Link from "next/link";

export default function Signup() {
    return (
        <>

            <div className={styles.containerCenter} >
                <Image src={logoImg} alt="Logo da Pizzaria" />


                <section className={styles.login} >
                    <h2>criando sua conta</h2>
                    <form>
                        <input type="text" required name="name" placeholder="Digite seu nome" className={styles.input} />
                        <input type="email" required name="email" placeholder="Digite seu email" className={styles.input} />
                        <input type="password" required name="password" placeholder="Digite sua senha" className={styles.input} />
                        <button type="submit" >Acessar</button>
                    </form>

                    <Link href={"/"} className={styles.text} >já possue um conta? Faça login</Link>
                </section>

            </div>

        </>
    );
}
