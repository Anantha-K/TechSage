'use client'
import { PortableText } from '@portabletext/react'
import { groq } from 'next-sanity'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { client } from '@/sanity-client'
import { POST_QUERY } from '../postQuery'
import { RichTextComponents } from '../RichText/RichTextComponents'
import urlFor from '@/app/lib/UrlFor'





async function getPost(slug) {
  const res = await client.fetch(POST_QUERY, { slug });
  return res;
}



export default async function Page({ params }) {
  const { slug } = params;
  const post = await getPost(slug);
  

  const imageUrl = urlFor(post.mainImage).url();


 

  return (
    <>
      <div className="flex flex-col lg:flex-row bg-black text-white min-h-screen items-center justify-center">
        <div className="md:w-3/4 mt-5 md:mt-32 lg:mr-8 px-3 py-3">
          <Image
            src={imageUrl} 
            alt='hii'
                        width={1200}
            height={600}
            className="object-cover w-full h-64 lg:h-96 rounded-xl"
          />
          <h1 className="text-3xl font-bold my-6">{post.title}</h1>

          <PortableText value={post.body} components={RichTextComponents} />
        </div>
    
      </div>
    </>
  )
}
