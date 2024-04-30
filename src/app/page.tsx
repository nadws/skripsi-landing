"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-row items-center  justify-center  ">
      <motion.div
        className="hidden lg:block lg:w-[50%] p-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="text-6xl font-bold">
          Jasa Bimbingan Pembuatan Skripsi, Tesis dan Disertasi
        </h1>
      </motion.div>

      <motion.div
        className=" w-[90%] lg:w-[50%]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.25 }}
      >
        <Image
          src="/hero.jpg"
          width="600"
          height="600"
          alt="Logo"
          className="rounded-3xl lg:rotate-3 shadow-black dark:shadow-white shadow-2xl"
        />
        <h1 className="text-3xl font-bold mt-12 text-center lg:hidden">
          Jasa Bimbingan Pembuatan Skripsi, Tesis dan Disertasi
        </h1>
      </motion.div>
    </main>
  );
}
