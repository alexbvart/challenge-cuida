import React from 'react';
import styles from './Footer.module.css';

interface FooterProps {
  className?: string;
  children: React.ReactNode;
}

const Footer: React.FC<FooterProps> & {
  Content: typeof FooterContent;
  Links: typeof FooterLinks;
} = ({ className = '', children }) => (
  <footer className={`${styles.footer} ${className}`}>
    {children}
  </footer>
);


interface FooterContentProps {
  children: React.ReactNode;
  className?: string;
}

const FooterContent: React.FC<FooterContentProps> = ({ children, className='' }) => (
  <div className={`${styles.content} ${className}`}>{children}</div>
);

interface FooterLinksProps {
  children: React.ReactNode;
  className?: string;
}

const FooterLinks: React.FC<FooterLinksProps> = ({ children, className = '' }) => (
  <div className={`${styles.links} ${className}`}>{children}</div>
);

Footer.Content = FooterContent;
Footer.Links = FooterLinks;

export default Footer;
