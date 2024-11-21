import styles from './MaterialItem.module.css';

const MaterialItem = ({ itemValue, onClick }) => {
  return(
    <div className={styles.materialItemWrapper} onClick={() => onClick()}>
      <img src={itemValue?.imageUrl} className={styles.materialImage} />
      <div className={styles.itemBox}>
        <p className={styles.pattern}>{itemValue?.pattern}</p>
        <p className={styles.coating}>{itemValue?.coating}</p>
        <p className={styles.name}>{itemValue?.name}</p>
      </div>
    </div>
  );
};

export default MaterialItem;