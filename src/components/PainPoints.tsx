"use client";

import { motion } from "framer-motion";
import { AlertTriangle, XCircle, HelpCircle, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: AlertTriangle,
    title: "권리분석, 자신 있으세요?",
    description: "선순위 임차인, 유치권, 법정지상권... 하나만 놓쳐도 낙찰가보다 더 큰 돈을 물어야 합니다.",
    stat: "권리분석 실패로 인한 평균 손실",
    statValue: "3,200만원",
  },
  {
    icon: XCircle,
    title: "명도, 생각보다 어렵습니다",
    description: "낙찰 받았는데 점유자가 안 나가면? 협상부터 소송까지, 홀로 감당하기엔 너무 복잡합니다.",
    stat: "명도 지연으로 인한 평균 손실",
    statValue: "월 150만원",
  },
  {
    icon: HelpCircle,
    title: "어디서부터 시작해야 할지...",
    description: "법원 경매 사이트는 어렵고, 물건 선별은 막막하고. 시간은 가는데 확신은 없습니다.",
    stat: "초보자 첫 낙찰까지 평균 소요",
    statValue: "8개월",
  },
  {
    icon: TrendingDown,
    title: "입찰가, 감으로 정하시나요?",
    description: "너무 높으면 손해, 너무 낮으면 유찰. 적정 입찰가 산정은 경험과 데이터가 필요합니다.",
    stat: "부적정 입찰로 인한 기회비용",
    statValue: "연 12%",
  },
];

export default function PainPoints() {
  return (
    <section className="py-24 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-500/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-red-400 font-semibold text-sm tracking-wider uppercase mb-4 block">
            혼자 하면 생기는 일
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            경매 실패,<br />
            <span className="text-red-400">남의 일이 아닙니다</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            매년 수천 명이 준비 없이 경매에 뛰어들어 큰 손실을 봅니다.
            <br />당신은 그 통계의 일부가 되지 마세요.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {painPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-navy-light/50 border border-red-500/10 hover:border-red-500/30 rounded-2xl p-8 transition-all duration-300"
            >
              <div className="flex items-start gap-5">
                <div className="flex-shrink-0 w-14 h-14 bg-red-500/10 rounded-xl flex items-center justify-center group-hover:bg-red-500/20 transition-colors">
                  <point.icon className="w-7 h-7 text-red-400" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-red-400 transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-muted leading-relaxed mb-4">
                    {point.description}
                  </p>
                  <div className="bg-red-500/5 rounded-lg px-4 py-3 inline-flex items-center gap-3">
                    <span className="text-sm text-muted">{point.stat}</span>
                    <span className="text-red-400 font-bold text-lg">{point.statValue}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-gold/10 to-transparent border border-gold/20 rounded-full px-8 py-4">
            <span className="text-gold text-2xl">💡</span>
            <p className="text-lg">
              <span className="text-muted">하지만 </span>
              <span className="text-gold font-bold">전문가와 함께라면</span>
              <span className="text-muted"> 이 모든 위험을 피할 수 있습니다</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
