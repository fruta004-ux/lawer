"use client";

import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-gold to-gold-dark rounded-lg flex items-center justify-center">
                <span className="text-navy font-black text-xl">정</span>
              </div>
              <div>
                <span className="text-2xl font-bold text-foreground">정평법률사무소</span>
                <span className="block text-sm text-muted">경매 전문</span>
              </div>
            </div>
            <p className="text-muted leading-relaxed mb-6 max-w-md">
              20년 경력의 경매 전문 법률사무소입니다. 
              권리분석부터 명도까지, 경매의 모든 과정을 함께합니다.
              당신의 성공적인 경매 투자를 위해 최선을 다하겠습니다.
            </p>
            <div className="flex gap-4">
              <a
                href="https://blog.naver.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-light border border-border rounded-lg flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 transition-all"
              >
                <span className="text-sm font-bold">N</span>
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-light border border-border rounded-lg flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 transition-all"
              >
                <span className="text-sm font-bold">Y</span>
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-navy-light border border-border rounded-lg flex items-center justify-center text-muted hover:text-gold hover:border-gold/30 transition-all"
              >
                <span className="text-sm font-bold">I</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-foreground mb-6">바로가기</h4>
            <ul className="space-y-3">
              {[
                { name: "서비스 소개", href: "#services" },
                { name: "진행 과정", href: "#process" },
                { name: "고객 후기", href: "#testimonials" },
                { name: "자주 묻는 질문", href: "#faq" },
                { name: "상담 신청", href: "#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-gold transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-foreground mb-6">연락처</h4>
            <ul className="space-y-3 text-muted">
              <li>
                <span className="text-foreground">직통:</span>{" "}
                <a href="tel:010-4118-2363" className="hover:text-gold transition-colors">
                  010-4118-2363
                </a>
              </li>
              <li>
                <span className="text-foreground">팩스:</span> 070-7500-2584
              </li>
              <li>
                <span className="text-foreground">이메일:</span>{" "}
                <a href="mailto:jsb5959@daum.net" className="hover:text-gold transition-colors">
                  jsb5959@daum.net
                </a>
              </li>
              <li>
                <span className="text-foreground">주소:</span>
                <br />
                경기도 수원시 영통구 광교중앙로 248번길 101, 401호
                <br />
                (하동 백련법조프라자, 수원지방법원 앞)
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="section-divider my-12" />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-muted text-center md:text-left">
            <p>© 2024 정평법률사무소. All rights reserved.</p>
            <p className="mt-1">
              사업자등록번호: 000-00-00000 | 대표: 홍길동
            </p>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-muted hover:text-gold transition-colors"
          >
            <span className="text-sm">맨 위로</span>
            <div className="w-10 h-10 bg-navy-light border border-border rounded-lg flex items-center justify-center hover:border-gold/30 transition-colors">
              <ArrowUp size={18} />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Floating CTA - Mobile */}
      <div className="fixed bottom-6 right-6 z-50 lg:hidden">
        <motion.a
          href="tel:02-1234-5678"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-14 h-14 bg-gradient-to-br from-gold to-gold-dark rounded-full flex items-center justify-center shadow-lg shadow-gold/30"
        >
          <span className="text-navy text-2xl">📞</span>
        </motion.a>
      </div>
    </footer>
  );
}
