import React, { useContext, useEffect, useState } from 'react'
import Footer from '../Common/Footer'
import { counterContext } from '../Common/MaiContext'
import { toast, ToastContainer } from 'react-toastify'

export default function Cart() {
  let { cart } = useContext(counterContext)
  // let { id } = cart

  // let removeCarts = () => {
  //   let finalRemoveCart = cart.filter((item) => item.id != id)
  //   setCart(finalRemoveCart)
  //   toast.error("Your Items is Removed")
  // }


  return (
    <>

      <div className="max-w-full mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6">Your Shopping Cart</h2>
        <div className="grid grid-cols-1 lg:grid-cols-[70%_30%] gap-6">

          <div className="bg-white border border-gray-200 shadow rounded-lg overflow-x-auto">
            <table className="min-w-full text-sm text-left">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-3">Image</th>
                  <th className="px-4 py-3">Product</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Quantity</th>
                  <th className="px-4 py-3">Total</th>
                  <th className="px-4 py-3">Action</th>
                </tr>
              </thead>
              <tbody>

                {
                  cart.map((item, index) => (

                    // < CartRowData cartrowdata={item} key={index.id} />

                    < CartRow cartrowdata={item} key={index.id} />
                  ))
                }

              </tbody>
            </table>
          </div>


          <div className="bg-white border border-gray-200 shadow rounded-lg p-6 h-fit">
            <h3 className="text-xl font-semibold mb-4">Summary</h3>
            <div className="flex justify-between mb-2">
              <span>Subtotal</span>
              <span>$100</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Shipping</span>
              <span>$10</span>
            </div>
            <hr className="my-3" />
            <div className="flex justify-between text-lg font-bold">
              <span>Total</span>
              <span>$110</span>
            </div>
            <button className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
              Proceed to Checkout
            </button>
          </div>
          <ToastContainer />
        </div>
      </div>


      <Footer />
    </>
  )
}

function CartRowData({ cartrowdata }) {
  let { id, image, name, price, qty } = cartrowdata
  let { cart, setCart } = useContext(counterContext)

  // Quantity ko Update karne ke liye Code
  let [currentQty, setCurrentQty] = useState(qty)

  let addcurrentQty = (e) => {
    // console.log( e.target.value)
    setCurrentQty(Number(e.target.value))
  }

  // cart ke row ko Remove karne ke liye
  let removeCarts = () => {
    let finalRemoveCart = cart.filter((item) => item.id != id)
    setCart(finalRemoveCart)
    toast.error("Your Items is Removed")
  }

  // quantity ko update ke saath saath cart mein bhi ise add karke dikhana hoga, cart kaunsa jo uper header mein cart() hai isme....

  useEffect(() => {
    let finalCart = cart.filter((items) => {
      if (items.id == id) {
        items['qty'] = currentQty
      }
      return items
    })
    setCart(finalCart)

  }, [currentQty])


  return (
    <tr className="border-t">
      <td className="px-4 py-4">
        <img src={image} alt="Product" className="w-14 h-14 rounded object-cover" />
      </td>
      <td className="px-4 py-4">{name}</td>
      <td className="px-4 py-4">{price}</td>
      <td className="px-4 py-4">
        {/* <div className="flex s-center gap-2 w-[10px]">
         <button className="w-7 h-7 bg-gray-200 rounded cursor-pointer">-</button>
            <span>{currentQty}</span>
          <button onClick={addcurrentQty} className="w-7 h-7 bg-gray-200 rounded cursor-pointer">+</button> 
        </div> */}
        <input type="number" min={1} max={10} value={currentQty} onChange={addcurrentQty} className='outline-1 rounded-xm w-[40px]' />
      </td>
      <td className="px-4 py-4">{price * qty}</td>
      <td className="px-4 py-4">
        <button onClick={removeCarts} className="text-red-500 hover:underline cursor-pointer">Remove </button>
      </td>
    </tr>
  )
}



// Plus Minus Table Function

function CartRow({ cartrowdata }) {
  let { id, image, name, price, qty } = cartrowdata
  let { cart, setCart } = useContext(counterContext)


  // Quantity ko Update karne ke liye Code
  let [currentQty, setCurrentQty] = useState(qty)

  // quantity ko update ke saath saath cart mein bhi ise add karke dikhana hoga, cart kaunsa jo uper header mein cart() hai isme....

  useEffect(() => {
    let finalCart = cart.filter((items) => {
      if (items.id == id) {
        items['qty'] = currentQty
      }
      return items
    })
    setCart(finalCart)

  }, [currentQty])


  const increaseQty = () => {
    if (currentQty < 10) {
      setCurrentQty((prev )=> prev + 1);
    }
  };

  const decreaseQty = () => {
    if (qty > 1) {
      if (currentQty > 1) {
        setCurrentQty((prev) => prev - 1);
      }
    }
  };

  const removeCarts = () => {
    const finalRemoveCart = cart.filter((item) => item.id !== id);
    setCart(finalRemoveCart);
    toast.error("Item removed");
  };



  return (
    <tr className="border-t">
      <td className="px-4 py-4">
        <img src={image} alt="Product" className="w-14 h-14 rounded object-cover" />
      </td>
      <td className="px-4 py-4">{name}</td>
      <td className="px-4 py-4">${price}</td>
      <td className="px-4 py-4">
        <div className="flex items-center gap-2">
          <button
            onClick={decreaseQty}
            className="w-7 h-7 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
          >
            -
          </button>
          <span>{qty}</span>
          <button
            onClick={increaseQty}
            className="w-7 h-7 bg-gray-200 rounded cursor-pointer hover:bg-gray-300"
          >
            +
          </button>
        </div>
      </td>
      <td className="px-4 py-4">${price * qty}</td>
      <td className="px-4 py-4">
        <button
          onClick={removeCarts}
          className="text-red-500 hover:underline cursor-pointer"
        >
          Remove
        </button>
      </td>
    </tr>
  )
}