import styles from './Footer.module.css';
import logo from '../../assets/svg/logo.svg';
import IcInstaIcon from './../../assets/svg/IcInstaIcon';
import IcBlogIcon from './../../assets/svg/IcBlogIcon';
import IcYoutubeIcon from './../../assets/svg/IcYoutubeIcon';
import { blogUrl, instaUrl, youtubeUrl } from '../../utils/url';
import { useNavigate } from 'react-router-dom';
const Footer = () => {
  const navigate = useNavigate();
  const navItems = [
    { label: '자재 확인', path: '/materials', },
    { label: '견적 문의', path: '/reservation-board', },
    { label: '포트폴리오', path: '/portfolio', },
    { label: '관리자로그인', path: '/login', },
  ];
  const links = [
    { label: '인스타', path: instaUrl, Component: <IcInstaIcon /> },
    { label: '블로그', path: blogUrl, Component: <IcBlogIcon /> },
    { label: '유튜브', path: youtubeUrl, Component: <IcYoutubeIcon /> },
  ];

  return(
    <footer className={styles.footerWrapper}>
      <div className={styles.titleBox}>
        <img src={logo} width={'120px'} /> <br />
        대표: 김우심 <br />
        TEL: 010-9160-9886 <br />
        사업자등록증: 240-30-00847 <br />
        주소: 서울특별시 금천구 시흥대로315 롯데캐슬 4차 524호 <br />
      </div>
      <div className={styles.infoBox}>
        <div className={styles.a}>
          {
            navItems.map((item) => (
              <a key={item.label} className={styles.navItems} onClick = {() => navigate(item.path)} href='#top'>
                {item.label}
              </a>
            ))
          }
        </div>
        <div className={styles.nav}>
          {
            links.map((item) => (
              <a key={item.label} href={item.path} target='_blank'>
                {item.Component}
              </a>
            ))
          }
        </div>
      </div>
    </footer>
  );
};

export default Footer;