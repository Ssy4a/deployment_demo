import React from 'react'
import TitleElement from '../UI/TitleElement'
import styles from "../../styles/content.module.css"
import ButtonElement from './../UI/ButtonElement';
import { useState } from 'react';
import MessageElement from './../UI/MessageElement';

const MyTestActivationTime = ({ startTesting, isActive, getTestActivationTime }) => {

    const [time, setTime] = useState({ hours: "0", minutes: "0" })

    const onStartTestingButtonClick = ({ minutes, hours }) => {
        startTesting(hours * 3600000 + minutes * 60000)
    }

    const validation = () => {
        if (isActive()) return true
        if (time.hours == 0 && time.minutes == 0) return true
        return false
    }

    const onTimeInputsChange = (target) => {
        if (target.name === "hoursInput") {
            setTime({ ...time, hours: target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1') })
        }
        if (target.name === "minutesInput") {
            setTime({ ...time, minutes: target.value.replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1') })
        }
    }

    return (
        <div>
            <TitleElement addedClass="secondTitle" text="Оберіть час, доступний для проходження тесту:" />
            <span className={styles.text}>
                <input pattern="[0-9]+" className={styles.timeInput} maxlength="2" name="hoursInput" value={time.hours}
                    onChange={e => onTimeInputsChange(e.target)} /> годин
                <input pattern="[0-9]+" className={styles.timeInput} maxlength="2" name="minutesInput" value={time.minutes}
                    onChange={e => onTimeInputsChange(e.target)} /> хвилин.
            </span>
            <ButtonElement addedClass="startTesting" disabled={validation()} onClick={() => onStartTestingButtonClick(time)} text="Почати тестування" />
            {time.hours == 0 && time.minutes == 0 && <MessageElement type="warning" message="Введіть час, доступний на проходження тесту:" />}
        </div>
    )
}

export default MyTestActivationTime