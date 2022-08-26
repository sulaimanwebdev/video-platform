import { useState } from 'react';
import {useParams, Link} from 'react-router-dom'
import Courses from '../Courses.json'

const SingleCourse = () => {

  const { id } = useParams();
  const getdata = Courses.find(el => el.courseId === id);


  return (
    <>
    <div className='w-full'>
    <div className="w-full py-5 min-h-[300px] relative mt-6">
    <img src={getdata.courseCover} alt="cover" className='absolute top-0 left-0 w-full h-full object-cover blur-lg' />
    <div className="relative z-10  px-5 flex items-center justify-between gap-6 flex-wrap mx-auto max-w-[1350px]">
     <div>
     <h1 className='text-white font-bold text-[30px]'>{getdata.courseName}</h1>
     <button className='px-8 mt-5 py-3 rounded-md bg-yellow-500 transition hover:bg-yellow-600 text-white font-[600]'>Start</button>
     </div>
     <div className="relative min-w-[400px] min-h-[250px] max-w-[400px] max-h-[250px] rounded-md overflow-hidden border-2 border-yellow-500"><img src={getdata.courseCover} alt="cover" className='absolute top-0 left-0 w-full h-full object-cover' /></div>
    </div>
    </div>
    <div className="w-full border-b-2 pb-5">
    <div className="w-full px-5 mt-14 mx-auto max-w-[1350px]">
      <div className="font-[700] text-[25px]">Introduction</div>
      <p className='mt-2 font-[500]'>{getdata.courseIntroduction}</p>
    </div>
    </div>
    <div className="w-full mx-auto max-w-[1350px]  px-5 mt-10">
    {
     
          <div className="flex flex-col gap-16">
            {getdata.categories.map((categories)=>{
              return(
               <div className='' key={Math.random()}>
                 <div className="font-bold text-[27px] mb-5">{categories.categoryName}</div>
                 <div className="grid grid-cols-4 gap-7">
                 {
                  categories.videos.map((video)=>{
                    return(
                        <Link to={`/${getdata.courseId}/${categories.categoryName.toLowerCase()}/${video.videoId}`} key={video.videoId} className="mainCard pb-[60px] relative rounded-2xl bg-white border-2 border-yellow-500 overflow-hidden">
                          <div className="w-full h-[150px] overflow-hidden relative"><img src={video.videoCover} className='w-full h-full object-cover' alt="course" /><div className="z-10 absolute top-0 left-0 w-full h-full bg-yellow-500 bg-opacity-70 flex items-center justify-center transition opacity-0 hoverBG"><img src="/images/play.svg" alt="play" className='w-[40px]' /></div></div>
                          <div className="px-3 mt-3 font-[600] text-[22px] leading-snug">{video.videoTitle}</div>
                          <div className="absolute w-full bottom-0 left-0 px-3 mt-3 py-3 border-t flex items-center justify-between">
                           <div className="flex items-center gap-2 flex-row-reverse"><div className='text-sm'>30sec</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg></div>
                          </div>
                      </Link>
                      
                    )
                  })
                 }
              </div>
               </div>
              )
            })}
          </div>
    
    }
    </div>
    </div>
    </>
  )
}

export default SingleCourse