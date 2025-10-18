import { motion } from "framer-motion";
import { useState } from "react";
import { Lightbulb, Zap } from "lucide-react";
import { Button } from "./ui/button";

export const Era2Interactive = () => {
  const [isPowered, setIsPowered] = useState(false);

  return (
    <div className="relative w-full h-96 flex flex-col items-center justify-center gap-8">
      {/* Light bulb */}
      <motion.div
        className="relative"
        animate={{
          filter: isPowered
            ? "drop-shadow(0 0 40px hsl(45 100% 60%))"
            : "none",
        }}
      >
        <Lightbulb
          className="w-32 h-32 transition-colors duration-500"
          style={{
            color: isPowered ? "hsl(45 100% 60%)" : "hsl(45 20% 40%)",
            fill: isPowered ? "hsl(45 100% 60%)" : "transparent",
          }}
        />

        {/* Electric sparks */}
        {isPowered && (
          <>
            {[...Array(8)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute top-1/2 left-1/2"
                style={{
                  rotate: i * 45,
                }}
                initial={{ scale: 0, x: 0 }}
                animate={{ scale: [0, 1, 0], x: [0, 40, 60] }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.1,
                }}
              >
                <Zap className="w-4 h-4 text-[hsl(var(--era-2-accent))]" />
              </motion.div>
            ))}
          </>
        )}
      </motion.div>

      {/* Power switch */}
      <Button
        onClick={() => setIsPowered(!isPowered)}
        className="bg-[hsl(var(--era-2-accent))] hover:bg-[hsl(var(--era-2-accent))]/90 text-background font-semibold px-8 py-6 text-lg rounded-lg shadow-lg"
      >
        {isPowered ? "TẮT CÔNG TẮC" : "BẬT CÔNG TẮC"}
      </Button>

      {/* Assembly line animation */}
      {isPowered && (
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-[hsl(var(--era-2-accent))]/20 overflow-hidden">
          <motion.div
            className="h-full w-20 bg-[hsl(var(--era-2-accent))]"
            animate={{ x: [-80, window.innerWidth] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      )}
    </div>
  );
};
