import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBrain, 
  FaCogs, 
  FaServer, 
  FaGraduationCap, 
  FaAward, 
  FaGlobe,
  FaCheckCircle,
  FaAtom
} from 'react-icons/fa';
import { 
  SiPython, 
  SiRust, 
  SiPytorch, 
  SiDocker, 
  SiNvidia, 
  SiFastapi, 
  SiTypescript, 
  SiLinux, 
  SiApacheairflow 
} from 'react-icons/si';

const About = () => {
  const [activeTab, setActiveTab] = useState('agentic');

  const skillCategories = {
    agentic: {
      title: 'Agentic AI & LLMs',
      description: 'Autonomous tool calling, multi-agent graph flows, and intent refinement.',
      skills: [
        { name: 'Model Context Protocol (MCP)', level: 'Advanced / Core', icon: '⚡' },
        { name: 'LangGraph & LangChain', level: 'Production Multi-Agent', icon: '🕸️' },
        { name: 'SLM Fine-Tuning & Alignment', level: 'Enterprise Adaptation', icon: '🎯' },
        { name: 'RAG & Vector Search (Qdrant)', level: 'High-Dimensional Embeddings', icon: '🔍' },
        { name: 'Intent Parsing & Verification', level: 'Zero-Downtime Fallbacks', icon: '🛡️' },
        { name: 'LlamaIndex & Transformers', level: 'Multi-Modal Parsing', icon: '📚' },
      ]
    },
    systems: {
      title: 'Systems & High-Performance',
      description: 'Zero-allocation memory, native numerical engines, and compiled binaries.',
      skills: [
        { name: 'Rust & WebAssembly (WASM)', level: '120 FPS Zero-Alloc Simulation', icon: '🦀' },
        { name: 'PyTorch & CUDA Acceleration', level: 'Deep Learning & GPU Kernels', icon: '🔥' },
        { name: 'C++ Systems Programming', level: 'NPTEL Gold Medalist', icon: '⚙️' },
        { name: 'Golang CLI & Microservices', level: 'Concurrency & Network Tools', icon: '🐹' },
        { name: 'Differential Evolution in R^18', level: 'Inverse Physics Optimizer', icon: '🌌' },
        { name: 'RK4 Numerical Integration', level: 'Astrophysics & Chaotic State Vectors', icon: '🪐' },
      ]
    },
    mlops: {
      title: 'MLOps, Cloud & Infrastructure',
      description: 'Distributed inference servers, containerization, and data orchestrations.',
      skills: [
        { name: 'NVIDIA Triton Inference Server', level: 'Dynamic Batching & Multi-Lingual', icon: '⚡' },
        { name: 'Docker & Containerization', level: 'Microservice Deployment', icon: '🐳' },
        { name: 'Apache Airflow', level: 'Concurrent Multi-Modal Pipelines', icon: '🌪️' },
        { name: 'AWS / GCP / Azure MLOps', level: 'Enterprise Cloud Architecture', icon: '☁️' },
        { name: 'Linux / Shell Scripting', level: 'Low-Latency System Tuning', icon: '🐧' },
        { name: 'CI/CD & Automated Telemetry', level: 'Production Monitoring', icon: '📊' },
      ]
    },
    web: {
      title: 'Full Stack & Scientific UI',
      description: 'Interactive WebGL, Three.js 3D telemetry, and asynchronous microservices.',
      skills: [
        { name: 'Python FastAPI', level: 'Streaming SSE & Real-Time APIs', icon: '⚡' },
        { name: 'Three.js & WebGL 3D', level: 'Interactive Celestial Mechanics', icon: '🌐' },
        { name: 'TypeScript & JavaScript', level: 'Modern Frontend Architecture', icon: '📜' },
        { name: 'React 19 & Next.js', level: 'High-Performance Reactive UIs', icon: '⚛️' },
        { name: 'Chainlit & Gradio', level: 'Enterprise AI Prototyping', icon: '💬' },
        { name: 'Tailwind CSS & Framer Motion', level: 'Fluid Cybernetic Aesthetics', icon: '🎨' },
      ]
    }
  };

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-space-900 border-t border-b border-white/5">
      {/* Background ambient accents */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <FaAtom className="text-xs" />
            <span>Profile &amp; Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Bridging Machine Learning &amp; <span className="text-gradient-cyan">Low-Level Systems</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Engineering high-throughput AI agents, custom inference servers, and mathematical simulations.
          </p>
        </div>

        {/* Two-column layout: Bio & Highlights + Interactive Tech Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Comprehensive Bio & Credentials (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-card-dark">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span>Executive Profile</span>
              </h3>
              
              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
                <p>
                  I am a <strong className="text-white font-semibold">Senior AI / Machine Learning Engineer</strong> with over 5 years of production experience designing autonomous <strong className="text-cyan-300 font-semibold">Agentic AI systems</strong>, enterprise multi-agent workflows, and distributed MLOps pipelines.
                </p>
                <p>
                  My engineering philosophy bridges <strong className="text-violet-300 font-semibold">low-level performance</strong> (Rust, WebAssembly, PyTorch GPU acceleration) with <strong className="text-cyan-300 font-semibold">emerging agentic paradigms</strong> (Model Context Protocol, LangGraph, SLM fine-tuning). I focus on measurable enterprise efficiency—turning slow manual analytics into streaming automated intelligence.
                </p>
              </div>

              {/* Fast Facts Grid */}
              <div className="grid grid-cols-2 gap-3 mt-6 pt-6 border-t border-white/10 text-xs font-mono">
                <div className="p-3 rounded-xl bg-space-850/80 border border-white/5">
                  <span className="text-slate-500 block text-[10px] uppercase">Education</span>
                  <span className="text-slate-200 font-bold">B.Tech CSE (9.27/10)</span>
                  <span className="text-slate-400 block text-[10px]">BIT Durg (2017-2021)</span>
                </div>
                <div className="p-3 rounded-xl bg-space-850/80 border border-white/5">
                  <span className="text-slate-500 block text-[10px] uppercase">Research</span>
                  <span className="text-cyan-300 font-bold">NeurIPS 2020 Author</span>
                  <span className="text-slate-400 block text-[10px]">FlowDB Climate Dataset</span>
                </div>
                <div className="p-3 rounded-xl bg-space-850/80 border border-white/5">
                  <span className="text-slate-500 block text-[10px] uppercase">Current Role</span>
                  <span className="text-slate-200 font-bold">Senior ML Engineer</span>
                  <span className="text-slate-400 block text-[10px]">Ksolves (Nokia Account)</span>
                </div>
                <div className="p-3 rounded-xl bg-space-850/80 border border-white/5">
                  <span className="text-slate-500 block text-[10px] uppercase">Interests</span>
                  <span className="text-slate-200 font-bold">Cosmology &amp; Rust</span>
                  <span className="text-slate-400 block text-[10px]">N-Body Chaos, Poetry</span>
                </div>
              </div>

              {/* Contact Quick Link */}
              <div className="mt-6 pt-4 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">Email: pranjalyatiwari10@gmail.com</span>
                <span className="text-xs text-emerald-400 font-mono flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  India 🇮🇳
                </span>
              </div>
            </div>

            {/* Cosmology & Hubble Ultra Deep Field Spotlight Card */}
            <div className="glass-panel rounded-2xl overflow-hidden border border-white/10 group shadow-card-dark">
              <div className="relative h-44 sm:h-48 overflow-hidden bg-space-950">
                <img 
                  src={`${import.meta.env.BASE_URL}assets/img/120882.webp`} 
                  alt="Hubble Ultra Deep Field"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/40 to-transparent" />
                <div className="absolute top-3 left-3">
                  <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-space-950/85 border border-cyan-400/40 text-cyan-300 backdrop-blur-md shadow-glow-cyan/20">
                    COSMIC INSPIRATION
                  </span>
                </div>
              </div>
              <div className="p-5">
                <h4 className="text-sm font-bold text-white flex items-center justify-between mb-1.5">
                  <span className="text-cyan-300">Hubble Ultra Deep Field</span>
                  <span className="text-[11px] text-slate-400 font-mono">~10,000 Galaxies</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-mono">
                  A foundational touchstone of mathematical wonder—capturing 13 billion years of light. My passion for astrophysics, radio pulsar analysis (Univ. of Sydney), and chaotic Hamiltonian orbital mechanics directly inspired the <strong className="text-cyan-300 font-semibold">AstraChaos 3D</strong> simulation core.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Interactive Tech Stack Matrix (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 space-y-6"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/10 shadow-card-dark">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-white/10 gap-3">
                <div>
                  <h3 className="text-xl font-bold text-white">Engineered Tech Matrix</h3>
                  <p className="text-xs text-slate-400 font-mono mt-0.5">Categorized by architectural domain</p>
                </div>
                
                {/* Domain Selector Pills */}
                <div className="flex flex-wrap gap-1.5 p-1 rounded-xl bg-space-950/80 border border-white/10">
                  {Object.keys(skillCategories).map((key) => (
                    <button
                      key={key}
                      onClick={() => setActiveTab(key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono font-medium transition-all ${
                        activeTab === key
                          ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan/20'
                          : 'text-slate-400 hover:text-slate-200 hover:bg-white/5'
                      }`}
                    >
                      {skillCategories[key].title.split('&')[0].trim()}
                    </button>
                  ))}
                </div>
              </div>

              {/* Active Tab Description */}
              <div className="mb-6 p-3 rounded-xl bg-white/[0.02] border border-white/5 text-xs text-slate-300 font-mono flex items-center justify-between">
                <span>{skillCategories[activeTab].description}</span>
                <span className="text-cyan-400 font-bold uppercase tracking-wider text-[10px]">Verified Production</span>
              </div>

              {/* Skill Cards Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {skillCategories[activeTab].skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                    className="p-3.5 rounded-xl bg-space-850/60 border border-white/5 hover:border-cyan-500/30 hover:bg-space-800/80 transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-2">
                        <span className="text-base">{skill.icon}</span>
                        <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors">
                          {skill.name}
                        </h4>
                      </div>
                    </div>
                    <div className="mt-2 text-[11px] font-mono text-cyan-400/80 flex items-center gap-1.5">
                      <FaCheckCircle className="text-[10px] text-cyan-400" />
                      <span>{skill.level}</span>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Philosophy Quote */}
              <div className="mt-6 pt-5 border-t border-white/5 flex items-center justify-between text-xs text-slate-400 font-mono italic">
                <span>"Bridging chaotic mathematical physics with generative neural reasoning."</span>
                <span className="text-slate-600 not-italic font-bold">v2.5</span>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
