import React from 'react';
import { FaGithub, FaLinkedin, FaTwitter, FaMedium, FaArrowUp } from 'react-icons/fa';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-space-950 py-12 border-t border-white/10 text-slate-400 font-mono text-xs">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Brand / Copyright */}
        <div className="text-center md:text-left">
          <div className="text-white font-bold text-sm tracking-tight flex items-center justify-center md:justify-start gap-2">
            <span>Pranjalya Tiwari</span>
            <span className="text-cyan-400 font-mono text-xs">· Senior AI Engineer</span>
          </div>
          <div className="text-slate-500 mt-1">
            &copy; {new Date().getFullYear()} Pranjalya Tiwari. All rights reserved.
          </div>
        </div>

        {/* Center note */}
        <div className="text-center text-slate-500 text-[11px]">
          <div>Cosmic theme inspired by celestial dynamics &amp; chaotic Hamiltonian physics.</div>
          <div className="text-slate-600 mt-0.5">Cover Reference: Hubble Ultra Deep Field</div>
        </div>

        {/* Socials & Back to Top */}
        <div className="flex items-center space-x-4">
          <a
            href="https://github.com/Pranjalya"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors text-base"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/pranjalya-tiwari/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors text-base"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://twitter.com/PranjalyaQuasar"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors text-base"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://medium.com/@pranjalyatiwari"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-cyan-400 transition-colors text-base"
            aria-label="Medium"
          >
            <FaMedium />
          </a>

          <button
            onClick={scrollToTop}
            className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-slate-300 hover:text-cyan-400 transition-all ml-2"
            title="Back to top"
            aria-label="Back to top"
          >
            <FaArrowUp className="text-xs" />
          </button>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
