import styles from "./index.module.scss";

export default function Page() {
  return (
    <div className={`${styles.container}`}>
        <h2 className={`${styles.title}`}>Produits</h2>
        <div className={`${styles.productsgrid}`}>
            
            <div className={`${styles.product}`}>
                <div className={`${styles.productimage}`} alt='product image'/>
                <a>name</a>
                <a>prix</a>
            </div>
            
        </div>
    </div>
  );
}
