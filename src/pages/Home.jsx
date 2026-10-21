import { motion } from "framer-motion";
import { usePageMeta } from "@/hooks/usePageMeta";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Hero from "@/components/home/Hero";
import Intro from "@/components/home/Intro";
import Services from "@/components/home/Services";
import FeaturedProjects from "@/components/home/FeaturedProjects";

import Testimonials from "@/components/home/Testimonials";

export default function Home() {
  usePageMeta({
    title: "Concrete Rose Graphics — Design That Breaks Through the Concrete",
    description:
      "Concrete Rose Graphics is a creative studio blending graphic design, branding, web design, and front-end development into visually strong, functional digital experiences.",
  });
  return (
    <motion.div initial={false} animate={{ opacity: 1 }}>
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <FeaturedProjects />
        <Testimonials />
      </main>
      <Footer />
    </motion.div>
  );
}