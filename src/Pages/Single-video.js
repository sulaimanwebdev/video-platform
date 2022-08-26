import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
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
     {mainData.videoUrl}
    </>
  )
}

export default SingleVideo