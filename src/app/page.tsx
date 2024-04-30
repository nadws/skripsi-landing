"use client";
import Hero from "./layout/hero";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  return (
    <main className="h-screen">
      <Hero />
      <br />
    </main>
  );
}
