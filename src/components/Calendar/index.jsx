import React from 'react'

const Calendar = ({date, setDate, setShowTimes}) => {

    const setMeetInfo = (date) => {
      setShowTimes(true) 
      setDate(date)
    }

    const calendarDates = (calDate, clickable, setShowTimes) => {
        return <>
        <p onClick={() => setShowTimes &&  setMeetInfo(calDate)} className={`tracking-wider px-5 py-2 ${calDate === date && 'bg-blue-700 text-white'} ${clickable && 'text-[#0060e6] bg-blue-200 rounded-full font-semibold items-center cursor-pointer'} text-[15px] flex justify-center`}>{calDate}</p>
        
        </>
    }
  return (
    <div className='grid grid-cols-7 gap-y-3 gap-x-5 mt-8 text-[13px]'>
        {calendarDates('MON')}
        {calendarDates('TUE')}
        {calendarDates('WED')}
        {calendarDates('THU')}
        {calendarDates('FRI')}
        {calendarDates('SAT')}
        {calendarDates('SUN')}
        {calendarDates('1')}
        {calendarDates('2')}
        {calendarDates('3')}
        {calendarDates('4')}
        {calendarDates('5')}
        {calendarDates('6')}
        {calendarDates('7')}
        {calendarDates('8')}
        {calendarDates('9')}
        {calendarDates('10')}
        {calendarDates('11')}
        {calendarDates('12')}
        {calendarDates('13')}
        {calendarDates('14')}
        {calendarDates('15')}
        {calendarDates('16')}
        {calendarDates('17')}
        {calendarDates('18')}
        {calendarDates('19')}
        {calendarDates('20', true, setShowTimes)}
        {calendarDates('21', true, setShowTimes)}
        {calendarDates('22')}
        {calendarDates('23', true, setShowTimes)}
        {calendarDates('24', true, setShowTimes)}
        {calendarDates('25', true, setShowTimes)}
        {calendarDates('26')}
        {calendarDates('27', true, setShowTimes)}
        {calendarDates('28', true, setShowTimes)}
        {calendarDates('29')}
        {calendarDates('30')}
    </div>
  )
}

export default Calendar