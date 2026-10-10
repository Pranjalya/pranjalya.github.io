import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  FaEnvelope, 
  FaMapMarkerAlt, 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaCopy, 
  FaCheck, 
  FaFileDownload,
  FaExternalLinkAlt,
  FaComments,
  FaPaperPlane
} from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "pranjalyatiwari10@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-space-900 border-t border-white/5">
      {/* Ambient background glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono uppercase tracking-widest mb-3">
            <FaComments className="text-xs" />
            <span>Connect &amp; Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight mb-4">
            Let's Build <span className="text-gradient-cyan">Intelligence Together</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg">
            Available for Senior AI / ML Engineering roles, Agentic AI architectures, and high-impact advisory.
          </p>
        </div>

        {/* Primary Channels Grid */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          
          {/* Card 1: LinkedIn Direct Message (Primary Hiring & Executive Reach) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-2xl glass-panel border border-cyan-500/30 hover:border-cyan-400/60 transition-all shadow-[0_0_35px_rgba(56,189,248,0.12)] flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/30 flex items-center justify-center text-blue-400 text-2xl group-hover:scale-105 transition-transform">
                  <FaLinkedin />
                </div>
                <span className="px-3 py-1 rounded-full text-[11px] font-mono font-bold bg-blue-500/10 border border-blue-400/30 text-blue-300">
                  RECOMMENDED FOR RECRUITERS
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Connect on LinkedIn
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-6 font-normal">
                Direct inboxes for talent acquisition teams, engineering leadership, and enterprise AI consulting inquiries. Message me directly to discuss senior opportunities or technical roadmaps.
              </p>
            </div>

            <a
              href="https://www.linkedin.com/in/pranjalya-tiwari/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white font-bold text-sm shadow-glow-cyan transition-all transform hover:-translate-y-0.5"
            >
              <FaLinkedin className="text-base" />
              <span>Send Message on LinkedIn</span>
              <FaExternalLinkAlt className="text-xs ml-1 opacity-70" />
            </a>
          </motion.div>

          {/* Card 2: Direct Verified Email (Instant Copy & Compose) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-8 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/40 transition-all shadow-card-dark flex flex-col justify-between group"
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 text-xl group-hover:scale-105 transition-transform">
                  <FaEnvelope />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-mono bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  &lt; 24h Response
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                Personal Email Inbox
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed mb-4 font-normal">
                Prefer email? Copy my direct address with one click or open your default mail client with a pre-configured subject header.
              </p>

              {/* Email Address Display Pill */}
              <div className="p-3.5 rounded-xl bg-space-950/90 border border-white/10 font-mono text-xs sm:text-sm text-cyan-300 flex items-center justify-between mb-6">
                <span className="truncate">{email}</span>
                <button
                  onClick={copyEmail}
                  className="px-3 py-1 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all text-xs flex items-center gap-1.5 ml-2 shrink-0 border border-white/5"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <FaCheck className="text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <FaCopy />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            <a
              href={`mailto:${email}?subject=Senior%20AI%2FML%20Engineering%20Opportunity%20-%20Pranjalya%20Tiwari`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-space-800 hover:bg-space-700 text-slate-200 hover:text-white border border-white/10 hover:border-cyan-400/50 font-bold text-sm transition-all"
            >
              <FaPaperPlane className="text-xs text-cyan-400" />
              <span>Compose Email in Mail Client</span>
            </a>
          </motion.div>

        </div>

        {/* Secondary Info & Telemetry Row */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          {/* GitHub Collaboration */}
          <a
            href="https://github.com/Pranjalya"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-200 text-xl group-hover:text-cyan-300">
                <FaGithub />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  GitHub Profile
                </h4>
                <div className="text-[11px] font-mono text-slate-400">
                  @Pranjalya · Code &amp; Repos
                </div>
              </div>
            </div>
            <FaExternalLinkAlt className="text-xs text-slate-500 group-hover:text-cyan-400 transition-colors" />
          </a>

          {/* Twitter / X */}
          <a
            href="https://twitter.com/PranjalyaQuasar"
            target="_blank"
            rel="noopener noreferrer"
            className="p-5 rounded-2xl glass-panel border border-white/10 hover:border-cyan-500/30 transition-all group flex items-center justify-between"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-slate-200 text-lg group-hover:text-sky-400">
                <FaTwitter />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-sky-300 transition-colors">
                  Twitter / X
                </h4>
                <div className="text-[11px] font-mono text-slate-400">
                  @PranjalyaQuasar · AI &amp; Tech
                </div>
              </div>
            </div>
            <FaExternalLinkAlt className="text-xs text-slate-500 group-hover:text-sky-400 transition-colors" />
          </a>

          {/* 1-Click Resume Download */}
          <a
            href="/Pranjalya_Tiwari_Resume.pdf"
            download="Pranjalya_Tiwari_Resume.pdf"
            className="p-5 rounded-2xl glass-panel border border-cyan-500/30 hover:border-cyan-400 transition-all group flex items-center justify-between bg-cyan-500/5 hover:bg-cyan-500/10"
          >
            <div className="flex items-center gap-3.5">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/20 border border-cyan-400/30 flex items-center justify-center text-cyan-300 text-lg">
                <FaFileDownload />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white group-hover:text-cyan-300 transition-colors">
                  Resume (PDF)
                </h4>
                <div className="text-[11px] font-mono text-cyan-400/80">
                  1-Click Instant Download
                </div>
              </div>
            </div>
            <span className="text-xs font-mono font-bold text-cyan-400">↓ PDF</span>
          </a>

        </div>

      </div>
    </section>
  );
};

export default Contact;
