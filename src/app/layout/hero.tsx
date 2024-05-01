"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="flex flex-row items-center  justify-center  ">
      <motion.div
        className="hidden lg:block lg:w-[50%] p-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1 }}
      >
        <h1 className="text-4xl font-bold">
          Jasa Bimbingan Pembuatan Skripsi, Tesis dan Disertasi
        </h1>
        <p className="text-xl mt-4">
          Skripsi gak perlu pusing lagi ada kami yang siap membantu anda kapan
          saja.
        </p>
        <button className="border py-4 px-6 mt-8 bg-cyan-800 dark:bg-yellow-400 rounded-xl text-slate-100  font-bold dark:text-black hover:bg-cyan-600 hover:dark:bg-yellow-300">
          Hubungi Kami
        </button>
      </motion.div>

      <motion.div
        className=" w-[90%] lg:w-[50%]"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ ease: "easeInOut", duration: 1.25 }}
      >
        <Image
          src="/hero2.jpg"
          width="600"
          height="600"
          alt="Logo"
          className="rounded-3xl lg:rotate-3 shadow-black dark:shadow-white shadow-2xl"
        />
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-2xl font-bold mt-12 text-center  lg:hidden">
            Jasa Bimbingan Pembuatan Skripsi, Tesis dan Disertasi
          </h1>
          <p className="text-base mt-4 text-center  lg:hidden">
            Skripsi gak perlu pusing lagi ada kami yang siap membantu anda kapan
            saja.
          </p>
          <button className="border py-4 px-6 mt-4 bg-cyan-800 dark:bg-yellow-400 rounded-xl text-slate-100  font-bold dark:text-black hover:bg-cyan-600 hover:dark:bg-yellow-300 lg:hidden mx-auto">
            Hubungi Kami
          </button>
        </div>
      </motion.div>
    </div>
  );
}
