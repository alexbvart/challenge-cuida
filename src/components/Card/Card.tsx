import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  className?: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> & {
  Title?: typeof CardTitle;
  Content: typeof CardContent;
  Actions?: typeof CardActions;
} = ({ className = '', children }) => (
  <div className={`${styles.card} ${className}`}>
    {children}
  </div>
);

const CardTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className={styles.title}>{children}</h3>
);

interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

const CardContent: React.FC<CardContentProps> = ({ children, className = '' }) => (
  <div className={`${styles.content} ${className}`}>
    {children}
  </div>
);

const CardActions: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.actions}>{children}</div>
);

Card.Title = CardTitle;
Card.Content = CardContent;
Card.Actions = CardActions;

export default Card;
