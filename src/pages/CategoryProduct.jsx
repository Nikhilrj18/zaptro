import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Loading from '../assets/loading.gif'
import { ChevronLeft } from 'lucide-react'
import ProductListView from './ProductListView'
import axios from 'axios'

const CategoryProduct = () => {
      const navigate = useNavigate();
    const [searchData, setsearchData] = useState([])
    const  params = useParams()
    const category = params.category
        console.log(category)

        const getFilteredData = async()=>{
            try {
                const res = await axios.get(`https://dummyjson.com/products/category/${category}`)
               const data = res.data.products
               setsearchData(data)
            } catch (error) {
                console.log(error)
            }   
        }
        useEffect(()=>{
            getFilteredData()
            window.scrollTo(0,0)
        },[])
  return (
    <div>
        {
            searchData.length > 0 ? (
                <div className='max-w-6xl mx-auto mt-10 mb-10 px-10'>
<button onClick={() => navigate(`/`)} className='bg-gray-800 text-white px-3 py-1 rounded-md cursor-pointer flex gap-1 items-center'><ChevronLeft /> Back</button>
               {
                searchData.map((product, index)=>{
                    return <ProductListView key={index} product={product} />
                })
               }
                </div>
            ) : (
                <div className='flex items-center justify-center h-[400px]'>
                    <img alt='loading' src={Loading} className='h-20 w-20'/>
                     
                     </div>
            )
        }
    </div>
  )
}

export default CategoryProduct