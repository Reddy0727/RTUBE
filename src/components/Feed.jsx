import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Videos from './Videos'
import { fetchApi } from '../utils/fetchData'
const Feed = () => {
  const [videos,setVideos] = useState([])
  const [selectedCategory,setSelectedCategory] = useState('New')
  useEffect(()=>{
    setVideos(null);

    fetchApi(`search?query=${selectedCategory}&geo=US&lang=en`)
    .then((data)=> setVideos(data.data))
  },[selectedCategory])
 console.log(videos)
  return (
    <div className='flex md:flex-row flex-col gap-4 '>
      <div className='flex-[0.2] overflow-auto h-[92vh] scroll sticky top-[3rem] z-[3]'>
         <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      </div>
       <div className='flex-[0.8]'>
          <Videos videos={videos}/>
       </div>
    </div>
  )
}

export default Feed
