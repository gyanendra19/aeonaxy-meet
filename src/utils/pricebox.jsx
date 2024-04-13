const priceBox = (subs, price, days, moreLines, hover) => {
    return <div className={`basis-1/2 ${hover === 'green' ? 'hover:bg-[#BDF6B4]' : 'hover:bg-[#FFC1B4]'} transition-all flex md:flex-row flex-col items-center md:items-start gap-12 py-16 px-11 rounded-md`}>
        <div className='flex flex-col gap-3'>
            <p className='text-3xl font-semibold text-gray-800'>{subs}</p>
            <div className='flex gap-3'>
                <span className='text-3xl font-semibold text-gray-800 tracking-wider'>{price}</span>
                <p className='text-[12px] w-[120px]'>per user, per month billed annually</p>
            </div>
            <button className='bg-[#242938] mt-6 w-[200px] px-4 py-3 rounded-md text-white'>Start your free trial</button>
        </div>
        <div className='flex text-[13px] tracking-wider flex-col gap-1'>
            <p>Version history: {days}</p>
            <p>Read-only users: Unlimited</p>
            {moreLines &&
                <>
                    <p>Group permissions,</p>
                    <p>SAML + SSO,</p>
                    <p>No Fibery branding on</p>
                    <p>forms, Extra-caring support</p>
                </>
            }
        </div>
    </div>
}

export default priceBox