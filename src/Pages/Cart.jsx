import React from 'react'
import Footer from '../Common/Footer'

export default function Cart() {
  return (

    <>
      <div className='max-w-full'>
        <div class="w-full my-10">
          <div class="grid lg:grid-cols-[75%_auto] gap-4">
            <div class="w-[95%] mx-auto" id="shppingCart">
              <div class=" flex justify-between cartHeading">
                <h4 class="font-semibold lg:text-2xl">Shopping Cart</h4>
                <p class="font-semibold lg:text-2xl">0 Items</p>
              </div>
              <hr class="bg-[#ccc] h-px border-0 my-5" />
              <div class=" flex items-center justify-between lg:gap-0 gap-2 productDetails">
                <p class="text-gray-1000 lg:basis-[40%]  basis-[40%] uppercase lg:text-xs sm:text-xs text-[10px] font-semibold">Product Details</p>
                <p class="text-gray-1000 lg:basis-[20%] uppercase lg:text-xs sm:text-xs text-[10px] font-semibold">Quantity</p>
                <p class="text-gray-1000 lg:basis-[20%] uppercase lg:text-xs sm:text-xs text-[10px] font-semibold">Price</p>
                <p class="text-gray-1000 lg:basis-[20%] uppercase lg:text-xs sm:text-xs text-[10px] font-semibold">total</p>
              </div>
              <div class="my-8 flex  gap-1 items-center">
                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" class="text-xl text-indigo-600 font-bold" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                  <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="48" d="M244 400 100 256l144-144M120 256h292">
                  </path>
                </svg>
                <p class="text-indigo-600 font-bold text-sm">Continue Shopping</p>
              </div>
            </div>
            <div class="w-[95%] mx-auto" id="orderSummary">
              <h4 class="font-semibold lg:text-2xl">Order Summary</h4>
              <hr class="bg-[#ccc] h-px border-0 my-5" />
              <div class=" flex w-[95%] mx-auto items-center justify-between" />
              <p class=" font-semibold uppercase ">Items 0</p>
              <p class=" font-semibold uppercase ">Rs.0</p>

              <form action="">
                <p class="py-5 px-2 uppercase font-semibold text-sm">Shipping</p>
                <select name="" id="" class="w-[95%]  p-2">
                  <option value="Standerd">Standerd Shipping-Rs.100</option>
                </select>
                <div class="mt-12 px-2" id="promocCode">
                  <p class="uppercase font-semibold pb-2">Promo Code</p>
                  <input class="w-full p-2 text-sm" placeholder="Enter Your Code" type="text" />
                  <button class="text-white bg-red-500 py-2 px-5 my-8 cursor-pointer text-sm">Apply</button>
                  <hr class="bg-[#ccc] h-px border-0" />
                  <div class="flex w-[95%] mx-auto justify-between my-5">
                    <p class="uppercase font-semibold text-sm">Total cost</p>
                    <p class="uppercase font-semibold text-sm">rs.0</p>
                  </div>
                  <button class="text-white w-[95%] block mx-auto uppercase bg-indigo-500 p-2">checkout</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer/>
    </>

  )
}
