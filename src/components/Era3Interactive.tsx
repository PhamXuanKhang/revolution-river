import { motion } from "framer-motion";
import { useState } from "react";
import { Network, Globe } from "lucide-react";
import { Input } from "./ui/input";

export const Era3Interactive = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [command, setCommand] = useState("");

  const handleConnect = (e: React.FormEvent) => {
    e.preventDefault();
    if (command.toLowerCase().includes("connect world")) {
      setIsConnected(true);
    }
  };

  return (
    <div className="relative w-full h-96 flex flex-col items-center justify-center gap-6">
      {/* Terminal */}
      <div className="w-full max-w-md bg-black/80 border-2 border-[hsl(var(--era-3-accent))] rounded-lg p-4 font-mono">
        <div className="text-[hsl(var(--era-3-accent))] text-xs mb-2">
          SYSTEM READY_
        </div>
        <form onSubmit={handleConnect} className="flex gap-2">
          <span className="text-[hsl(var(--era-3-accent))]">&gt;</span>
          <Input
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            placeholder="connect world"
            className="flex-1 bg-transparent border-none text-[hsl(var(--era-3-accent))] focus-visible:ring-0 p-0 font-mono placeholder:text-[hsl(var(--era-3-accent))]/40"
          />
        </form>

        {isConnected && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="mt-4 text-[hsl(var(--era-3-accent))] text-xs"
          >
            <div>Establishing global connection...</div>
            <div className="mt-1">Network nodes: 256</div>
            <div>Status: CONNECTED ✓</div>
          </motion.div>
        )}
      </div>

      {/* Network visualization */}
      {isConnected && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative w-64 h-64"
        >
          <Globe className="w-full h-full text-[hsl(var(--era-3-accent))]/30" />

          {/* Connection nodes */}
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-3 h-3 bg-[hsl(var(--era-3-accent))] rounded-full"
              style={{
                top: `${50 + 40 * Math.cos((i * Math.PI * 2) / 12)}%`,
                left: `${50 + 40 * Math.sin((i * Math.PI * 2) / 12)}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}

          {/* Connecting lines */}
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
          >
            <Network className="w-full h-full text-[hsl(var(--era-3-accent))]/20" />
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};
