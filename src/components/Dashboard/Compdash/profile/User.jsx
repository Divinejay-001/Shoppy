import React from 'react'
import User1 from '../../../../assets/DashImg/user01.png'
import User2 from '../../../../assets/DashImg/user02.png'
import User3 from '../../../../assets/DashImg/user03.png'
import User4 from '../../../../assets/DashImg/ceo.webp'
import User5 from '../../../../assets/DashImg/ceo2.jpg'

const User = () => {
  return (
    <div  className='flex gap-3 items-center
    bg-white p-4 rounded-full dark:bg-gray-600 dark:text-gray-300'>
        <img className='w-24 h-24 rounded-full object-center' src={User5} alt="user Image" />
        <div className='font-semibold text-2xl'>
            <h3>CEO</h3>
            <p>Shophere</p>
        </div>
    </div>
  )
}

export default User