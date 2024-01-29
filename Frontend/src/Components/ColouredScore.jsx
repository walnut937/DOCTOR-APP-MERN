/* eslint-disable react/prop-types */
// import React from 'react'

function ColouredScore({num, mark, color, text}) {
  return (
    <div className="relative">
        <h1 className="z-20 text-2xl font-bold mb-3">{num}<span>{mark}</span></h1>
        <div className={`h-2 w-12 ${color} absolute left-0 -z-40 top-[22px] rounded-md`}></div>
        <h1 className="px-2">{text}</h1>
    </div>
  )
}

export default ColouredScore