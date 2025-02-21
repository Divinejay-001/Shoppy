import React from 'react'
import Title from '../../ui/Title'
import Members from './Members'
import { users } from '../../Contents'

const Team = () => {
  return (
    <div className='bg-white p-5 rounded-2xl dark:bg-gray-600
    dark:text-gray-300 flex-1 flex flex-col gap-5'>
        <Title>
            Team
        </Title>
        {users.map((user, index) =>(
            <Members key={index} user={user}/>
            
        ))}
    </div>
  )
}

export default Team