import { motion } from "framer-motion";
import { Image } from "@/components/ui/image";

export default function GalleryCard({ src, alt, index = 0, reduce = false }) {
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      className="rounded-xl bg-[#15101a] ring-1 ring-crg-purple/40 overflow-hidden"
    >
      <div className="relative aspect-[4/3] flex items-center justify-center bg-[#15101a] overflow-hidden">
        <Image src={src} alt={alt} fittingType="fit" className="w-full h-full object-contain" />
      </div>
    </motion.div>
  );
}