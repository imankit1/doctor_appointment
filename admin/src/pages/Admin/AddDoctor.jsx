import React from 'react'
import { assets } from '../../assets/assets'
import { useState } from 'react'
import { useContext } from 'react'
import { AdminContext } from '../../context/AdminContext'
import { toast } from 'react-toastify'
import axios from 'axios'

function AddDoctor() {
    
    const [docImg, setDocImg]=useState(false)
    const [name, setName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [experience, setExperience]=useState('1 Year')
    const [fees, setFees]=useState('')
    const [about, setAbout]=useState('')
    const [speciality, setSpeciality]=useState('General physician')
    const [degree, setDegree]=useState('')
    const [address1, setAddress1]=useState('')
    const [address2, setAddress2]=useState('')
    
    const {backendUrl, aToken}= useContext(AdminContext)

    const onSubmitHandler =async(event) =>{
        event.preventDefault()

        try {
            if(!docImg){
                return toast.error('Image Not Selected')
            }

            const formData=new FormData()

            formData.append('image', docImg)
            formData.append('name', name)
            formData.append('email', email)
            formData.append('password', password)
            formData.append('experience', experience)
            formData.append('fees', Number(fees))
            formData.append('about', about)
            formData.append('speciality', speciality)
            formData.append('degree', degree)
            formData.append('address', JSON.stringify({line1:address1, line2:address2}))

            // console log formdata
            formData.forEach((value, key)=>{
                console.log(`${key}: ${value}`);
                
            })

            const {data}= await axios.post(backendUrl+ '/api/admin/add-doctor', formData,{headers:{aToken}})
            if(data.success){
                toast.success(data.message)
                setDocImg(false)
                setName('')
                setPassword('')
                setEmail('')
                setAddress1('')
                setAddress2('')
                setDegree('')
                setAbout('')
                setFees('')

            }
            else{
                console.log('dgamfkg');
                
                toast.error(data.message)
            }

        } catch (error) {

            toast.error(error.message)
            console.log(error.message);
            
            
        }
    }
    


    return (
        <form onSubmit={onSubmitHandler} className="m-5 w-full">
  <p className="mb-6 text-xl font-semibold text-gray-800">Add Doctor</p>

  <div className="bg-white px-8 py-10 border border-gray-200 shadow-sm rounded-2xl w-full max-w-4xl max-h-[80vh] overflow-y-auto">
    {/* Upload Image */}
    <div className="flex items-center gap-4 mb-8 text-gray-600">
      <label htmlFor="doc-img">
        <img
          className="w-20 h-20 object-cover border border-dashed border-gray-300 rounded-full cursor-pointer hover:border-blue-500 transition"
          src={docImg ? URL.createObjectURL(docImg) : assets.upload_area}
          alt=""
        />
      </label>
      <input
        onChange={(e) => setDocImg(e.target.files[0])}
        type="file"
        id="doc-img"
        hidden
      />
      <p className="text-sm text-gray-500">
        Upload doctor <br /> picture
      </p>
    </div>

    {/* Inputs */}
    <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-700">
      {/* Left side */}
      <div className="w-full lg:flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Doctor Name</label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            placeholder="Enter doctor's name"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Doctor Email</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="email"
            placeholder="Enter email"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Doctor Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="password"
            placeholder="Enter password"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Experience</label>
          <select
            onChange={(e) => setExperience(e.target.value)}
            value={experience}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {[...Array(10)].map((_, i) => (
              <option key={i} value={`${i + 1} Year`}>
                {i + 1} Year
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Fees</label>
          <input
            onChange={(e) => setFees(e.target.value)}
            value={fees}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="number"
            placeholder="Enter fees"
            required
          />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full lg:flex-1 flex flex-col gap-5">
        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Speciality</label>
          <select
            onChange={(e) => setSpeciality(e.target.value)}
            value={speciality}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            <option value="General physician">General physician</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Pediatricians">Pediatricians</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Gastroenterologist">Gastroenterologist</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Education</label>
          <input
            onChange={(e) => setDegree(e.target.value)}
            value={degree}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            placeholder="e.g. MBBS, MD"
            required
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm font-medium">Address</label>
          <input
            onChange={(e) => setAddress1(e.target.value)}
            value={address1}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            placeholder="Address line 1"
            required
          />
          <input
            onChange={(e) => setAddress2(e.target.value)}
            value={address2}
            className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            type="text"
            placeholder="Address line 2"
            required
          />
        </div>
      </div>
    </div>

    {/* About Doctor */}
    <div className="mt-6">
      <label className="text-sm font-medium">About Doctor</label>
      <textarea
        onChange={(e) => setAbout(e.target.value)}
        value={about}
        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
        placeholder="Write about doctor"
        rows={5}
        required
      />
    </div>

    {/* Submit */}
    <button
      type="submit"
      className="bg-blue-600 hover:bg-blue-700 px-10 py-3 mt-6 text-white font-medium rounded-full shadow-md transition cursor-pointer"
    >
      Add Doctor
    </button>


 
  </div>
</form>
    )
}

export default AddDoctor
