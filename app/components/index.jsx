import styles from './confirmEmail.module.css'

export default function ConfirmEmail() {
    return (
        <div className={styles.container}>
            <p className={styles.title}>Email enviado com sucesso!</p>
            <small className={styles.description}>Obrigado por entrar em contato</small>
        </div>
    )
}
