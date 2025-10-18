import { motion } from "framer-motion";
import { useState } from "react";
import { Brain, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

const quizOptions = [
  { id: "a", text: "Nguồn nhân lực chất lượng cao" },
  { id: "b", text: "Hoàn thiện thể chế, chính sách" },
  { id: "c", text: "Hạ tầng số" },
  { id: "d", text: "Cả 3 yếu tố trên", isCorrect: true },
];

export const Era4Interactive = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSubmit = () => {
    if (selectedAnswer) {
      setShowResult(true);
    }
  };

  return (
    <div className="relative w-full h-auto flex flex-col items-center gap-6">
      {/* AI Brain visualization */}
      <motion.div
        className="relative mb-4"
        animate={{
          filter: [
            "drop-shadow(0 0 20px hsl(280 100% 65%))",
            "drop-shadow(0 0 40px hsl(280 100% 65%))",
            "drop-shadow(0 0 20px hsl(280 100% 65%))",
          ],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <Brain className="w-24 h-24 text-[hsl(var(--era-4-accent))]" />

        {/* Neural connections */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 w-1 h-16 bg-gradient-to-t from-[hsl(var(--era-4-accent))] to-transparent"
            style={{
              transformOrigin: "top",
              rotate: i * 60,
            }}
            animate={{
              scaleY: [0, 1, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </motion.div>

      {/* Quiz */}
      <Card className="w-full max-w-2xl bg-card/50 backdrop-blur-sm border-[hsl(var(--era-4-accent))]/30 p-6">
        <h4 className="text-xl font-semibold mb-4 text-[hsl(var(--era-4-text))]">
          Theo bạn, Việt Nam cần ưu tiên yếu tố nào nhất để bứt phá trong CMCN 4.0?
        </h4>

        <div className="space-y-3 mb-6">
          {quizOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => !showResult && setSelectedAnswer(option.id)}
              className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                selectedAnswer === option.id
                  ? "border-[hsl(var(--era-4-accent))] bg-[hsl(var(--era-4-accent))]/10"
                  : "border-border hover:border-[hsl(var(--era-4-accent))]/50"
              } ${showResult && option.isCorrect ? "border-green-500 bg-green-500/10" : ""}`}
              whileHover={{ scale: showResult ? 1 : 1.02 }}
              whileTap={{ scale: showResult ? 1 : 0.98 }}
              disabled={showResult}
            >
              <div className="flex items-center justify-between">
                <span className="text-foreground">
                  <strong className="text-[hsl(var(--era-4-accent))] mr-2">
                    {option.id}.
                  </strong>
                  {option.text}
                </span>
                {showResult && option.isCorrect && (
                  <CheckCircle className="w-5 h-5 text-green-500" />
                )}
              </div>
            </motion.button>
          ))}
        </div>

        {!showResult ? (
          <Button
            onClick={handleSubmit}
            disabled={!selectedAnswer}
            className="w-full bg-[hsl(var(--era-4-accent))] hover:bg-[hsl(var(--era-4-accent))]/90 text-white"
          >
            Xác nhận câu trả lời
          </Button>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-green-500/10 border border-green-500/30 rounded-lg p-4"
          >
            <p className="text-green-400 font-semibold mb-2">
              ✓ Đáp án chính xác!
            </p>
            <p className="text-foreground/80 text-sm">
              Cả 3 yếu tố đều quan trọng và bổ trợ lẫn nhau: nguồn nhân lực chất lượng cao
              cần được hỗ trợ bởi thể chế phù hợp và hạ tầng số hiện đại để Việt Nam có thể
              tận dụng tối đa cơ hội của CMCN 4.0.
            </p>
          </motion.div>
        )}
      </Card>
    </div>
  );
};
