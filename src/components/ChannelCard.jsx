import React from 'react'

const ChannelCard = ({item}) => {
  return (
    <div className={`card flex justify-around items-center gap-4 py-[1rem] my-[1rem]`}>
       <img src={ item?.thumbnail[1]?.url || item?.thumbnail[0]?.url} alt="channel" 
           className={`rounded-md  h-[6rem]`}
          
        />
       <div className='px-4'>
         <h3 className='text-[1.1rem] leading-8 font-semibold'>{item?.channelTitle}</h3>
         <p className='text-[0.6rem] text-[#606060]'>{item?.subscriberCount}</p>
         <p className='text-[0.6rem] text-[#606060]'>{item?.description}</p>
       </div>
     </div>
  )
}

export default ChannelCard
