"use client";
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link';
import React from 'react'
import {BsArrowRight} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import { MdFacebook } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

const Info = () => {
  return (
    <section
    className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className='flex justify-center items-center'>
        <motion.div
         initial={{ opacity: 0, scale: 0 }}
         animate={{ opacity: 1, scale: 1 }}
         transition={{
          type:"tween",
          duration:0.2,
         }}
        >
          <Image src="https://avatars.githubusercontent.com/u/103016621?v=4" 
                 alt='Tony Cross'
                 width='192'
                 height='192'
                 quality='95'
                 priority={true}
                 className='h-24 w-24 rounded-full object-cover border-[0.35rem] border-white shadow-xl'/>
        </motion.div>
      </div>

      <motion.h6
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Hello, I'm TonyCross.</span> I'm a{" "}
        <span className="font-bold">full-stack developer</span> with{" "}
        <span className="font-bold">2 years</span> of experience. I enjoy
        building <span className="italic">sites & apps</span>. My focus is{" "}
        <span className="underline">React (Next.js)</span>.
      </motion.h6>

      <motion.div className='flex flex-col sm:flex-row items-center 
                  justify-center gap-2 px-4 text-lg font-medium'
                  initial={{ opacity: 0, y: 100 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay:0.2
                  }}
      >
        <Link href="#contact"
              className='group bg-gray-900 text-white
                         px-7 py-3 flex items-center gap-2 rounded-full
                         outline-none focus:scale-110 hover:scale-110
                         hover:bg-gray-950 active:scale-105 translate'
              >
                Contact me here 
                <BsArrowRight className='group opacity-70 group-hover:translate-x-1 translate'/>
        </Link>
        <a href='/CV.pdf' download
           className='group bg-white
           px-7 py-3 flex items-center gap-2 rounded-full            
           outline-none focus:scale-110 hover:scale-110
           active:scale-105 translate border border-black/10'
        >
          Download CV 
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition"/>
        </a>
        <a href='https://github.com/TonyCross23' target='_blank'
           className='bg-white text-gray-800 opacity-90
           p-4 flex items-center gap-2 text-[1.35rem] rounded-full
           outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
           active:scale-105 translate border border-black/10'>
            <MdFacebook />
        </a>
        <a href='https://github.com/TonyCross23' target='_blank'
           className='bg-white text-gray-800 opacity-90
           p-4 flex items-center gap-2 text-[1.35rem] rounded-full
           outline-none focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950
           active:scale-105 translate border border-black/10'
        >
            <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  )
}

export default Info
