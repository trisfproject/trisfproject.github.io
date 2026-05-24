import { About } from '../sections/About.jsx';
import { Contact } from '../sections/Contact.jsx';
import { Hero } from '../sections/Hero.jsx';
import { Projects } from '../sections/Projects.jsx';
import { TechStack } from '../sections/TechStack.jsx';
import { SEO } from '../components/SEO.jsx';

export function Home() {
  return (
    <>
      <SEO />
      <Hero />
      <main id="main-content">
        <About />
        <Projects />
        <TechStack />
        <Contact />
      </main>
    </>
  );
}
