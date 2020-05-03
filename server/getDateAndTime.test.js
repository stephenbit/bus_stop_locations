import getDateInBusTrackerFormat from './getDateAndTime.js'
import {appendDateToKey, getFinalKeyFromDate} from './generateApiKey.js'

test('it can retrive the current date in Bus Tracker Format', () => {
    const busTrackerFormattedDate = getDateInBusTrackerFormat(
        new Date('2020-03-11T14:52:51.03Z')
    )
    expect(busTrackerFormattedDate).toBe('2020031114');
});

test('it can retrive the current date in Bus Tracker Format with double digit months', () => {
    const busTrackerFormattedDateNovember = getDateInBusTrackerFormat(
        new Date('2020-10-01T14:52:51.03Z')
    )
    expect(busTrackerFormattedDateNovember).toBe('2020100115')
})

test('it can append the date to the end of the API key', () => {
    const keyPlusDate = appendDateToKey(
        new Date('2020-11-29T14:52:51.03Z')
    )
    expect(keyPlusDate).toBe('XL472I2YRVUQF2EJ5T77AEENJ2020112914')
})

test('it can convert the key into MD5 or something...?', () => {
    const finalKey = getFinalKeyFromDate(
        new Date('2020-11-29T14:52:51.03Z')
    )
    expect(finalKey).toBe('12b288629403f5ff0a380e5452e3bfee')
})

test('it can convert the key into MD5 or something...? Only 1800 April 1st', () => {
    const finalKey = getFinalKeyFromDate(
        new Date()
    )
    expect(finalKey).toBe('a1250711db558272d61d0ef9b093f53c')
})