import styles from './PortfolioForm.module.css';
import ImageInput from '../image/ImageInput';

const PortfolioForm = ({ values, setValues}) => {
  
  const onChange = (e) => {
    setValues((prevValues) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  return(
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        placeholder='제목을 입력하세요' 
        value={values.title} 
        onChange={onChange} 
        name='title' 
      />
      <hr className={styles.hr}/>
      <input
        className={styles.smallInput}
        placeholder='블로그 링크를 입력해주세요' 
        value={values.blog_link} 
        onChange={onChange} 
        name='blog_link' 
      />
      <article className={styles.article}>
        <section className={styles.imageBox}>
          <ImageInput values={values} setValues={setValues} name='0' />
          <ImageInput values={values} setValues={setValues} name='1' />
          <ImageInput values={values} setValues={setValues} name='2' />
          <ImageInput values={values} setValues={setValues} name='3' />
        </section>
        <textarea 
          className={styles.textarea}
          placeholder='내용을 입력하세요' 
          value={values.content} 
          onChange={onChange} 
          name='content' 
        />
      </article>
    </div>
  );
};

export default PortfolioForm;