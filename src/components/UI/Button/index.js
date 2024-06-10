import styles from './index.module.scss'

const Index = ({ title, type }) => {
    return (
        <button type={type} className={`${styles.button}`}>{title}</button>
    )
}

export default Index;