import useGetPortfolioList from '../../../hooks/queries/portfolio/useGetPortfolioList';
import PortfolioItem from '../portfolioItem/PortfolioItem';
import styles from './PortfolioList.module.css';

const PortfolioList = () => {
  const { data } = useGetPortfolioList();

  return(
    <div className={styles.wrapper}>
      {
        data ? 
        data.map((item) => (
          <PortfolioItem key={item.id} imageUrl={item.main_image} title={item.title} id={item.id}/>
        )) : null
      }
    </div>
  );
};

export default PortfolioList;