import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "50vh"]);

  return (
    <div
      ref={container}
      className="relative flex items-center justify-center h-screen overflow-hidden"
    >
      <motion.div
        style={{ y }}
        className="absolute inset-0 w-full h-full"
      >
        <img
          src="https://cdn.poehali.dev/projects/a991afdf-16cb-479c-b945-05c486c39541/files/b95a966f-513b-48d3-bca7-2ab76493f35a.jpg"
          alt="Vibe coding atmosphere"
          className="w-full h-full object-cover"
        />
      </motion.div>

      <div className="relative z-10 text-center text-white px-6">
        <p className="text-purple-400 uppercase tracking-widest text-sm mb-4">Инструмент нового поколения</p>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-tight">
          КОДИРУЙ<br /><span className="text-purple-400">НА ВАЙБАХ</span>
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90 mb-10">
          Создавай продукты силой мысли и настроения. Для всех — без опыта в программировании.
        </p>
        <a
          href="#start"
          className="inline-block bg-purple-500 hover:bg-purple-600 text-white px-8 py-3 uppercase tracking-widest text-sm transition-colors duration-300"
        >
          Попробовать бесплатно
        </a>
      </div>
    </div>
  );
}