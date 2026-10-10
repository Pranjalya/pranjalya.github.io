import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter, FaFileDownload, FaTerminal, FaRocket, FaArrowDown } from 'react-icons/fa';
import { SiRust, SiPytorch, SiNvidia, SiDocker, SiPython } from 'react-icons/si';

const Hero = () => {
  const metrics = [
    { label: 'Production AI Experience', value: '5+ Yrs', highlight: 'Enterprise Scale' },
    { label: 'Turnaround Reduction', value: '80%', highlight: 'LangGraph PowerBI' },
    { label: 'Infrastructure OpEx Saved', value: '30-40%', highlight: 'Triton & Open Source' },
    { label: 'NeurIPS Published Paper', value: '2020', highlight: 'FlowDB Dataset' },
    { label: 'Zero-Allocation Physics', value: '120 FPS', highlight: 'Rust / WASM Core' },
  ];

  return (
    <section className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center overflow-hidden bg-cosmic-grid">
      {/* Hubble Ultra Deep Field Background Atmosphere */}
      <div 
        className="absolute inset-0 z-0 opacity-25 pointer-events-none"
        style={{
          backgroundImage: `url('${import.meta.env.BASE_URL}assets/img/120882.webp')`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Soft vignette & gradient overlays so text remains crisp and legible */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#06080d]/70 via-[#06080d]/85 to-[#06080d]" />
        <div className="absolute inset-0 bg-radial-nebula" />
      </div>

      {/* Background ambient radial glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-violet-600/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-800/80 border border-cyan-500/30 text-cyan-300 text-xs md:text-sm font-mono tracking-wide mb-6 backdrop-blur-md shadow-glow-cyan/20"
          >
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <span>Senior AI & Systems Engineer · Model Context Protocol (MCP) & LangGraph</span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight sm:leading-none text-white"
          >
            Engineering <span className="text-gradient-cyan">Agentic AI</span> &amp; <br className="hidden sm:inline" />
            <span className="text-gradient-aurora">High-Throughput Systems</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal"
          >
            Bridging low-level system performance (<span className="text-cyan-300 font-medium">Rust, PyTorch, C++</span>) with modern autonomous architectures (<span className="text-violet-300 font-medium">LangGraph, MCP, SLM Fine-Tuning</span>) and distributed inference to power next-generation intelligence.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="flex flex-wrap justify-center items-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold shadow-glow-cyan hover:shadow-cyan-500/50 transition-all duration-300 transform hover:-translate-y-0.5 text-base"
            >
              <FaRocket className="text-sm" />
              <span>Explore Flagship Work</span>
            </a>

            <a
              href="#terminal"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-space-800/90 hover:bg-space-700 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-400/40 backdrop-blur-md transition-all duration-300 transform hover:-translate-y-0.5 font-mono text-sm"
            >
              <FaTerminal className="text-cyan-400" />
              <span>Interactive Copilot</span>
            </a>

            <a
              href="/Pranjalya_Tiwari_Resume.pdf"
              download="Pranjalya_Tiwari_Resume.pdf"
              className="inline-flex items-center gap-2 px-5 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white border border-white/10 transition-all text-sm font-medium"
            >
              <FaFileDownload className="text-xs text-slate-400" />
              <span>Resume (PDF)</span>
            </a>
          </motion.div>

          {/* Core Tech Stack Icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-slate-400 text-sm font-mono pt-4 border-t border-white/5 max-w-2xl mx-auto"
          >
            <span className="text-slate-500 uppercase text-xs tracking-wider">Core Stack:</span>
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-cyan-400 transition-colors">
              <SiPython className="text-base text-yellow-400" />
              <span>Python</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-orange-400 transition-colors">
              <SiRust className="text-base text-orange-400" />
              <span>Rust/WASM</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-red-400 transition-colors">
              <SiPytorch className="text-base text-red-400" />
              <span>PyTorch</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-green-400 transition-colors">
              <SiNvidia className="text-base text-green-400" />
              <span>NVIDIA Triton</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-300 hover:text-blue-400 transition-colors">
              <SiDocker className="text-base text-blue-400" />
              <span>Docker &amp; MLOps</span>
            </div>
          </motion.div>
        </div>

        {/* Quantified Impact Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 max-w-5xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-3 p-4 sm:p-6 rounded-2xl glass-panel shadow-2xl">
            {metrics.map((item, idx) => (
              <div
                key={idx}
                className="text-center p-3 rounded-xl bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all group"
              >
                <div className="text-2xl sm:text-3xl font-extrabold font-mono text-cyan-300 group-hover:scale-105 transition-transform">
                  {item.value}
                </div>
                <div className="text-xs font-semibold text-slate-200 mt-1">
                  {item.label}
                </div>
                <div className="text-[11px] text-cyan-400/70 font-mono mt-0.5">
                  {item.highlight}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Down arrow scroll hint */}
      <div className="flex justify-center mt-12">
        <a
          href="#about"
          className="text-slate-500 hover:text-cyan-400 transition-colors animate-bounce p-2"
          aria-label="Scroll down"
        >
          <FaArrowDown className="text-sm" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
