import Products from '../../pages/Product';
import styles from './Content.module.scss';

const Content = () => {
  return (
    <div className={styles.content}>
      <Products />
    </div>
  );
};
export default Content;
