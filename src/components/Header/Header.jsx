import styles from './Header.module.css';
import logo from '../../assets/svg/logo.svg';
const Header = () => {
  const navItems = [
    { label: '후기', path: '/' },
    { label: '자재', path: '/about' },
    { label: '문의', path: '/contact' },
  ];
  return(
    <header className={styles.header}>
      <img src={logo} width={'200px'}/>
      <nav className={styles.navBar}>
        {
          navItems.map((item) => (
            <a key={item.label} className={styles.navItems}>
              {item.label}
            </a>
          ))
        }
      </nav>
    </header>
  );
};

export default Header;