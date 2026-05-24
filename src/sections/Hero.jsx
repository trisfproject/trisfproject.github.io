import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button.jsx';

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-24 h-56 w-56 -translate-x-1/2 rounded-full bg-[#22c55e]/14 blur-3xl sm:h-72 sm:w-72 md:h-96 md:w-96"
          animate={{ opacity: [0.34, 0.52, 0.34], scale: [1, 1.04, 1] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.038)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.038)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)] sm:bg-[size:56px_56px]" />
      </div>

      <div className="section-shell relative flex min-h-[100svh] items-center pb-14 pt-28 sm:pb-16 sm:pt-32">
        <div className="max-w-5xl">
          <motion.p
            className="mb-5 inline-flex rounded-full border border-[#22c55e]/25 bg-[#22c55e]/10 px-3.5 py-2 text-[0.68rem] font-bold uppercase tracking-[0.22em] text-[#22c55e] sm:px-4 sm:text-xs"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Build • Secure • Automate
          </motion.p>
          <motion.h1
            className="text-balance text-[clamp(3.4rem,17vw,6rem)] font-semibold leading-[0.94] tracking-normal text-white sm:text-7xl md:text-8xl lg:text-9xl"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.08 }}
          >
            Build.
            <br />
            Secure.
            <br />
            Automate.
          </motion.h1>
          <motion.p
            className="mt-6 max-w-4xl text-balance text-base leading-7 text-[#a1a1aa] sm:text-lg sm:leading-8 md:text-[1.5rem] md:leading-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16 }}
          >
            Providing Infrastructure, Automation, Monitoring, Android Development, and Web Solutions.
          </motion.p>
          <motion.div
            className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.24 }}
          >
            <Button href="https://github.com/trisfproject" icon={Github}>
              GitHub
            </Button>
            <Button href="https://www.trisf.my.id/" icon={ExternalLink} variant="secondary">
              Website
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
