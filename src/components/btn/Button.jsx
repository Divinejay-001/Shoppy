import React from 'react'

const Button = ({styles, text}) => {
  return (
<button type='submit' className={` w-full
    hover:scale-105 duration-300 transition-all
     bg-primary group-hover:bg-tertiary/60
      group-hover:text-white px-2 py-2 rounded-md  ${styles}`}>
        {text}
    </button>
    )
}

export default Button