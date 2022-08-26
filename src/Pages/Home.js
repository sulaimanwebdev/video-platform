import {Link} from 'react-router-dom'
import Courses from '../Courses.json'

const Home = () => {
  return (
    <>
    <div className='w-full'>
    <div className="w-full mx-auto max-w-[1350px] grid grid-cols-4 gap-7 px-5 mt-10">
       {
        Courses.map((ele)=>{
            return(
           <Link to={`/course/${ele.courseId}`} key={ele.courseId} className="pb-[60px] relative rounded-2xl bg-white border-2 border-yellow-500 overflow-hidden">
                <div className="w-full h-[150px]"><img src={ele.courseCover} className='w-full h-full object-cover' alt="course" /></div>
                <div className="px-3 mt-3 font-[600] text-[22px] leading-snug">{ele.courseName}</div>
                <div className="absolute w-full bottom-0 left-0 px-3 mt-3 py-3 border-t flex items-center justify-between">
                 <div className="flex items-center gap-2 flex-row-reverse"><div className='text-sm'>1hr 59min</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clock" viewBox="0 0 16 16"><path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/><path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z"/></svg></div>
                 <div className="flex items-center gap-2 flex-row-reverse"><div className='text-sm'>24</div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-circle" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/><path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/></svg></div>
                </div>
            </Link>
            )
        })
      }
</div>
    </div>
    </>
  )
}

export default Home