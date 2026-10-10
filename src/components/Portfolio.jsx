import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaRocket, 
  FaBookOpen 
} from 'react-icons/fa';

const Portfolio = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 'astrachaos',
      title: "AstraChaos 3D — Celestial Mechanics & Agentic Copilot",
      subtitle: "Generative Inverse Physics Engine · NVIDIA Nemotron · Rust/WASM Core",
      description: "An interactive 3D celestial mechanics simulator and inverse physics engine. Features a vectorized Differential Evolution optimizer over an 18D state space (R^18), an RK4 numerical integrator in Rust/WASM delivering zero-allocation memory at 120 FPS, and an agentic Python FastAPI service connected to NVIDIA Nemotron with Model Context Protocol (MCP) tools.",
      image: `${import.meta.env.BASE_URL}assets/img/projects/astrachaos.jpg`,
      featured: true,
      category: "flagship",
      tech: ["Rust", "WebAssembly", "NVIDIA Nemotron", "MCP", "FastAPI", "Three.js", "Recharts"],
      github: "https://github.com/Pranjalya/AstraChaos-3D",
      demo: "https://github.com/Pranjalya/AstraChaos-3D",
      metrics: "120 FPS Zero-Alloc · 18D State Space · MCP Tools"
    },
    {
      id: 'mythos-atlas',
      title: "Mythos Atlas — 3D Spatio-Temporal Folklore Engine",
      subtitle: "Cartographic WebGL/WASM Engine · Semantic Vector Search",
      description: "A high-performance 3D cartographic folklore atlas and comparative knowledge engine bridging interactive WebGL/WASM cartography with semantic vector search across mythological and oral history corpora.",
      image: `${import.meta.env.BASE_URL}assets/img/projects/mythos_atlas.jpg`,
      featured: true,
      category: "systems",
      tech: ["Python", "WebGL", "WASM", "Qdrant", "Vector Search", "Knowledge Graphs"],
      github: "https://github.com/Pranjalya/mythos-atlas",
      demo: "https://github.com/Pranjalya/mythos-atlas",
      metrics: "3D Globe · Vector Search · Knowledge Graph"
    },
    {
      id: 'ghazal-rag',
      title: "Ghazal / Poem Semantic Search & RAG System",
      subtitle: "Sub-second Metaphor Intent Matching · Qdrant Vector DB",
      description: "End-to-end semantic search and retrieval-augmented generation engine fine-tuned for intricate literary verse and metaphor intent matching, using Qdrant vector database and low-latency FastEmbed.",
      image: `${import.meta.env.BASE_URL}assets/img/projects/ghazal_rag.jpg`,
      featured: false,
      category: "ai",
      tech: ["Python", "Llama 3.2", "Qdrant Vector DB", "LangChain", "FastEmbed"],
      github: "https://github.com/Pranjalya",
      demo: "https://ghazal-search-pranjalya.netlify.app",
      metrics: "Sub-50ms Retrieval · Custom Embeddings"
    },
    {
      id: 'agentic-pdf',
      title: "Autonomous LLM Agent PDF Reader",
      subtitle: "Multi-Modal Document Parsing · Toolchains & Reasoning DAG",
      description: "Autonomous LLM AI agent capable of multi-modal PDF layout parsing, structured table extraction, and multi-step reasoning DAG with citation highlights and code execution sandboxing.",
      image: `${import.meta.env.BASE_URL}assets/img/projects/agentic_pdf.jpg`,
      featured: false,
      category: "ai",
      tech: ["Python", "Agentic AI", "MCP", "PyTorch", "LlamaIndex"],
      github: "https://github.com/Pranjalya/llm-agent-pdf-reader",
      demo: "https://github.com/Pranjalya/llm-agent-pdf-reader",
      metrics: "12★ GitHub · Multi-step DAG Reasoning"
    },
    {
      id: 'triton-mlops',
      title: "Multi-Lingual NLP Service on NVIDIA Triton",
      subtitle: "Enterprise Inference Deployment · GPU Memory Optimization",
      description: "Containerized high-throughput multi-lingual NLP models (NER, Summarization, Classification) deployed on NVIDIA Triton Inference Server with dynamic batching and GPU memory scheduling on Azure MLOps.",
      image: `${import.meta.env.BASE_URL}assets/img/projects/triton_nlp.jpg`,
      featured: false,
      category: "systems",
      tech: ["NVIDIA Triton", "Docker", "PyTorch", "Azure MLOps", "Python"],
      github: "https://github.com/Pranjalya",
      demo: "#",
      metrics: "Dynamic Batching · Triton Server"
    },
    {
      id: 'tortoise-tts',
      title: "TorToiSe TTS Gradio Interface (44★)",
      subtitle: "Interactive Speech Synthesis Demo & Audio Pipeline",
      description: "Open-source interactive Gradio demo for high-fidelity TorToiSe Text-To-Speech with voice cloning, widely utilized in the generative speech community.",
      image: `${import.meta.env.BASE_URL}assets/img/120882.webp`,
      featured: false,
      category: "tools",
      tech: ["Python", "Gradio", "PyTorch", "Speech AI", "HuggingFace"],
      github: "https://github.com/Pranjalya/tts-tortoise-gradio",
      demo: "https://github.com/Pranjalya/tts-tortoise-gradio",
      metrics: "44★ GitHub Stars · 9 Forks"
    },
    {
      id: 'subgit-cli',
      title: "Subgit — High-Performance Go CLI",
      subtitle: "Subdirectory Extraction for Remote Repositories",
      description: "Fast compiled CLI tool written in Go to download specific subfolders from any branch of a GitHub repository without cloning full histories.",
      image: `${import.meta.env.BASE_URL}assets/img/120882.webp`,
      featured: false,
      category: "tools",
      tech: ["Golang", "CLI", "Git Internals", "GitHub API"],
      github: "https://github.com/Pranjalya/subgit",
      demo: "https://github.com/Pranjalya/subgit",
      metrics: "Compiled Go Binary · Zero Overhead"
    }
  ];

  const articles = [
    {
      title: "What is Debiasing and Why is it Important?",
      platform: "Medium",
      link: "https://medium.com/@pranjalyatiwari/what-is-debiasing-and-why-is-it-important-6cad40e8511c",
      topic: "AI Ethics & Model Fairness"
    },
    {
      title: "Did Google Duplex Really Pass the Turing Test?",
      platform: "Medium",
      link: "https://medium.com/@pranjalyatiwari/did-google-duplex-really-pass-the-turing-test-ad62fd8286f5",
      topic: "Conversational AI & Philosophy"
    },
    {
      title: "How Does Google Translate Work?",
      platform: "Medium",
      link: "https://medium.com/@pranjalyatiwari/how-does-google-translate-work-86429c915cc2",
      topic: "Seq2Seq & Neural Machine Translation"
    },
    {
      title: "How to Download Previous Versions of a Kaggle Dataset",
      platform: "Medium",
      link: "https://medium.com/@pranjalyatiwari/how-to-download-previous-versions-of-a-kaggle-dataset-9a8d62b78dcc",
      topic: "Data Engineering & Kaggle CLI"
    }
  ];

  const filterTabs = [
    { key: 'all', label: 'All Engineered Systems' },
    { key: 'flagship', label: 'Flagship' },
    { key: 'ai', label: 'Agentic AI & RAG' },
    { key: 'systems', label: 'Systems & WASM' },
    { key: 'tools', label: 'Open Source & Tools' },
  ];

  const filteredProjects = filter === 'all'
    ? projects
    : projects.filter(p => p.category === filter || (filter === 'flagship' && p.featured));

  const flagshipProject = projects.find(p => p.id === 'astrachaos');

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-space-950">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <FaRocket className="text-xs" />
            <span>Featured Systems &amp; Code</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Production &amp; Research <span className="text-gradient-cyan">Portfolio</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            High-performance applications spanning agentic orchestrations, celestial dynamics, and distributed neural pipelines.
          </p>
        </div>

        {/* Flagship Hero Spotlight: AstraChaos-3D */}
        {flagshipProject && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16 rounded-3xl overflow-hidden glass-panel border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-500 shadow-[0_0_50px_rgba(56,189,248,0.1)] group"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-center">
              {/* Visual Showcase (7 cols) */}
              <div className="lg:col-span-7 relative overflow-hidden bg-space-900 h-72 sm:h-96 lg:h-[460px]">
                <img
                  src={flagshipProject.image}
                  alt={flagshipProject.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-transparent to-transparent opacity-80 lg:hidden" />
                <div className="absolute top-4 left-4 z-20">
                  <span className="px-3 py-1.5 rounded-full text-xs font-mono font-bold bg-cyan-500/30 border border-cyan-400 text-cyan-200 backdrop-blur-md shadow-glow-cyan">
                    ★ FLAGSHIP SYSTEM
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 z-20 hidden sm:block">
                  <span className="px-3 py-1 rounded-lg text-xs font-mono bg-space-950/80 border border-white/10 text-slate-300 backdrop-blur-md">
                    {flagshipProject.metrics}
                  </span>
                </div>
              </div>

              {/* Text / Architecture Specs (5 cols) */}
              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between">
                <div>
                  <div className="text-xs font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    Astrophysics · Agentic AI · Rust / WASM
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white mb-3 leading-snug group-hover:text-cyan-300 transition-colors">
                    {flagshipProject.title}
                  </h3>
                  <p className="text-slate-300 text-sm leading-relaxed mb-6">
                    {flagshipProject.description}
                  </p>

                  {/* Architecture Specs */}
                  <div className="space-y-2 mb-6 text-xs font-mono text-slate-300">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">▹</span>
                      <span><strong>Inverse Physics Engine:</strong> Diff. Evolution in R^18</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">▹</span>
                      <span><strong>Agentic Copilot:</strong> NVIDIA Nemotron with MCP Tools</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">▹</span>
                      <span><strong>Physics Core:</strong> RK4 in Rust/WASM at 120 FPS</span>
                    </div>
                  </div>

                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5 mb-8">
                    {flagshipProject.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                  <a
                    href={flagshipProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-space-950 font-bold text-sm shadow-glow-cyan transition-all"
                  >
                    <FaGithub className="text-base" />
                    <span>View Repository</span>
                  </a>
                  <a
                    href={flagshipProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <span>Architecture Docs</span>
                    <FaExternalLinkAlt className="text-xs" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Filter Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {filterTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-mono transition-all ${
                filter === tab.key
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan/20'
                  : 'bg-space-900 text-slate-400 hover:text-slate-200 border border-white/5 hover:border-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                key={project.id}
                className="group rounded-2xl overflow-hidden glass-panel border border-white/10 hover:border-cyan-500/40 transition-all duration-300 hover:shadow-glow-cyan/20 flex flex-col justify-between"
              >
                <div>
                  {/* Card Image */}
                  <div className="relative h-52 overflow-hidden bg-space-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-space-950 via-space-950/20 to-transparent" />
                    
                    <div className="absolute top-3 right-3 flex gap-2">
                      <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-semibold bg-space-950/80 border border-white/10 text-cyan-300 backdrop-blur-md">
                        {project.category.toUpperCase()}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3">
                      <span className="px-2 py-0.5 rounded text-[11px] font-mono bg-space-950/90 border border-white/10 text-slate-300">
                        {project.metrics}
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {project.title.split('—')[0]}
                    </h4>
                    <div className="text-xs font-mono text-cyan-400/80 mb-3">
                      {project.subtitle}
                    </div>
                    <p className="text-slate-300 text-xs sm:text-sm line-clamp-3 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2 py-0.5 rounded text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Footer / Actions */}
                <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-slate-300 hover:text-cyan-300 transition-colors"
                  >
                    <FaGithub className="text-sm" />
                    <span>Source</span>
                  </a>
                  {project.demo && project.demo !== '#' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-mono text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                    >
                      <span>Live / Demo</span>
                      <FaExternalLinkAlt className="text-[10px]" />
                    </a>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Technical Articles & Writing */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8">
            <div>
              <h3 className="text-2xl font-bold text-white flex items-center gap-2">
                <FaBookOpen className="text-cyan-400 text-lg" />
                <span>Technical Writing &amp; Research Articles</span>
              </h3>
              <p className="text-xs font-mono text-slate-400 mt-1">Deep dives into AI architectures, NLP, and model debiasing</p>
            </div>
            <a
              href="https://medium.com/@pranjalyatiwari"
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono text-cyan-400 hover:text-cyan-300 mt-2 sm:mt-0 flex items-center gap-1.5"
            >
              <span>View Medium Profile</span>
              <FaExternalLinkAlt className="text-[10px]" />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {articles.map((art, idx) => (
              <a
                key={idx}
                href={art.link}
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 rounded-xl glass-panel border border-white/5 hover:border-cyan-400/40 hover:bg-space-850/80 transition-all group flex flex-col justify-between"
              >
                <div>
                  <div className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider mb-2">
                    {art.topic}
                  </div>
                  <h4 className="text-sm font-semibold text-white group-hover:text-cyan-300 transition-colors mb-2">
                    {art.title}
                  </h4>
                </div>
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mt-3 pt-3 border-t border-white/5">
                  <span>{art.platform}</span>
                  <FaExternalLinkAlt className="text-[10px] text-slate-500 group-hover:text-cyan-400 transition-colors" />
                </div>
              </a>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Portfolio;
