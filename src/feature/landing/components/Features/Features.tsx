// src/components/Hero.tsx
import React from 'react';
import styles from './Features.module.css';
import { CheckIcon } from '../../../../assets/svg/CheckIcon';
import { Heading } from '../../../../components/Heading/Heading';

interface HeroProps {
  imageSrc: string;
  title: string;
  description: string;
  listItems: string[];
}

export const Features: React.FC<HeroProps> = ({ imageSrc, title, description, listItems }) => {
  return (
    <div className={styles.container}>
      <div className={styles.section1}>
        <img src={imageSrc} alt="Hero" className={styles.image} />
      </div>
      <div className={styles.section2}>
        <Heading level={2} className={styles.title}>{title}</Heading>
        <p className={styles.description}>{description}</p>
        <ul className={styles.list}>
          {listItems.map((item, index) => (
            <li key={index} className={styles.listItem}>
              <CheckIcon />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

