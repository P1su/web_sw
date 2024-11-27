import styles from './Header.module.css';
import logo from '../../assets/svg/logo.svg';
import { useNavigate } from 'react-router-dom';

import newLogo from '../../assets/svg/newLogo.svg';
const Header = () => {
  const navigate = useNavigate();
  const navItems = [
    { label: '후기', path: '/', },
    { label: '자재', path: '/materials', },
    { label: '견적 문의', path: '/estimate', },
  ];
  return(
    <header className={styles.header}>
      <img src={newLogo} width={'200px'}/>
      <nav className={styles.navBar}>
        {
          navItems.map((item) => (
            <a key={item.label} className={styles.navItems} onClick = {() => navigate(item.path)}>
              {item.label}
            </a>
          ))
        }
      </nav>
    </header>
  );
};

export default Header;