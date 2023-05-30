import urlFor from "@/app/lib/UrlFor";
import Image from "next/image";
import Link from "next/link";

export const RichTextComponents = {
  types: {
    image: ({ value }) => {
      return (
        <div className="relative max-w-lg h-content-min my-2 mr-auto">
          <Image
            className="object-contain mr-auto"
            src={urlFor(value).url()}
            alt="blog post image"
            width={600}
            height={220}
            object-fit="contain"
          />
        </div>
      );
    },
  },
  list: {
    bullet: ({ children }) => (
      <ul className=" list-disc text-gray-600 ">{children}</ul>
    ),
    number: ({ children }) => (
      <ol className="list-inside list-decimal  text-gray-600  text-base sm:text-base xl:text-lg dark:text-gray-300">
        {children}
      </ol>
    ),
  },
  listItem: {
    bullet: ({ children }) => (
      <li className="py-2 list-inside text-gray-600 text-base sm:text-base xl:text-lg dark:text-gray-300">
        {children}
      </li>
    ),
    number: ({ children }) => (
      <li className="py-3 list-item text-gray-600 text-base sm:text-base xl:text-lg dark:text-gray-300">
        {children}
      </li>
    ),
  },

  block: {
    h1: ({ children }) => (
      <h1 className="text-3xl sm:text-5xl py-8 font-bold text-gray-600 dark:text-gray-300">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2
        id={children[0].toLowerCase().replace(/\s+/g, "-")}
        className="text-2xl sm:text-4xl py-8 font-bold text-gray-600 font-sans scroll-mt-20 snap-start dark:text-gray-300"
      >
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl sm:text-3xl py-5 font-bold text-gray-600 dark:text-gray-300">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="text-2xl py-2 font-bold text-gray-600 dark:text-gray-300">
        {children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="py-4 text-white text-base sm:text-base xl:text-lg dark:text-gray-300">
        {children}
      </p>
    ),

    blockquote: ({ children }) => (
      <blockquote className="border-l-[#f4b400] border-l-4 pl-5 text-gray-500  py-5 font-bold italic text-lg sm:text-xl dark:text-gray-300">
        {children}
      </blockquote>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;

      return (
        <Link
          href={value.href}
          rel={rel}
          className="underline decoration-[#f4b400] hover:decoration-black"
        >
          {children}
        </Link>
      );
    },
  },
};