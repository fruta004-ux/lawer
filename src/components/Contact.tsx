"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    type: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 실제로는 여기서 폼 제출 로직 구현
    alert("상담 신청이 완료되었습니다. 빠른 시일 내에 연락드리겠습니다.");
  };

  const contactInfo = [
    {
      icon: Phone,
      label: "직통 상담",
      value: "010-4118-2363",
      href: "tel:010-4118-2363",
      description: "사무국장 전석봉 직통",
    },
    {
      icon: MessageCircle,
      label: "카카오톡",
      value: "전석봉 사무국장",
      href: "#",
      description: "24시간 문의 가능",
    },
    {
      icon: Mail,
      label: "이메일",
      value: "jsb5959@daum.net",
      href: "mailto:jsb5959@daum.net",
      description: "24시간 내 답변",
    },
    {
      icon: MapPin,
      label: "오시는 길",
      value: "수원시 영통구 광교중앙로 248번길 101",
      href: "https://map.naver.com",
      description: "수원지방법원 앞 (백련법조프라자 401호)",
    },
  ];

  return (
    <section id="contact" className="py-24 bg-navy-light relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl" />
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
            Contact Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black mb-6">
            <span className="gradient-text">무료 상담</span> 신청
          </h2>
          <p className="text-muted text-lg max-w-2xl mx-auto">
            경매에 대한 모든 궁금증, 부담 없이 물어보세요.
            <br />전문가가 친절하게 답변드립니다.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-background/50 border border-border rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                <Clock className="w-6 h-6 text-gold" />
                빠른 상담 신청
              </h3>
              <p className="text-muted mb-8">
                아래 양식을 작성해주시면 <span className="text-gold font-semibold">30분 이내</span>에 연락드립니다.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    이름 *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-navy-light border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-gold transition-colors"
                    placeholder="홍길동"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    연락처 *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-navy-light border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-gold transition-colors"
                    placeholder="010-0000-0000"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    상담 유형
                  </label>
                  <select
                    value={formData.type}
                    onChange={(e) => setFormData({ ...formData, type: e.target.value })}
                    className="w-full bg-navy-light border border-border rounded-lg px-4 py-3 text-foreground focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="">선택해주세요</option>
                    <option value="권리분석">권리분석 의뢰</option>
                    <option value="입찰대리">입찰 대리</option>
                    <option value="명도">명도 상담</option>
                    <option value="종합">종합 컨설팅</option>
                    <option value="기타">기타 문의</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    문의 내용
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-navy-light border border-border rounded-lg px-4 py-3 text-foreground placeholder-muted focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="궁금한 점이나 상담 받고 싶은 내용을 적어주세요."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary flex items-center justify-center gap-2 text-lg py-4"
                >
                  <Send size={20} />
                  무료 상담 신청하기
                </button>

                <p className="text-xs text-muted text-center">
                  * 개인정보는 상담 목적으로만 사용되며, 상담 완료 후 파기됩니다.
                </p>
              </form>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Manager Card */}
            <div className="bg-gradient-to-br from-gold/10 to-transparent border border-gold/20 rounded-2xl p-8">
              <div className="flex items-center gap-6 mb-6">
                <div className="w-20 h-20 bg-gradient-to-br from-gold to-gold-dark rounded-2xl flex items-center justify-center">
                  <span className="text-navy font-black text-2xl">전</span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">전석봉</h3>
                  <p className="text-gold">사무국장</p>
                  <p className="text-muted text-sm mt-1">경매 전문 20년 경력</p>
                </div>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                &ldquo;경매는 정보 싸움입니다. 20년간 쌓아온 경험과 노하우로 
                고객님의 성공적인 경매 투자를 도와드리겠습니다. 
                부담 없이 연락 주세요.&rdquo;
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid grid-cols-2 gap-4">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.href}
                  target={info.href.startsWith("http") ? "_blank" : undefined}
                  rel={info.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="bg-background/50 border border-border hover:border-gold/30 rounded-xl p-5 transition-all duration-300 group card-hover"
                >
                  <div className="w-10 h-10 bg-gold/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-gold/20 transition-colors">
                    <info.icon className="w-5 h-5 text-gold" />
                  </div>
                  <div className="text-xs text-muted mb-1">{info.label}</div>
                  <div className="text-sm font-semibold text-foreground group-hover:text-gold transition-colors mb-1">
                    {info.value}
                  </div>
                  <div className="text-xs text-muted">{info.description}</div>
                </a>
              ))}
            </div>

            {/* Business Hours */}
            <div className="bg-background/50 border border-border rounded-xl p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-gold" />
                영업 시간
              </h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted">평일</span>
                  <span className="text-foreground">09:00 - 18:00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">토요일</span>
                  <span className="text-foreground">10:00 - 14:00 (예약제)</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted">일요일/공휴일</span>
                  <span className="text-gold">휴무 (긴급상담 가능)</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
