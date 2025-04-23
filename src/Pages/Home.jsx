
import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { FaArrowRight, FaRegStar } from 'react-icons/fa'
import Footer from '../Common/Footer'
import { counterContext } from '../Common/MaiContext'
import ResponsivePagination from 'react-responsive-pagination';


export default function Home() {
    // isme hum contextapi ko call kr rhe hai add button ke liye
    let { count, setCount } = useContext(counterContext)

    let [homeproduct, setHomeproduct] = useState([])
    // Loading ke liye state start
    let [isloadinghome, setIsLoadinghome] = useState(false)


    // Pagination ke liye codeing
    let [totalPages, setTotalPage] = useState([null])
    let [currentPage, setCurrentPage] = useState(1)



    let getHomepro = () => {
        // setIsLoadinghome(true)

        axios.get('https://wscubetech.co/ecommerce-api/products.php',
            {
                params: {
                    page: currentPage,
                    limit: 8,
                    categories: '',
                    brands: '',
                    price_from: '',
                    price_to: '',
                    discount_from: '',
                    discount_to: '',
                    rating: '',
                    sorting: 4

                }
            })
            .then((res) => {
                return res.data
            }).then((finalres) => {
                // console.log(finalres)
                setHomeproduct(finalres.data)
                setTotalPage(finalres.total_pages)
                setIsLoadinghome(false)
            })
    }

    useEffect(() => {
        getHomepro()
    }, [currentPage])


    return (

        <div>
            <section className='w-[100%]  border-[1px] border-[#ccc] bg-gray-100'>
                <div className='max-w-[1370px] mx-auto flex lg:flex-row md:flex-row flex-col-reverse'>
                    <div className='basis-[55%] bg-black lg:pt-[50px]'>
                        <h1 className='lg:text-6xl md:text-5xl text-3xl font-bold text-white p-[50px_25px_5px_50px] lg:mb-4'>The experience makes all the difference.</h1>
                        <p className='lg:text-xl text-[16px] font-bold text-white p-[10px_25px_5px_50px]'>From checkout to global sales tax compliance, companies around the world use Flowbite to simplify their payment stack.</p>
                        <div className='flex gap-4 ps-12 py-4'>
                            <div className='relative '>
                                <button className='bg-red-500 p-[12px_29px_12px_20px] rounded-[8px] text-white'>Get Started </button>
                                <FaArrowRight className='absolute top-[13px] text-white mt-1 left-[105px]  text-[15px]' />
                            </div>

                            <button className='border-1 p-[10px_20px] rounded-[8px]'>Offers</button>
                        </div>
                    </div>

                    <div className='basis-[45%] bg-black p-4 pt-[50px]'>
                        <img src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/hero/phone-mockup.png" alt="" />
                    </div>
                </div>

                <p className='max-w-[1370px] mx-auto lg:text-5xl text-2xl lg:pt-12 pt-8 lg:pb-6 text-center'>Shop By Category</p>
                <div className='max-w-[1370px] mx-auto grid lg:grid-cols-3 my-8 gap-2 '>

                    <div>
                        <img className='w-[100%] h-[675px]' src="https://i.ibb.co/ThPFmzv/omid-armin-m-VSb6-PFk-VXw-unsplash-1-1.png" alt="" />
                    </div>
                    <div >
                        <img className='mb-2' src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="" />
                        <img src="https://i.ibb.co/SXZvYHs/irene-kredenets-DDqx-X0-7v-KE-unsplash-1.png" alt="" />
                    </div>
                    <div>
                        <img className='w-[100%] h-[675px]' src="https://i.ibb.co/PTtRBLL/olive-tatiane-Im-Ez-F9-B91-Mk-unsplash-1.png" alt="" />
                    </div>
                </div>

                <p className='max-w-[1370px] mx-auto lg:text-5xl text-2xl lg:pt-12 pt-8 lg:pb-6 text-center shadow-xl mb-7 bg-white'>Get difference Product</p>



                <div className='shadow mb-5' >
                    <div className='bg-gray-50 grid lg:grid-cols-5 grid-cols-1 gap-5'>
                        {

                            isloadinghome
                                ?
                                <>
                                    {/* <!-- Edge X Ring Spinner s1 --> */}
                                    {/* <div className="mx-auto w-12 h-12 rounded-full animate-spin
                                    border-x border-solid border-yellow-500 border-t-transparent">

                                </div> */}
                                    <div className='mx-auto '>
                                        <div className="w-12 h-12 rounded-full animate-spin
                                    border-x-8 border-solid border-purple-500 border-t-transparent">

                                        </div>
                                        <p>Loading.....</p>
                                    </div>


                                    {/* <!-- Edge X Ring Spinner s2 --> */}
                                    {/* <div className="mx-auto w-12 h-12 rounded-full animate-spin
                                    border-x-2 border-solid border-blue-500 border-t-transparent">
                                </div> */}
                                    <div className='mx-auto '>
                                        <div className="w-12 h-12 rounded-full animate-spin
                                    border-x-8 border-solid border-purple-500 border-t-transparent">

                                        </div>
                                        <p>Loading.....</p>
                                    </div>

                                    {/* <!-- Edge X Ring Spinner s4 --> */}
                                    {/* <div className="mx-auto w-12 h-12 rounded-full animate-spin
                                    border-x-4 border-solid border-green-500 border-t-transparent">

                                </div> */}
                                    <div className='mx-auto '>
                                        <div className=" w-12 h-12 rounded-full animate-spin
                                    border-x-8 border-solid border-purple-500 border-t-transparent">

                                        </div>
                                        <p>Loading.....</p>
                                    </div>

                                    {/* <!-- Edge X Ring Spinner s8 --> */}
                                    <div className='mx-auto '>
                                        <div className=" w-12 h-12 rounded-full animate-spin
                                    border-x-8 border-solid border-purple-500 border-t-transparent">

                                        </div>
                                        <p>Loading.....</p>
                                    </div>
                                </>
                                :
                                homeproduct && homeproduct.map((items, index) => {
                                    return (
                                        <ProductItems pdata={items} key={index} />
                                    )
                                }
                                )}

                    </div>
                    <ResponsivePagination
                        current={currentPage}
                        total={totalPages}
                        onPageChange={setCurrentPage}
                    />
                </div>
            </section>
            <Footer />
        </div>
    )
}

function ProductItems({ pdata }) {
    let { name, description, image, discount_percentage, rating, price } = pdata

    return (

        <div className='shadow bg-white border-[1px] '>
            <img width={230} className='text-center mx-6' src={image} alt="" />
            <div className='p-3'>
                <p className='text-[19px] font-bold'>{name}</p>
                <p>Rs {price}</p>
                <p className='mb-5 mt-2 text-red-400'>Discount  {discount_percentage}%</p>
                <div className='flex justify-between'>
                    <div className='flex'>

                        <FaRegStar className='text-yellow-500' />
                        <FaRegStar className='text-yellow-500' />
                        <FaRegStar className='text-yellow-500' />
                        <FaRegStar className='text-yellow-500' />
                        <FaRegStar className='text-yellow-500' />

                    </div>
                    <button onClick={() => setCount(count + 1)} className='bg-green-700 text-white p-[5px_16px] rounded-xl'>ADD</button>
                </div>
            </div>
        </div>

    )
}

