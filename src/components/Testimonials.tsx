"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "김○○",
    location: "서울 강남구",
    type: "아파트 경매",
    rating: 5,
    content: "처음 경매 도전이라 막막했는데, 전석봉 사무국장님이 하나부터 열까지 다 설명해주셨어요. 권리분석 덕분에 위험한 물건 피하고, 시세보다 30% 저렴하게 내 집 마련했습니다. 정말 감사합니다!",
    result: "시세 대비 30% 저렴하게 낙찰",
  },
  {
    name: "박○○",
    location: "경기 수원시",
    type: "상가 경매",
    rating: 5,
    content: "상가 경매는 주의할 게 많다고 들었는데, 정평법률사무소에서 임차인 분석, 수익률 계산까지 꼼꼼하게 해주셔서 안심하고 투자할 수 있었습니다. 현재 월 수익 잘 나오고 있어요.",
    result: "월 임대수익 320만원 달성",
  },
  {
    name: "이○○",
    location: "인천 연수구",
    type: "빌라 경매",
    rating: 5,
    content: "명도가 가장 걱정이었는데, 점유자 협상부터 이사비 협의까지 다 해결해주셨어요. 혼자였으면 엄두도 못 냈을 것 같아요. 다음 경매도 꼭 여기서 할 겁니다.",
    result: "2주 만에 명도 완료",
  },
  {
    name: "최○○",
    location: "서울 송파구",
    type: "다세대 경매",
    rating: 5,
    content: "유튜브 보고 혼자 해보려다 권리분석에서 막혀서 상담 받았는데, 제가 보려던 물건에 숨겨진 유치권이 있었어요. 아찔했습니다. 전문가 도움 꼭 받으세요.",
    result: "위험 물건 회피, 안전 물건 낙찰",
  },
  {
    name: "정○○",
    location: "경기 성남시",
    type: "토지 경매",
    rating: 5,
    content: "토지 경매는 더 복잡하다고 해서 처음부터 맡겼습니다. 지분 정리, 경계 확인까지 완벽하게 처리해주셔서 개발 계획 차질 없이 진행 중입니다.",
    result: "복잡한 지분 정리 완료",
  },
  {
    name: "한○○",
    location: "서울 마포구",
    type: "오피스텔 경매",
    rating: 5,
    content: "직장 다니면서 경매 공부할 시간이 없었는데, 입찰 대리 서비스 덕분에 시간 들이지 않고도 좋은 물건 낙찰받았습니다. 효율적인 투자였어요.",
    result: "바쁜 직장인도 성공적 투자",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-navy relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
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
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="gradient-text">실제 고객</span>들의<br />
            생생한 후기
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            정평법률사무소와 함께 경매에 성공한 분들의 이야기입니다.
            <br />다음 성공 스토리의 주인공은 당신입니다.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-navy-light/50 border border-border hover:border-gold/30 rounded-2xl p-6 transition-all duration-300 card-hover"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground/90 leading-relaxed mb-6">
                &ldquo;{testimonial.content}&rdquo;
              </p>

              {/* Result Badge */}
              <div className="bg-gold/10 border border-gold/20 rounded-lg px-4 py-2 mb-6">
                <span className="text-gold text-sm font-semibold">
                  ✓ {testimonial.result}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center">
                  <span className="text-navy font-bold">{testimonial.name[0]}</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted">
                    {testimonial.location} · {testimonial.type}
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
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-muted mb-4">
            ⭐ 네이버, 카카오 평균 평점 <span className="text-gold font-bold">4.9점</span>
          </p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            나도 성공 후기 남기기
            <span>→</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
