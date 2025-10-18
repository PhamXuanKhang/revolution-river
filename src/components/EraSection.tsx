import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface EraSectionProps {
  id: string;
  era: string;
  title: string;
  subtitle: string;
  description: string[];
  quote?: string;
  quoteAuthor?: string;
  backgroundImage: string;
  gradientClass: string;
  accentColor: string;
  children?: ReactNode;
}

export const EraSection = ({
  id,
  era,
  title,
  subtitle,
  description,
  quote,
  quoteAuthor,
  backgroundImage,
  gradientClass,
  accentColor,
  children,
}: EraSectionProps) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });

  return (
    <section
      id={id}
      ref={ref}
      className={`min-h-screen relative flex items-center py-20 ${gradientClass}`}
    >
      {/* Parallax Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(${backgroundImage})`,
          }}
          initial={{ scale: 1.2 }}
          animate={{ scale: inView ? 1 : 1.2 }}
          transition={{ duration: 1.5 }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-4">
            <span
              className="text-sm uppercase tracking-widest font-semibold"
              style={{ color: accentColor }}
            >
              {era}
            </span>
          </div>

          <h2 className="text-5xl md:text-7xl font-bold mb-6 text-foreground">
            {title}
          </h2>

          <h3 className="text-2xl md:text-3xl font-light mb-8 text-foreground/80">
            {subtitle}
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {description.map((text, index) => (
              <p
                key={index}
                className="text-lg md:text-xl text-foreground/70 mb-6 leading-relaxed"
              >
                {text}
              </p>
            ))}

            {quote && (
              <motion.blockquote
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="border-l-4 pl-6 py-4 mt-8 italic"
                style={{ borderColor: accentColor }}
              >
                <p className="text-xl text-foreground/90 mb-2">"{quote}"</p>
                {quoteAuthor && (
                  <cite className="text-sm not-italic" style={{ color: accentColor }}>
                    — {quoteAuthor}
                  </cite>
                )}
              </motion.blockquote>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex items-center justify-center"
          >
            {children}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
