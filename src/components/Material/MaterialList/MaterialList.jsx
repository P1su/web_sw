import MaterialItem from '../MaterialItem/MaterialItem';
import styles from './MaterialList.module.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import useGetMaterialList from '../../../hooks/queries/material/useGetMaterialList';
import { lxTypes, patterns, coatings } from '../../../utils/materialTypes';

const MaterialList = ({ setCompare, isCompare=false, closeModal }) => {
  const navigate = useNavigate();
  const [company, setComapny] = useState('lx');
  const [filter, setFilter] = useState('');
  const [page, setPage] = useState(0); // 현재 페이지
  const itemsPerPage = 100; // 한 페이지에 표시할 자재 수
  const { data } = useGetMaterialList(company);

  const handleActive = () => {
    setComapny(company === 'lx'? 'hyundai' : 'lx');
    setPage(0);
    setFilter('');
  };
  const handleFilter = (value) => {
    filter === value ? setFilter('') : setFilter(value);
    setPage(0);
  };
  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  const filteredData = data
  ? data.filter((item) => {
      if (!filter) return true;
      const regex = new RegExp(`(^|\\s)${filter}($|\\s)`, 'i');  

      return item.category && regex.test(item.category) || item.pattern && regex.test(item.pattern) || item.coating && regex.test(item.coating); 
    })
  : [];

  const currentPageData = filteredData.slice(page * itemsPerPage, (page + 1) * itemsPerPage);

  const handleClick = (name) => {
    if(isCompare){
      setCompare((prevValues) => ({
        ...prevValues,
        company: company,
        name: name,
      }));
      closeModal();
    } else{
      navigate(`/material/${company}/${name}`);
    }
  };

  return(
    <div className={styles.materialListWrapper}>
      <div className={styles.company}>
        <span className={`${company === 'lx' ? styles.active : styles.unactive}`} onClick={() => handleActive()}>Lx Z:IN </span>
        |  
        <span className={`${company === 'hyundai' ? styles.active : styles.unactive}`} onClick={() => handleActive()}> HYUNDAI</span>
      </div>
      <div className={styles.btnField}>
        {
        company === 'lx'? lxTypes.map(type =>(
          <span 
            key={type} 
            className={`${filter === type ? styles.active : styles.unactive}`}
            onClick={() => handleFilter(type)}
          >
            {type}
          </span>
          ))
        :
          <>
            <span className={styles.active}>패턴</span>
              {
                patterns.map(type =>(
                  <span 
                    key={type} 
                    className={`${filter === type ? styles.active : styles.unactive}`}
                    onClick={() => handleFilter(type)}
                  >
                    {type}
                  </span>
                ))
              }
            <br/>
            <span className={styles.active}>코팅</span>
            {
              coatings.map(type =>(
                <span 
                  key={type} 
                  className={`${filter === type ? styles.active : styles.unactive}`}
                  onClick={() => handleFilter(type)}
                >
                  {type}
                </span>
              ))
            }
          </>
        }
      </div>
      <div className={styles.listBox}>
        {currentPageData.map((materialItem) => (
          <MaterialItem 
            key={materialItem.product_name} 
            itemValue={materialItem} 
            width='29.7rem'
            height='29.7rem'
            onClick={() => handleClick(materialItem.product_name)}
          />
        ))}
      </div>
      <div className={styles.pagination}>
        <button
          onClick={() => handlePageChange(page - 1)}
          disabled={page === 0}
          className={styles.pageButton}
        >
          &lt;
        </button>
        <span className={styles.pageSpan}>페이지 {page + 1}</span>
        <button
          onClick={() => handlePageChange(page + 1)}
          disabled={data && currentPageData.length < itemsPerPage}
          className={styles.pageButton}
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default MaterialList;