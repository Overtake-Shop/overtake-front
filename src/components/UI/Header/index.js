import Link from 'next/link';
import styles from './index.module.scss';

const Index = () => {
    return (
        <div className={`${styles.header}`}>
            <div>
                <Link href="/products">Produits</Link>
            </div>
            <Link href="/">Overtake</Link>
            <div>
                <Link href="/auth/login">Se connecter</Link>
            </div>
        </div>
    )
}

export default Index;