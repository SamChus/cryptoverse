"use client"

import React from 'react'
import styles from "@/styles";
import { motion } from "framer-motion";
import { navVariants, staggerContainer, textVariant } from "@/utils/motion";
import Image from "next/image";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6`}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <div className="flex justify-center items-center flex-col relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={`${styles.heroHeading}`}
          >
            Metaverse
          </motion.h1>
          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={styles.heroHeading}>Mac</h1>
            <div className={styles.heroDText} />
            <h1 className={styles.heroHeading}>Ness</h1>
          </motion.div>
        </div>
        <div className="absolute w-full h-[300px] hero-gradient rounded-top-[140px] z-[0]">
          <Image 
            src='/cover.png'
            alt='cover'
            className='w-full sm:h-[500px] h-[350px]'
            width={1920}
            height={350}
          />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero