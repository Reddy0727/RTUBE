import React from 'react'
import VideoCard from './VideoCard'
import Loader from './Loader'
import Playlist from './Playlist'
import ChannelCard from './ChannelCard'

const Videos = ({ videos,search }) => {
    if (!videos || videos.length === 0) {
        return <Loader />
      }
  return (
    <div className={`${search ? '' : 'grid grid-cols-auto gap-4 p-8'}`}>
      {videos?.map((video,i)=>(
         <div key={i}>
            {video.type==='video' && <VideoCard video={video} search={search} />}
            {video.type==='playlist' && <Playlist item={video} search={search} />}
            {video.type==='channel' && <ChannelCard item={video} search={search} />}
         </div>   
      ))}

    </div>
  )
}

export default Videos
