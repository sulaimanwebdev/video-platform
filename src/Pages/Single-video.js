import React, {useState, useEffect} from 'react'
import {useParams, Link} from 'react-router-dom'
import Courses from '../Courses.json'
const SingleVideo = () => {
  const { id } = useParams();

  const [newData, setnewData] = useState()
  
  useEffect(() => {
    Courses.map((asd)=>[
      asd.courses.map((newasd)=>{
        newasd.categories.map((asdasd)=>[
          setnewData(asdasd.videos)
        ])
      })
    ])
  
  }, [])
  
  const element = newData.find(el => el.videoId === id);

  console.log(element)

  return (
    <>
    </>
  )
}

export default SingleVideo