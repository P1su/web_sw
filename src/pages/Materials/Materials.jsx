import Title from '../../components/Title/Title';
import styles from './Materials.module.css';
import MaterialList from './../../components/Material/MaterialList/MaterialList';

const Materials = () => {
  return(
    <div className={styles.materialsPageWrapper}>
      <Title>Films</Title>
      <h2 className={styles.titleText}>자재를 확인해보세요</h2>
      <p className={styles.text}>
        실제 시공에 사용되는 <br />
        다양한 자재들을 미리 볼 수 있습니다<br />
      </p>
      <hr className={styles.hr}/>
      <MaterialList />
    </div>
  );
};

export default Materials;