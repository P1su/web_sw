import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';

const Header = () => {
  const navigate = useNavigate();
  const navItems = [
    { label: '자재', path: '/materials', },
    { label: '견적 문의', path: '/reservation', },
    { label: '이벤트', path: '/event', },
  ];
  const handleMain = () => {
    navigate('/');
  };

  return(
    <header className={styles.header}>
      <img src={logo} width={'200px'} onClick={() => handleMain()}/>
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