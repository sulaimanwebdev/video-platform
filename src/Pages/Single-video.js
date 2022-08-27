import React, {useState, useEffect,} from 'react'
import {useParams} from 'react-router-dom'
import Courses from '../Courses.json'
const SingleVideo = () => {
  const { id, course } = useParams();
  const [mainData, setmainData] = useState([])


  useEffect(() => {
   
  const getdata = Courses.find(el => el.courseId === course);

  getdata.categories.map((ele)=>{
    const getNewdata = ele.videos.find(el => el.videoId === id);
    setmainData(getNewdata)
  })


  }, [])

  
  return (
    <>
   
<video src={mainData.videoUrl} width="100%" height="" className='border-b-2 border-yellow-500' controls controlsList="nodownload"></video>
<div className='w-full border-b-2 border-yellow-500 pb-6'>
<div className="w-full mx-auto max-w-[1350px] px-5 mt-5">
 <div className="font-bold text-[26px]">{mainData.videoTitle}</div>
 <div className="mt-3 text-[17px]">{mainData.videoDescription}</div>
</div>
</div>
</>
  )
}

export default SingleVideo