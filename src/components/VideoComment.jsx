import React, { useEffect, useState } from 'react'
import { AiFillLike, AiFillDislike,AiFillCaretDown } from 'react-icons/ai';
import { getData } from '../utils/helpers';
// ÇOK  ÖNEMLİ MAP İLE APİ ÇEKMEK İÇİN DÖN BAK

const VideoComment = ({id}) => {

   const[comment,setComment]=useState()

   useEffect(() => {
    getData(`/comments?id=${id}`).then((res) =>
      setComment(res.data.data),
      
    );
    
    
  }, []);
//   commentİd ye nerden ulaşırız burdan bakabilrsin
//   console.log(comment);
  
  


  return (
    <div>
        {
            // MAP İLE APİ ÇEKİYORUZ İKİ PARAMETRE İLE commentId ye bu şekilde ulaştık
        (comment?.map((comment,i)=>(
            <div className="flex gap-2 mt-5 rounded-full">
              
              <img src={comment?.authorThumbnail[0].url} alt="" className='rounded-full h-10 w-10 ' />
              
              
              <div className='items-center'>
                <div className='flex gap-2'>
                <h4 className='font-bold'>{comment?.authorText}</h4>
                <h6 className=' text-gray-500'>{comment?.publishedTimeText}</h6>
                </div>
                
                <p className='px-4'>{comment?.textDisplay}</p>
             <div className='flex gap-2 mt-2'>
             <button className=" rounded flex items-center gap-4 mb-5 text-white px-1 transition  hover:bg-slate-500">
             
               <AiFillLike/>
               <p>{comment?.likesCount}</p>
               
              
               
               
               
          </button>
           <button className=" rounded-full  flex items-center gap-4 mb-5 text-white  px-1 transition hover:bg-slate-500 bg-opacity-50  ">
           
               <AiFillDislike/>
               
           </button>
           <button className='rounded-full  flex items-center gap-4 mb-5 text-white  px-1 transition hover:bg-slate-500'>Yanıtla</button>


             </div>
        <button className='justify-center flex rounded-full  items-center gap-4 mb-5 text-white  px-1 transition hover:bg-slate-500'>
        
          {
            comment?.replyCount===0 ? "":<h2 className='items-center '>  <button className='mt-2 items-center'><AiFillCaretDown/></button>  {comment?.replyCount} yanıt </h2>
          }
        </button>
              </div>
          </div> 
        )))
        }
    </div>
  )
}

export default VideoComment