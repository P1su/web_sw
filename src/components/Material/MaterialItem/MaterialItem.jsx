import styles from './MaterialItem.module.css';
import mockImage from '../../../assets/img/mockItem.png';

const MaterialItem = () => {
  return(
    <div className={styles.materialItemWrapper}>
      <img src={mockImage} className={styles.materialImage} />
      <div className={styles.itemBox}>
        <p className={styles.materialType}>자재 분류</p>
        <p className={styles.materialNum}>자재 번호</p>
        <p className={styles.materialName}>자재 이름</p>
      </div>
    </div>
  );
};

export default MaterialItem;