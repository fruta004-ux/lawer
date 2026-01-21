"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "경매 초보자도 상담 가능한가요?",
    answer: "물론입니다. 오히려 초보자분들께 더 필요한 서비스입니다. 경매의 기초부터 차근차근 설명드리고, 첫 경매부터 성공할 수 있도록 모든 과정을 함께합니다. 처음이라 아무것도 모르셔도 괜찮습니다.",
  },
  {
    question: "상담 비용은 얼마인가요?",
    answer: "첫 상담은 무료입니다. 전화, 카카오톡, 방문 상담 모두 가능하며, 경매 목적과 예산을 파악하고 대략적인 방향을 제시해드립니다. 이후 서비스 이용 시 비용은 사안에 따라 달라지며, 상담 시 투명하게 안내드립니다.",
  },
  {
    question: "어떤 종류의 경매를 다루나요?",
    answer: "아파트, 빌라, 상가, 오피스텔, 토지, 공장 등 모든 부동산 경매를 다룹니다. 특히 권리관계가 복잡한 물건, 명도가 어려운 물건에서 저희의 전문성이 빛을 발합니다.",
  },
  {
    question: "지방 물건도 가능한가요?",
    answer: "네, 전국 모든 법원의 경매 물건을 다룹니다. 서울, 경기뿐 아니라 지방 물건도 현장 조사를 포함하여 진행합니다. 다만 지역에 따라 추가 비용이 발생할 수 있습니다.",
  },
  {
    question: "낙찰 실패하면 비용은 어떻게 되나요?",
    answer: "저희는 성공 보수 체계를 기본으로 합니다. 낙찰에 성공했을 때만 수수료가 발생하며, 낙찰 실패 시에는 실비 외 추가 비용이 없습니다. 자세한 내용은 상담 시 안내드립니다.",
  },
  {
    question: "명도가 안 되면 어떻게 하나요?",
    answer: "명도는 저희의 핵심 전문 분야입니다. 점유자와의 협상, 이사비 협의, 명도소송, 강제집행까지 모든 법적 절차를 대행합니다. 20년간 명도 실패 사례는 단 한 건도 없습니다.",
  },
  {
    question: "상담부터 낙찰까지 얼마나 걸리나요?",
    answer: "물건에 따라 다르지만, 보통 상담 후 1-2주 내 적합한 물건을 선별하고, 입찰까지 2-4주 정도 소요됩니다. 급하신 경우 빠른 진행도 가능합니다.",
  },
  {
    question: "법률사무소인데 변호사가 직접 하나요?",
    answer: "모든 법률 검토와 소송 업무는 소속 변호사가 직접 수행합니다. 사무국장 전석봉이 실무 전반을 총괄하며, 법률적 판단이 필요한 사안은 변호사가 함께합니다.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 bg-background relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-navy/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-gold font-semibold text-sm tracking-wider uppercase mb-4 block">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            자주 묻는 <span className="gradient-text">질문</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            궁금한 점이 있으시면 언제든 문의해주세요.
            <br />아래에서 답을 찾지 못하셨다면 직접 상담을 신청해주세요.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className={`w-full text-left bg-navy-light/50 border rounded-xl p-6 transition-all duration-300 ${
                  openIndex === index
                    ? "border-gold/30 shadow-lg shadow-gold/5"
                    : "border-border hover:border-gold/20"
                }`}
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className={`text-lg font-semibold transition-colors ${
                    openIndex === index ? "text-gold" : "text-foreground"
                  }`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                    openIndex === index
                      ? "bg-gold text-navy"
                      : "bg-gold/10 text-gold"
                  }`}>
                    {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                  </div>
                </div>

                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-muted leading-relaxed pt-4 border-t border-border/50 mt-4">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </button>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p className="text-muted mb-4">
            더 궁금한 점이 있으신가요?
          </p>
          <a href="#contact" className="btn-secondary inline-flex items-center gap-2">
            직접 문의하기
          </a>
        </motion.div>
      </div>
    </section>
  );
}
