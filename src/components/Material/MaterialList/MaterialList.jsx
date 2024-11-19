import MaterialItem from '../MaterialItem/MaterialItem';
import styles from './MaterialList.module.css';

const MaterialList = () => {
  const materialList = [
    {materialType: '몰딩', materialNum: 1, materialName: '벽지', },
    {materialType: '벽지', materialNum: 2, materialName: '자재1', },
    {materialType: '종류', materialNum: 3, materialName: '자재2', },
    {materialType: '색상', materialNum: 4, materialName: '자재3', },
    {materialType: '아마', materialNum: 5, materialName: '자재4', },
  ];

  return(
    <div className={styles.materialListWrapper}>
      {materialList.map((materialItem) => (
        <MaterialItem key={materialItem.materialNum} itemValue={materialItem}/>
      ))}
    </div>
  );
};

export default MaterialList;