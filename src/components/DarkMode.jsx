import React from 'react'
import { useState, useEffect } from 'react'
import lightPng from '../assets/website/light-mode-button.png'
import darkPng from '../assets/website/dark-mode-button.png'
const DarkMode = () => {
    const [theme, setTheme] = React.useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : 'light'
    );
    const element= document.documentElement; //html element
console.log(element)
   
React.useEffect(()=> {
        if(theme === 'dark' ){
            element.classList.add('dark');
            localStorage.setItem("theme", "dark");
        }
        else {
            element.classList.remove('dark');
            localStorage.setItem("theme", "light");
        }
    }, [theme])
  return (
    <div className='relative '>
        <img src={lightPng} alt=""
        onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
        className={`
        w-12 cursor-pointer drop-shadow-[1px_1px_1px_ rgba(0,0,0,0.1)] transition-all
        duration-300 absolute right-0 z-10 ${theme
            === 'dark'? 'hidden' : 'block'
        }`}/>
<img src={darkPng} alt="" 
        onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
className='w-12 cursor-pointer drop-shadow-[1px_1px_1px_ rgba(0,0,0,0.1)] transition-all
        duration-300' />
    </div>
  )
}

export default DarkMode