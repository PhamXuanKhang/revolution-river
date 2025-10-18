import { motion } from "framer-motion";
import { useState } from "react";
import { Cog, Flame } from "lucide-react";

export const Era1Interactive = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative w-full h-96 flex items-center justify-center">
      <motion.div
        className="relative"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        {/* Rotating gears */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="relative"
        >
          <Cog className="w-40 h-40 text-[hsl(var(--era-1-accent))] opacity-80" />
        </motion.div>

        {/* Inner gear */}
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          animate={{ rotate: -360 }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        >
          <Cog className="w-20 h-20 text-[hsl(var(--era-1-accent))]" />
        </motion.div>

        {/* Steam particles */}
        {isHovered && (
          <>
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute bottom-0 left-1/2"
                initial={{ y: 0, opacity: 0.6, x: -10 + i * 5 }}
                animate={{ y: -100, opacity: 0 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              >
                <Flame className="w-6 h-6 text-[hsl(var(--era-1-accent))]" />
              </motion.div>
            ))}
          </>
        )}
      </motion.div>

      {/* Info tooltip */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 bg-card/90 backdrop-blur-sm px-6 py-3 rounded-lg border border-[hsl(var(--era-1-accent))]"
      >
        <p className="text-sm text-[hsl(var(--era-1-text))]">
          Máy hơi nước của James Watt (1769)
        </p>
      </motion.div>
    </div>
  );
};
