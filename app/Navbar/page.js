'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
    

  const [state, setState] = useState(false)
  const [active, setActive] = useState('Home')

  // Replace javascript:void(0) path with your path
  const navigation = [
      { title: "Home", path: "/" },
      { title: "Tech", path: "/Tech" },
      { title: "Auto", path: "/Auto" },
  ]
  const icon = {
    hidden: {
      pathLength: 0,
      fill: "rgba(255, 255, 255, 0)"
    },
    visible: {
      pathLength: 1,
      fill: "rgba(255, 255, 255, 1)"
    }
  }
    
  return (
      <nav className="bg-black text-white w-full border-white shadow-md md:border-b-2 md:border-0  md:fixed z-10">
          <div className="items-center px-4 max-w-screen-xl ml-8 md:flex md:px-8">
              <div className="flex items-center justify-between py-3 md:py-5 md:block">
                    <Link href="/">
                        
                        <Image
                        src='/Logoo.png'
                            width={120} 
                            height={50}
                            alt="TechByte"
                        />
                    </Link>
                  <div className="md:hidden">
                      <button className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
                          onClick={() => setState(!state)}
                      >
                          {
                              state ? (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 20 20" fill="currentColor">
                                      <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                  </svg>
                              ) : (
                                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8h16M4 16h16" />
                                  </svg>
                              )
                          }
                      </button>
                  </div>
              </div>
              <div className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${ state ? 'block' : 'hidden'} `}>
                  <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
                      {
                          navigation.map((item, idx) => {
                              return (
                                <li key={idx} className={`text-xl hover:cursor-pointer font-lg hover:text-red-600 ${active === item.title ? 'text-red-400' : 'text-gray-400'}`}>
                                    <Link href={item.path} onClick={()=>{setActive(item.title)}}>
                                        { item.title }
                                    </Link>
                                </li>
                              )
                          })
                      }
                  </ul>
              </div>
    
          </div>
      </nav>
  )
}