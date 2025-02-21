import React from 'react'
import Title from '../../ui/Title'
import { FiSend } from 'react-icons/fi'
import BarChart from './BarChart'

const Balance = ({darkMode}) => {
  return (
    <div className='bg-white p-5 rounded-2xl 
    dark:bg-gray-600 dark:text-gray-300 flex-1 '>
        <div className='flex items-center justify-between'>
            <Title>
                Balance
            </Title>
            <FiSend className='bg-tertiary p-2 rounded-full
            text-gray-300 w-8 h-8'/>
        </div>
        <div>
         <h1 className='font-bold
         text-2xl '>₦5,600,000 <span className='font-medium text-xl'>(NGN)
         </span>
         </h1> 
           <span>on February 2025</span>
        </div>
        <BarChart darkMode={darkMode}/>
    </div>
  )
}

export default Balance