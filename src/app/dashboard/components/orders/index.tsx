import styles from './styles.module.scss';

export function Orders(){
  return(
    <main className={styles.container}>

      <section className={styles.containerHeader}>
        <h1>Últimos pedidos</h1>
        <button>
          Atualizar
        </button>
      </section>

      <section className={styles.listOrders}>

        <button className={styles.orderItem} >
          <div className={styles.tag}></div>
          <span>Mesa 10</span>
        </button>

        <button className={styles.orderItem} >
          <div className={styles.tag}></div>
          <span>Mesa 13</span>
        </button>        

      </section>
     
    </main>
  )
}