import { motion } from 'framer-motion';
import React from 'react';

const Transition = (OgComponent) => {
  return () => (
    <>
      <OgComponent />
      {/* Slide In */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br 
                    transform-gpu flex items-center justify-center z-50"
        initial={{ scaleY: 0}}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1}}
        transition={{ 
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1 
        }}
      >


        <div className="relative">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-white via-gray-200 to-gray-400
                       tracking-tight z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            Shophere
          </motion.h1>
          <motion.div 
            className="absolute -inset-1 blur-lg bg-gradient-to-r from-white/20 to-transparent 
                       opacity-50 -z-10"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.5 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          />
        </div>
      </motion.div>

      {/* Slide Out */}
      <motion.div
        className="fixed inset-0 bg-gradient-to-br from-primary via-tertiary to-green-600 
                    transform-gpu flex items-center justify-center z-50"
        initial={{ clipPath: 'inset(0 0 0 0)' }}
        animate={{ clipPath: 'inset(100% 0 0 0)' }}
        exit={{ clipPath: 'inset(0 0 0 0)' }}
        transition={{ 
          duration: 0.5, 
          ease: [0.22, 1, 0.36, 1],
          delay: 0.1 
        }}
      >
        <div className="relative">
          <motion.h1 
            className="text-5xl md:text-7xl font-bold text-transparent bg-clip-text 
                       bg-gradient-to-r from-white via-gray-200 to-gray-400
                       tracking-tight"
            initial={{ opacity: 1, y: 0 }}
            animate={{ opacity: 1, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            Shophere
          </motion.h1>
          <motion.div 
            className="absolute -inset-1 blur-lg bg-gradient-to-r from-white to-transparent 
                       opacity-50 -z-10"
            initial={{ scale: 1, opacity: 0.5 }}
            animate={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.8 }}
          />
        </div>
      </motion.div>
    </>
  );
};

export default Transition;