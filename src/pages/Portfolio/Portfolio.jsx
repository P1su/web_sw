import PortfolioList from '../../components/portfolio/portfoiloList/PortfolioList';
import Title from '../../components/Title/Title';
import styles from './Portfolio.module.css';

const Portfolio = () => {
  return(
    <div className={styles.pageWrapper}>
      <Title>Portfolio</Title>
      <section>
        <h3>포트폴리오</h3>
        <p>항상 최선을 다합니다 어쩌구 저쩌구</p>
      </section>
      <section>
        <PortfolioList />
      </section>
    </div>
  );
};

export default Portfolio;