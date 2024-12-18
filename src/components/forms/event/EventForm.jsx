import styles from './EventForm.module.css';

const EventForm  = ({ values, setValues }) => {
  const onChange = (e) => {
    setValues((prevValues) => {
      return {
      ...prevValues,
        [e.target.name]: e.target.value,
      }
    });
  };

  return(
    <div>
      <input
        className={styles.input}
        placeholder='제목을 입력하세요' 
        value={values.title} 
        onChange={onChange} 
        name='title' 
      />
    <hr className={styles.hr} />
    <article className={styles.article}>
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

export default EventForm;