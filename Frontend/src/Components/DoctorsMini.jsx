/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom'
import star from '../assets/images/Star.png'

function DoctorsMini({ profile, name, occupation, rating, feedback, hospital }) {
  return (
    <div className='flex flex-col gap-4 p-4'>
      <img src={profile} alt="doc1" />
      <h1 className='text-2xl font-bold'>{name}</h1>
      <div className='flex items-center justify-between'>
        <h1 className='bg-teal-200 px-3 py-2 rounded-md text-emerald-600'>{occupation}</h1>
        <div className='flex items-center gap-1'><img src={star} alt="star" /><span>{rating}</span><span>({feedback})</span></div>
      </div>
      <div className='flex items-center justify-between'>
        <h1 className='text-sm'>{hospital}</h1>
        <Link to='/' className='px-3 py-2 border-2 border-black rounded-full'>
        <i className="fa-solid fa-arrow-right"></i>
        </Link>
      </div>
    </div>
  )
}

export default DoctorsMini