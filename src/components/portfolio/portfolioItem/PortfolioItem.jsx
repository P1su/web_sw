import styles from './PortfolioItem.module.css';
import mockImg from '../../../assets/img/mockItem.png';
import { useNavigate } from 'react-router-dom';

const PortfolioItem = ({ imageUrl, title, id }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/portfolio/${id}`);
  }

  return(
    <div className={styles.wrapper} onClick={() => handleNavigate()}>
      <img src={mockImg} className={styles.previewImage}/>
      <p className={styles.titleText}>{title}</p>
    </div>
  );
};

export default PortfolioItem;