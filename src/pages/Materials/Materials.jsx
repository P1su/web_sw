import Title from '../../components/Title/Title';
import styles from './Materials.module.css';
import MaterialList from './../../components/Material/MaterialList/MaterialList';

const Materials = () => {
  return(
    <div className={styles.materialsPageWrapper}>
      <Title>FILMS</Title>
      <MaterialList />
    </div>
  );
};

export default Materials;