import React from 'react'

const Item = ({event}) => {
  return (
    <div className='flex items-center gap-5'>
        <span className='bg-gray-300
        text-gray-700 p-2 rounded-lg
        h-16 w-16 font-bold text-center'>{event.date}</span>

        <div>
            <h1 className='text-gray-600'>{event.title}</h1>
            <p>{event.description}</p>
        </div>
    </div>
  )
}

export default Item