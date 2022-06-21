import React from 'react'
import styles from "../styles/content.module.css"

const Footer = () => {
    return (
        <>
            <br />
            <br />
            <footer className={styles.footer}>
                <div className='container'>
                    <button className={styles.footerRow}>
                        <div className={styles.gitLogoPc}></div>
                        <div className={styles.footerColumn}>
                            <div className={styles.footerTitleRow}>
                                <div className={styles.gitLogoMobile}></div>
                                <div> Ви можете переглянути код даного інтернет-додатку в репозиторіях GitHub:</div>
                            </div>
                            <div style={{ marginLeft: 20, marginRight: 20 }}>
                                <div> Api: <a className={styles.homeLink} href="https://github.com/Ssy4a/diploma_backend"
                                    target="_blank">https://github.com/Ssy4a/diploma_backend</a></div>
                                <div>Інтерфейс: <a className={styles.homeLink} href="https://github.com/Ssy4a/diploma_frontend"
                                    target="_blank">https://github.com/Ssy4a/diploma_frontend</a></div>
                            </div>
                        </div>
                    </button>
                </div>
            </footer>
        </>
    )
}

export default Footer