import React, { useEffect,useState } from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import laoFlag from '../../assets/icons/laos.png'
import engFlag from '../../assets/icons/united-kingdom.png'
import { NavLink } from "react-router-dom";


function Header() {

    const [show, setShow] = useState(true);
    const [open, setOpen] = useState(false);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isLao, setIsLao] = useState(true);
  
    const controlNavbar = () => {
      if (typeof window !== 'undefined') { 
        if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
          setShow(false); 
          setOpen(false);
        } else { // if scroll up show the navbar
          setShow(true);  
        }
  
        // remember current page location to use in the next move
        setLastScrollY(window.scrollY); 
      }
    };

    useEffect(() => {
        if (typeof window !== 'undefined') {
          window.addEventListener('scroll', controlNavbar);
    
          // cleanup function
          return () => {
            window.removeEventListener('scroll', controlNavbar);
          };
        }
      }, [lastScrollY]);

  const menuItem = [
    {
        id: 1,
        title: "ໜ້າຫຼັກ",
        link: "/"
    },
    {
        id: 2,
        title: "ສູນການສຶກສາຜູ້ບົກຜ່ອງທາງການໄດ້ຍິນ",
        link: "/hoh-education-center-for-the-hearing-impaired"
    },
    {
        id: 3,
        title: "ໂຮງຮຽນມືແຫ່ງຄວາມຫວັງ",
        link: "hoh-school-for-the-deaf"
    },
    {
        id: 4,
        title: "ອົງການຈັດຕັ້ງ",
        link: "/structure"
    }

  ]
  

  return (
   <div className={`fixed ${show ? 'top-0' : '-top-24'} left-0 w-full bg-white shadow-md z-50 transition-all duration-500`}>
        <div className='container  md:flex items-center justify-between h-16 lg:h-20 mx-auto z-50 lg:px-20'>
        <div className='lg:hidden px-7 flex justify-between  items-center h-full'>
          <div className='lg:hidden' onClick={()=>setOpen(!open)}>
              <FontAwesomeIcon className='text-2xl cursor-pointer transition-all duration-300 text-primary-900' icon={open ? faXmark : faBars}/>
          </div>

          <button type='button' onClick={()=>setIsLao(!isLao)} className="md:hidden py-0 px-1 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white  shadow-sm align-middle hover:bg-gray-100  transition-all text-sm ">
          <img src={isLao ? laoFlag : engFlag} alt="" className='w-8'/>
          </button>
        </div>
        
        {/* Menu navbar section */}
            
               <div className="text-primary-900 font-bold lg:flex hidden md:items-center md:mt-0   md:top-0 md:right-0   md:p-0 bg-white  md:w-auto   md:shadow-none md:opacity-100  md:z-auto  md:transition-none">
                {menuItem.map((menu)=>(
                    <NavLink to={menu.link} key={menu.id} className="py-1  rounded-lg md:mr-10 md:my-0 my-3 text-lg hover:opacity-70">{menu.title}</NavLink>  
                ))}
                </div>

                <button type='button' onClick={()=>setIsLao(!isLao)} className="md:flex hidden py-0 px-1  justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-100  transition-all text-sm ">
                 <img src={isLao ? laoFlag : engFlag} alt="" className='w-8'/>
                 </button>

         
              <div className={`text-primary-900 py-5 font-bold  lg:hidden items-center  absolute right-0  top-[3.7rem] ${open ? 'opacity-100' : 'opacity-0 hidden'} bg-white w-full  shadow-md  z-[-1] transition-all ease-out duration-500`}>
                    <div  className='container mx-auto px-7 md:px-5'>
                        {menuItem.map((menu)=>(
                            <NavLink to={menu.link} key={menu.id} onClick={()=>setOpen(false)} className="block py-1 rounded-lg md:ml-2  md:my-0 my-3 text-lg hover:opacity-70">{menu.title}</NavLink>  
                        ))}
                    </div>
                </div>

              
   
               
               
              
            
    </div>
    
   </div>
  )
}

export default Header
