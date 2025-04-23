import React from 'react'

export default function Register() {
  return (
    <div>
            <section className='max-w-[1320px] mx-auto   mt-3'>
                <div className='w-[50%] mx-auto shadow-xl'>
                    <h1 className='p-3 shadow'> Register for a free account</h1>
                    <div class="py-6 px-8">
                        <label class="block font-semibold">Username or Email</label>
                        <input type="text" placeholder="Email" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" />
                        <label class="block mt-3 font-semibold">Password</label>
                        <input type="password" placeholder="Password" class=" border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-1 focus:ring-indigo-600 rounded-md" />
                        <div class="flex justify-between items-baseline">
                            <button class="mt-4 bg-indigo-500 text-white py-2 px-6 rounded-lg hover:bg-indigo-600">Login</button>
                            <a href="#" class="text-sm hover:underline">Forgot password?</a>
                        </div>
                    </div>
                </div>

            </section >
        </div>
  )
}
