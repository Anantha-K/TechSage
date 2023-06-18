'use client'
import {useEffect, useState} from 'react'
import {client} from '@/sanity-client'
import {groq} from 'next-sanity'
import Link from 'next/link'
import {motion} from 'framer-motion'
import {PortableText} from '@portabletext/react'
import Image from 'next/image'
import urlFor from './lib/UrlFor'
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6078904081083488"
     crossorigin="anonymous"></script>
const query = groq`*[_type == "post"] {
  ...,
  description,
  author->,
  categories[]->{
  }
} | order(_createdAt desc)[0...2]`

const Tquery = groq`*[_type == "post"] {
  ...,
  description,
  author->,
  categories[]->{
    Tech
  },
} | order(_createdAt desc)`

export default function Home() {
  const [recentPosts, setRecentPosts] = useState([])
  const [posts, setPosts] = useState([])

  useEffect(() => {
    const fetchRecentPosts = async () => {
      const recentPostsData = await client.fetch(query)
      setRecentPosts(recentPostsData)
    }

    const fetchPosts = async () => {
      const postsData = await client.fetch(Tquery)
      setPosts(postsData)
    }

    fetchRecentPosts()
    fetchPosts()
  }, [])

  return (
    <>
      <div className="py-16 md:pt-40 bg-black text-white">
        {/* Recent Posts */}
        <div className="xl:container m-auto px-6 md:px-12 xl:px-6">
          <div className="grid gap-12 md:gap-6 md:grid-cols-2 lg:gap-12">
            {recentPosts.map((recent) => (
              <Link
                key={recent._id}
                href={`${recent.slug.current}`}
                className="group hover:cursor-pointer space-y-6"
              >
                <Image
                  src={urlFor(recent.mainImage).url()}
                  alt="art cover"
                  // loading="lazy"
                  priority="true"
                  width="1000"
                  height="667"
                  className="h-80 w-full rounded-3xl object-cover object-top transition-all duration-500 group-hover:rounded-xl"
                />
                <h3 className="text-3xl font-semibold text-white">
                  {recent.title}
                </h3>
                <p>
                  {new Date(recent._createdAt).toLocaleString('en-english', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>{' '}
                <PortableText value={recent.desc} />
              </Link>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <section className="px-4 py-24 w-full mx-auto max-w-7xl">
          <h2 className="mb-2 text-3xl font-bold leading-tight text-white">Latest Blogs</h2>
          <div className="grid mt-5 md:mt-24 grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
            {posts.map((blog, i) => (
              <motion.div
                whileHover={{
                  scale: 1.1,
                  transition: {duration: 0.5},
                }}
                key={blog._id}
                initial={{opacity: 0, y: 50}}
                animate={{opacity: 1, y: 0}}
                exit={{opacity: 0, y: -50}}
                transition={{duration: 0.5, delay: i * 0.1}}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <Link href={`${blog.slug.current}`} passHref>
                  <div className="relative h-60 md:h-48 lg:h-64">
                    <Image
                      src={urlFor(blog.mainImage).url()}
                      alt="jo"
                      layout="fill"
                      objectFit="cover"
                      objectPosition="top"
                      className="rounded-t-lg group-hover:rounded-xl"
                    />
                  </div>
                  <div className="p-4 text-black md:p-5">
                    <p>
                      {new Date(blog._createdAt).toLocaleString('en-english', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric',
                      })}
                    </p>
                    <h3 className="text-lg font-semibold text-gray-900">{blog.title}</h3>
                    <PortableText value={blog.description} className="text-gray-600" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}
