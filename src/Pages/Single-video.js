import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Courses from '../Courses.json'
const SingleVideo = () => {
  const { id, course, category } = useParams();
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

<video src={mainData.videoUrl} width="100%" height="" controls></video>
    </>
  )
}

export default SingleVideo