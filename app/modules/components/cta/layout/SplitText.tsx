import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface SplitTextProps {
  text?: string;
  className?: string;
  delay?: number;
  animationFrom?: { opacity: number; y: number };
  animationTo?: { opacity: number; y: number };
  duration?: number;
  ease?: string | number[];
  threshold?: number;
  rootMargin?: string;
  textAlign?: "left" | "right" | "center" | "justify" | "initial" | "inherit";
  onLetterAnimationComplete?: () => void;
}

const SplitText: React.FC<SplitTextProps> = ({
  text = "",
  className = "", 
  delay = 0.1, 
  animationFrom = { opacity: 0, y: 0 },
  animationTo = { opacity: 1, y: 0 },
  duration = 0.6,
  ease = [.785,.135,.15,.86],
  threshold = 0.1,
  rootMargin = "-100px",
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const words = text.split(" ").map((w) => w.split(""));
  const letters = words.flat();
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLParagraphElement>(null);
  const animatedCount = useRef(0);

  useEffect(() => {
    if (!ref.current) return;
    
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.unobserve(ref.current as Element);
        }
      },
      { threshold, rootMargin }
    );
    
    obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);

  const handleAnimationComplete = () => {
    animatedCount.current += 1;
    if (
      animatedCount.current === letters.length &&
      onLetterAnimationComplete
    ) {
      onLetterAnimationComplete();
    }
  };

  // Container variants for staggering children
  const containerVariants = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        duration: .7,
        staggerChildren: delay,
        ease: [.785,.135,.15,.86],
      },
    },
  };

  // Letter variants
  const letterVariants = {
    hidden: {
      opacity: animationFrom.opacity,
      y: animationFrom.y,
      letterSpacing: "0.2em",
    },
    visible: {
      opacity: animationTo.opacity,
      y: animationTo.y,
      letterSpacing: "0.05em",
      transition: {
        duration,
        ease,
      },
    },
  };

  return (
    <motion.p
      ref={ref}
      className={`split-parent ${className}`}
      style={{
        textAlign: textAlign,
        overflow: "hidden",
        display: "inline",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
      variants={containerVariants}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
    >
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.map((letter, lIdx) => {
            const index =
              words.slice(0, wIdx).reduce((acc, w) => acc + w.length, 0) + lIdx;
            return (
              <motion.span
                key={index}
                variants={letterVariants}
                style={{
                  display: "inline-block",
                  willChange: "transform, opacity",
                }}
                onAnimationComplete={handleAnimationComplete}
              >
                {letter}
              </motion.span>
            );
          })}
          <span style={{ display: "inline-block", width: "0.3em" }}>
            &nbsp;
          </span>
        </span>
      ))}
    </motion.p>
  );
};

export default SplitText;

// Alternative version with more granular control
export const SplitTextAdvanced: React.FC<SplitTextProps & {
  staggerDirection?: "normal" | "reverse";
  viewport?: { once?: boolean; margin?: string; amount?: number };
}> = ({
  text = "",
  className = "",
  delay = 0.1,
  animationFrom = { opacity: 0, y: 40 },
  animationTo = { opacity: 1, y: 0 },
  duration = 0.6,
  ease = "easeOut",
  staggerDirection = "normal",
  viewport = { once: true, margin: "-100px", amount: 0.1 },
  textAlign = "center",
  onLetterAnimationComplete,
}) => {
  const words = text.split(" ").map((w) => w.split(""));
  const letters = words.flat();
  const animatedCount = useRef(0);

  const handleAnimationComplete = () => {
    animatedCount.current += 1;
    if (
      animatedCount.current === letters.length &&
      onLetterAnimationComplete
    ) {
      onLetterAnimationComplete();
    }
  };

  return (
    <motion.p
      className={`split-parent ${className}`}
      style={{
        textAlign: textAlign,
        overflow: "hidden",
        display: "inline",
        whiteSpace: "normal",
        wordWrap: "break-word",
      }}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: delay,
            staggerDirection: staggerDirection === "reverse" ? -1 : 1,
          },
        },
      }}
    >
      {words.map((word, wIdx) => (
        <span
          key={wIdx}
          style={{ display: "inline-block", whiteSpace: "nowrap" }}
        >
          {word.map((letter, lIdx) => {
            const index =
              words.slice(0, wIdx).reduce((acc, w) => acc + w.length, 0) + lIdx;
            return (
              <motion.span
                key={index}
                style={{
                  display: "inline-block",
                  willChange: "transform, opacity",
                }}
                variants={{
                  hidden: {
                    opacity: animationFrom.opacity,
                    y: animationFrom.y,
                    letterSpacing: "0.3em",
                  },
                  visible: {
                    opacity: animationTo.opacity,
                    y: animationTo.y,
                    letterSpacing: "0.05em",
                    transition: {
                      duration,
                      ease,
                    },
                  },
                }}
                onAnimationComplete={handleAnimationComplete}
              >
                {letter}
              </motion.span>
            );
          })}
          <span style={{ display: "inline-block", width: "0.3em" }}>
            &nbsp;
          </span>
        </span>
      ))}
    </motion.p>
  );
};

// Usage example
export const SplitTextExample = () => {
  return (
    <div className="p-8">
      <SplitText
        text="Hello World! This text will animate letter by letter."
        className="text-4xl font-bold"
        delay={0.05}
        duration={0.8}
        ease="easeOut"
        onLetterAnimationComplete={() => console.log("Animation complete!")}
      />
    </div>
  );
};