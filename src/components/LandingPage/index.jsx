import React, { useState } from 'react'
import { RiArrowDownSLine } from '@remixicon/react'
import MeetingModal from './MeetingModal'
import MeetingForm from './MeetingForm'
import SchedulePage from './SchedulePage'
import priceBox from '../../utils/pricebox.jsx'

const LandingPage = () => {
    const [openModal, setOpenModal] = useState(false)
    const [modal, setModal] = useState('meetingModal')
    const [date, setDate] = useState('')
    const [meet, setMeet] = useState('')
    const [name, setName] = useState('Polina schebena')

    return (
        <section className='w-full h-full relative'>
            <div onClick={() => setOpenModal(false)} className={`absolute z-50 w-full h-full bg-black opacity-20 ${openModal ? 'block' : 'hidden'}`}></div>
            {
                modal === 'schedulePage' ?
                    <SchedulePage
                        meet = {meet}
                        date = {date}
                        name = {name}
                        openModal={openModal}
                     /> :
                    modal === 'meetingForm' ?
                        <MeetingForm
                            setName = {setName}
                            meet={meet}
                            date={date}
                            openModal={openModal}
                            setModal={setModal} /> :
                        <MeetingModal
                            setMeet={setMeet}
                            meet={meet}
                            date={date}
                            setDate={setDate}
                            openModal={openModal}
                            setModal={setModal} />
            }

            <div className='w-11/12 mx-auto py-7'>
                <div className='flex gap-14 items-center justify-between'>
                    <div className='flex gap-14 mt-2 tracking-wide items-center relative'>
                        <img className='absolute h-5 left-20 -top-2' src="./logo.png" alt="" />
                        <p className='text-2xl font-medium'>Fibery</p>
                        <p className='text-md font-bold flex gap-1 items-center'>Solutions <span><RiArrowDownSLine color='gray' /></span></p>
                        <p className='text-md font-bold flex gap-1 items-center'>Product <span><RiArrowDownSLine color='gray' /></span></p>
                        <p className='text-md font-bold flex gap-1 items-center'>Resources <span><RiArrowDownSLine color='gray' /></span></p>
                        <p className='text-md font-bold flex gap-1 items-center'>Pricing</p>
                    </div>

                    <div className='flex gap-6 items-center'>
                        <p>Log in</p>
                        <button onClick={() => setOpenModal(true)} className='px-6 rounded-sm py-2 border-[2.5px] border-black text-lg font-semibold'>Get a demo</button>
                        <button className='px-6 rounded-sm bg-black border-[2.5px] border-black text-white py-2 text-lg font-semibold opacity-85'>Try for free</button>
                    </div>
                </div>

                <div className='pt-28 py-20 w-[88%] mx-auto'>
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex flex-col gap-2'>
                            <p className='text-8xl'>Pricing</p>
                            <p className='text-xl text-gray-900'>Start your 14-day free trial. No CC required.</p>
                        </div>

                        <div className='flex gap-2'>
                            <button className='h-7 p-1 text-[13px] rounded-md bg-[#9FF9E8]'>Save 15%</button>
                            <p className='text-2xl font-bold'>Pay Annually</p>
                        </div>
                    </div>
                </div>

                <div className='w-[90%] mx-auto'>
                    <div className='flex justify-between'>
                        {priceBox('Standard', '$10', '90 Days', false, 'green')}
                        {priceBox('Pro', '$17', 'Unlimited', true, 'red')}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default LandingPage