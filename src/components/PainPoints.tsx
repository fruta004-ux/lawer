"use client";

import { motion } from "framer-motion";

const points = [
  { 
    label: "FINANCIAL LOSS", 
    title: "권리분석 실패", 
    desc: "등본에 보이지 않는 대항력 있는 임차인, 한 번의 실수로 입찰 보증금 몰수부터 추가 인수금까지 수천만 원의 자산이 사라집니다." 
  },
  { 
    label: "LEGAL CONFLICT", 
    title: "명도 지연 및 소송", 
    desc: "점유자의 막무가내식 버티기부터 복잡한 인도명령, 명도소송까지. 불필요한 시간 낭비와 정신적 고통은 오롯이 낙찰자의 몫입니다." 
  },
  { 
    label: "HIDDEN TRAPS", 
    title: "유치권 및 법정지상권", 
    desc: "가짜 유치권부터 성립 여부가 불분명한 지상권까지. 경매 고수들도 혀를 내두르는 법적 함정은 당신의 자산을 묶어버립니다." 
  },
];

export default function PainPoints() {
  return (
    <section className="py-40 bg-background relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="mb-16">
              <span className="text-red-500 font-bold tracking-[0.2em] text-sm block mb-4">THE REALITY OF AUCTION</span>
              <h2 className="text-5xl md:text-6xl font-black text-foreground leading-[1.1] tracking-tighter">
                높은 수익률 뒤에 숨은 <br />
                <span className="text-red-500">치명적인 법적 위험들</span>
              </h2>
            </div>
            
            <div className="space-y-16">
              {points.map((point, i) => (
                <div key={i} className="group relative pl-8 border-l border-white/10 hover:border-red-500 transition-colors duration-500">
                  <span className="text-red-500/40 font-black tracking-widest text-xs block mb-3 group-hover:text-red-500 transition-colors">{point.label}</span>
                  <h3 className="text-3xl font-bold text-foreground mb-4">
                    {point.title}
                  </h3>
                  <p className="text-lg text-muted leading-relaxed max-w-xl">
                    {point.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="sticky top-40"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl">
              <div 
                className="absolute inset-0 bg-cover bg-center transition-transform duration-[2s] hover:scale-110"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=2070&auto=format&fit=crop')`, // 좀 더 고급스러운 법률/경매 느낌 이미지
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-navy via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-0 left-0 p-12 w-full">
                <div className="bg-white/5 backdrop-blur-xl border border-white/10 p-10 rounded-3xl">
                  <p className="text-2xl font-medium text-white leading-tight italic">
                    "경매는 단순히 싸게 사는 기술이 아니라, <br />
                    <span className="text-gold font-bold not-italic">안전하게 자산을 지키는 법률의 기술</span>입니다."
                  </p>
                  <div className="mt-6 flex items-center gap-4">
                    <div className="w-12 h-px bg-gold" />
                    <span className="text-gold font-bold tracking-widest text-sm uppercase">Strategy by Jeong-Pyeong</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
