import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaAward, 
  FaCalendarAlt, 
  FaMapMarkerAlt, 
  FaCheck,
  FaFileAlt
} from 'react-icons/fa';

const Experience = () => {
  const [activeCategory, setActiveCategory] = useState('work');

  const workExperience = [
    {
      id: 1,
      role: "Senior Machine Learning Engineer",
      company: "Ksolves India Ltd.",
      client: "Enterprise Account: Nokia",
      period: "January 2025 - Present",
      location: "Noida, UP, India",
      summary: "Leading autonomous multi-agent systems and Model Context Protocol (MCP) integrations across enterprise intelligence workflows.",
      highlights: [
        "Architected multi-agent LangGraph architectures for enterprise clients (Nokia), enabling autonomous insight generation from unstructured internal and external data sources.",
        "Custom-extended Langflow with Model Context Protocol (MCP) integrations, custom SSO, and granular RBAC to empower non-technical teams to securely prototype enterprise agents.",
        "Engineered an enterprise Text-to-Code data analysis pipeline using LangGraph and Chainlit, automating PowerBI report extraction and execution, reducing report turnaround time by 80% for enterprise users.",
        "Fine-tuned Small Language Models (SLMs) and aligned agent intent refinement modules to maximize domain-specific analytical accuracy."
      ],
      tags: ["LangGraph", "Model Context Protocol (MCP)", "Langflow", "Chainlit", "SLM Fine-Tuning", "PowerBI Automation"]
    },
    {
      id: 2,
      role: "Machine Learning Engineer",
      company: "Deepsync Technologies / Dubpro.ai",
      period: "July 2021 - December 2024",
      location: "Noida, UP, India",
      summary: "Spearheaded production Conversational AI, speech synthesis, and distributed inference optimization.",
      highlights: [
        "Built and deployed enterprise Conversational AI, speech, and vision models in production environments.",
        "Designed an end-to-end multi-modal dubbing pipeline on Apache Airflow, processing hundreds of concurrent video streams with fault-tolerant execution.",
        "Optimized inference pipelines and swapped costly proprietary cloud APIs with optimized open-source alternatives, reducing infrastructure OpEx by 30–40% with models on HuggingFace and custom infra.",
        "Developed interactive Gradio/Streamlit prototypes to showcase technical capabilities directly to senior leadership and enterprise prospects."
      ],
      tags: ["Apache Airflow", "NVIDIA Triton", "Speech AI", "Conversational AI", "OpEx Optimization", "Gradio"]
    },
    {
      id: 3,
      role: "Software Engineer",
      company: "Backprop Technologies",
      period: "October 2020 - June 2021",
      location: "Remote",
      summary: "Engineered Reinforcement Learning optimization systems and synthetic simulation datasets.",
      highlights: [
        "Created synthetic data via simulation to generate training and testing datasets for optimization model building.",
        "Built Reinforcement Learning systems for sequential decision making integrated into existing infrastructure.",
        "Developed Python automation scripts and internal manipulation tools."
      ],
      tags: ["Reinforcement Learning", "Simulation", "Python", "Data Synthesis"]
    },
    {
      id: 4,
      role: "ML Engineer & Developer",
      company: "Kaissa Global Business Systems",
      period: "September 2019 - June 2021",
      location: "Bhilai, India",
      summary: "Engineered scalable web conferencing tools and task optimization models.",
      highlights: [
        "Built real-time web conferencing application from scratch.",
        "Designed machine learning reward models to optimize daily workflows.",
        "Integrated NoSQL distributed datastores with IBM Cloudant."
      ],
      tags: ["Machine Learning", "NoSQL", "Real-Time Systems", "Web Architecture"]
    }
  ];

  const educationAndHonors = [
    {
      title: "B.Tech. in Computer Science & Engineering",
      institution: "Bhilai Institute of Technology, Durg",
      period: "August 2017 - June 2021",
      metric: "GPA: 9.27 / 10",
      description: "Ranked top of department. Head Coordinator of Training & Placement Cell. Secured 1st rank in BITSHINE hardware & software innovation expo. Recipient of Tuition Fee Waiver Scheme."
    },
    {
      title: "NeurIPS 2020 Workshop Publication",
      institution: "Neural Information Processing Systems (NeurIPS)",
      period: "December 2020",
      metric: "Co-Author: FlowDB",
      description: "Co-authored 'FlowDB: A new large scale river flow and flash flood dataset', contributing novel multi-dimensional hydrological datasets for quantitative climate modeling."
    },
    {
      title: "Smart India Hackathon Finalist",
      institution: "Government of India (Team Leader)",
      period: "July 2020",
      metric: "National Finalist",
      description: "Led a team of engineers building deep learning toxicity classification models on live social media text streams."
    },
    {
      title: "NPTEL Programming in C++ (Gold Medal)",
      institution: "IIT Kharagpur / NPTEL",
      period: "Elite Certificate",
      metric: "Top 1% Rank",
      description: "Awarded Gold Medal and Elite Certification for low-level systems programming in C++."
    },
    {
      title: "Deep Learning Specialization",
      institution: "Coursera / deeplearning.ai (Prof. Andrew Ng)",
      period: "Specialization",
      metric: "5 Core Courses",
      description: "Neural Networks, Optimization, CNNs, Sequence Models, and Structuring ML Projects."
    },
    {
      title: "Reinforcement Learning Specialization",
      institution: "University of Alberta / Coursera",
      period: "Specialization",
      metric: "Adaptive Systems",
      description: "Markov Decision Processes, Dynamic Programming, Monte Carlo Methods, TD Learning, Function Approximation."
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-space-900 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <FaBriefcase className="text-xs" />
            <span>Career Milestones</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Professional <span className="text-gradient-cyan">Track Record</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Proven history of delivering high-throughput ML pipelines and multi-agent enterprise architectures.
          </p>

          {/* Toggle Tabs */}
          <div className="inline-flex p-1.5 rounded-2xl bg-space-950 border border-white/10 mt-8">
            <button
              onClick={() => setActiveCategory('work')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeCategory === 'work'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FaBriefcase className="text-xs" />
              <span>Commercial Engineering (5+ Yrs)</span>
            </button>
            <button
              onClick={() => setActiveCategory('education')}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl text-xs sm:text-sm font-mono font-medium transition-all ${
                activeCategory === 'education'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-glow-cyan/20'
                  : 'text-slate-400 hover:text-slate-200'
              }`}
            >
              <FaGraduationCap className="text-xs" />
              <span>Education, Honors &amp; NeurIPS</span>
            </button>
          </div>
        </div>

        {/* Commercial Engineering View */}
        {activeCategory === 'work' && (
          <div className="max-w-4xl mx-auto space-y-8">
            {workExperience.map((exp, idx) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all shadow-card-dark relative group"
              >
                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-white/5">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {exp.role}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 text-sm text-cyan-400 font-mono mt-1">
                      <span className="font-semibold text-slate-200">{exp.company}</span>
                      {exp.client && (
                        <>
                          <span className="text-slate-500">·</span>
                          <span className="px-2 py-0.5 rounded bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs">
                            {exp.client}
                          </span>
                        </>
                      )}
                    </div>
                  </div>

                  <div className="flex flex-col sm:items-end text-xs font-mono text-slate-400">
                    <span className="flex items-center gap-1.5 text-slate-300 font-semibold">
                      <FaCalendarAlt className="text-cyan-400 text-[10px]" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1 text-slate-500 mt-0.5">
                      <FaMapMarkerAlt className="text-[10px]" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-slate-300 text-sm leading-relaxed mb-5 font-medium">
                  {exp.summary}
                </p>

                {/* Bullets */}
                <ul className="space-y-2.5 mb-6 text-xs sm:text-sm text-slate-300">
                  {exp.highlights.map((item, bulletIdx) => (
                    <li key={bulletIdx} className="flex items-start gap-2.5">
                      <span className="mt-1 text-cyan-400 font-bold shrink-0 text-xs">▹</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/5">
                  {exp.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-white/5 border border-white/5 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Education & Honors View */}
        {activeCategory === 'education' && (
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {educationAndHonors.map((edu, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="p-6 rounded-2xl glass-panel border border-white/10 hover:border-cyan-400/30 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="text-lg font-bold text-white">
                      {edu.title}
                    </h3>
                    <span className="px-2.5 py-1 rounded-full text-[10px] font-mono font-bold bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 whitespace-nowrap">
                      {edu.metric}
                    </span>
                  </div>
                  <div className="text-xs font-mono text-cyan-400/90 mb-1">
                    {edu.institution}
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 mb-3">
                    {edu.period}
                  </div>
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                    {edu.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};

export default Experience;
