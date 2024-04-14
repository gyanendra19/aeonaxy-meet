import React from 'react'
import { RiTimeLine, RiEarthLine, RiCalendarLine, RiArrowLeftLine } from '@remixicon/react'
import calcTime from '../../../utils/calcTime'

const MeetingForm = ({setName, meet, date, openModal, setModal }) => {


    return (
        <div className={`md:w-[68%] w-[94%] absolute z-[100] overflow-y-scroll left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 my-auto h-[75%] bg-white rounded-md flex md:flex-row flex-col ${openModal ? 'flex' : 'hidden'}`}>
            <div className='basis-[44%] h-[210%] border-r-[0.7px] border-gray-300 relative'>
                <div onClick={() => setModal('meetingModal')} className='absolute p-1 top-6 left-7 cursor-pointer rounded-full border border-gray-300'><RiArrowLeftLine color='blue' size={20} /></div>
                <div className='w-full flex justify-center p-9 border-b-[0.7px] border-gray-300'>
                    <img className='md:h-32 h-12' src="./logo.png" alt="" />
                </div>
                <div className='flex flex-col gap-3 py-6 px-4 ml-6'>
                    <p className='text-2xl font-semibold text-gray-900'>Fibery Demo</p>
                    <p className='text-gray-500 flex gap-2 font-medium'><RiTimeLine size={20} color='gray' />45 min</p>
                    <p className='text-gray-500 flex gap-2 items-center font-medium w-[90%]'><RiCalendarLine size={28} color='gray' />{`${meet}`} - {`${calcTime(meet)[0]}:${calcTime(meet)[1]}`} PM, Monday, April {date}, 2024</p>
                    <p className='text-gray-500 flex gap-2 font-medium'><RiEarthLine size={20} color='gray' />Indian standard time</p>
                    <p className='text-sm tracking-wide leading-6  text-gray-700'>Book a meeting with a product expert. We've helped hundreds of companies overcome product management challenges. </p>
                </div>
            </div>

            <div className='basis-[70%] h-fit pb-6 py-4 pl-8 flex flex-col gap-1'>
                <p className='text-lg font-semibold mt-2'>Enter Details</p>
                <label className='font-semibold text-sm mt-3' htmlFor="name">Name*</label>
                <input onChange={(e) => setName(e.target.value)} type="text" className='md:w-[70%] w-[90%] mt-1 h-[45px] px-4 rounded-md focus:outline-none border-[1px] border-gray-400 focus:border-blue-500 focus:border-2' />
                <label className='font-semibold text-sm mt-4' htmlFor="name">Email*</label>
                <input type="text" className='md:w-[70%] w-[90%] mt-1 h-[45px] px-4 rounded-md focus:outline-none border-[1px] border-gray-400 focus:border-blue-500 focus:border-2' />

                <p className='mt-2 px-3 text-[12px] w-[100px] font-medium py-2 border border-blue-500 rounded-3xl text-blue-500'>Add Guests</p>
                <div className='mt-5 text-[15px]'>
                    <p className='font-semibold'>I want fibery to work for</p>
                    <div className='flex gap-2 mt-3'>
                        <input className='h-5 w-5' type="checkbox" />
                        <p>🥕 Myself</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <input className='h-5 w-5' type="checkbox" />
                        <p>🧑‍🤝‍🧑 {'<'} 10 People</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <input className='h-5 w-5' type="checkbox" />
                        <p>🦄 20-50 People</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <input className='h-5 w-5' type="checkbox" />
                        <p>🦅 50+ People</p>
                    </div>
                </div>

                <div className='mt-5 text-[15px]'>
                    <p className='font-semibold w-[70%]'>Please, choose up to three options. You are more interested in: *</p>
                    <div className='flex gap-2 mt-3'>
                        <input className='h-5 w-5' type="checkbox" />
                        <p>🗻 Strategy</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <input className='h-5 w-5' type="checkbox" />
                        <p>🌞 Product Management</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <input className='h-5 w-5' type="checkbox" />
                        <p>💻 Engineering</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <input className='h-5 w-5' type="checkbox" />
                        <p>🎣 Feedback Management</p>
                    </div>
                    <div className='flex gap-2 mt-3'>
                        <input className='h-5 w-5' type="checkbox" />
                        <p>❓ Something else</p>
                    </div>
                </div>

                <div className='flex flex-col mt-2'>
                    <label className='font-semibold text-sm md:w-[70%] w-[90%] mt-3' htmlFor="name">Please, share anything that will help prepare for our meeting.</label>
                    <textarea rows={3} type="text" className='md:w-[70%] w-[90%] mt-2 px-3 text-sm py-2 rounded-md focus:outline-none border-[1px] border-gray-400 focus:border-blue-500 focus:border-2' />
                    <label className='font-semibold md:w-[70%] w-[90%] text-sm mt-4' htmlFor="name">Please, share with us the name of your Fibery workspace (if any)</label>
                    <input type="text" className='md:w-[70%] w-[90%] mt-2 h-[45px] px-4 rounded-md focus:outline-none border-[1px] border-gray-400 focus:border-blue-500 focus:border-2' />
                </div>

                <p className='w-[80%] mt-6 text-sm'>By proceeding, you confirm that you have read and agree to <span className='text-blue-600'>Calendly's Terms of Use</span> and <span className='text-blue-600'>Privacy Notice.</span></p>

                <button onClick={() => setModal('schedulePage')} className='px-4 text-[15px] tracking-wide w-[170px] py-3 font-medium ml-3 mt-5 bg-blue-700 text-white rounded-3xl'>Schedule Event</button>
            </div>
        </div>
    )
}

export default MeetingForm