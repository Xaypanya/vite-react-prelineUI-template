import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Footer() {
  return (
    <div className='bg-primary'>
        <div className='container mx-auto py-14 flex flex-col md:flex-row justify-between items-start text-white px-10 lg:px-20'>
           <div className='container flex flex-col  md:text-xl ' >
                <div className='flex justify-start items-center'>
                    <FontAwesomeIcon icon={faEnvelope} className="min-w-[2rem]  mr-3"/> 
                    <a href="#" className='leading-9 hover:underline'>organization@example.com</a>
                </div>

                <div className='flex justify-start items-center'>
                    <FontAwesomeIcon icon={faPhone} className="min-w-[2rem]  mr-3"/> 
                    <div>
                    <a href="#" className='leading-9 hover:underline'>030 99 998 88</a> ;
                    <a href="#" className='leading-9 hover:underline'> 030 99 998 88</a>
                    </div>
                </div>

                <div className='flex justify-start items-center'>
                    <FontAwesomeIcon icon={faFacebook} className="min-w-[2rem]  mr-3"/> 
                    <a href="#" className='leading-9 hover:underline'>Hand of Hope Foundation</a>
                </div>
           </div>
           <div className='container mt-10 md:mt-0 flex flex-col   md:text-xl'>
                <div className='flex md:justify-end md:items-center'>
                    <FontAwesomeIcon icon={faLocationDot} className="min-w-[2rem] pt-2 md:pt-0 mr-3"/>
                    <a href="#" className='leading-9 hover:underline'>Hongkaykeo, Xaysettha, Vientiane</a>
                </div>
           </div>
        </div>
        <div className='py-3'>
            <p className='text-white text-sm text-center'>Copyright © 2022, All Right Reserved HOHF</p>
        </div>
    </div>
  )
}

export default Footer