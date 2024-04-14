import React from 'react'
import {RiCheckboxCircleFill , RiUserLine, RiEarthLine, RiVidiconLine, RiCalendarLine, RiArrowLeftLine} from '@remixicon/react'
import calcTime from '../../../utils/calcTime'

const SchedulePage = ({meet, date, name, openModal}) => {
    return (
            <div className={`md:w-[64%] absolute z-[100] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 my-auto md:h-[80%] h-fit bg-white rounded-md md:flex-row flex-col w-[95%] ${openModal ? 'flex' : 'hidden'}`}>
                <div className='md:w-1/2 w-[90%] flex flex-col items-center mx-auto py-8 h-full'>
                    <img className='h-14 rounded-full object-fill' src="./monica.jpg" alt="" />
                    <p className='flex items-center gap-1 mt-4'><RiCheckboxCircleFill size={18} color='darkgreen' /> <span className='text-xl font-semibold tracking-wide'>You are Scheduled</span></p>
                    <p className='mt-4 text-sm text-center'>A calendar invitation has been sent to your email address</p>
                    <div className='w-full mb-8 border-b-[1px] flex flex-col mt-1 gap-3 p-5 border-[1px] rounded-md border-gray-400'>
                        <p className='font-semibold'>Fibery Demo</p>
                        <p className='text-gray-600 text-sm flex gap-2'><RiUserLine size={19} color='gray' />{name}</p>
                        <p className='text-gray-600 text-sm flex gap-2'><RiCalendarLine size={19} color='gray' />{meet} - {`${calcTime(meet)[0]}:${calcTime(meet)[1]}`} PM, Monday, April {date}, 2024</p>
                        <p className='text-gray-600 text-sm flex gap-2'><RiEarthLine size={19} color='gray' />Mumbai, India, Indian standard time</p>
                        <p className='text-gray-600 text-sm flex gap-2'><RiVidiconLine size={19} color='gray' />web conferencing details to follow.</p>
                    </div>

                    <div className='pt-6 border-t-[0.6px] border-gray-400 w-full'>
                        <p className='text-sm ml-4 md:ml-0 w-[80%] md:w-full font-semibold'>Schedule your own meeting with Calendly for free</p>
                        <p className='text-sm ml-4 md:ml-0 w-[80%] md:w-full mt-2'>Eliminate the back-and-forth email for finding time.</p>
                        <div className='flex md:flex-row flex-col items-center mt-3 gap-2'>
                            <button className='px-6 py-2 flex items-center border-[1px] rounded-3xl border-black gap-2'>
                            <img className='h-5' src="./google.png" alt="" />    
                            <span className='text-[12px]'>Sign up with Google</span></button>
                            <button className='px-6 py-2 flex items-center border-[1px] rounded-3xl border-black gap-2'>
                            <img className='h-5' src="./microsoft.png" alt="" />    
                            <span className='text-[12px]'>Sign up with Microsoft</span></button>
                        </div>
                    </div>

                    <p className='text-center text-sm cursor-pointer mt-5 text-blue-500'>Signup with email</p>
                </div>
            </div>
    )
}

export default SchedulePage