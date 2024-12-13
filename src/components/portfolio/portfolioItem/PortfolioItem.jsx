import styles from './PortfolioItem.module.css';
import { useNavigate } from 'react-router-dom';

const PortfolioItem = ({ imageUrl, title, id }) => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/portfolio/${id}`);
  }
  console.log(imageUrl)

  return(
    <div className={styles.wrapper} onClick={() => handleNavigate()}>
      <img src={imageUrl} className={styles.previewImage}/>
      <p className={styles.titleText}>{title}</p>
    </div>
  );
};

export default PortfolioItem;