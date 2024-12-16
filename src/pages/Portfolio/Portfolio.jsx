import PortfolioList from '../../components/portfolio/portfoiloList/PortfolioList';
import Title from '../../components/Title/Title';
import styles from './Portfolio.module.css';
import image from '../../assets/img/portfolioPage.png'

const Portfolio = () => {
  return(
    <div className={styles.pageWrapper}>
      <Title url={image}>Portfolio</Title>
      <section>
        <h2 className={styles.titleText}>시공 내역</h2>
        <p className={styles.text}>
          실제 시공 모습들을 확인해보세요<br />
        </p>
        <hr className={styles.hr}/>
      </section>
      <section>
        <PortfolioList />
      </section>
    </div>
  );
};

export default Portfolio;