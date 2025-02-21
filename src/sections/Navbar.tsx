"use client";

import styles from "@/styles";
import { motion } from "framer-motion";
import { navVariants } from "@/utils/motion";
import Image from "next/image";

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    <div className="absolute w-[50%] inset-0 gradient-01" />
    <div className="flex justify-between items-center w-full">
      <Image src="/search.svg" alt="search" width={24} height={24} />
      <h2 className="font-extrabold text-[24px] leading-[30.24px] text-white">
        METAVERSUS
      </h2>
      <Image src="/menu.svg" alt="menu" width={24} height={24} />
    </div>
  </motion.nav>
);

export default Navbar;
