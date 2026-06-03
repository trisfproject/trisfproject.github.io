import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Footer } from './sections/Footer.jsx';
import { Home } from './pages/Home.jsx';
import { Navbar } from './components/Navbar.jsx';
import { ScrollToTop } from './components/ScrollToTop.jsx';

const ProjectsPage = lazy(() =>
  import('./pages/ProjectsPage.jsx').then((module) => ({ default: module.ProjectsPage })),
);

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen overflow-x-hidden bg-bg-site text-text-main transition-[background-color,color] duration-300">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[#22c55e] focus:px-4 focus:py-3 focus:text-sm focus:font-bold focus:text-[#04100a]"
        >
          Skip to content
        </a>
        <Navbar />
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
