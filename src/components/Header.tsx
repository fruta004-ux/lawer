"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "서비스", href: "#services" },
    { name: "진행과정", href: "#process" },
    { name: "고객후기", href: "#testimonials" },
    { name: "자주 묻는 질문", href: "#faq" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-br from-gold to-gold-dark rounded flex items-center justify-center">
              <span className="text-navy font-black text-lg">정</span>
            </div>
            <div>
              <span className="text-xl font-bold text-foreground group-hover:text-gold transition-colors">
                정평법률사무소
              </span>
              <span className="block text-xs text-muted -mt-1">경매 전문</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground/80 hover:text-gold transition-colors font-medium relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:010-4118-2363"
              className="flex items-center gap-2 text-gold hover:text-gold-light transition-colors"
            >
              <Phone size={18} />
              <span className="font-semibold">010-4118-2363</span>
            </a>
            <a href="#contact" className="btn-primary text-sm">
              무료 상담 신청
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden text-foreground p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-navy-light border-t border-border"
          >
            <nav className="flex flex-col p-6 gap-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-foreground/80 hover:text-gold transition-colors font-medium py-2"
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4 border-t border-border">
                <a
                  href="tel:02-1234-5678"
                  className="flex items-center gap-2 text-gold mb-4"
                >
                  <Phone size={18} />
                  <span className="font-semibold">02-1234-5678</span>
                </a>
                <a href="#contact" className="btn-primary block text-center">
                  무료 상담 신청
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
