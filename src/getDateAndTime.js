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
    let dateOfMonth = date.getDate()
    dateOfMonth = String(dateOfMonth)
    if (dateOfMonth.length < 2){
        dateOfMonth = "0" + dateOfMonth
    } 
    const hour = date.getHours()
    const dateInBusTrackerFormat = runningDate.concat(year, month, dateOfMonth, hour)
    return dateInBusTrackerFormat
}

export default getDateInBusTrackerFormat;