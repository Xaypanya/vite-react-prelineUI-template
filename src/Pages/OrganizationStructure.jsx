import React, { useLayoutEffect, useState, useEffect } from 'react'
import {db} from '../firebase-config'
import { collection, getDocs } from 'firebase/firestore'
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import hohec from '../assets/icons/hohec.png'
import hohftd from '../assets/icons/hohftd.png'
import Footer from './Components/Footer';
import MyButton from './Components/MyButton';
import Prefab from '../assets/prefab.png'

function OrganizationStructure() {

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const imgSrcPlaceHolder = Prefab;

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

  const managerData = employeeData?.filter((employee)=> employee.role == "manager");

  const staffData = employeeData?.filter((employee)=> employee.role == "staff");


  const handleImageError = e => {
    e.target.src = imgSrcPlaceHolder;
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
            <div className='flex flex-col  md:flex-row  mb-10'>
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
      
      <div className='bg-gray-100'>
          <div className='container mx-auto py-14 flex flex-col justify-center items-center text-white px-10 lg:px-0'>
              <h1 className='text-3xl text-primary font-bold mb-20 lg:mb-10'>ຄະນະບໍລິຫານ</h1>
              {/* Partner Card */}
              <div className='hidden xl:flex xl:flex-col'>
              <div className='container max-auto ohmywrapper '>
                  {managerData?.map((manager)=>(
                    <Link to={`/structure/employee/${manager?.id}`} key={manager?.id} id="ohmycard" onClick={()=>console.log(manager)}  className='ohmygrid flex flex-col justify-center items-center bg-primary rounded-xl'>
                    <img src={manager?.imgSrc} onError={(e)=>handleImageError(e)} alt={manager?.name}/>
                    <h2 className='text-xl'>{manager?.name}</h2>
                    <h3 className='text-lg mb-5'>{manager?.position}</h3>
                    <h4>{manager?.responsibilty}</h4>
                    </Link>
                  ))}
              </div>
              </div>
              <div className='container max-auto grid xl:hidden grid-cols-1 md:grid-cols-2  justify-center'>
                 {managerData?.map((manager)=>(
                   <Link to={`/structure/employee/${manager?.id}`} key={manager?.id} onClick={()=>console.log(manager)} className='container flex justify-center'>
                   <div id="ohmycard" className='flex flex-col justify-center items-center bg-primary rounded-xl my-28'>
                         <img src={manager?.imgSrc} onError={(e)=>handleImageError(e)} alt={manager?.name}/>
                         <h2 className='text-xl'>{manager?.name}</h2>
                         <h3 className='text-lg mb-5'>{manager?.position}</h3>
                         <h4>{manager?.responsibilty}</h4>
                   </div>
                   </Link>
                 ))}
                 
              </div>
              
          </div>
          <div className='container mx-auto py-14 flex flex-col justify-center items-center text-white px-10 lg:px-0'>
              <h1 className='text-3xl text-primary font-bold mb-20 lg:mb-10'>ພະນັກງານ ແລະ ຄູອາຈານ</h1>
              {/* Partner Card */}
              <div className='hidden xl:flex xl:flex-col'>
              <div className='container max-auto ohmywrapper '>
                  {staffData?.map((staff)=>(
                    <Link to={`/structure/employee/${staff?.id}`} key={staff?.id} id="ohmycard" className='ohmygrid flex flex-col justify-center items-center bg-primary rounded-xl'>
                    <img src={staff?.imgSrc} onError={(e)=>handleImageError(e)} alt={staff?.name}/>
                    <h2 className='text-xl'>{staff?.name}</h2>
                    <h3 className='text-lg mb-5'>{staff?.position}</h3>
                    <h4>{staff?.responsibilty}</h4>
                    </Link>
                  ))}
              </div>
              </div>
              <div className='container max-auto grid xl:hidden grid-cols-1 md:grid-cols-2  justify-center'>
                 {staffData.map((staff)=>(
                   <Link to={`/structure/employee/${staff?.id}`} key={staff?.id} className='container flex justify-center'>
                   <div id="ohmycard" className='flex flex-col justify-center items-center bg-primary rounded-xl my-28'>
                         <img src={staff?.imgSrc} onError={(e)=>handleImageError(e)} alt={staff?.name}/>
                         <h2 className='text-xl'>{staff?.name}</h2>
                         <h3 className='text-lg mb-5'>{staff?.position}</h3>
                         <h4>{staff?.responsibilty}</h4>
                   </div>
                   </Link>
                 ))}
                 
              </div>
              
          </div>
      </div>
      <Footer/>
      </>
  )
}

export default OrganizationStructure