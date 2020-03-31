import getDateInBusTrackerFormat from './getDateAndTime.js'
import { API_KEY } from './apiKey.js'

const appendDateToKey = (date) => {
    return API_KEY + getDateInBusTrackerFormat(date)
}

export default appendDateToKey;