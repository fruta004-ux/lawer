"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, FileCheck, Gavel, Home, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "무료 상담",
    description: "전화, 카톡, 방문 상담 모두 가능합니다. 경매 목적과 예산을 파악하고 맞춤 전략을 제안드립니다.",
    duration: "30분",
  },
  {
    icon: Search,
    step: "02",
    title: "물건 선별",
    description: "수천 개의 물건 중 고객님의 조건에 맞는 최적의 물건을 선별합니다. 시세, 입지, 수익률 종합 분석.",
    duration: "1-2주",
  },
  {
    icon: FileCheck,
    step: "03",
    title: "권리분석",
    description: "등기부등본, 현황조사서, 매각물건명세서를 정밀 분석. 숨겨진 위험요소를 찾아냅니다.",
    duration: "3-5일",
  },
  {
    icon: Gavel,
    step: "04",
    title: "입찰 진행",
    description: "최적의 입찰가를 산정하고, 입찰 서류 준비부터 법원 제출까지 모든 과정을 대행합니다.",
    duration: "입찰일",
  },
  {
    icon: Home,
    step: "05",
    title: "명도 & 인도",
    description: "낙찰 후 점유자 협상, 명도소송, 강제집행까지. 안전하게 물건을 인도받을 수 있도록 합니다.",
    duration: "1-3개월",
  },
  {
    icon: CheckCircle,
    step: "06",
    title: "등기 & 마무리",
    description: "소유권 이전 등기, 세금 신고, 임대 관리까지. 투자의 마무리를 책임집니다.",
    duration: "2-4주",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent" />
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
            How It Works
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="gradient-text">6단계</span>로 끝나는<br />
            경매 성공 프로세스
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            복잡한 경매, 정평법률사무소와 함께라면 단순해집니다.
            <br />체계적인 프로세스로 성공을 이끌어냅니다.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative group"
              >
                {/* Step Number */}
                <div className="absolute -top-4 left-6 bg-gold text-navy font-black text-sm px-3 py-1 rounded-full z-10">
                  STEP {step.step}
                </div>

                <div className="bg-navy-light/50 border border-border hover:border-gold/30 rounded-2xl p-8 pt-10 h-full transition-all duration-300 card-hover">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                    <step.icon className="w-8 h-8 text-gold" />
                  </div>

                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-muted leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-muted">예상 소요:</span>
                    <span className="text-gold font-semibold">{step.duration}</span>
                  </div>
                </div>

                {/* Arrow - Desktop */}
                {index < steps.length - 1 && index !== 2 && (
                  <div className="hidden lg:block absolute top-24 -right-4 text-gold/30 text-2xl z-20">
                    →
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-navy-light/50 border border-gold/20 rounded-2xl p-6">
            <div className="text-center sm:text-left">
              <p className="text-lg font-semibold text-foreground mb-1">
                첫 상담은 <span className="text-gold">무료</span>입니다
              </p>
              <p className="text-muted text-sm">부담 없이 문의하세요. 강매는 절대 하지 않습니다.</p>
            </div>
            <a href="#contact" className="btn-primary whitespace-nowrap">
              무료 상담 신청
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
