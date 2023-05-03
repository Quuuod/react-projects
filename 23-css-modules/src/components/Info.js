import './Info.css';
import styles from './Info.module.css';
console.log(styles);
function Info() {
  return (
    <div className={styles.info}>
      <h1>Info Component</h1>
      <button className={styles.other_btn}>Click</button>
      <h2>h2 info</h2>
    </div>
  );
}

export default Info;
