import MaterialItem from '../MaterialItem/MaterialItem';
import BtnPrimary from '../../buttons/BtnPrimary/BtnPrimary';
import Search from '../../forms/search/Search';
import styles from './MaterialList.module.css';

const MaterialList = () => {
  const types = ['자재', '벽지', '몰딩', '어쩌구', '저쩌구'];
  const materialList = [
    {materialType: '몰딩', materialNum: 1, materialName: '벽지', },
    {materialType: '벽지', materialNum: 2, materialName: '자재1', },
    {materialType: '종류', materialNum: 3, materialName: '자재2', },
    {materialType: '색상', materialNum: 4, materialName: '자재3', },
    {materialType: '아마', materialNum: 5, materialName: '자재4', },
  ];

  return(
    <div className={styles.materialListWrapper}>
      <div className={styles.btnField}>
        {types.map(type =>(
          <BtnPrimary key={type}>{type}</BtnPrimary>
        ))}
      </div>
      <Search placeholder='원하시는 자재를 검색하세요'/>
      <div className={styles.listBox}>
        {materialList.map((materialItem) => (
          <MaterialItem key={materialItem.materialNum} itemValue={materialItem}/>
        ))}
      </div>
    </div>
  );
};

export default MaterialList;