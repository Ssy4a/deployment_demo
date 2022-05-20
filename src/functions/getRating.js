export const getRating = (result) => {
    let rating = 0
    result.answerCorrectnessArr.forEach(item => {
        if (item === true) rating++
    })
    return `${rating}/${result.TestResults.length}`
}