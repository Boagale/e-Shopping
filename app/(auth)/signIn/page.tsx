import Header from '@/components/header'
import Link from 'next/link'
import React from 'react'
import googleIcon from '@/public/assets/googleicon.png';
import Image from 'next/image';

const page = () => {
  return (
    <div className="bg-[url('./../public/assets/e-comersbg-image.png')] bg-cover bg-center h-screen flex items-center justify-center">
    <Header displayAuthNav={false} />
    <main className=' bg-neutral-300 rounded-t-md'>
      <h1 className='text-xl px-4 pt-4 font-semibold text-center text-slate-500'>Login to bogi e-Shopping</h1>
      <form action="">
          <div className="space-y-4 m-4 ">
          <label className="input input-bordered flex items-center gap-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
              d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path
              d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
          </svg>
          <input type="text" className="grow" placeholder="Email" />
          </label>
          
          <label className="input input-bordered flex items-center gap-2">
          <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="h-4 w-4 opacity-70">
              <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd" />
          </svg>
          <input type="password" className="grow" placeholder="Enter password" />
          </label>
          <button className="btn w-full btn-outline btn-success">Register</button>
          </div>
          <p className='text-xs text-slate-500 mt-4 text-center'>
              have not an account? 
              <Link type='submit' className='text-indigo-500 underline text-sm px-2' href={'/signUp'}>
                  Register
              </Link>
          </p>
          <div className="p-4">
              <Link href={''}>
                  <button className="btn w-full my-2 glass text-sm text-slate-500">
                      <Image height={16} src={googleIcon} alt="" />
                      Google Sign In
                  </button>
              </Link>
           </div>
      </form>
    </main>
    <footer className="footer absolute bottom-0 left-0 w-full footer-center bg-base-300 text-base-content p-4">
    <aside>
      <p>Copyright © {new Date().getFullYear()} - All right reserved by bogi e-Shopping</p>
    </aside>
  </footer>
  </div>
  )
}

export default page