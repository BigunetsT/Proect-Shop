import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <div className={styles.menu}>
      <a href="/products" className={styles.reference}>
        Products
      </a>
      <a href="/products/3456" className={styles.reference}>
        Product Detail
      </a>
      <a href="/products/3456" className={styles.reference}>
        Card
      </a>
      <a href="/products/3456" className={styles.reference}>
        Order
      </a>
      <a href="/products/3456" className={styles.reference}>
        Profile
      </a>
      <a href="/products/3456" className={styles.reference}>
        Contacts
      </a>
    </div>
  );
};
export default Menu;
