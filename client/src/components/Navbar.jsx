import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'
import { AppContent } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'

const Navbar = () => {

    const navigate = useNavigate()
    const {userdata, backendUrl, setUserData, setIsLoggedin} = useContext(AppContent)

    const sendVerificationOtp = async ()=>{
        try {
            axios.defaults.withCredentials = true;

            const {data} = await axios.post(backendUrl +'/api/auth/send-verify-otp')

            if(data.success){
               navigate('/email-verify')
               toast.success(data.message) 
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const logout = async ()=>{
        try {
            axios.defaults.withCredentials = true
            const {data} = await axios.post(backendUrl + '/api/auth/logout')
            data.success && setIsLoggedin(false)
            data.success && setUserData(false)
            navigate('/login')
        } catch (error) {
            toast.error(error.message)
        }
    }


  return (
    <div className='flex items-center'>
  {userdata ? (
    <div className='w-8 h-8 flex justify-center items-center rounded-full bg-black text-white relative group'>
      {userdata.name ? userdata.name[0].toUpperCase() : "U"}
      <div className='absolute hidden group-hover:block top-0 right-0 z-10 text-white rounded pt-10'>
        <ul className='list-none m-0 p-2 bg-black-300 text-sm'>
          {!userdata.isAccountVerified && (
            <li onClick={sendVerificationOtp} className='py-1 px-2 hover:bg-purple-900 cursor-pointer'>
              Verify email
            </li>
          )}
          <li onClick={logout} className='py-1 px-2 hover:bg-purple-900 cursor-pointer pr-10'>
            Logout
          </li>
          <li className='py-1 px-2 hover:bg-purple-900 cursor-pointer'>Change Characters</li>
        </ul>
      </div>
    </div>
  ) : (
    <button
      onClick={() => navigate('/login')}
      className='flex items-center gap-2 border border-purple-500 rounded-full px-6 py-2 text-white hover:bg-purple-700 transition-all'
    >
      Login <img src={assets.arrow_icon} alt="" />
    </button>
  )}
</div>

  )
}

export default Navbar
