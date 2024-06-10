import Image from "next/image";
import styles from "./index.module.scss";

export default function Page() {
  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.wrapper}`}>
        <h2>Name</h2>
        <a>Description</a>
        <a>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</a>
      </div>
      <Image />
      <div className={`${styles.wrapper}`}>
        <a>couleur</a>
        <a>variant</a>
        <a>Imprimer</a>
      </div>
    </div>
  );
}
