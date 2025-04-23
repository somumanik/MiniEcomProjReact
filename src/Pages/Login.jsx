import React from 'react'
import { FaFacebook, FaGoogle } from 'react-icons/fa'

export default function Login() {
  return (
    <div>
    <section className='max-w-[1170px] mx-auto flex justify-center items-center shadow-2xl  '>
        <div className='w-[50%] flex justify-center items-center fixed top-[40%] translate-y-[-40%] left-[50%] translate-x-[-50%] h-[80%] shadow-2xl'>
            <div className='basis-[40%] border-[1px] border-[#ccc] py-12 bg-[#3B82F6]'>
                <p className='text-center pt-10 text-[#fff] text-[35px] cursor-pointer font-bold'>K-WD</p>
                <p className='p-6 text-center text-[#fff]'>With the power of K-WD, you can now focus only on functionaries for your digital products, while leaving the UI design on us!</p>
                <p className='text-center pt-5 text-[#fff] text-[18px] cursor-pointer'>Don't have an account?</p>
                <p className='text-center pt-1 text-[#fff] text-[15px] cursor-pointer'><a href="">Get Started!</a></p>
                <p className='text-center p-5 pb-8 text-[#fff] text-[15px] cursor-pointer'>Read our <a href=""> terms </a> and <a href="">conditions</a></p>
            </div>
            <div className='basis-[60%] border-[1px] border-[#ccc] py-10 p-3'>
                <p className=' text-[24px]'>Account Login</p>
                {/*  */}

                <form class="mb-4" action="/" method="post">
                    <div class="mb-4 md:w-full">
                        <label for="email" class="block text-xs mb-1">Username or Email</label>
                        <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="email" name="email" id="email" placeholder="Username or Email" />
                    </div>
                    <div class="mb-6 md:w-full">
                        <label for="password" class="block text-xs mb-1">Password</label>
                        <input class="w-full border rounded p-2 outline-none focus:shadow-outline" type="password" name="password" id="password" placeholder="Password" />
                    </div>
                    <button class="bg-blue-600 md:w-full mt-3 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login  </button>
                    <div className='flex justify-center items-center gap-2'>
                        <div className='w-[50px] border-[1px] my-5'></div><p>or login with</p>  <div className='w-[50px] border-[1px] my-5'></div>
                    </div>
                    <div className='relative'>
                        <button class="bg-green-500 md:w-full mt-3  hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">   Login With Google</button><FaGoogle className='absolute top-[20px] text-white mt-1 left-[110px]  text-[15px]' />
                    </div>
                    <div className='relative'>
                        <button class="bg-green-500 md:w-full mt-3 hover:bg-green-700 text-white uppercase text-sm font-semibold px-4 py-2 rounded">Login with Facebook</button> <FaFacebook className='absolute top-[20px] text-white mt-1 left-[110px]  text-[15px]' />
                    </div>
                </form>



                {/*  */}
            </div>
        </div>
    </section>
</div>
  )
}
