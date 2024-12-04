import PortfolioItem from '../portfolioItem/PortfolioItem';
import styles from './PortfolioList.module.css';

const PortfolioList = () => {
  const items = [
    {imageUrl: '', title: '고양시 일산동구 시공', id: 0, },
    {imageUrl: '', title: '고양시 일산동구 시공', id: 1, },
    {imageUrl: '', title: '고양시 일산동구 시공', id: 2, },
    {imageUrl: '', title: '고양시 일산동구 시공', id: 3, },
    {imageUrl: '', title: '고양시 일산동구 시공', id: 4, },
    {imageUrl: '', title: '고양시 일산동구 시공', id: 5, },
    {imageUrl: '', title: '고양시 일산동구 시공', id: 6, },
  ]
  return(
    <div className={styles.wrapper}>
      {
        items.map((item) => (
          <PortfolioItem key={item.id} imageUrl={item.imageUrl} title={item.title} id={item.id}/>
        ))
      }
    </div>
  );
};

export default PortfolioList;