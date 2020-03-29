import getDateInBusTrackerFormat from './getDateAndTime.js'

test('it can retrive the current date in Bus Tracker Format', () => {
    const busTrackerFormattedDate = getDateInBusTrackerFormat(
        new Date('2020-03-29T14:52:51.03Z')
        )
    expect(busTrackerFormattedDate).toBe('2020032914');
});

test('it can retrive the current date in Bus Tracker Format with double digit months', () => {
    const busTrackerFormattedDateNovember = getDateInBusTrackerFormat(
        new Date('2020-11-29T14:52:51.03Z')
        )
        expect(busTrackerFormattedDateNovember).toBe('2020112914')
}) 