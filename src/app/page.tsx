"use client";
import Hero from "./layout/hero";
import { motion, useScroll } from "framer-motion";
import Paket from "./layout/paket";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <>
      <motion.div style={{ scaleX: scrollYProgress }} />
      <Hero />
      <Paket />
    </>
  );
}
