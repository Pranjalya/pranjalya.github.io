import React from 'react';
import { motion } from 'framer-motion';
import { FaBook, FaAward, FaExternalLinkAlt, FaQuoteRight, FaDownload } from 'react-icons/fa';

const Research = () => {
  return (
    <section id="research" className="py-24 relative overflow-hidden bg-space-950 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <FaBook className="text-xs" />
            <span>Academic Publications</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Research &amp; <span className="text-gradient-cyan">Publications</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Peer-reviewed dataset contributions and quantitative modeling presented at top AI conferences.
          </p>
        </div>

        {/* NeurIPS Featured Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto glass-panel rounded-3xl p-6 sm:p-10 border border-cyan-500/30 shadow-[0_0_40px_rgba(56,189,248,0.12)] relative overflow-hidden"
        >
          {/* Subtle watermark badge */}
          <div className="absolute top-4 right-6 text-7xl font-mono font-black text-white/[0.03] select-none pointer-events-none">
            NEURIPS
          </div>

          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan/20">
              NeurIPS 2020 Workshop Publication
            </span>
            <span className="text-xs font-mono text-slate-400">
              December 2020 · Climate Change AI (CCAI)
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-4 leading-tight">
            FlowDB: A large scale river flow, flash flood, and precipitation dataset
          </h3>

          <div className="text-sm font-mono text-slate-300 mb-6 flex flex-wrap gap-2">
            <span className="text-slate-400">Authors:</span>
            <span className="text-cyan-300 font-semibold">Pranjalya Tiwari</span>, 
            <span className="text-slate-300">et al.</span>
          </div>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
            Contributed novel multi-dimensional hydrological datasets for quantitative climate modeling, flash flood event detection, and damage estimation. The benchmark allows environmental researchers to test sequence-to-sequence deep learning models against real-time extreme hydrological shifts across hundreds of global catchment basins.
          </p>

          {/* BibTeX / Citation block */}
          <div className="p-4 rounded-xl bg-space-950/80 border border-white/10 font-mono text-xs text-slate-400 overflow-x-auto mb-6">
            <code>
              @article&#123;flowdb2020,<br />
              &nbsp;&nbsp;title=&#123;FlowDB: A new large scale river flow and flash flood dataset&#125;,<br />
              &nbsp;&nbsp;author=&#123;Tiwari, Pranjalya and collaborators&#125;,<br />
              &nbsp;&nbsp;journal=&#123;NeurIPS 2020 Workshop on Tackling Climate Change with Machine Learning&#125;,<br />
              &nbsp;&nbsp;year=&#123;2020&#125;<br />
              &#125;
            </code>
          </div>

          {/* Action Links */}
          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/10">
            <a
              href="https://github.com/AIStream-Peelout/flow-forecast"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-space-950 font-bold text-sm shadow-glow-cyan transition-all"
            >
              <FaExternalLinkAlt className="text-xs" />
              <span>Flow Forecast Repository</span>
            </a>
            <a
              href="https://www.climatechange.ai/papers/neurips2020/54"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-200 border border-white/10 text-sm font-medium transition-all"
            >
              <FaBook className="text-xs text-slate-400" />
              <span>Workshop Proceedings</span>
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Research;
