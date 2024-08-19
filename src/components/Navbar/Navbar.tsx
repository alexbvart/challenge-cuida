import styles from './NavBar.module.css';

interface NavBarProps {
  className?: string;
  children: React.ReactNode;
}

const NavBar: React.FC<NavBarProps> & {
  Logo: typeof NavBarLogo;
  Menu: typeof NavBarMenu;
  MenuItem: typeof NavBarMenuItem;
  Hamburger: typeof NavBarHamburger;
} = ({ className = '', children }) => {

  return (
    <nav className={`${styles.nav} ${className}`}>
        {children}
    </nav>
  );
};

const NavBarLogo: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className={styles.logo}>{children}</div>
);


interface NavBarMenuProps {
  isOpen: boolean;
  children: React.ReactNode;
}

const NavBarMenu: React.FC<NavBarMenuProps> = ({ children, isOpen }) => (
  <ul className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
    {children}
  </ul>
);

const NavBarMenuItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className={styles.menuItem}>{children}</li>
);

const NavBarHamburger: React.FC<{ onClick: () => void }> = ({ onClick }) => (
  <button className={styles.hamburger} onClick={onClick}>
    &#9776;
  </button>
);

NavBar.Logo = NavBarLogo;
NavBar.Menu = NavBarMenu;
NavBar.MenuItem = NavBarMenuItem;
NavBar.Hamburger = NavBarHamburger;

export default NavBar;
