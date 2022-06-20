import React,{useLayoutEffect, useState, useEffect} from 'react'
import {db} from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import hohec from '../assets/icons/hohec.png'
import hohftd from '../assets/icons/hohftd.png'
import Footer from './Components/Footer';
import MyButton from './Components/MyButton';
import Prefab_Partner from '../assets/prefab_partner.png'


function Home() {

const imgSrcPlaceHolderPartner = Prefab_Partner; 

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  //Data is here
  // const partnerData = []
  const [partnerData, setPartnerData] = useState([{}])
  const partnerCollectionRef = collection(db, 'partnerData');

  useEffect(()=>{
    const getPartner = async () => {
      const data = await getDocs(partnerCollectionRef);
      setPartnerData(data.docs.map((doc)=>({...doc.data(), id: doc.id})));
      console.log("data ===>",data);
    }

    getPartner();

  },[])

  const handleImageErrorPartner = e => {
    e.target.src = imgSrcPlaceHolderPartner;
  }

  return (
    <>
    {/* BANNER SECTION */}
    <ScrollToTop smooth
      color="#002250" 
      viewBox="0 0 487 487"
      svgPath='M397.7,376.1c20.4,20.4,53.6,20.4,74,0s20.4-53.6,0-74L280.5,110.9c-20.4-20.4-53.6-20.4-74,0L15.3,302.1
      c-20.4,20.4-20.4,53.6,0,74s53.6,20.4,74,0l154.2-154.2L397.7,376.1z'
      style={{display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px'}}/>
    <div className='bg-primary-900 '>
          <div className='container mx-auto pt-14 flex flex-col justify-center items-center text-white px-10 lg:px-0'>
            <h1 className='text-xl text-center flex justify-center md:2xl lg:text-3xl tracking-wide font-bold before:content-["“"] before:text-4xl before:relative before:bottom-4  after:content-["”"] after:text-4xl after:relative after:top-7 '>ເສັ້ນທາງຂ້າງໜ້າຄືຄວາມຫວັງ ເສັ້ນທາງຂ້າງຫຼັງຄືບົດຮຽນ</h1>
            <div className='flex flex-col  md:flex-row  my-16'>
              <div className='flex flex-col justify-center items-center mb-10 md:mb-0'>
                <img src={hohec} alt="ສູນການສຶກສາຜູ້ບົກຜ່ອງທາງການໄດ້ຍິນ ມືແຫ່ງຄວາມຫວັງ | Hands of Hope Education Center For Hearing Impaired"/>
                <Link to="/hoh-education-center-for-the-hearing-impaired"><MyButton title="ຂໍ້ມູນເພີ່ມເຕີ່ມ"/></Link>
              </div>
              <div className='flex flex-col justify-center items-center'>
                <img src={hohftd} alt="ໂຮງຮຽນ ມືແຫ່ງຄວາມຫວັງ | Hands of Hope School For The Deaf"/>
                <Link to="/hoh-school-for-the-deaf"><MyButton title="ຂໍ້ມູນເພີ່ມເຕີ່ມ"/></Link>
              </div>
              </div>
            </div>
      </div>
      <div className='bg-white'>
          <div className='container mx-auto py-14 flex flex-col justify-center items-center text-white px-10 lg:px-20'>
              <h1 className='text-2xl text-primary font-bold text-left w-full'>ABOUT US</h1>
              <p className='text-lg text-primary text-left w-full py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati? Modi odio unde voluptatum aut totam officiis laborum blanditiis iusto, facilis eveniet ea dolore praesentium numquam, perferendis ut laboriosam, voluptatem natus tenetur vitae magni placeat consequatur veritatis. Laudantium beatae deserunt dolorem, sunt cupiditate officiis mollitia voluptatum quos. Sed perspiciatis neque maiores iusto hic porro vitae rerum eveniet nemo laudantium maxime sequi, dolorum officiis repellat commodi optio cupiditate laboriosam nobis sapiente exercitationem numquam. Ut eveniet, dolor nam quam suscipit veniam nisi.</p>
              <p className='text-lg text-primary text-left w-full py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati? Modi odio unde voluptatum aut totam officiis laborum blanditiis iusto, facilis eveniet ea dolore praesentium numquam, perferendis ut laboriosam, voluptatem natus tenetur vitae magni placeat consequatur veritatis. Laudantium beatae deserunt dolorem, sunt cupiditate officiis mollitia voluptatum quos. Sed perspiciatis neque maiores iusto hic porro vitae rerum eveniet nemo laudantium maxime sequi, dolorum officiis repellat commodi optio cupiditate laboriosam nobis sapiente exercitationem numquam. Ut eveniet, dolor nam quam suscipit veniam nisi.</p>
              <p className='text-lg text-primary text-left w-full py-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, obcaecati? Modi odio unde voluptatum aut totam officiis laborum blanditiis iusto, facilis eveniet ea dolore praesentium numquam, perferendis ut laboriosam, voluptatem natus tenetur vitae magni placeat consequatur veritatis. Laudantium beatae deserunt dolorem, sunt cupiditate officiis mollitia voluptatum quos. Sed perspiciatis neque maiores iusto hic porro vitae rerum eveniet nemo laudantium maxime sequi, dolorum officiis repellat commodi optio cupiditate laboriosam nobis sapiente exercitationem numquam. Ut eveniet, dolor nam quam suscipit veniam nisi.</p>
            </div>
      </div>
      <div className='bg-gray-100'>
          <div className='container mx-auto py-14 flex flex-col justify-center items-center text-white px-10 lg:px-14'>
              <h1 className='text-2xl text-primary font-bold'>PARTNER</h1>
              {/* Partner Card */}
              <div className='container ohmywrapper'>
                  
                  {partnerData?.map((partner)=>(
                      <div key={partner?.id} className='ohmygrid flex flex-col justify-center items-center'>
                        <div className='bg-gray-300 w-44 rounded-full flex justify-center items-center'>
                          <img src={partner?.imgSrc ? partner?.imgSrc : imgSrcPlaceHolderPartner} onError={(e)=>handleImageErrorPartner(e)} className='w-full aspect-square rounded-full' alt={partner?.name}/>
                        </div>
                        <h1 className='text-xl text-primary-900 font-bold text-center w-full mt-4'>{partner?.name}</h1>
                        <p className='text-lg text-primary-900 text-center w-full my-2'>{partner?.detail}</p>
                      </div>
                  ))}
              </div>
              
          </div>
      </div>
      <Footer/>
    </>
  )
}

export default Home