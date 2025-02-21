import React from 'react'
import User from './User'
import Shortcut from './Shortcut'
import DonutCart from './DonutCart'

const Profile = () => {
  return (
    <div className='px-2 py-4  bg-gray-200 rounded-lg
    w-full dark:bg-gray-700 lg:w-60
    xl:w-80 flex flex-col justify-between gap-4'>
      <User/>
      <Shortcut/>
      <DonutCart/>
    </div>
  )
}

export default Profile