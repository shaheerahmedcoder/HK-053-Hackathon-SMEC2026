import React from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'

const SingleProduct = () => {
  const params = useParams()
  console.log(params);
  
  const [loading, error, data] = useFetch(`https://dummyjson.com/products/${params.id}`)

  if (loading) {
    return <div className="flex flex-col justify-center items-center h-screen space-y-4">
    <span className="loading loading-spinner loading-lg text-blue-600"></span>
    <p className="text-xl font-semibold text-gray-600">Loading...</p>
  </div>
  }

  if (error) {
    return <div className='flex h-[90vh] justify-center items-center'>
      <div role="alert" className="alert alert-error">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span>Error! Task failed successfully.</span>
      </div>
    </div>
  }


  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-xl flex flex-col md:flex-row overflow-hidden min-h-[520px]">

    <div className="md:w-[45%] bg-gray-50 flex items-center justify-center p-10">
      <img
          src={data.thumbnail}
        alt="Essence Mascara"
        className="w-full h-80 object-contain"
      />
    </div>
  
    <div className="md:w-[55%] p-10 flex flex-col justify-between">
     
      <div className="space-y-4">
        <h2 className="text-3xl font-extrabold text-gray-800 leading-snug">
          {data.title}
        </h2>
        <p className="text-base text-gray-600">
          {data.description}
        </p>
   
        <div className="flex flex-wrap gap-3 mt-4">
          <span className="bg-pink-100 text-pink-600 text-xs font-semibold px-3 py-1 rounded-full">
            {data.tags[0]}
          </span>
          <span className="bg-yellow-100 text-yellow-700 text-xs font-semibold px-3 py-1 rounded-full">
            {data.availabilityStatus}
          </span>
          <span className="bg-blue-100 text-blue-600 text-xs font-semibold px-3 py-1 rounded-full">
            Rating: ⭐ {data.rating}
          </span>
        </div>
      
        <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
          <p>
            <span className="font-semibold">Brand:</span> {data.brand}
          </p>
          <p>
            <span className="font-semibold">SKU:</span> {data.sku}
          </p>
          <p>
            <span className="font-semibold">Barcode:</span> {data.meta.barcode}
          </p>
          <p>
            <span className="font-semibold">Min Order:</span>{data.minimumOrderQuantity}
          </p>
          <p>
            <span className="font-semibold">Stock Left:</span> {data.stock}
          </p>
          <p>
            <span className="font-semibold">Weight:</span> {data.weight}
          </p>
          <p>
            <span className="font-semibold">Dimensions:</span> {data.dimensions.width} x {data.dimensions.height} x {data.dimensions.depth}
          </p>
        </div>
      </div>
  
      <div className="mt-10 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
        <div>
          <p className="text-sm text-gray-400 line-through">{(data.price / (1 - (data.discountPercentage / 100))).toFixed(2)}</p>
          <p className="text-3xl font-bold text-green-600">
            {data.price} <span className="text-sm text-red-500">{data.discountPercentage}%</span>
          </p>
        </div>
        <div className="text-sm text-gray-500 text-right space-y-1">
          <p>{data.returnPolicy}</p>
          <p>{data.warrantyInformation}</p>
          <p>{data.shippingInformation}</p>
          
        </div>
      </div>
      <div className='mt-8 flex justify-center'>
  <button
    onClick={() => alert("Added to cart!")}
    className={`px-6 py-3 rounded-xl shadow-md font-semibold transition duration-200 ${
      data.availabilityStatus === "In Stock"? "bg-blue-600 text-white hover:bg-blue-700": "bg-gray-400 text-white cursor-not-allowed"
    }`}
    disabled={data.availabilityStatus !== "In Stock"}
  >
    Add to Cart
  </button>
</div>

    </div>
  </div>
</div>


  )
}

export default SingleProduct