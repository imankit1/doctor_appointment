import React from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { useEffect } from 'react'
import { AppContext } from '../../context/AppContext'
import { assets } from '../../../../admin/src/assets/assets'

function AllAppointments() {

  const {aToken, appointments, getAllAppointments,cancelAppointment}=useContext(AdminContext)
  const {calculateAge, slotDateFormat, currency}= useContext(AppContext)

  useEffect(()=>{
    if(aToken){
      getAllAppointments()
    }
  },[aToken])
  return (

   <div className='w-full max-w-6xl m-5'>
  <p className='mb-3 text-lg font-medium'>All Appointments</p>

  <div className='bg-white rounded-xl shadow-sm border border-gray-200 text-sm max-h-[80vh] min-h-[60vh] overflow-y-scroll'>
    
    {/* Table Header */}
    <div className='hidden sm:grid grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] py-3 px-6 border-b border-gray-200 bg-gray-50 rounded-t-xl'>
      <p>#</p>
      <p>Patient</p>
      <p>Age</p>
      <p>Date & Time</p>
      <p>Doctor</p>
      <p>Fees</p>
      <p>Action</p>
    </div>

    {/* Table Rows */}
    {appointments.reverse().map((item, index)=>(
      <div 
        key={index}
        className='flex flex-wrap justify-between max-sm:gap-2 sm:grid sm:grid-cols-[0.5fr_3fr_1fr_3fr_3fr_1fr_1fr] items-center text-gray-600 py-3 px-6 border-b border-gray-100 hover:bg-gray-50 transition'
      >
        <p className='max-sm:hidden'>{index+1}</p>
        
        <div className='flex items-center gap-2'>
          <img className='w-8 h-8 rounded-full border border-gray-200' src={item.userData.image} alt="" />
          <p>{item.userData.name}</p>
        </div>
        
        <p className='max-sm:hidden'>{calculateAge(item.userData.dob)}</p>
        
        <p>{slotDateFormat(item.slotDate)}, {item.slotTime}</p>
        
        <div className='flex items-center gap-2'>
          <img className='w-8 h-8 rounded-full border border-gray-200 bg-gray-100' src={item.docData.image} alt="" />
          <p>{item.docData.name}</p>
        </div>
        
        <p>{currency}{item.amount}</p>
        
        {item.cancelled ? (
          <p className='text-red-500 text-xs font-medium'>Cancelled</p>
        ) : item.isCompleted ? (
          <p className='text-green-500 text-xs font-medium'>Completed</p>
        ) : (
          <img 
            onClick={()=> cancelAppointment(item._id)} 
            className='w-8 cursor-pointer hover:opacity-80' 
            src={assets.cancel_icon} 
            alt="" 
          />
        )}
      </div>
    ))}

  </div>
</div>

  )
}

export default AllAppointments
