"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import SearchForm from '../../components/SearchForm'

const search = () => {

  return (
    <>
      <div className='h-80 mt-4 flex flex-col justify-center items-center'>
        <HeroHighlight>
          <motion.h1
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.5,
              ease: [0.4, 0.0, 0.2, 1],
            }}
            className="text-2xl md:text-4xl lg:text-5xl font-semibold text-neutral-700 dark:text-white leading-relaxed lg:leading-snug text-center"
          >
            Book Your{" "}
            <Highlight className="text-background">
              Dream Stay
            </Highlight>
            {" "}Effortlessly & Fast
          </motion.h1>
        </HeroHighlight>
        <div className='z-10 border border-neutral-600 rounded-full px-16 py-8 bg-background'>
          <SearchForm />
        </div>
        <div className='absolute bottom-0 bg-neutral-600 h-[488px] w-full'></div>
      </div>

      <div className="flex items-center justify-center">
      </div>
    </>
  )
}

export default search
