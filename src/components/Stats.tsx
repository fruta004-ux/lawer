"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2847, suffix: "건", label: "누적 성공 사례", description: "20년간 쌓아온 실적" },
  { value: 98.7, suffix: "%", label: "낙찰 성공률", description: "업계 최고 수준" },
  { value: 5000, suffix: "+", label: "상담 고객", description: "신뢰로 이어진 인연" },
  { value: 20, suffix: "년", label: "전문 경력", description: "경매만 20년" },
];

function AnimatedNumber({ value, suffix }: { value: number; suffix: string }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      const duration = 2000;
      const steps = 60;
      const increment = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += increment;
        if (current >= value) {
          setDisplayValue(value);
          clearInterval(timer);
        } else {
          setDisplayValue(Math.floor(current * 10) / 10);
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {value % 1 === 0 ? Math.floor(displayValue).toLocaleString() : displayValue.toFixed(1)}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-24 bg-navy-light relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(201, 162, 39, 0.5) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
            Trust & Results
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="gradient-text">숫자</span>가 증명합니다
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            말이 아닌 결과로 보여드립니다. 20년간 쌓아온 신뢰와 실적입니다.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center group"
            >
              <div className="bg-background/50 border border-border hover:border-gold/30 rounded-2xl p-8 transition-all duration-300 card-hover">
                <div className="text-4xl md:text-5xl font-black gradient-text mb-2">
                  <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-xl font-bold text-foreground mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-muted">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 flex flex-wrap justify-center items-center gap-8"
        >
          {[
            "대한변호사협회 등록",
            "서울지방법원 경매 전문",
            "네이버 평점 4.9",
            "카카오 인증 업체",
          ].map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 text-muted hover:text-gold transition-colors"
            >
              <span className="w-2 h-2 bg-gold rounded-full" />
              <span className="font-medium">{badge}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
