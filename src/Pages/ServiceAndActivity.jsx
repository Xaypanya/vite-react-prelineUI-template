import React, { useLayoutEffect, useState, useEffect } from 'react'
import { Link, useParams } from "react-router-dom";
import {db} from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import ScrollToTop from "react-scroll-to-top";
import NotFound from "../Pages/NotFound"
import Prefab from "../assets/prefab.png"
import MyImage from './Components/MyImage';


import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from 'swiper';
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


function ServiceAndActivity() {

  const [my_swiper, set_my_swiper] = useState({});


  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const {seract_id} = useParams();
  


  const placeholder = "http://placehold.jp/500x375.png"
  const placeholderSlider = "http://placehold.jp/700x467.png"

  //Data is here
  // const employeeData = []
  const [employeeData, setEmployeeData] = useState([{}])
  const employeeCollectionRef = collection(db, 'employeeData');

  useEffect(()=>{
    const getEmployee = async () => {
      const data = await getDocs(employeeCollectionRef);
      setEmployeeData(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
      console.log(data)
    }

    getEmployee();

  },[])

  //Data is here
  // const seractData = []
  const [seractData, setSeractData] = useState([{}])
  const seractCollectionRef = collection(db, 'seractData');

  useEffect(()=>{
    const getSeract = async () => {
      const data = await getDocs(seractCollectionRef);
      setSeractData(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
      console.log(data)
    }

    getSeract();

  },[])


  const seractEmployeeData = employeeData?.filter((employee)=>employee.seract_id.find((id)=> id==seract_id));
  console.log(seractEmployeeData);

  const seractModel = seractData?.filter((seract)=> seract.id == seract_id)[0];;

  
  const handleImageError = e => {
    e.target.src = imgSrcPlaceHolder;
  }

  const handleImageSlideError = e => {
    e.target.src = placeholderSlider;
  }


  if(seractModel == undefined){
    return (
      <NotFound/>
    );
  }

  return (
    <>
     <ScrollToTop smooth 
       color="#002250" 
       viewBox="0 0 487 487"
       svgPath='M397.7,376.1c20.4,20.4,53.6,20.4,74,0s20.4-53.6,0-74L280.5,110.9c-20.4-20.4-53.6-20.4-74,0L15.3,302.1
       c-20.4,20.4-20.4,53.6,0,74s53.6,20.4,74,0l154.2-154.2L397.7,376.1z'
       style={{display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}/>
     <div className='pb-10'>
          <div className='container mx-auto pt-3 flex flex-col md:flex-row justify-center text-white px-10 lg:px-20 '>
            <div className='container px-16 sm:px-32 md:px-5'>
            <MyImage imgSrc={seractModel?.imgSrc} alter={seractModel?.name} className={"w-full"}/>
            </div>
              <div className='ml-5 px-2 md:px-0 md:pt-7 md:max-w-[55%]'>
                <h1 className='text-2xl text-center md:text-left  text-bold my-4 md:mb-2'>{seractModel?.name}</h1>
                <h2 className='text-lg mb-2 line-clamp-4'>{seractModel?.detail}</h2>
                <h3>{seractModel?.timeStamp}</h3>
              </div>
          </div>
      </div>
      <div className='bg-white pb-10'>
          <div className=' container mx-auto pt-14 flex flex-col md:flex-row justify-center text-white px-10 lg:px-20'>
                <Swiper
                onInit={(ev)=>{
                  set_my_swiper(ev)
                }}
                slidesPerView={"1.5"}
                spaceBetween={20}
                loop={true}
               
                breakpoints= {{
                  // when window width is >= 320px
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                  },
                  640: {
                    slidesPerView: 1,
                    spaceBetween: 20,
                  },
                  768: {
                    slidesPerView: 1.5,
                    spaceBetween: 70,
                  },
                  1024: {
                    slidesPerView: 1.5,
                    spaceBetween: 70,
                  },
                }}
                navigation={true}
                modules={[Pagination, Navigation, Autoplay]}
                // pagination={{
                //   clickable: true,
                // }}
                className="mySwiper container z-0 relative"
                autoplay={{delay:5000, disableOnInteraction: false}}
               
                >
                   {
                     seractModel?.imgSlideSrc?.map((img)=>(
                       <SwiperSlide className='relative'>
                      <img src={img.imgSlideSrcUrl} alt={img.imgSlideSrcName} onError={(e)=>handleImageSlideError(e)} className='w-full'/>
                      <h1 className='text-xl bg-[#445C7C] w-full absolute bottom-0 py-3 px-4'>{img.imgSlideSrcName}</h1>
                      </SwiperSlide>
                    ))
                  }
            </Swiper>
          </div>
      </div>
      <div className='bg-white'>
          <div className='container mx-auto py-14 flex flex-col justify-center items-center text-white px-10 lg:px-20'>
              <h1 className='container text-3xl text-primary font-bold mb-20 lg:mb-10 '>{seractEmployeeData.length !== 0 ? "ພະນັກງານ ແລະ ຄູອາຈານ" : ""}</h1>
              {/* Partner Card */}
              <div className='hidden xl:flex xl:flex-col'>
              <div className='container max-auto ohmywrapper '>
                  {seractEmployeeData?.map((seract_emp)=>(
                    <Link to={`/structure/employee/${seract_emp?.id}`} key={seract_emp?.id} id="ohmycard" onClick={()=>console.log(seract_emp)}  className='ohmygrid flex flex-col justify-center items-center bg-primary rounded-xl'>
                    <img src={seract_emp?.imgSrc} onError={(e)=>handleImageError(e)} alt={seract_emp?.name}/>
                    <h2 className='text-xl'>{seract_emp?.name}</h2>
                    <h3 className='text-lg mb-5'>{seract_emp?.position}</h3>
                    <h4>{seract_emp?.responsibilty}</h4>
                    </Link>
                  ))}
              </div>
              </div>
              <div className='container max-auto grid xl:hidden grid-cols-1 md:grid-cols-2  justify-center'>
                 {seractEmployeeData?.map((seract_emp)=>(
                   <Link to={`/structure/employee/${seract_emp?.id}`} key={seract_emp?.id} onClick={()=>console.log(seract_emp)} className='container flex justify-center'>
                   <div id="ohmycard" className='flex flex-col justify-center items-center bg-primary rounded-xl my-28'>
                         <img src={seract_emp?.imgSrc} onError={(e)=>handleImageError(e)} alt={seract_emp?.name}/>
                         <h2 className='text-xl'>{seract_emp?.name}</h2>
                         <h3 className='text-lg mb-5'>{seract_emp?.position}</h3>
                         <h4>{seract_emp?.responsibilty}</h4>
                   </div>
                   </Link>
                 ))}
                 
              </div>
              
          </div>
      </div>
    </>
  )
}
 
export default ServiceAndActivity