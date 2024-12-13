import { useState } from 'react';
import styles from './ImageInput.module.css';
import addImage from '../../../assets/img/addImage.png';
const ImageInput = ({setValues}) => {
  const [imgUrl, setImgUrl] = useState('');

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(file);
      setValues((prevValues) => ({
        ...prevValues,
        file: file,
      }));
    }
  };

  return(
    <div className={styles.imageBox}>
      <label htmlFor='imgFile' className={styles.imageBox}>
        {
          imgUrl ==='' ? 
          <img src={addImage} className={styles.imageBox}/>
          : 
          <img src={imgUrl} className={styles.imageBox}/>
        }
      </label>
      <input 
        type='file' 
        id='imgFile' 
        onChange={handleImageChange} 
        style={{ display: 'none' }}
      />
    </div>
  );
};

export default ImageInput;