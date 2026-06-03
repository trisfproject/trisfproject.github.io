import { Info, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Button } from '../components/Button.jsx';

const bootLines = ['> INITIALIZING...', '> LOADING MODULES...', '> READY'];

function TerminalBootLine() {
  const [text, setText] = useState('');
  const [fading, setFading] = useState(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      setText(bootLines.at(-1));
      return undefined;
    }

    const timers = [];
    let cancelled = false;

    const queue = (callback, delay) => {
      const timer = window.setTimeout(() => {
        if (!cancelled) callback();
      }, delay);
      timers.push(timer);
    };

    const typeLine = (lineIndex) => {
      const line = bootLines[lineIndex];
      let cursor = 0;

      setFading(false);
      setText('');

      const typeNextCharacter = () => {
        cursor += 1;
        setText(line.slice(0, cursor));

        if (cursor < line.length) {
          queue(typeNextCharacter, 46);
          return;
        }

        if (lineIndex < bootLines.length - 1) {
          queue(() => {
            setFading(true);
            queue(() => typeLine(lineIndex + 1), 220);
          }, 720);
        }
      };

      queue(typeNextCharacter, lineIndex === 0 ? 260 : 160);
    };

    typeLine(0);

    return () => {
      cancelled = true;
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, []);

  return (
    <motion.div
      className="mt-5 inline-flex max-w-full rounded-2xl border border-[#22c55e]/20 bg-bg-site/72 px-3.5 py-2.5 shadow-site backdrop-blur-sm sm:mt-6 sm:px-4"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.14 }}
      aria-label="System status: ready"
    >
      <span
        className={`font-mono text-[0.72rem] font-medium tracking-[0.14em] text-[#22c55e] transition-opacity duration-200 sm:text-sm ${
          fading ? 'opacity-0' : 'opacity-100'
        }`}
      >
        {text}
        <span className="terminal-cursor" aria-hidden="true">
          ▋
        </span>
      </span>
    </motion.div>
  );
}

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-[#22c55e]/6 dark:bg-[#22c55e]/14 blur-3xl sm:h-72 sm:w-72 md:h-96 md:w-96"
          animate={{ opacity: [0.34, 0.52, 0.34], scale: [1, 1.04, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-grid-pattern bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)] sm:bg-[size:56px_56px]" />
      </div>

      <div className="section-shell relative flex min-h-[100svh] items-center pb-14 pt-28 sm:pb-16 sm:pt-32">
        <div className="max-w-6xl">
          <motion.p
            className="mb-6 inline-flex rounded-full border border-accent-border bg-accent-muted px-3.5 py-2 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[#16a34a] dark:text-[#22c55e] sm:px-4 sm:text-xs"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            SOLUTIONS START HERE
          </motion.p>
          <motion.h1
            className="text-balance text-[clamp(3.3rem,15vw,6.4rem)] font-semibold leading-[0.92] tracking-normal text-text-main sm:text-7xl md:text-8xl lg:text-[8.6rem]"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.08 }}
          >
            TRISF PROJECTS
          </motion.h1>
          <TerminalBootLine />
          <motion.p
            className="mt-7 max-w-3xl text-balance text-base leading-7 text-text-muted sm:text-lg sm:leading-8 md:text-[1.35rem] md:leading-9"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16 }}
          >
            Building Infrastructure, Automation, Monitoring, Android Development, and Web Solutions.
          </motion.p>
          <motion.div
            className="mt-6 grid w-full max-w-[320px] grid-cols-2 gap-2 sm:mt-9 sm:flex sm:max-w-none sm:flex-row sm:gap-3"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.24 }}
          >
            <Button href="#about" icon={Info} className="w-full sm:w-auto">
              About
            </Button>
            <Button
              href="https://wa.me/62817393300?text=Hello%20TRISF%20PROJECTS%2C%20I%20would%20like%20to%20discuss%20a%20project%20or%20technical%20solution."
              icon={MessageCircle}
              variant="secondary"
              className="w-full sm:w-auto"
            >
              Contact Us
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
