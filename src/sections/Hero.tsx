"use client";

import React from "react";
import styles from "@/styles";
import { motion } from "framer-motion";
import {
  navVariants,
  slideIn,
  staggerContainer,
  textVariant,
} from "@/utils/motion";
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
        <div className="flex justify-center items-center flex-col relative z-20">
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
        <motion.div
          variants={slideIn("right", "tween", "0.5", "1")}
          className="relative sm:-mt-[32px] z-10 -mt-[18px]"
        >
          <div className="absolute w-full h-[300px] hero-gradient rounded-tl-[140px] -z-[10] -top-[30px]" />
          <Image
            src="/cover.png"
            alt="cover"
            className="w-full sm:h-[500px] h-[350px] object-cover z-10 rounded-tl-[140px]"
            width={1920}
            height={350}
          />

          <motion.div
            variants={slideIn("right", "tween", "1", "1")}
          >
            <Image
              src="/stamp.png"
              alt="cover"
              className="absolute w-[200px] h-[200px] sm:-bottom-20 -bottom-10 sm:right-20 right-10"
              width={1920}
              height={350}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
