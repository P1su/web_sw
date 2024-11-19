import styles from './MaterialItem.module.css';
import mockImage from '../../../assets/img/mockItem.png';

const MaterialItem = ({ itemValue }) => {
  console.log(itemValue?.materialType);
  return(
    <div className={styles.materialItemWrapper}>
      <img src={mockImage} className={styles.materialImage} />
      <div className={styles.itemBox}>
        <p className={styles.materialType}>{itemValue?.materialType}</p>
        <p className={styles.materialNum}>{itemValue?.materialNum}</p>
        <p className={styles.materialName}>{itemValue?.materialName}</p>
      </div>
    </div>
  );
};

export default MaterialItem;