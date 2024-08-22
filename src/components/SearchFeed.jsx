import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchApi } from '../utils/fetchData'
import Videos from './Videos'
import Sidebar from './Sidebar'
import { layout } from '../utils/styles'
const SearchFeed = () => {
  const { searchTerm } = useParams()
  const [videos,setVideos] = useState([])
  
  const [selectedCategory,setSelectedCategory] = useState('')

  useEffect(()=>{
    fetchApi(`search?query=${searchTerm}&geo=US&lang=en`)
    .then((data=>setVideos(data.data)))
  },[searchTerm])
  useEffect(()=>{
    fetchApi(`search?query=${selectedCategory}&geo=US&lang=en`)
    .then((data=>setVideos(data.data)))
  },[selectedCategory])
  console.log(videos)
  return (
    <div className={`${layout.flexReverse} flex gap-4`}>
    <div className='flex-[0.2] overflow-auto h-[92vh] scroll sticky top-[2rem] z-[5]'>
       <Sidebar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
    </div>
     <div className='flex-[0.8]'>
        <Videos videos={videos} search={true}/>
     </div>
  </div>
  )
}

export default SearchFeed
