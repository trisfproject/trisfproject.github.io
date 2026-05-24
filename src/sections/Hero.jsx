import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button.jsx';
import { Navbar } from '../components/Navbar.jsx';

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden">
      <Navbar />
      <div className="pointer-events-none absolute inset-0">
        <motion.div
          className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-[#22c55e]/16 blur-3xl md:h-96 md:w-96"
          animate={{ opacity: [0.36, 0.62, 0.36], scale: [1, 1.06, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgb(255_255_255/0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgb(255_255_255/0.045)_1px,transparent_1px)] bg-[size:56px_56px] [mask-image:linear-gradient(to_bottom,black,transparent_82%)]" />
      </div>

      <div className="section-shell relative flex min-h-screen items-center pb-16 pt-28">
        <div className="max-w-5xl">
          <motion.p
            className="mb-5 inline-flex rounded-full border border-[#22c55e]/25 bg-[#22c55e]/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[#22c55e]"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Build • Secure • Automate
          </motion.p>
          <motion.h1
            className="text-balance text-6xl font-semibold leading-[0.95] tracking-normal text-white sm:text-7xl md:text-8xl lg:text-9xl"
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
            className="mt-7 max-w-3xl text-lg leading-8 text-[#a1a1aa] md:text-2xl md:leading-10"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.58, delay: 0.16 }}
          >
            SysAdmin, DevOps, Infrastructure, Security, Android Development, and Electric Vehicle Projects.
          </motion.p>
          <motion.div
            className="mt-9 flex flex-col gap-3 sm:flex-row"
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
