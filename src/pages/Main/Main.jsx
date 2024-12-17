import styles from './Main.module.css'
import Title from '../../components/Title/Title';
import image from '../../assets/img/mainPage.png'
import MyCalendar from '../../components/Calendar/MyCalendar';
import CompanyIntro from '../../components/CompanyIntro/CompanyIntro';

const Main = () => {
  return(
    <div className={styles.mainWrapper}>
      <Title url={image}>e끌림인테리어필름</Title>
      <h2 className={styles.titleText}>e끌림인테리어필름</h2>
      <p className={styles.text}>
        공간을 더욱 아름답고 안전하게 <br />
        e끌림인테리어필름이 함께합니다 <br />
      </p>
      <hr className={styles.hr}/>
      <h2 className={styles.calendarTitle}>e끌림 시공 예약표</h2>
      <section className={styles.sectionSpacing} >
        <MyCalendar />
      </section>
      <section className={styles.sectionSpacing} >
        <CompanyIntro />
      </section>
    </div>
  );
};

export default Main;