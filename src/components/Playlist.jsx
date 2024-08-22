import React from 'react'

const Playlist = ({item,search}) => {
  return (
    <div className={`${search ? 'card_1' : 'card '} `}>
            <div className='playvideos'>
            <img src={item?.thumbnail[1]?.url || item?.thumbnail[0]?.url} alt="thumbnail" 
                className={`rounded-md   w-full`}
          />
          <span>{item?.videoCount} Videos</span>
            </div>
           <div className="card-info p-3">
                <h1 className='font-semibold text-[0.7rem] text-[#OFOFOF]'>{item?.title}</h1>
                <p className='text-[12px] text-[#606060]  '>{item?.channelTitle} </p>
                 <span className='text-[12px] text-[#606060] font-semibold'>VIEW FULL PLAYLIST</span>
            </div>
    </div>
  )
}

export default Playlist
