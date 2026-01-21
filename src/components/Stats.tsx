"use client";

import { motion } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 2847, label: "SUCCESSFUL CASES", desc: "20년간의 압도적 성공 사례" },
  { value: 98.7, label: "WIN RATE", desc: "실패를 허용하지 않는 철저한 분석" },
  { value: 20, label: "YEARS EXP", desc: "경매 시장의 격동을 함께한 시간" },
];

function AnimatedNumber({ value }: { value: number }) {
  const [displayValue, setDisplayValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsInView(true);
    });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

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
          setDisplayValue(current);
        }
      }, duration / steps);
      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {value % 1 === 0 ? Math.floor(displayValue).toLocaleString() : displayValue.toFixed(1)}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-40 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-3 gap-24">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="relative text-center lg:text-left"
            >
              <div className="flex flex-col">
                <span className="text-gold font-black tracking-widest text-sm mb-4">{stat.label}</span>
                <span className="text-7xl md:text-9xl font-black text-foreground leading-none mb-6">
                  <AnimatedNumber value={stat.value} />
                  {stat.value === 98.7 ? "%" : ""}
                  {stat.value === 20 ? "Y" : ""}
                </span>
                <p className="text-xl text-muted font-medium">{stat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      {/* Background Decorative Text */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-full flex justify-center opacity-[0.02] pointer-events-none select-none">
        <span className="text-[30rem] font-black whitespace-nowrap">TRUST & RESULTS</span>
      </div>
    </section>
  );
}
