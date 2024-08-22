import React from 'react'
import { format } from '../utils/constants'
import { Link } from 'react-router-dom'
import { layout } from '../utils/styles'

const VideoCard = ({video,search}) => {
  return (
    <div className={`${search ? 'card_1' : 'card'}`}>
        <Link to={`/video/${video.videoId}`} className='overflow-hidden '>
          <img src={video?.thumbnail[1]?.url || video?.thumbnail[0]?.url} alt="thumbnail" 
          className={`rounded-md ${search && " w-full"}`}
          />
        </Link>
        <div className={`${layout.flexStart} gap-4 px-2  ${search ? '' : 'mt-4'}`}>
        {video?.channelThumbnail && video?.channelThumbnail.length > 0 ? (
            <img
              src={video.channelThumbnail[0]?.url}
              alt={`Thumbnail for ${video.title}`}
              className='h-[2rem] w-[2rem] rounded-full'
            />
          ) : ''}
            <div className="card-info">
                <h1 className='font-semibold text-[0.7rem] text-[#OFOFOF]'>{video?.title.slice(0,65)}</h1>
                <p className='text-[12px] text-[#606060]  '>{video?.channelTitle}</p>
                <span className='text-[10px] text-[#606060] '>{format(video?.viewCount)} {' '}  {video?.publishedText || video?.publishedTimeText}</span>
            </div>
        </div>
    </div>
  )
}

export default VideoCard
