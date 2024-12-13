import styles from './MaterialItem.module.css';

const MaterialItem = ({ itemValue, onClick, width, height }) => {
  return(
    <div className={styles.materialItemWrapper} onClick={() => onClick()}>
      <img src={itemValue?.image_url} style={{ width: width, height: height }}/>
      <div className={styles.itemBox}>
        <p className={styles.pattern}>{itemValue?.pattern}</p>
        <p className={styles.coating}>{itemValue?.coating}</p>
        <p className={styles.coating}>{itemValue?.category}</p>
        <p className={styles.name}>{itemValue?.product_name}</p>
      </div>
    </div>
  );
};

export default MaterialItem;