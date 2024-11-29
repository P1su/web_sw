import styles from './Header.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/svg/logo.svg';
import IcInstaIcon from './../../assets/svg/IcInstaIcon';
import IcBlogIcon from './../../assets/svg/IcBlogIcon';
import IcYoutubeIcon from './../../assets/svg/IcYoutubeIcon';
import { blogUrl, instaUrl, youtubeUrl } from '../../utils/url';

const Header = () => {
  const navigate = useNavigate();
  const navItems = [
    { label: '포트폴리오', path: '/portfolio', },
    { label: '자재', path: '/materials', },
    { label: '견적 문의', path: '/reservation', },
    { label: '이벤트', path: '/event', },
  ];
  const links = [
    { label: '인스타', path: instaUrl, Component: <IcInstaIcon /> },
    { label: '블로그', path: blogUrl, Component: <IcBlogIcon /> },
    { label: '유튜브', path: youtubeUrl, Component: <IcYoutubeIcon /> },
  ];
  const handleMain = () => {
    navigate('/');
  };

  return(
    <header className={styles.header}>
      <img src={logo} width={'150px'} onClick={() => handleMain()}/>
      <nav className={styles.navBar}>
        {
          navItems.map((item) => (
            <a key={item.label} className={styles.navItems} onClick = {() => navigate(item.path)}>
              {item.label}
            </a>
          ))
        }
      </nav>
      <nav className={styles.linkItems}>
        {
          links.map((item) => (
            <a key={item.label} href={item.path} target='_blank'>
              {item.Component}
            </a>
          ))
        }
      </nav>
    </header>
  );
};

export default Header;