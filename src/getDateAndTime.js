const getDateInBusTrackerFormat = (date) => {
    const runningDate = ''
    const year = date.getFullYear()
    const runningMonth = String(date.getMonth() + 1)
    let month = ''

    if (runningMonth.length < 2) {
        month = "0" + runningMonth
    } else {
        month = runningMonth
    }

    const dateOfMonth = date.getDate()
    const hour = date.getUTCHours()
    const dateInBusTrackerFormat = runningDate.concat(year, month, dateOfMonth, hour)
    return dateInBusTrackerFormat
}

export default getDateInBusTrackerFormat;