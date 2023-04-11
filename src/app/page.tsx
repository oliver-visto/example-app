import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className='h-screen bg-white p-24 justify-items-center items-center space-y-10'>
      <div className='flex m-auto items-center'>
        <div className='justify-items-start'>
          <h1 className='text-[#7A7A7B] text-2xl'>Product Inventory</h1>
        </div>
        
        <div className='ml-auto bg-[#5690FF] py-2 px-6 rounded-full'>
          <button className='text-white bg-blue align-middle'>+ ADD PRODUCT</button>
        </div>
        
      </div>

      <div>
        <div className='flex space-x-4'>
          <div className='border-r-2 pr-8'>
            <h2 className='text-[#9A9B9C]'>Total Products </h2>
            <h2 className='text-lg text-blue-500 font-bold'>75</h2>
          </div>
          <div className='border-r-2 px-8'>
            <h2 className='text-[#9A9B9C]'> Out of stock </h2>
            <h2 className='text-lg text-blue-500 font-bold'>2</h2>
          </div>
          <div className='border-r-2 px-8'>
            <h2 className='text-[#9A9B9C]'>Total items </h2>
            <h2 className='text-lg text-blue-500 font-bold'>42</h2>
          </div>
          <div className='pl-8'>
            <h2 className='text-[#9A9B9C]'>Categories </h2>
            <h2 className='text-lg text-blue-500 font-bold'>12</h2>
          </div>
        </div>
      </div>

      <div className='flex m-auto'>
        <div className='flex'>
          <h3 className='text-[#9A9B9C]'>Category:</h3>
          <h3 className='text-blue-500 px-4'>All</h3>
        </div>
        <div className='flex'>
          <h3 className='text-[#9A9B9C]'>Material:</h3>
          <h3 className='text-blue-500 px-4'>All</h3>
        </div>

        <div className='ml-auto align-baseline flex'>
          <h3 className='text-[#9A9B9C]'>Sort by:</h3>
          <h3 className='text-blue-500 px-4'>Newest</h3>
        </div>
      </div>

      <div>
        <div className='flex'>
          <li className='text-black list-none'>Product Name</li>
          <li className='text-black list-none'>Material</li>
          <li className='text-black list-none'>Category</li>
          <li className='text-black list-none'>Price</li>
          <li className='text-black list-none'>Inventory</li>
          <li className='text-black list-none'>Date Added</li>
        </div>

        <div className='flex'>
        <li className='text-black list-none'>Pearl Earring</li>
          <li className='text-black list-none'>Pearl & Gold-plated</li>
          <li className='text-black list-none'>Category</li>
          <li className='text-black list-none'>Price</li>
          <li className='text-black list-none'>Inventory</li>
          <li className='text-black list-none'>Date Added</li>
        </div>
        <div className='flex'>
          <li className='text-black list-none'>Pearl Earring</li>
          <li className='text-black list-none'>Pearl & Gold-plated</li>
          <li className='text-black list-none'>Category</li>
          <li className='text-black list-none'>Price</li>
          <li className='text-black list-none'>Inventory</li>
          <li className='text-black list-none'>Date Added</li>
        </div>
        <div className='flex'>
          <li className='text-black list-none'>Pearl Earring</li>
          <li className='text-black list-none'>Pearl & Gold-plated</li>
          <li className='text-black list-none'>Category</li>
          <li className='text-black list-none'>Price</li>
          <li className='text-black list-none'>Inventory</li>
          <li className='text-black list-none'>Date Added</li>
        </div>
        <div className='flex'>
          <li className='text-black list-none'>Pearl Earring</li>
          <li className='text-black list-none'>Pearl & Gold-plated</li>
          <li className='text-black list-none'>Category</li>
          <li className='text-black list-none'>Price</li>
          <li className='text-black list-none'>Inventory</li>
          <li className='text-black list-none'>Date Added</li>
        </div>
        <div className='flex'>
          <li className='text-black list-none'>Pearl Earring</li>
          <li className='text-black list-none'>Pearl & Gold-plated</li>
          <li className='text-black list-none'>Category</li>
          <li className='text-black list-none'>Price</li>
          <li className='text-black list-none'>Inventory</li>
          <li className='text-black list-none'>Date Added</li>
        </div>
      </div>



    </main>
  )
}
