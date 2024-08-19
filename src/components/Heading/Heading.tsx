import React from 'react';
import styles from './Heading.module.css';

interface HeadingProps {
  level: 1 | 2 | 3 | 4 | 5 | 6; 
  className?: string;
  children: React.ReactNode;
}

export const Heading: React.FC<HeadingProps> = ({ level, className = '', children }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;
  const levelClass = `h${level}` as keyof typeof styles;
  return (
    <Tag className={`${styles.heading} ${styles[levelClass]}  ${className}`}>
      {children}
    </Tag>
  );
};

