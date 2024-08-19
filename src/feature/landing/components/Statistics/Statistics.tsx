import Card from "../../../../components/Card/Card"
import { StatisticsCardItems } from "../../../../constants/statitics";
import styles from './StatisticsCard.module.css';
import { StatisticsItem } from "./StatisticsItem";
import { StatisticsSeparator } from "./StatisticsSeparator";

export const StatisticsCard = () => (
    <section className={styles.statisticsContainer}>
        <Card className={styles.card}>
            <section className={styles.items}>
                <StatisticsItem {...StatisticsCardItems[0]} />
                <StatisticsSeparator />
                <StatisticsItem {...StatisticsCardItems[1]} />
                <StatisticsSeparator />
                <StatisticsItem {...StatisticsCardItems[2]} />
            </section>
        </Card>
    </section>
);

