import { About } from './sections/About.jsx';
import { Contact } from './sections/Contact.jsx';
import { Footer } from './sections/Footer.jsx';
import { Hero } from './sections/Hero.jsx';
import { Projects } from './sections/Projects.jsx';
import { TechStack } from './sections/TechStack.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
      <a
        href="#projects"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#22c55e] focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-[#04100a]"
      >
        Skip to content
      </a>
      <Hero />
      <main>
        <Projects />
        <TechStack />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
