import { Button } from "../../../../components/Button/Button"
import Card from "../../../../components/Card/Card"
import styles from "./Cta.module.css";
export const CTA = ()=>{
    return(
        <Card className={styles.card}>
        <Card.Content className={styles.content}>

            <header className={styles.header}>
          <h3 className={styles.title}>Subscribe now for get special features!</h3>
          <p className={styles.description}> Lorem ipsum dolor sit amet </p>
            </header>
          <Button className={styles.button}>Subscribe now</Button>
        </Card.Content>
      </Card>
    )
}