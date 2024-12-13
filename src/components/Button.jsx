import React from 'react'

const Button = ({label,iconURL,backgroundcolor,textcolor,bordercolor,fullWidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none ${backgroundcolor? backgroundcolor : "bg-coral-red"} rounded-full ${textcolor? textcolor : "text-white"} ${bordercolor ? bordercolor : "border-coral-red"}  ${fullWidth && "w-full"} `}>
        {label}
        {iconURL && <img src={iconURL} alt="" className='ml-2 rounded-full w-5 h-5' />}
    </button>
  )
}

export default Button