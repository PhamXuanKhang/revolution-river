import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Button } from "./ui/button";
import { BookOpen, Github, Mail } from "lucide-react";

export const ConclusionSection = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      ref={ref}
      className="min-h-screen relative flex items-center justify-center bg-gradient-to-b from-background to-primary/10 py-20"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute w-full h-full bg-gradient-to-br from-primary/5 via-accent/5 to-transparent animate-river-flow bg-[length:200%_200%]" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, -200],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-gradient">
            Kết luận
          </h2>

          <div className="space-y-6 text-lg md:text-xl text-foreground/80 mb-12">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Hành trình của loài người là{" "}
              <span className="text-primary font-semibold">
                dòng chảy của sáng tạo và mâu thuẫn
              </span>
              .
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Mỗi cuộc cách mạng mở ra{" "}
              <span className="text-accent font-semibold">cơ hội mới</span> —
              và những <span className="text-accent font-semibold">thách thức mới</span>.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xl md:text-2xl font-semibold text-foreground mt-8"
            >
              Việt Nam đang đứng trước ngã rẽ của kỷ nguyên 4.0.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-2xl md:text-3xl font-bold text-gradient"
            >
              Liệu chúng ta sẽ trở thành người kiến tạo,
              <br />
              hay chỉ là người theo sau?
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_20px_hsl(var(--primary)/0.3)]"
            >
              <BookOpen className="mr-2" />
              Tài liệu tham khảo
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Github className="mr-2" />
              Source Code
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <Mail className="mr-2" />
              Liên hệ nhóm
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
