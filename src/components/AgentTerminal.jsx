import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaTerminal, FaPlay, FaCircle, FaCopy, FaCheck } from 'react-icons/fa';

const AgentTerminal = () => {
  const [inputVal, setInputVal] = useState('');
  const [copied, setCopied] = useState(false);
  const terminalBodyRef = useRef(null);
  const isInitialMount = useRef(true);

  const commandDatabase = {
    'help': `Available commands:
  • ask nokia           - Multi-agent LangGraph architecture at Ksolves / Nokia
  • cat astrachaos      - AstraChaos-3D inverse physics engine & WASM telemetry
  • skills --mcp        - Model Context Protocol (MCP) toolchains & extensions
  • metrics --all       - Verified enterprise impact and optimization numbers
  • cat resume.summary  - Executive profile summary and contact coordinates
  • clear               - Clear the terminal screen`,

    'ask nokia': `[AGENT DISPATCH: NOKIA ENTERPRISE INTELLIGENCE]
────────────────────────────────────────────────────────────────
Role: Senior Machine Learning Engineer at Ksolves India Ltd.
Architecture: Autonomous Multi-Agent LangGraph System
Key Innovations:
  1. Multi-Agent Routing: LangGraph graph-orchestration dynamically parses internal & external unstructured datasets for telecommunications consultants.
  2. Langflow + MCP: Extended Langflow with custom Model Context Protocol (MCP) servers, enterprise SSO, and granular RBAC.
  3. Text-to-Code: Engineered autonomous PowerBI report extraction pipeline via Chainlit & LangGraph.
  4. Enterprise Impact: 80% reduction in report turnaround time for enterprise consultants.`,

    'cat astrachaos': `[SYSTEM SPEC: ASTRACHAOS-3D INVERSE PHYSICS ENGINE]
────────────────────────────────────────────────────────────────
GitHub: https://github.com/Pranjalya/AstraChaos-3D
Core Pillars:
  • Inverse Physics Engine: Vectorized Differential Evolution optimizer over an 18-dimensional state space (R^18) to reverse-engineer initial conditions from natural language.
  • Agentic Copilot: Python FastAPI service connecting NVIDIA Nemotron with Model Context Protocol (MCP) tools with zero-downtime fallback loops.
  • Rust/WASM Core: RK4 numerical integrator delivering zero-allocation memory at 120 FPS directly into Three.js with Hamiltonian energy scorecards.`,

    'skills --mcp': `[PROTOCOL SPEC: MODEL CONTEXT PROTOCOL (MCP)]
────────────────────────────────────────────────────────────────
Status: Production Deployed (Enterprise & Open Source)
Specializations:
  • Custom Toolchain Synthesis: Connecting NVIDIA Nemotron & SLMs to external state vectors via MCP tools.
  • Langflow Custom Extension: Built internal enterprise MCP adapter with SSO & RBAC.
  • Intent Parsing: Fallback-tolerant agent routing modules to maximize domain-specific accuracy.`,

    'metrics --all': `[VERIFIED IMPACT METRICS]
────────────────────────────────────────────────────────────────
  [✓] 80% Report Turnaround Reduction (Nokia / Enterprise PowerBI Agent)
  [✓] 30% - 40% OpEx Infrastructure Savings (NVIDIA Triton & OSS HuggingFace Models)
  [✓] 120 FPS Zero-Allocation Real-Time Numerical Physics (Rust/WASM Core)
  [✓] 5+ Years Production AI/ML Engineering Experience
  [✓] NeurIPS 2020 Co-Authored Dataset Publication (FlowDB)`,

    'cat resume.summary': `[EXECUTIVE SUMMARY]
────────────────────────────────────────────────────────────────
Name: Pranjalya Tiwari
Title: Senior AI / Machine Learning Engineer (5+ Yrs Exp)
Education: B.Tech CSE (GPA: 9.27/10) - Bhilai Institute of Technology
Location: India
Email: pranjalyatiwari10@gmail.com
GitHub: https://github.com/Pranjalya
LinkedIn: https://www.linkedin.com/in/pranjalya-tiwari/
Resume PDF: Available for instant download via navigation header.`
  };

  const [history, setHistory] = useState([
    {
      command: 'init pranjalya-copilot --v2.5',
      output: `Autonomous Agent Copilot initialized.
Type a command below or click a suggested prompt to inspect Pranjalya's systems architecture.`
    },
    {
      command: 'ask nokia',
      output: commandDatabase['ask nokia']
    }
  ]);

  const quickPrompts = [
    'ask nokia',
    'cat astrachaos',
    'skills --mcp',
    'metrics --all',
    'cat resume.summary',
    'help'
  ];

  const handleCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    if (trimmed === 'clear') {
      setHistory([]);
      setInputVal('');
      return;
    }

    const output = commandDatabase[trimmed] || `Command not found: "${trimmed}". Type "help" to see available commands.`;
    setHistory((prev) => [...prev, { command: cmdText, output }]);
    setInputVal('');
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    handleCommand(inputVal);
  };

  const copyTranscript = () => {
    const text = history.map(h => `$ ${h.command}\n${h.output}`).join('\n\n');
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <section id="terminal" className="py-24 relative overflow-hidden bg-space-950 border-t border-white/5">
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <FaTerminal className="text-xs" />
            <span>Autonomous Intelligence</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Interactive <span className="text-gradient-cyan">Agent Terminal</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Query Pranjalya's real-world agentic architectures, low-level Rust benchmarks, and enterprise impact live.
          </p>
        </div>

        {/* Terminal Container */}
        <div className="max-w-4xl mx-auto">
          {/* Prompt chips */}
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="text-xs font-mono text-slate-500 mr-1">Quick Queries:</span>
            {quickPrompts.map((p) => (
              <button
                key={p}
                onClick={() => handleCommand(p)}
                className="px-3 py-1 rounded-lg text-xs font-mono bg-space-900 hover:bg-space-800 text-cyan-400 border border-cyan-500/20 hover:border-cyan-400/50 transition-all flex items-center gap-1.5 shadow-sm"
              >
                <FaPlay className="text-[8px] text-cyan-400/70" />
                <span>{p}</span>
              </button>
            ))}
          </div>

          {/* Terminal Box */}
          <div className="rounded-2xl overflow-hidden glass-panel border border-cyan-500/30 shadow-[0_0_40px_rgba(56,189,248,0.1)] font-mono text-xs sm:text-sm">
            {/* Title Bar */}
            <div className="px-4 py-3 bg-space-900 border-b border-white/10 flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
                <span className="text-xs text-slate-400 ml-2 font-mono hidden sm:inline">
                  pranjalya@agent-node:~ (bash)
                </span>
              </div>
              <div className="flex items-center space-x-3 text-xs text-slate-400">
                <span className="text-emerald-400 font-semibold flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  ONLINE
                </span>
                <button
                  onClick={copyTranscript}
                  className="hover:text-cyan-400 transition-colors p-1"
                  title="Copy terminal transcript"
                >
                  {copied ? <FaCheck className="text-emerald-400" /> : <FaCopy />}
                </button>
              </div>
            </div>

            {/* Terminal Body */}
            <div 
              ref={terminalBodyRef}
              className="p-5 sm:p-6 bg-[#04060a]/90 text-slate-200 min-h-[380px] max-h-[480px] overflow-y-auto space-y-5"
            >
              {history.map((item, idx) => (
                <div key={idx} className="space-y-1.5">
                  <div className="flex items-center gap-2 text-cyan-400 font-semibold">
                    <span className="text-slate-500">pranjalya@neural:~$</span>
                    <span>{item.command}</span>
                  </div>
                  <pre className="text-slate-300 whitespace-pre-wrap leading-relaxed text-xs sm:text-sm font-mono pl-4 border-l border-cyan-500/30">
                    {item.output}
                  </pre>
                </div>
              ))}
            </div>

            {/* Input Form */}
            <form
              onSubmit={handleFormSubmit}
              className="px-4 py-3 bg-space-900/90 border-t border-white/10 flex items-center gap-3"
            >
              <span className="text-cyan-400 font-bold">❯</span>
              <input
                type="text"
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type a command (e.g. 'cat astrachaos', 'help')..."
                className="w-full bg-transparent text-slate-100 placeholder:text-slate-600 focus:outline-none font-mono text-xs sm:text-sm"
              />
              <button
                type="submit"
                className="px-3 py-1 rounded bg-cyan-500 hover:bg-cyan-400 text-space-950 font-bold text-xs uppercase transition-colors shrink-0"
              >
                Run
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AgentTerminal;
