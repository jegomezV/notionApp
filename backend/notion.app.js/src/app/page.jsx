import Image from 'next/image'
import Link from 'next/link'
import * as React from "react";

export default function Home() {

  const data = [
    {
      link: '/home/signin',
      textButton: 'Sign in',
      text: 'Welcome Back, Sign in to your account here.'
    },
    {
      link: '/home/signup',
      textButton: 'Sing up',
      text: 'Learn how to leverage automation to optimize your workflow and save time now!'
    },
    {
      link: 'home/about',
      textButton: 'About',
      text: 'Learn about autoMate>>'
    },
  ]

  const LinkElement = ({ data }) => {
    return (
      <Link
        key={data.text}
        href={data.link}
        className="group rounded-lg border-transparent px-5 text-white hover:text-black py-4 transition-colors hover:border-black hover:bg-gray-300"
        rel="noopener noreferrer"
      >
        <h2 className='mb-3 text-2xl font-semibold'>
          {data.textButton}
          <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
            -&gt;
          </span>
        </h2>
        <p className='m-0 group-hover:text-black max-w-[30ch] text-sm opacity-50'>
          {data.text}
        </p>
      </Link>
    )
  }

  return (
      <main className="flex min-h-screen flex-col -translate-y-8 items-center justify-between p-16
      before:absolute before:h-[450px] before:w-[500px] md:before:translate-x-[0px] before:translate-y-[40px] before:rounded-full before:bg-gradient-radial before:from-black before:blur-2xl
      after:absolute after:h-[400px] after:w-[1600px] md:after:translate-x-[0px] after:translate-y-[685px] after:rounded-full after:bg-gradient-radial after:from-sky-700 after:blur-2xl">
        <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 relative flex place-items-center top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
            A software designed to automate data filtering, sorting and organizing processes -&gt;
          </p>
        </div>

        <div className="">
          <Image
            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
            src="/logo_deff.png"
            alt="autoMate>> Logo"
            width={370}
            height={37}
            priority
          />
        </div>

        <div className="mb-32 grid text-center lg:max-w-5xl lg:w-full lg:mb-0 lg:grid-cols-3 lg:text-left">
          {data.map((datas) => (
            <LinkElement data={datas} />
          ))}
        </div>
      </main>
  )
}
