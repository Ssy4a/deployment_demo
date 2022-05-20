import React from 'react'
import { useState, useRef } from 'react';
import { useEffect } from 'react';
import { fetchActiveTests } from './../../asyncActions/activeTests';
import { useDispatch } from 'react-redux';

const TimerElement = ({ test }) => {

    const [secLeft, setSecLeft] = useState("")
    const timer = useRef()
    const dispatch = useDispatch()

    useEffect(() => {
        const activatedAtDate = new Date(test.activatedAt)
        const currentDate = Date.now()
        const timeLeft = ((test.expiresIn - (currentDate - activatedAtDate)) / 1000 | 0)
        if (timeLeft > 0) setSecLeft(timeLeft)
        else setSecLeft(0)
    }, [])

    useEffect(() => {
        timer.current = setInterval(() => {
            setSecLeft(secLeft - 1)
        }, 1000)
        if (secLeft === 0) {
            clearInterval(timer.current)
            setTimeout(() => dispatch(fetchActiveTests()), 1000)
        }
        return () => clearInterval(timer.current)
    }, [secLeft])

    function convertMsToTime(seconds) {
        function padTo2Digits(num) {
            return num.toString().padStart(2, '0');
        }

        let minutes = Math.floor(seconds / 60);
        let hours = Math.floor(minutes / 60);
        seconds = seconds % 60;
        minutes = minutes % 60;
        return `${padTo2Digits(hours)}:${padTo2Digits(minutes)}:${padTo2Digits(seconds)}`;
    }

    return (
        <span>
            {convertMsToTime(secLeft)}
        </span>
    )
}

export default TimerElement