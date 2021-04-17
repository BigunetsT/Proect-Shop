import Logo from '../Logo';
import styles from './Header.module.scss';

const Header = () => {
  return (
    <div className={styles.header}>
      <a href="/">
        <Logo className={styles.logo} />
      </a>
      <a href="/" className={styles.headerTitle}>
        React Shop
      </a>
    </div>
  );
};
export default Header;
