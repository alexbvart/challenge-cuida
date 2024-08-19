import styles from './Hero.module.css';
import { Heading } from '../../../../components/Heading/Heading';
import { Button } from '../../../../components/Button/Button';

export const Hero: React.FC = () => (
  <section className={styles.hero}>
    <div className={styles.textContainer}>
      <Heading level={1} className={styles.text1}>
        Want anything to be easy with 
        <b className='span'>
          {' '}LaslesVPN
          </b>
      </Heading>
      <p className={styles.text2}>Lorem ipsum dolor sit amet consectetur. Quis tortor gravida nibh arcu id purus ullamcorper. Vel vel erat semper augue.</p>
      <Button className={styles.button}>Get started</Button>
    </div>
    <div className={styles.imageContainer}>
      <img src="https://s3-alpha-sig.figma.com/img/36e9/d2bd/52c016d65071bd64604f12fa3acc4af2?Expires=1724630400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=M~lke~6~IkoLBICrcJoxrTQ1d0Aae9DVrpd4F2BaXPZqkOGIaks8kLJCvZEuHwRmUOd4pX1mLfL9BGXURKYGs58yYKqnfh74G-plHHgssDPx2G0ws4YbUd4tFvyYQSGMHSiHd4-do1NRQP2n2hvyDvWUU~Qbyh~eyIMzrgGwvjQfX1yHLviu5E2eac8U4eohAtOacWtlXBKoiiL81iXaNg-O8ufayeixQ6eh3hvf6WUaodExnTaLkJik7mPZv5guYt2-LUoGPTQUzi0triLq6RNWOFQOKDlxk5KqfeM7Oeah7OsssP0tRw63UizLqaa5j22uB5nkNKo7NpyKXdzGdw__" alt="Hero" className={styles.heroImage} />
    </div>
  </section>
);

