import { useState } from 'react';
import styles from './ImageInput.module.css';
import addImage from '../../../assets/img/addImage.webp';
const ImageInput = ({ values, setValues, name}) => {
  const [imgUrl, setImgUrl] = useState(values.images[name]);

  const handleImageChange = (name, event) => {
    const file = event.target.files[0];
    
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImgUrl(reader.result);
      };
      reader.readAsDataURL(file);

      const updatedImages = [...values.images];
      updatedImages[name] = file;  // 배열의 해당 인덱스에 파일을 설정
      setValues((prevValues) => ({
        ...prevValues,
        images: updatedImages,  // images 배열을 업데이트
      }));
    }
  };

  return(
    <div className={styles.imageBox}>
      <label htmlFor={name} className={styles.imageBox}>
        {
          imgUrl === undefined ? 
          <img src={addImage} className={styles.imageBox}/>
          : 
          <img src={imgUrl} className={styles.imageBox}/>
        }
      </label>
      <input 
        type='file' 
        id={name} 
        onChange={(event) => handleImageChange(Number(name), event)} 
        style={{ display: 'none' }}
        name={name}
      />
    </div>
  );
};

export default ImageInput;