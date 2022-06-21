import React from 'react'
import styles from "../../styles/UIElements.module.css"
import ButtonElement from './ButtonElement';
import TitleElement from './TitleElement';

const ModalElement = ({ modalActive, setModalActive, onClick, modalTitle, modalText, acceptButtonText, children }) => {


    const ConfirmModal = () => {
        return (
            <>
                <div className={styles.modalTitleRow}>
                    <div className={styles.warningIcon}></div>
                    <TitleElement addedClass="modalTitle" text={modalTitle} />
                </div>

                <TitleElement addedClass="modalSecondTitle" text={modalText} />
                <div className={styles.modalButtonRow}>
                    <ButtonElement addedClass="modalButton" text={acceptButtonText} onClick={onClick} />
                    <ButtonElement addedClass="modalButton" text="Відмінити" onClick={() => setModalActive(false)} />
                </div>
            </>
        )
    }

    return (
        <div className={modalActive ? `${styles.modal} ${styles.active}` : styles.modal}
            onClick={() => setModalActive(false)}>
            <div className={styles.modalContent} onClick={e => e.stopPropagation()}>
                {children
                    ? children
                    : <ConfirmModal />
                }
            </div>
        </div>
    )
}

export default ModalElement