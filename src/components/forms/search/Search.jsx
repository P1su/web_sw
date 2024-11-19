import styles from './Search.module.css';

const Search = ({ placeholder }) => {
  return(
    <input className={styles.searchInput} placeholder={placeholder}/>
  );
};

export default Search;