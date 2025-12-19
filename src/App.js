import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import LeftPreview from './pages/LeftPreview';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Skills from './pages/Skills';
import Project from './pages/Project';
import { AnimatePresence, motion } from 'framer-motion';
import Preloader from './components/Preloader';

const pageVariants = {
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -100 }
};


function App() {
  const location = useLocation();
  const [showContent, setShowContent] = useState(false);
  const [preloaderDone, setPreloaderDone] = useState(false);

  const handleContentReady = () => {
    setShowContent(true);
  };

  const handlePreloaderComplete = () => {
    setPreloaderDone(true);
  };

  return (
    <div className="App">
      {!preloaderDone && (
        <Preloader 
          onContentReady={handleContentReady} 
          onComplete={handlePreloaderComplete} 
        />
      )}
      {showContent && (
        <>
          <LeftPreview />
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname} 
              variants={pageVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              transition={{ duration: 0.3 }}
            >
              <Routes location={location}>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/projects" element={<Project />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </>
      )}
    </div>
  );
}

export default App;
