import React from 'react'
import Card from '../Components/Card'
import useFetch from '../Hooks/useFetch'

function Products() {
  const [loading, error, data] = useFetch('https://dummyjson.com/products')

  if (loading) {
    return <div className="flex flex-col justify-center items-center h-screen space-y-4">
    <span className="loading loading-spinner loading-lg text-blue-600"></span>
    <p className="text-xl font-semibold text-gray-600">Loading...</p>
  </div>
  }

  if (error){
    <div role="alert" className="flex h-[90vh] justify-center items-center alert alert-error alert-soft">
  <span>Error! Task failed successfully.</span>
</div>
  }


  return (
    <div className='flex justify-center items-center gap-5 flex-wrap my-14'>
      {data.products.map(item => {
        return <Card key={item.id} title={item.title} description={item.description} image={item.thumbnail} id={item.id} />
      })}
    </div>
  )
}

export default Products

