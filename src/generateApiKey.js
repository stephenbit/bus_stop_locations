import getDateInBusTrackerFormat from './getDateAndTime.js'
import { API_KEY } from './apiKey.js'
import md5 from 'md5';

export const appendDateToKey = (date) => {
    console.log()
    return API_KEY + getDateInBusTrackerFormat(date)
}

export const getFinalKeyFromDate = (date) => {
    const keyPreMd5 = appendDateToKey(date)
    return md5(keyPreMd5)
}