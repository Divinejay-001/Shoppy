import React from 'react'
import User1 from '../../../../assets/DashImg/user01.png'
import User2 from '../../../../assets/DashImg/user02.png'
import User3 from '../../../../assets/DashImg/user03.png'

const User = () => {
  return (
    <div  className='flex gap-3 items-center
    bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300'>
        <img className='w-14 h-14 rounded-full' src={User1} alt="user Image" />
        <div className='font-semibold text-2xl'>
            <h3>Promise</h3>
            <p>Developer</p>
        </div>
    </div>
  )
}

export default User