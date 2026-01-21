"use client";

import { motion } from "framer-motion";
import { ArrowRight, Shield, TrendingUp, Clock } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-animated noise-overlay">
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(201, 162, 39, 0.3) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(201, 162, 39, 0.3) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/20 rounded-full text-gold text-sm font-medium mb-8">
                <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
                20년 경력의 경매 전문 법률사무소
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight mb-6"
            >
              경매,
              <br />
              <span className="gradient-text glow-text">혼자 하시겠습니까?</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-muted leading-relaxed mb-8 max-w-xl"
            >
              권리분석 실수 한 번이 수천만 원의 손실로 이어집니다.
              <br />
              <strong className="text-foreground">전문가와 함께라면 다릅니다.</strong>
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <a href="#contact" className="btn-primary flex items-center justify-center gap-2 text-lg">
                무료 상담 받기
                <ArrowRight size={20} />
              </a>
              <a href="#services" className="btn-secondary flex items-center justify-center gap-2">
                서비스 알아보기
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-3 gap-6"
            >
              {[
                { icon: Shield, label: "성공률", value: "98.7%" },
                { icon: TrendingUp, label: "누적 상담", value: "5,000+" },
                { icon: Clock, label: "평균 응답", value: "30분" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-5 h-5 text-gold mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right Content - Visual Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block relative"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="bg-navy-light/80 backdrop-blur-sm border border-border rounded-2xl p-8 glow">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-dark rounded-xl flex items-center justify-center">
                    <span className="text-navy font-black text-2xl">정평</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">정평법률사무소</h3>
                    <p className="text-muted text-sm">사무국장 전석봉</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="bg-background/50 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-muted text-sm">이번 달 성공 낙찰</span>
                      <span className="text-gold font-bold">+23건</span>
                    </div>
                    <div className="h-2 bg-navy rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: "87%" }}
                        transition={{ duration: 1.5, delay: 0.8 }}
                        className="h-full bg-gradient-to-r from-gold to-gold-light rounded-full"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-black gradient-text">2,847</div>
                      <div className="text-muted text-sm">성공 사례</div>
                    </div>
                    <div className="bg-background/50 rounded-lg p-4 text-center">
                      <div className="text-3xl font-black gradient-text">20년</div>
                      <div className="text-muted text-sm">전문 경력</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
                className="absolute -top-4 -right-4 bg-gold text-navy px-4 py-2 rounded-full font-bold text-sm shadow-lg"
              >
                ⭐ 네이버 평점 4.9
              </motion.div>

              {/* Floating Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                className="absolute -bottom-6 -left-6 bg-navy-light border border-border rounded-xl p-4 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/20 rounded-full flex items-center justify-center">
                    <span className="text-green-400 text-lg">✓</span>
                  </div>
                  <div>
                    <div className="text-sm font-semibold">방금 상담 완료</div>
                    <div className="text-xs text-muted">서울 강남구 아파트 경매</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 border-2 border-gold/30 rounded-full flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-1.5 bg-gold rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
