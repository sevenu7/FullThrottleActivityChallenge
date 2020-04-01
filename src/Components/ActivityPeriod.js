import React from 'react';

import userData from './userData.json';

const ActivityPeriod = ({id, date}) => {
    const {members} = userData;
    const member = members.filter(mem => mem.id === id)[0]

    let selectedGMTDate = null;
    if(date){
        const selectedDate = Date.parse(date) // selectedDate will be according to accessed location (Eg: GMT+5:30 As I am now in India)
        selectedGMTDate = selectedDate - 19800000 // selectedGMTDate will be in GMT
    }
    const period = member.activity_periods.filter(period => {
        const time = period.start_time
        const formattedDate = Date.parse(time.slice(0,11)) // formatted date will be in GMT
        return formattedDate === selectedGMTDate
    })

    let timePeriod = <h3>Please Select date to see the activity Periods</h3>

    if(date){
        if(period[0]){
            const startTime = period[0].start_time.slice(-7)
            const endTime = period[0].end_time.slice(-7)
            timePeriod = <h3>You are active from {startTime} to {endTime}</h3>
        }else {
            timePeriod = <h3>You do not have any activities on this day</h3>
        }
    }

    return (
        <div>
            {timePeriod}
        </div>
    )
} 

export default ActivityPeriod;