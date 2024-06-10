import styles from './index.module.scss'

const Index = ({ label, name, value, placeholder, type, onChange, isRequired }) => {
    return (
        <div className={`${styles.input}`}>
            {
                label && (
                    <label>{label}</label>
                )
            }
            <input type={type} name={name} id={name} value={value} required={isRequired} placeholder={placeholder} onChange={onChange}/>
        </div>
    )
}

export default Index;