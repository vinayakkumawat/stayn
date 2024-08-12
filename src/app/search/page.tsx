"use client";

import { motion } from "framer-motion";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Navbar from '../../components/Navbar'
import SearchForm from '../../components/SearchForm'

const testimonials = [
  {
    quote:
      "It was the best of times, it was the worst of times, it was the age of wisdom, it was the age of foolishness, it was the epoch of belief, it was the epoch of incredulity, it was the season of Light, it was the season of Darkness, it was the spring of hope, it was the winter of despair.",
    name: "Charles Dickens",
    title: "A Tale of Two Cities",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "William Shakespeare",
    title: "Hamlet",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Edgar Allan Poe",
    title: "A Dream Within a Dream",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Jane Austen",
    title: "Pride and Prejudice",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Herman Melville",
    title: "Moby-Dick",
  },
];

const search = () => {

  return (
    <div className='container'>
      <div className='sticky top-4 z-20'>
        <Navbar />
      </div>
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
    </div>
  )
}

export default search
