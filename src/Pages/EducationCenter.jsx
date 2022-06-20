import React,{useLayoutEffect,useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {db} from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import ScrollToTop from "react-scroll-to-top";
import hohec from '../assets/icons/hohec.png'
import Footer from './Components/Footer'
import Prefab_Service from '../assets/prefab_service.png'



function EducationCenter() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
});

  const imgSrcPlaceHolderService = Prefab_Service; 

  //data is here
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


  const serviceData = seractData?.filter((seract)=>seract.type=="service");

  const handleImageErrorService = e => {
    e.target.src = imgSrcPlaceHolderService;
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
            <img src={hohec} alt="ສູນການສຶກສາຜູ້ບົກຜ່ອງທາງການໄດ້ຍິນ ມືແຫ່ງຄວາມຫວັງ | Hands of Hope Education Center For Hearing Impaired" className="w-52 md:w-72"/>
        </div>
        <div className="container mx-auto hidden md:flex flex-col justify-center item-center">
          <div className="flex flex-col justify-center items-center py-10 text-primary">
            <h1 className="text-3xl font-bold leading-10">ສູນການສຶກສາຜູ້ບົກຜ່ອງທາງການໄດ້ຍິນ ມືແຫ່ງຄວາມຫວັງ</h1>
            <h3 className="text-xl font-bold leading-10">Hands of Hope Education Center For The Hearing Impaired</h3>
          </div>
        </div>
        <div className="container mx-auto md:hidden">
          <div className="flex flex-col justify-center items-center py-10 text-primary">
            <h1 className="text-xl font-bold leading-10">ສູນການສຶກສາຜູ້ບົກຜ່ອງທາງການໄດ້ຍິນ</h1>
            <h1 className="text-xl font-bold leading-10">ມືແຫ່ງຄວາມຫວັງ</h1>
            <h3 className="text-lg font-bold leading-10">Hands of Hope Education Center</h3>
            <h3 className="text-lg font-bold leading-10">For The Hearing Impaired</h3>
          </div>
        </div>
        <div className='container mx-auto py-14 flex flex-col justify-center items-center text-white px-10 lg:px-20'>
              <h1 className='text-xl md:text-2xl text-primary font-bold text-left w-full'>ABOUT US</h1>
              <p className='text-lg text-primary text-left w-full py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati? Modi odio unde voluptatum aut totam officiis laborum blanditiis iusto, facilis eveniet ea dolore praesentium numquam, perferendis ut laboriosam, voluptatem natus tenetur vitae magni placeat consequatur veritatis. Laudantium beatae deserunt dolorem, sunt cupiditate officiis mollitia voluptatum quos. Sed perspiciatis neque maiores iusto hic porro vitae rerum eveniet nemo laudantium maxime sequi, dolorum officiis repellat commodi optio cupiditate laboriosam nobis sapiente exercitationem numquam. Ut eveniet, dolor nam quam suscipit veniam nisi.</p>
              <p className='text-lg text-primary text-left w-full py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati? Modi odio unde voluptatum aut totam officiis laborum blanditiis iusto, facilis eveniet ea dolore praesentium numquam, perferendis ut laboriosam, voluptatem natus tenetur vitae magni placeat consequatur veritatis. Laudantium beatae deserunt dolorem, sunt cupiditate officiis mollitia voluptatum quos. Sed perspiciatis neque maiores iusto hic porro vitae rerum eveniet nemo laudantium maxime sequi, dolorum officiis repellat commodi optio cupiditate laboriosam nobis sapiente exercitationem numquam. Ut eveniet, dolor nam quam suscipit veniam nisi.</p>
              <p className='text-lg text-primary text-left w-full py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati? Modi odio unde voluptatum aut totam officiis laborum blanditiis iusto, facilis eveniet ea dolore praesentium numquam, perferendis ut laboriosam, voluptatem natus tenetur vitae magni placeat consequatur veritatis. Laudantium beatae deserunt dolorem, sunt cupiditate officiis mollitia voluptatum quos. Sed perspiciatis neque maiores iusto hic porro vitae rerum eveniet nemo laudantium maxime sequi, dolorum officiis repellat commodi optio cupiditate laboriosam nobis sapiente exercitationem numquam. Ut eveniet, dolor nam quam suscipit veniam nisi.</p>
        </div>
        <div className='container mx-auto py-14 flex flex-col justify-center items-center px-10 lg:px-14 '>
              <h1 className='text-xl md:text-2xl text-primary font-bold text-left w-full pb-5'>SERVICE</h1>
              <div  className="grid gap-16 grid-cols-1  md:grid-cols-2 lg:md:grid-cols-3 my-10">
                {serviceData?.map((service)=>(
                        <div key={service.id} className="flex flex-col">
                          <div>
                            <Link to={`/service-activity/${service.id}`}><img src={service.imgSrc} alt={service.name} onError={(e)=>handleImageErrorService(e)} className="w-full  hover:opacity-80"/></Link>
                          </div>
                          <h2 className="text-lg md:text-xl text-primary font-bold py-4  hover:opacity-80"><Link to={`/service-activity/${service.id}`}>{service.name}</Link></h2>
                          <h3 className="text-md md:text-lg text-primary line-clamp-3  hover:opacity-80"> <Link to={`/service-activity/${service.id}`}>{service.detail}</Link></h3>
                        </div>
                ))}
              </div>
        </div>
    </div>
    <Footer/>
    </>
  )
}

export default EducationCenter