import React,{useLayoutEffect,useState, useEffect} from 'react'
import ScrollToTop from "react-scroll-to-top";
import {db} from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { Link } from 'react-router-dom'
import hohftd from '../assets/icons/hohftd.png'
import Footer from './Components/Footer'
import Prefab from '../assets/prefab.png'
import Prefab_Activity from '../assets/prefab_activity.png'


function ForTheDeaf() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  const imgSrcPlaceHolderProfile = Prefab; 
  const imgSrcPlaceHolderActivity = Prefab_Activity; 


  //Data is here
  // const seractData = []
  const [seractData, setSeractData] = useState([{}])
  const seractCollectionRef = collection(db, 'seractData');

  //Data is here
  // const reviewData = []
  const [reviewData, setReviewData] = useState([{}])
  const reviewCollectionRef = collection(db, 'reviewData');

  useEffect(()=>{
    const getSeract = async () => {
      const data = await getDocs(seractCollectionRef);
      setSeractData(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
      console.log(data)
    }

    const getReview = async () => {
      const data = await getDocs(reviewCollectionRef);
      setReviewData(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
      console.log(data)
    }

    getReview();

    getSeract();

  },[])

  const activiyData = seractData?.filter((seract)=>seract.type=="activity");


  const handleDateFormat = (timeStamp) => {
    timeStamp.toDate().toString();
    
  }
  


  const handleImageErrorProfile = e => {
    e.target.src = imgSrcPlaceHolderProfile;
  }
  const handleImageErrorActivity = e => {
    e.target.src = imgSrcPlaceHolderActivity;
  }


  return (
    <>
    <ScrollToTop smooth 
      color="#002250" 
      viewBox="0 0 487 487"
      svgPath='M397.7,376.1c20.4,20.4,53.6,20.4,74,0s20.4-53.6,0-74L280.5,110.9c-20.4-20.4-53.6-20.4-74,0L15.3,302.1
      c-20.4,20.4-20.4,53.6,0,74s53.6,20.4,74,0l154.2-154.2L397.7,376.1z'
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}/>
    <div className='bg-white min-h-screen'>
      <div id='ohmybg' className="flex justify-center py-10 bg-primary ">
            <img src={hohftd} alt="ໂຮງຮຽນ ມືແຫ່ງຄວາມຫວັງ | Hands of Hope School For The Deaf" className="w-52 md:w-72"/>
        </div>
        <div className="container mx-auto flex flex-col justify-center item-center">
          <div className="flex flex-col justify-center items-center py-10 text-primary">
            <h1 className="text-xl md:text-3xl font-bold leading-10">ໂຮງຮຽນ ມືແຫ່ງຄວາມຫວັງ</h1>
            <h3 className="text-lg md:text-xl font-bold leading-10">Hands of Hope School For The Deaf</h3>
          </div>
        </div>
     
        <div className='container mx-auto py-14 flex flex-col justify-center items-center text-white px-10 lg:px-20'>
              <h1 className='text-xl md:text-2xl text-primary font-bold text-left w-full'>ABOUT US</h1>
              <p className='text-lg text-primary text-left w-full py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati? Modi odio unde voluptatum aut totam officiis laborum blanditiis iusto, facilis eveniet ea dolore praesentium numquam, perferendis ut laboriosam, voluptatem natus tenetur vitae magni placeat consequatur veritatis. Laudantium beatae deserunt dolorem, sunt cupiditate officiis mollitia voluptatum quos. Sed perspiciatis neque maiores iusto hic porro vitae rerum eveniet nemo laudantium maxime sequi, dolorum officiis repellat commodi optio cupiditate laboriosam nobis sapiente exercitationem numquam. Ut eveniet, dolor nam quam suscipit veniam nisi.</p>
              <p className='text-lg text-primary text-left w-full py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati? Modi odio unde voluptatum aut totam officiis laborum blanditiis iusto, facilis eveniet ea dolore praesentium numquam, perferendis ut laboriosam, voluptatem natus tenetur vitae magni placeat consequatur veritatis. Laudantium beatae deserunt dolorem, sunt cupiditate officiis mollitia voluptatum quos. Sed perspiciatis neque maiores iusto hic porro vitae rerum eveniet nemo laudantium maxime sequi, dolorum officiis repellat commodi optio cupiditate laboriosam nobis sapiente exercitationem numquam. Ut eveniet, dolor nam quam suscipit veniam nisi.</p>
              <p className='text-lg text-primary text-left w-full py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati? Modi odio unde voluptatum aut totam officiis laborum blanditiis iusto, facilis eveniet ea dolore praesentium numquam, perferendis ut laboriosam, voluptatem natus tenetur vitae magni placeat consequatur veritatis. Laudantium beatae deserunt dolorem, sunt cupiditate officiis mollitia voluptatum quos. Sed perspiciatis neque maiores iusto hic porro vitae rerum eveniet nemo laudantium maxime sequi, dolorum officiis repellat commodi optio cupiditate laboriosam nobis sapiente exercitationem numquam. Ut eveniet, dolor nam quam suscipit veniam nisi.</p>
        </div>
        <div className='container mx-auto py-14 flex flex-col justify-center items-center text-white px-10 lg:px-14'>
              <h1 className='text-2xl text-primary font-bold text-left w-full pb-5'>ACTIVITY</h1>
              <div  className="grid gap-16 grid-cols-1  md:grid-cols-2 lg:md:grid-cols-3 my-10">
                {activiyData?.map((activity)=>(
                        <div key={activity.id} className="flex flex-col ">
                          <div>
                            <Link to={`/service-activity/${activity.id}`}><img src={activity.imgSrc} onError={(e)=>handleImageErrorActivity(e)} alt={activity.name} className="w-full hover:opacity-80"/></Link>
                          </div>
                          <h2 className="text-xl text-primary font-bold py-4 hover:opacity-80"><Link to={`/service-activity/${activity.id}`}>{activity.name}</Link></h2>
                          <h3 className="text-lg text-primary line-clamp-3 hover:opacity-80"> <Link to={`/service-activity/${activity.id}`}>{activity.detail}</Link></h3>
                        </div>
                ))}
              </div>
        </div>
        <div className='container mx-auto py-14 flex flex-col justify-center items-center text-white px-10 lg:px-14'>
              <h1 className='text-xl md:text-2xl text-primary font-bold text-left w-full mb-5'>REVIEW</h1>

             <div className='hidden md:flex md:flex-col'>
                {reviewData?.map((review, index)=>(
                    <div key={review?.id}  className={`container  flex py-5 ${index == reviewData.length-1 ? 'border-b-0' : 'border-b-2'}`}>
                    <img src={review?.imgSrc} alt={review?.name} onError={(e)=>handleImageErrorProfile(e)} className='bg-blue-500 w-full md:w-36 aspect-square rounded-full' />
                    <div className="flex flex-col pl-5 ">
                      <h2 className='text-xl mb-3 text-primary'>{review?.name}</h2>
                      <h2 className='line-clamp-3 md:line-clamp-6 text-primary'>{review?.review}</h2>
                       <h2 className='text-md mt-3 text-primary-500'><FontAwesomeIcon icon={faClock}/> {review?.timeStamp?.toDate()?.toString()}</h2> */
                    
                       {/* console.log(typeof(review?.timeStamp.toDate().toString())) */}
              
                    </div>
                </div>
                ))}
            
             </div>
{/* 
              <div className='md:hidden '>
                {reviewData?.map((review, index)=>(
                  <div key={review.id}  className={`container  flex flex-col border-primary-200 py-5 ${index == reviewData.length-1 ? 'border-b-0' : 'border-b-2'}`}>
                        <div className='flex items-center'>
                          <img src={review.imgSrc} alt={review.name} onError={(e)=>handleImageErrorProfile(e)} className='w-28 md:w-60 aspect-square rounded-full mr-5 mb-2' />
                          <div className='flex flex-col'>
                            <h2 className='text-lg mb-3 text-primary'>{review.name}</h2>
                            <h2 className='text-md mb-3 text-primary-500'><FontAwesomeIcon icon={faClock}/> {review.timeStamp}</h2>
                          </div>
                        </div>
                        <div className="flex flex-col md:pl-5 ">
                          <h2 className='line-clamp-3 md:line-clamp-6 text-primary'>{review.review}</h2>
                        </div>
                        
                  </div>
                ))}
              </div> */}
              

        </div>
    </div>
    <Footer/>
    </>
  )
}

export default ForTheDeaf