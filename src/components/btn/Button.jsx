import React from 'react'

const Button = ({styles, text}) => {
  return (
<button type='submit' className={` text-lg font-bold w-full md:w-[280px] xl:w-[300px] px-4 whitespace-nowrap rounded-[20px] p-[10px] gap-[10px] ${styles}`}>
        {text}
    </button>
    )
}

export default Button