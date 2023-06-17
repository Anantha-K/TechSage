'use client'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion';
import { groq } from 'next-sanity';
import { client } from '@/sanity-client';
import { PortableText } from '@portabletext/react';


import urlFor from '@/app/lib/UrlFor';

import Image from 'next/image';




const query = groq`*[_type == "post" && references(categories, *[_type == "category" && title == "Auto"]._id)] {

  ...,
  description,
  author->,
  categories[]->{
    Tech
  },
}|order(_createdAt desc)`




const  Page = () => {
  const [post, setPost] = useState([])
  useEffect(() => {
    const fetchposts = async()=>{
    const posts = await client.fetch(query);
    setPost(posts);
    // console.log(posts)
    console.log(post)

  }
  fetchposts()
}, [post])



  return (<>
<div className='bg-black w-full min-h-screen pt-0 md:pt-16'>

<section className="px-4 py-20 min-h-screen w-full mx-auto max-w-7xl">
 
  <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
    {post.map((blog,i)=>{


 return( <motion.div
          key={blog._id} 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.5,delay:i*0.2}}
          whileHover={{
            scale: 1.1,
            transition: { duration: 0.5,delay:0 },
          }}
        >
  <article className="overflow-hidden bg-white hover:cursor-pointer rounded-2xl shadow transition hover:shadow-lg">
    <Link href={`${blog.slug.current}`}>
  <Image
    alt="Img"
    src={urlFor(blog?.mainImage).url()}
    className="h-56 w-full object-cover"
    width={200}
    height={200}
    priority="true"
  />

  <div className=" text-black h-36 mt-0 p-4 pt-1 sm:p-6">
  <p>
 {new Date(blog._createdAt).toLocaleString("en-english",{

    day:"numeric",
    month:"long",
    year:"numeric"

})}
</p>

      <h3 className="mt-0.5 mb-2 font-bold text-lg text-gray-900">
        {blog.title}
      </h3>
<div className='line-clamp-1 text-md '>

    <PortableText className="mt-4 line-clamp-2 font-light text-gray-400" value={blog.body}/>
</div>
      
  </div>
  </Link>
</article>

</motion.div>
    )})}

  </div>

</section>
</div>



</>  )
}

export default Page