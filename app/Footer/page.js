import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
<>

<footer className="bg-black text-white my-0 w-full shadow my-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            {/* <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0">
                <img src="./Logo.png" className="h-8 mr-3" alt="Flowbite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a> */}
         
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-300 sm:text-center dark:text-gray-400">© 2023 <a href="https://flowbite.com/" className="hover:underline">TechByte™</a>. All Rights Reserved.</span>
    </div>
</footer>


</>  )
}

export default Footer