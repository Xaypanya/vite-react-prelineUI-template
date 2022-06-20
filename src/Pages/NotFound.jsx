import React from 'react'
import { Link } from 'react-router-dom'
import MyButton from './Components/MyButton'

function notfound() {
  return (
    <div className='min-h-screen flex flex-col pt-20 items-center text-white'>
      <img src="https://i.gifer.com/4FB4.gif" alt="gif error" className='w-28 my-5'/>
      <h1 className='text-3xl mb-5'>ERROR 404</h1>
      <h1 className='text-2xl mb-5'>ບໍ່ພົບຂໍ້ມູນ</h1>
      <Link to={"/"}><MyButton title={"ກັບໜ້າຫຼັກ"}/></Link>
    </div>
  )
}

export default notfound