import { About } from './sections/About.jsx';
import { Contact } from './sections/Contact.jsx';
import { Footer } from './sections/Footer.jsx';
import { Hero } from './sections/Hero.jsx';
import { Projects } from './sections/Projects.jsx';
import { TechStack } from './sections/TechStack.jsx';

export default function App() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#050816] text-white">
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
