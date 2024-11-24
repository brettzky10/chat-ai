"use client"

import { motion } from "framer-motion";
import { useRef, useState } from "react";

type ListOrderItem = "front" | "middle" | "back";

const ShuffleCards = () => {
  const [order, setOrder] = useState<ListOrderItem[]>([
    "front",
    "middle",
    "back",
  ]);

  const handleShuffle = () => {
    const orderCopy = [...order];
    orderCopy.unshift(orderCopy.pop() as ListOrderItem);
    setOrder(orderCopy);
  };

  return (
    <div className="grid place-content-center overflow-hidden bg-slate-900 px-8 py-24 text-slate-50">
      <div className="relative -ml-[100px] h-[450px] w-[350px] md:-ml-[175px]">
        <GlassCard
          imgUrl="/imgs/head-shots/7.jpg"
          testimonial="I feel like I've learned as much from X as I did completing my masters. It's the first thing I read every morning."
          author="Jenn F. - Marketing Director @ Square"
          handleShuffle={handleShuffle}
          position={order[0]}
        />
        <GlassCard
          imgUrl="/imgs/head-shots/8.jpg"
          testimonial="My boss thinks I know what I'm doing. Honestly, I just read this newsletter."
          author="Adrian Y. - Product Marketing @ Meta"
          handleShuffle={handleShuffle}
          position={order[1]}
        />
        <GlassCard
          imgUrl="/imgs/head-shots/9.jpg"
          testimonial="Can not believe this is free. If X was $5,000 a month, it would be worth every penny. I plan to name my next child after X."
          author="Devin R. - Growth Marketing Lead @ OpenAI"
          handleShuffle={handleShuffle}
          position={order[2]}
        />
      </div>
    </div>
  );
};

interface CardProps {
  handleShuffle: Function;
  testimonial: string;
  position: ListOrderItem;
  imgUrl: string;
  author: string;
}

const GlassCard = ({
  handleShuffle,
  testimonial,
  position,
  imgUrl,
  author,
}: CardProps) => {
  const mousePosRef = useRef(0);

  const onDragStart = (e: MouseEvent) => {
    mousePosRef.current = e.clientX;
  };

  const onDragEnd = (e: MouseEvent) => {
    const diff = mousePosRef.current - e.clientX;

    if (diff > 150) {
      handleShuffle();
    }

    mousePosRef.current = 0;
  };

  const x = position === "front" ? "0%" : position === "middle" ? "33%" : "66%";
  const rotateZ =
    position === "front" ? "-6deg" : position === "middle" ? "0deg" : "6deg";
  const zIndex = position === "front" ? "2" : position === "middle" ? "1" : "0";

  const draggable = position === "front";

  return (
    <motion.div
      style={{
        zIndex,
      }}
      animate={{ rotate: rotateZ, x }}
      drag
      dragElastic={0.35}
      dragListener={draggable}
      dragConstraints={{
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      }}
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      transition={{
        duration: 0.35,
      }}
      className={`absolute left-0 top-0 grid h-[450px] w-[350px] select-none place-content-center space-y-6 rounded-2xl border-2 border-slate-700 bg-slate-800/20 p-6 shadow-xl backdrop-blur-md ${
        draggable ? "cursor-grab active:cursor-grabbing" : ""
      }`}
    >
      {/* <img
        src={imgUrl}
        alt={`Image of ${author}`}
        className="pointer-events-none mx-auto h-32 w-32 rounded-full border-2 border-slate-700 bg-slate-200 object-cover"
      /> */}
      {/* <span className="text-center text-lg italic text-slate-400">
        &apos;{testimonial}&apos;
      </span>
      <span className="text-center text-sm font-medium text-indigo-400">
        {author}
      </span> */}
      <SkeletonOne/>
    </motion.div>
  );
};


const SkeletonOne = () => {
    const variants = {
      initial: {
        x: 0,
      },
      animate: {
        x: 10,
        rotate: 5,
        transition: {
          duration: 0.2,
        },
      },
    };
    const variantsSecond = {
      initial: {
        x: 0,
      },
      animate: {
        x: -10,
        rotate: -5,
        transition: {
          duration: 0.2,
        },
      },
    };
   
    return (
      <motion.div
        initial="initial"
        whileHover="animate"
        className="flex flex-1 w-full h-full min-h-[6rem] dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2"
      >
        <motion.div
          variants={variants}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2  items-center space-x-2 bg-white dark:bg-black"
        >
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
          <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        </motion.div>
        <motion.div
          variants={variantsSecond}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 w-3/4 ml-auto bg-white dark:bg-black"
        >
          <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
        </motion.div>
        <motion.div
          variants={variants}
          className="flex flex-row rounded-full border border-neutral-100 dark:border-white/[0.2] p-2 items-center space-x-2 bg-white dark:bg-black"
        >
          <div className="h-6 w-6 rounded-full bg-gradient-to-r from-pink-500 to-violet-500 flex-shrink-0" />
          <div className="w-full bg-gray-100 h-4 rounded-full dark:bg-neutral-900" />
        </motion.div>
      </motion.div>
    );
  };




export default ShuffleCards;