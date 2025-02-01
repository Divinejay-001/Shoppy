import React from 'react'
import { ArrowRight } from 'lucide-react'
const SignUpbtn = ({styles, text}) => {
  return (
       <button 
                
                  type='submit' 
                  className={`w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transform hover:scale-[1.02] transition-all duration-200 flex items-center justify-center gap-2 ${styles}`}
                >
                  {text}
                  <ArrowRight className="w-5 h-5" />
                </button>
  )
}

export default SignUpbtn