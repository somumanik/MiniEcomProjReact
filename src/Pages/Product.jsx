import React, { useEffect, useState } from 'react'
// import Productitems from '../Data/Productitems'
import axios from 'axios'
import { FiChevronDown } from 'react-icons/fi'
import { menuitem } from '../Data/DropMenu'
import Footer from '../Common/Footer'
import ResponsivePagination from 'react-responsive-pagination';
import 'react-responsive-pagination/themes/classic.css';
import { useContext } from 'react'
import { counterContext } from '../Common/MaiContext'
import { toast, ToastContainer } from 'react-toastify'


export default function Product() {
    // Category
    let [category, setCategory] = useState([])
    let getcategory = () => {
        axios.get('https://wscubetech.co/ecommerce-api/categories.php')
            .then((res) => res.data)
            .then((finalRes) => {

                setCategory(finalRes.data)
            })
    }



    // Brand
    let [brand, setBrand] = useState([])
    let getbrand = () => {
        axios.get('https://wscubetech.co/ecommerce-api/brands.php')
            .then((res) => res.data)
            .then((finalRes) => {

                setBrand(finalRes.data)
            })
    }

    //DropDown Menu
    let [dropdwn, setDropdwn] = useState(false)

    // DropDown Value Sort By: Recommended
    let [dropdownvalue, setDropDownValue] = useState('Sort By: Recommended')


    // Loading ke liye state start
    let [isloading, setIsLoading] = useState(false)


    // Sorting ke liye state
    let [sorting, setSorting] = useState(null)

    // Filters ke liye state banayenge ab
    let [categoryfilter, setCategoryfilter] = useState([])
    let [brandfilter, setBrandfilter] = useState([])
    let [pricefilter, setPricefilter] = useState([null, null])
    let [discountfilter, setDiscountfilter] = useState([null, null])
    let [ratingfilter, setRatingfilter] = useState([])


    // Pagination ke liye
    let [totalPages, setTotalPage] = useState([null])
    let [currentPage, setCurrentPage] = useState(1)




    let getmyCategory = (event) => {
        if (event.target.checked) {
            if (!categoryfilter.includes(event.target.value)) {
                setCategoryfilter([...categoryfilter, event.target.value])
            }
        }
        else {
            let finalData = categoryfilter.filter((v) => v != event.target.value)
            setCategoryfilter(finalData)
        }
        // if(!categoryfilter.includes(event.target.value))
        // {

        // }
        // console.log(event.target.value)
    }
    let getmyBrand = (event) => {
        if (event.target.checked) {
            if (!brandfilter.includes(event.target.value)) {
                setBrandfilter([...brandfilter, event.target.value])
            }
        }
        else {
            let finalData = brandfilter.filter((v) => v != event.target.value)
            setBrandfilter(finalData)
        }
    
    }



    // Product
    let [getproduct, setGetproduct] = useState([])


    let getProduct = () => {
        // setIsLoading ko true karenge
        setIsLoading(true)

        axios.get('https://wscubetech.co/ecommerce-api/products.php', {
            params: {
                page: currentPage,
                limit: 8,
                categories: categoryfilter.join(','),
                brands: brandfilter.join(','),
                price_from: pricefilter[0],
                price_to: pricefilter[1],
                discount_from: discountfilter[0],
                discount_to: discountfilter[1],
                rating: ratingfilter,
                sorting: sorting

            }
        })
            .then((res) => res.data)
            .then((finalRes) => {
                // console.log(finalRes.data)
                setGetproduct(finalRes.data)
                setTotalPage(finalRes.total_pages)

                //Product load hone ke baad setIsLoading ko false karenge
                setIsLoading(false)
            })
    }


    useEffect(() => {
        getcategory()
        getbrand()
    }, [])

    useEffect(() => {
        getProduct()
    }, [sorting, categoryfilter, brandfilter, discountfilter, pricefilter, ratingfilter, currentPage])


    return (
        <div>

            <div className='grid lg:grid-cols-[20%_auto] grid-cols-1 gap-5 my-5'>
                <div className='border-[1px] border-[#ccc]'>
                    <div className='border-[1px] border-[#ccc] p-3 overflow-y-scroll h-[180px]'>
                        <p className='text[18px] uppercase my-4'>categories</p>

                        <ul >

                            {
                                isloading
                                    ?
                                    <>
                                        <div className='ms-24'>
                                            <div className=" w-12 h-12 rounded-full animate-spin
                                                border-x-4 border-solid border-purple-600 border-t-transparent">

                                            </div>
                                            <p>Loading.....</p>
                                        </div>
                                    </>
                                    :
                                    category &&  category.map((items, index) => <li><input type="checkbox" value={items.slug} onChange={getmyCategory} /> {items.name} </li>)
                            }

                        </ul>
                    </div>

                    <div className='border-[1px] border-[#ccc] p-3 overflow-y-scroll h-[180px]'>
                        <p className='text[18px] uppercase my-4'>BRAND</p>

                        <ul >

                            {
                                isloading
                                    ?
                                    <>
                                        <div className='ms-24 '>
                                            <div className=" w-12 h-12 rounded-full animate-spin
                                                border-x-4 border-solid border-purple-600 border-t-transparent">

                                            </div>
                                            <p>Loading.....</p>
                                        </div>
                                    </>
                                    :
                                    brand.map((items, index) => <li><input type="checkbox" value={items.slug} onChange={getmyBrand} /> {items.name} </li>)
                            }

                        </ul>
                    </div> <div className='border-[1px] border-[#ccc] p-3 overflow-y-scroll h-[180px]'>
                        <p className='text[18px] uppercase my-4'>price</p>

                        <ul >
                            <li><input type="radio" name='price' onClick={() => setPricefilter([10, 250])} /> Rs. 10 to Rs. 250 </li>
                            <li><input type="radio" name='price' onClick={() => setPricefilter([250, 500])} /> Rs. 250 to Rs. 500 </li>
                            <li><input type="radio" name='price' onClick={() => setPricefilter([500, 1000])} /> Rs. 500 to Rs. 1000 </li>
                            <li><input type="radio" name='price' onClick={() => setPricefilter([1000, 50000])} /> Rs. 1000 to Above </li>

                        </ul>
                    </div>
                    <div className='border-[1px] border-[#ccc] p-3 overflow-y-scroll h-[180px]'>
                        <p className='text[18px] uppercase my-4'>DISCOUNT RANGE</p>

                        <ul >
                            <li><input type="radio" name='discount' onClick={() => setDiscountfilter([5, 10])} /> 5% and above</li>
                            <li><input type="radio" name='discount' onClick={() => setDiscountfilter([10, 15])} /> 10% and above</li>
                            <li><input type="radio" name='discount' onClick={() => setDiscountfilter([15, 20])} /> 15% and above </li>
                            <li><input type="radio" name='discount' onClick={() => setDiscountfilter([20, 50])} /> 20% and above </li>

                        </ul>
                    </div>
                    <div className='border-[1px] border-[#ccc] p-3 overflow-y-scroll h-[180px]'>
                        <p className='text[18px] uppercase my-4'>RATING</p>

                        <ul >
                            <li><input type="radio" name='rating' onClick={() => setRatingfilter(4)} /> 4* and above</li>
                            <li><input type="radio" name='rating' onClick={() => setRatingfilter(3)} /> 3* and above</li>
                            <li><input type="radio" name='rating' onClick={() => setRatingfilter(2)} /> 2* and above </li>
                            <li><input type="radio" name='rating' onClick={() => setRatingfilter(1)} /> 1* and above </li>

                        </ul>
                    </div>
                </div>

                <div className='border-[1px] border-[#ccc] h-[900px]'>
                    <div className='shadow-2xl border-b-2 h-[50px] '>
                        <div className='flex justify-between items-center border-[1px] p-1'>
                            <h1>Products</h1>
                            <div className='relative pe-6'>
                                <button onClick={() => setDropdwn(!dropdwn)} id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
                                  font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center
                                   dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
                                    {dropdownvalue}
                                    < FiChevronDown className='text-[18px] font-bold' />
                                </button>


                                <div id="dropdown" class={`absolute top-[100%] w-[100%] z-10 ${dropdwn ? '' : 'hidden'}  bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700`}>

                                    <ul class="py-2  text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefaultButton">
                                        {
                                            menuitem.map((value, index) => {
                                                let { id, title } = value
                                                return (
                                                    <li className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600
                                                     dark:hover:text-white" onClick={() => {
                                                            setDropdwn(false)
                                                            setDropDownValue(title)
                                                            setSorting(id)
                                                            key = { index }
                                                        }}>
                                                        {title}
                                                    </li>
                                                )
                                            })
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className='shadow-2xl mb-3 p-2 bg-gray-50 grid lg:grid-cols-4 grid-cols-1 gap-5'>

                                {
                                    isloading
                                        ?
                                        <>
                                            {/* <!-- Edge X Ring Spinner s1 --> */}
                                            {/* <div className="mx-auto w-12 h-12 rounded-full animate-spin
                                                border-x border-solid border-yellow-500 border-t-transparent">

                                            </div> */}
                                            <div className='mx-auto '>
                                                <div className="w-12 h-12 rounded-full animate-spin
                                                border-x-4 border-solid border-purple-600 border-t-transparent">

                                                </div>
                                                <p>Loading.....</p>
                                            </div>


                                            {/* <!-- Edge X Ring Spinner s2 --> */}
                                            {/* <div className="mx-auto w-12 h-12 rounded-full animate-spin
                                                border-x-2 border-solid border-blue-500 border-t-transparent">
                                            </div> */}
                                            <div className='mx-auto '>
                                                <div className="w-12 h-12 rounded-full animate-spin
                                                border-x-4 border-solid border-purple-600 border-t-transparent">

                                                </div>
                                                <p>Loading.....</p>
                                            </div>

                                            {/* <!-- Edge X Ring Spinner s4 --> */}
                                            {/* <div className="mx-auto w-12 h-12 rounded-full animate-spin
                                                border-x-4 border-solid border-green-500 border-t-transparent">

                                            </div> */}
                                            <div className='mx-auto '>
                                                <div className=" w-12 h-12 rounded-full animate-spin
                                                border-x-4 border-solid border-purple-600 border-t-transparent">

                                                </div>
                                                <p>Loading.....</p>
                                            </div>

                                            {/* <!-- Edge X Ring Spinner s8 --> */}
                                            <div className='mx-auto '>
                                                <div className=" w-12 h-12 rounded-full animate-spin
                                                border-x-4 border-solid border-purple-600 border-t-transparent">

                                                </div>
                                                <p>Loading.....</p>
                                            </div>
                                        </>

                                        :
                                        getproduct.map((items, index) => {
                                            return (
                                                <ProductItem pdata={items} key={index} />
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
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    )
}





function ProductItem({ pdata }) {
    // Cart ke liye contextApi Banana hai aur ise bhi destructure kiya hai
    let { cart, setCart } = useContext(counterContext)

    // isme product ka data ayega jise destructure kiya hai
    let { id, name, image, discount_percentage, rating, price } = pdata

    let addtoCart = () => {
        // alert('hello')
        let cartObj = {
            id,
            name,
            image,
            discount_percentage,
            rating,
            price,
            qty: 1
        }
        setCart([...cart, cartObj])
        toast.success("your itmes is Saved")

    }

 
    // console.log(cart, id)
    let checkProductinCart = cart.filter((items) => items.id == id)
    // console.log(checkProductinCart, id)



    // Remove cart ke liye code
    let removeCart = () => {
        if (confirm("Are Your Sure Deletion")) {
            let removeData = cart.filter((items) => items.id != id)
            setCart(removeData)
            toast.error("Your Itmes is Deleted")
        }
    }

    return (
        <div className='overflow-y-scroll'>
            <div className='shadow-xl bg-white border-[1px] '>
                <img width={230} height={100} className='text-center mx-6' src={image} alt="" />
                <div className='p-3'>
                    <p className='text-[19px] font-bold'>{name}</p>
                    {/* <p>{description}</p> */}
                    <div className='flex gap-1 items-center justify-between'>
                        <p className='mb-1 mt-3 text-[18px] font-bold'>Rs.{price}</p>
                        {/* <p className='mb-5 mt-3 text-light text-[11px]'> Rs.{price}</p> */}
                        <div>
                            <p className='mb-1 mt-1 text-green-600'>Discount  {discount_percentage}%</p>
                        </div>

                    </div>
                    <p className='mb-1 text-yellow-700'> (Rating{rating})</p>
                    {
                        checkProductinCart.length == 1
                            ?
                            <button onClick={removeCart} className='mt-1 p-2 text-white bg-red-700 rounded-xl cursor-pointer'>
                                Remove Cart
                            </button>
                            :
                            <button onClick={addtoCart} className='mt-1 p-2 text-white bg-green-700 rounded-xl cursor-pointer'>
                                Add to Cart
                            </button>
                    }
                    <ToastContainer />
                </div>
            </div>

        </div>
    )
}
