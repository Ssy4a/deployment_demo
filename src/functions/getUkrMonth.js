export const getUkrMonth = (date) => {
    if (date === 0) return "січня"
    if (date === 1) return "лютого"
    if (date === 2) return "березня"
    if (date === 3) return "квітня"
    if (date === 4) return "травня"
    if (date === 5) return "червня"
    if (date === 6) return "липня"
    if (date === 7) return "серпня"
    if (date === 8) return "вересня"
    if (date === 9) return "жовтня"
    if (date === 10) return "листопада"
    if (date === 11) return "грудня"
}

export const getDate = (date) => {
    const month = getUkrMonth(date.getMonth())
    const getDoubleDigitHours = () => {
        if (date.getHours() < 10) return `0${date.getHours()}`
        return date.getHours()
    }
    const getDoubleDigitMinutes = () => {
        if (date.getMinutes() < 10) return `0${date.getMinutes()}`
        return date.getMinutes()
    }
    return `${date.getDate()} ${month} ${getDoubleDigitHours()}:${getDoubleDigitMinutes()}`
}