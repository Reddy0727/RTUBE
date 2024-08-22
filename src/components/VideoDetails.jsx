import React, { useEffect, useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../utils/fetchData'
import Videos from './Videos'
import { format } from '../utils/constants'

const VideoDetails = () => {
  const [videos,setVideos] = useState([])
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams()
  useEffect(()=>{
    fetchApi(`video?id=${id}`)
    .then(data=>setVideoDetail(data))

    fetchApi(`related?id=${id}`)
    .then(data=>setVideos(data.data))
  },[id])
console.log(videos)
console.log(videoDetail)
  return (
    <div className="flex  w-full gap-5 lg:flex-row flex-col">
       <div className="flex-[2.8] p-4  ">
           <div className="rounded-xl overflow-hidden">
              <ReactPlayer
                  url={`https://www.youtube.com/watch?v=${id}`}
                  controls autoplay
                  width="100%"
                  height="70vh"
               />
           </div>
           <h2 className='font-bold text-[1.1rem] py-4'>{videoDetail?.title}</h2>
          <p className=' text-[18px]'>{videoDetail?.channelTitle} </p>
          <span className=' text-[12px]'>{format(videoDetail?.viewCount)}</span>
      </div>
       <div className="flex-[1.3] p-2 overflow-y-auto">
            <Videos videos={videos} search={true} />
          </div>
  </div>
  
  )
}

export default VideoDetails
