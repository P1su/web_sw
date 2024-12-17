import styles from './Title.module.css';

const Title = ({ children, url }) => {
  return (
    <h1 className={styles.titleWrapper} style={{backgroundImage:`url(${url})`}}>{children}</h1>
  );
};

export default Title;