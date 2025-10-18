import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "./ui/button";

export const HeroSection = () => {
  const scrollToContent = () => {
    const element = document.getElementById("era-1");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-br from-primary/10 via-transparent to-accent/10 animate-river-flow bg-[length:200%_200%]" />
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-7xl md:text-9xl font-bold mb-6 text-gradient glow-text">
            THE FLOW OF
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient glow-text">
            REVOLUTIONS
          </h1>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-3xl md:text-4xl font-light mb-8 text-foreground/90"
        >
          DÒNG CHẢY CÁCH MẠNG
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed"
        >
          Khám phá hành trình loài người qua 4 cuộc cách mạng công nghiệp,
          <br />
          nhìn từ góc độ Kinh tế Chính trị Mác – Lênin.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <Button
            size="lg"
            onClick={scrollToContent}
            className="text-lg px-8 py-6 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_30px_hsl(var(--primary)/0.5)] hover:shadow-[0_0_50px_hsl(var(--primary)/0.7)] transition-all duration-300"
          >
            Khám phá hành trình
            <ChevronDown className="ml-2 animate-bounce" />
          </Button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown className="w-8 h-8 text-primary/60" />
      </motion.div>
    </section>
  );
};
