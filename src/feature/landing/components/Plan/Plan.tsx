import Card from '../../../../components/Card/Card';
import { Heading } from '../../../../components/Heading/Heading';
import { planList } from '../../../../constants/plansC';
import styles from './Plan.module.css';
import { PlanItem } from './PlanItem';

export const Plan: React.FC = () => {
  return (
    <section>
      <header className={styles.header}>
        <Heading level={2}>Choose your plan</Heading>
        <p className='description'>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
      </header>

      <div className={styles.container}>
        <Card className={styles.card}>
          <Card.Content>
            <PlanItem {...planList[0]} />
          </Card.Content>
        </Card>
        <Card className={styles.card}>
          <Card.Content>
            <PlanItem {...planList[1]} />

          </Card.Content>
        </Card>
        <Card className={styles.card}>
          <Card.Content>
            <PlanItem {...planList[2]} />

          </Card.Content>
        </Card>

      </div>
    </section>
  );
};

