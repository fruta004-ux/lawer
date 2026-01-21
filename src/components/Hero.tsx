"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-navy">
      {/* Background Image with Parallax-like overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-105"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop')`, // 고품질 빌딩/부동산 이미지
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-navy/90 via-navy/60 to-navy" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 pt-20">
        <div className="flex flex-col items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4"
          >
            <span className="text-gold font-bold tracking-[0.3em] text-sm md:text-base border-l-2 border-gold pl-4">
              JEONG-PYEONG LAW FIRM
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <h1 className="huge-text mb-4">
              <span className="text-foreground block">AUCTION</span>
              <span className="gradient-text glow-text">STRATEGY</span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="max-w-3xl"
          >
            <p className="text-2xl md:text-4xl font-light text-foreground/80 leading-tight mb-12 tracking-tight">
              당신의 자산을 지키는 가장 강력한 법률 파트너, <br />
              <span className="text-foreground font-bold">정평법률사무소</span>가 함께합니다.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-wrap gap-6"
          >
            <a href="#contact" className="group flex items-center gap-4 bg-gold hover:bg-gold-light text-navy font-black px-10 py-6 rounded-full transition-all duration-300 transform hover:scale-105">
              <span className="text-xl">무료 상담 신청하기</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="flex flex-col justify-center">
              <span className="text-gold font-bold text-lg">전석봉 사무국장</span>
              <span className="text-muted text-sm">경매 경력 20년 전문가 상주</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Side Decorative Text */}
      <div className="absolute right-0 bottom-24 hidden xl:block overflow-hidden rotate-90 origin-right translate-y-full">
        <span className="text-[12rem] font-black text-white/5 whitespace-nowrap leading-none select-none">
          PREMIUM AUCTION SERVICE
        </span>
      </div>
    </section>
  );
}
