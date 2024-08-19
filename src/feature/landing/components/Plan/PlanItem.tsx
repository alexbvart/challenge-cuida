import { CheckIcon } from '../../../../assets/svg/CheckIcon';
import { Button } from '../../../../components/Button/Button';
import styles from './Plan.module.css';

interface PlanProps {
  title: string;
  price: string;
  listItems: string[];
}

export const PlanItem = ({ title, price, listItems }: PlanProps) => {
  return (
    <article className={styles.planArticleItem}>
      <main>
        <img className={styles.image} src='https://s3-alpha-sig.figma.com/img/3548/b3a5/aeca76ad41cf147cf6387bbae5bcdb65?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=FWa0KwKiEN3Exn0ryLjTaoN2WnJq3pkxuUekXRWFQCNvYvxub3waOg9AKz5JC32eTDnB3pPZoU36IHl8tLt0D2Y24evzu-7J6bQG9EzSt39LQzlBegJ4F~M7AuAYu2M3P~e-jj8IXnfBHzhnS~vwwTO383neUhTE0R3BOGKq5~xloYSOvk3GLJYxL6iQHK9FMP8PAv4T-reV7jrCZwwDptya6yNMztGF4Eazt0TX-1Lw75y9TO6zRB6a29ZoGiN7JC4gkwoE3lKYCaMF0SNOZccvCXIjHGys7t4dUF-5OH4Ne2v91gYLMayjcLaVPdp~zOmSx23isI~B2gVf1eC77Q__' alt="box" />
        <p className={styles.description}>{title}</p>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <CheckIcon className={styles.checkIcon} />
              {item}
            </li>
          ))}
        </ul>
      </main>
      <footer className={styles.footer}>
        <p className={styles.price}>{renderPrice(price)}</p>
        <Button className={styles.button}>Select</Button>
      </footer>
    </article>

  )
}

const renderPrice = (price:string) => {
  if (price.includes('/')) {
    const [amount, period] = price.split('/');
    return (
      <>
        {` ${amount.trim()} / `}
        <span>{period.trim()}</span>
      </>
    );
  }
  return <>{price}</>;
};