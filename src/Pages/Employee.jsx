import React, { useLayoutEffect, useState, useEffect } from 'react'
import { useParams } from "react-router-dom";
import { collection, getDocs } from 'firebase/firestore'
import { Link } from "react-router-dom";
import ScrollToTop from "react-scroll-to-top";
import NotFound from "../Pages/NotFound"
import Prefab from "../assets/prefab.png"


function Employee() {

  const {emp_id} = useParams();

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
  


  const employeeModel = employeeData?.filter((employee)=> employee.id == emp_id)[0];;

  useLayoutEffect(() => {
    window.scrollTo(0, 0)
  });

  const handleImageError = e => {
    e.target.src = imgSrcPlaceHolder;
  }

  if(employeeModel == undefined){
    return (
      <NotFound/>
    );
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
      <div className='bg-primary pb-10'>
          <div className='container mx-auto pt-14 flex flex-col justify-center items-center text-white px-10 lg:px-0'>
              <img src={employeeModel?.imgSrc} onError={(e)=>handleImageError(e)} alt={employeeModel?.name} className='rounded-full border-4 border-white w-44 md:w-52' />
              <h1 className='text-xl font-bold mt-4 mb-2'>{employeeModel?.name}</h1>
              <h3 className='text-lg'>{employeeModel?.position}</h3>
          </div>
      </div>
      <div className='bg-white'>
      <div className='container mx-auto pt-16 md:py-16 flex flex-col  text-white px-5 lg:px-48 '>
              <h2 className='text-xl md:text-2xl text-primary font-bold mb-10'>ຂໍ້ມູນພື້ນຖານ</h2>
                <div className='flex justify-between '>
                <div className='flex w-[40%] flex-col text-lg md:text-xl text-primary font-bold mb-4 leading-10'>
                  <h3 className='leading-10'>ຊື່ ແລະ ນາມສະກຸນ</h3>
                  <h3 className='leading-10'>ເພດ</h3>
                  <h3 className='leading-10'>ອາຍຸ</h3>
                  <h3 className='leading-10'>ບ່ອນຢູ່ປັດຈຸບັນ</h3>
                </div>
                <div className='flex w-[55%] lg:w-[40%] flex-col text-lg md:text-xl text-start  text-primary font-bold mb-4 leading-10'>
                  <h3 className='leading-10'>{employeeModel?.name}</h3>
                  <h3 className='leading-10'>{employeeModel?.gender}</h3>
                  <h3 className='leading-10'>{employeeModel?.age ? employeeModel?.age + " ປີ" : ""}</h3>
                  <h3 className='leading-10'>{employeeModel?.address}</h3>
                </div>
                </div>
          </div>
       
          <div className='container mx-auto  py-16 flex flex-col  text-white px-5 lg:px-48 '>
              <h2 className='text-xl md:text-2xl text-primary font-bold mb-10'>ຕຳແໜ່ງ ແລະ ຂໍ້ມູນວຸດການສຶກສາ</h2>
                <div className='flex justify-between '>
                <div className='flex w-[40%] flex-col  text-lg md:text-xl text-primary font-bold mb-4 leading-10'>
                  <h3 className='leading-10'>ຕຳແໜ່ງ</h3>
                  <h3 className='leading-10'>ວິຊາຮັບຜິດຊອບ</h3>
                  <h3 className='leading-10'>ອາຍຸການເຮັດວຽກ</h3>
                  <h3 className='leading-10'>ວຸດການສຶກສາ</h3>
                </div>
                <div className='flex w-[55%] lg:w-[40%] flex-col text-start text-lg md:text-xl text-primary font-bold mb-4 leading-10'>
                  <h3 className='leading-10'>{employeeModel?.position}</h3>
                  <h3 className='leading-10'>{employeeModel?.responsibilty}</h3>
                  <h3 className='leading-10'>{employeeModel?.experience ? employeeModel.experience+ " ປີ" : ""}</h3>
                  <h3 className='leading-10'>{employeeModel?.degree}</h3>
                </div>
                </div>
          </div>
      </div>
    </>
  )
}

export default Employee