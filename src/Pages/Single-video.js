import React, {useState} from 'react'
import {useParams, Link} from 'react-router-dom'
import Courses from '../Courses.json'
const SingleVideo = () => {

  const [newData, setnewData] = useState()
  Courses.map((asd)=>[
    asd.courses.map((newasd)=>{
      newasd.categories.map((asdasd)=>[
        setnewData(asdasd.videos)
      ])
    })
  ])

  console.log(newData)
  // const { id } = useParams();

  return (
    <>
    </>
  )
}

export default SingleVideo