"use client";

import { motion } from "framer-motion";
import { Search, FileCheck, Gavel, Home, Scale, FileText } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "물건 분석 & 선별",
    description: "수천 개의 경매 물건 중 투자 가치 있는 물건만 선별해 드립니다. 시세 대비 수익률, 지역 발전 가능성까지 종합 분석.",
    features: ["시세 분석", "입지 평가", "수익률 계산"],
  },
  {
    icon: FileCheck,
    title: "권리분석",
    description: "등기부등본, 현황조사서, 매각물건명세서를 꼼꼼히 분석. 숨겨진 위험요소를 찾아내 안전한 투자를 보장합니다.",
    features: ["등기 분석", "임차인 조사", "위험요소 체크"],
  },
  {
    icon: Gavel,
    title: "입찰 대리",
    description: "최적의 입찰가 산정부터 법원 입찰까지. 바쁜 당신을 대신해 전 과정을 진행합니다.",
    features: ["입찰가 산정", "서류 준비", "법원 대리 입찰"],
  },
  {
    icon: Home,
    title: "명도 대행",
    description: "낙찰 후 가장 어려운 명도 문제. 협상부터 법적 조치까지 원스톱으로 해결해 드립니다.",
    features: ["점유자 협상", "명도소송", "강제집행"],
  },
  {
    icon: Scale,
    title: "경매 소송",
    description: "배당이의, 매각허가결정 취소 등 경매 관련 모든 소송을 전문적으로 수행합니다.",
    features: ["배당이의", "소유권 분쟁", "손해배상"],
  },
  {
    icon: FileText,
    title: "사후 관리",
    description: "낙찰 후 등기 이전, 세금 신고, 임대 관리까지. 투자의 마무리까지 책임집니다.",
    features: ["등기 이전", "세금 신고", "임대 관리"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl -translate-y-1/2" />
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
            Our Services
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            경매의 <span className="gradient-text">A to Z</span>,<br />
            모두 맡기세요
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            물건 선별부터 명도까지, 경매의 모든 과정을 원스톱으로 진행합니다.
            <br />당신은 결과만 확인하시면 됩니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-navy-light/30 border border-border hover:border-gold/30 rounded-2xl p-8 card-hover"
            >
              <div className="w-14 h-14 bg-gold/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-gold/20 transition-colors">
                <service.icon className="w-7 h-7 text-gold" />
              </div>
              
              <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-gold transition-colors">
                {service.title}
              </h3>
              
              <p className="text-muted leading-relaxed mb-6">
                {service.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature, fIndex) => (
                  <span
                    key={fIndex}
                    className="text-xs bg-gold/10 text-gold px-3 py-1.5 rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 text-lg">
            서비스 상담 받기
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
