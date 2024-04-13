import React, { useState } from 'react'
import { RiArrowRightSLine, RiArrowLeftSLine, RiEarthFill, RiTimeLine } from '@remixicon/react'
import Calendar from '../../Calendar'

const MeetingModal = ({setMeet, meet, date, setDate, openModal, setModal }) => {
    const [showTimes, setShowTimes] = useState(false)

    const timeBox = (time) => {
        return meet === time ? (
            <div className='flex gap-1'>
                <button className='w-1/2 py-3 transition-all text-white font-semibold bg-gray-600 rounded-md mt-3 width-animate'>{meet}</button>
                <button onClick={() => setModal('meetingForm')} className='w-1/2 py-3 transition-all width-animate text-white font-semibold bg-blue-600 rounded-md mt-3'>NEXT</button>
            </div>
        ) : (
            <button onClick={() => setMeet(time)} className='px-5 py-3 rounded-[4px] mt-3 border border-blue-500 text-blue-700 font-bold hover:border-blue-700 hover:border-2'>{time}</button>
        )
    }
    console.log(showTimes);

    return (
        <div className={`w-[64%] absolute z-[100] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 my-auto h-[75%] bg-white justify-evenly rounded-md flex ${openModal ? 'flex' : 'hidden'}`}>
            <div className={` border-r-[0.7px] border-gray-300 ${showTimes ? 'basis-[35%]' : 'basis-[45%]'}`}>
                <div className='w-full flex justify-center p-9 border-b-[0.7px] border-gray-300'>
                    <img className='h-32' src="./logo.png" alt="" />
                </div>
                <div className='flex flex-col gap-6 py-6 px-4 ml-6'>
                    <p className='text-2xl font-semibold text-gray-900'>Fibery Demo</p>
                    <p className='flex gap-2 text-gray-500 font-medium'><RiTimeLine />45 min</p>
                    <p className='text-sm tracking-wide leading-6  text-gray-700'>Book a meeting with a product expert. We've helped hundreds of companies overcome product management challenges. </p>
                </div>
            </div>

            <div className={` justify-between py-8 pl-8 pr-8 ${showTimes ? 'flex basis-[70%]' : 'basis-[50%]'}`}>
                <div className='flex flex-col basis-[55%]'>
                    <p className='font-semibold tracking-wider text-lg ml-5'>Select a Date & Time</p>
                    <div className='w-[70%] mt-7 flex ml-14 items-center justify-between'>
                        <span><RiArrowLeftSLine /></span>
                        <p>April 2024</p>
                        <span className='text-[#0060e6] bg-blue-200 rounded-full font-semibold w-9 h-9 flex items-center justify-center'><RiArrowRightSLine /></span>
                    </div>
                    <Calendar
                    date = {date}
                    setDate = {setDate} 
                    setShowTimes = {setShowTimes} />

                    <div className='ml-4 mt-6'>
                        <p className='font-bold text-gray-800'>Time zone</p>
                        <p className='flex gap-2 items-center text-[13px] ml-2'><RiEarthFill size={14} /> <span>Indian standard time (2:41am)</span></p>
                    </div>
                </div>

                <div className={`flex-col basis-[35%] mt-16 overflow-y-scroll scrollbar ${showTimes ? 'flex' : 'hidden'}`}>
                    <p className='text-md mb-7 text-center font-medium text-gray-500'>April {date}</p>
                    {timeBox('1:30 PM')}
                    {timeBox('2:30 PM')}
                    {timeBox('3:00 PM')}
                    {timeBox('4:00 PM')}
                    {timeBox('5:30 PM')}
                    {timeBox('6:00 PM')}
                    {timeBox('6:30 PM')}
                    {timeBox('7:00 PM')}
                    {timeBox('8:00 PM')}
                    {timeBox('9:00 PM')}

                </div>
            </div>
        </div>
    )
}

export default MeetingModal