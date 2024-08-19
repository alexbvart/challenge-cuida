import styles from './StatisticsCard.module.css';

interface StatisticsItemProps {
    icon: string; 
    title: string; 
    value: string;
}

export const StatisticsItem = ({ icon, title, value }: StatisticsItemProps) => {
    return (
        <section className={styles.item}>
            <img src={icon} alt={title} className={styles.icon} />
            <div className={styles.texts}>
                <div className={styles.title}>{value}</div>
                <div className={styles.value}>{title}</div>
            </div>
        </section>
    )
}