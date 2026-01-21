"use client";

import { motion } from "framer-motion";

const serviceCategories = [
  {
    title: "주거 및 상업 물건",
    items: ["공장, 다가구, 상가건물", "오피스텔, 아파트, 다세대"],
    icon: "🏠"
  },
  {
    title: "특수 및 지분 경매",
    items: ["특수물건 (지상권, 토지만 경매)", "지분경매 전문 분석"],
    icon: "⚖️"
  },
  {
    title: "법률 절차 대행",
    items: ["유치권 분석 및 해결", "경매 취소·취하, 기일연기", "낙찰불허가, 배당이의·소"],
    icon: "🛡️"
  },
  {
    title: "금융 및 기타",
    items: ["경낙잔금 대출상담", "경매취하자금 지원", "파산, 면책, 등기"],
    icon: "💰"
  }
];

const services = [
  {
    num: "01",
    title: "정밀 권리분석 & 특수물건",
    desc: "20년 노하우로 등기부 그 너머를 분석합니다. 지상권, 토지만 경매, 지분경매 등 고난도 특수물건의 위험 요소를 완벽히 제거합니다.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop"
  },
  {
    num: "02",
    title: "경매 절차 및 자금 전략",
    desc: "감이 아닌 데이터로 접근합니다. 경낙잔금 대출상담부터 경매 취하 자금까지, 고객의 상황에 맞는 최적의 자금 전략을 제안합니다.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
  },
  {
    num: "03",
    title: "책임 명도 & 법률 소송",
    desc: "유치권 해결, 명도소송부터 배당이의·소까지. 법률사무소의 이름으로 안전하고 신속하게 부동산 인도를 완료합니다.",
    image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-navy relative">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-gold font-bold tracking-widest uppercase block mb-4">Core Expertise</span>
          <h2 className="section-title text-white">
            수원지방법원 앞, <br />
            <span className="gradient-text">경매의 전 과정</span>을 책임집니다.
          </h2>
          
          {/* Tag Grid from Business Card */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-20">
            {serviceCategories.map((cat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 border border-white/10 p-12 rounded-[2.5rem] backdrop-blur-sm hover:bg-white/10 transition-colors duration-500"
              >
                <div className="text-5xl mb-8">{cat.icon}</div>
                <h4 className="text-gold font-black text-3xl md:text-4xl mb-8 tracking-tighter">{cat.title}</h4>
                <ul className="space-y-4">
                  {cat.items.map((item, j) => (
                    <li key={j} className="text-foreground/80 text-xl md:text-2xl font-medium flex items-start gap-3">
                      <span className="text-gold mt-1">●</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="space-y-40 mt-32">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className={`flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-20 items-center`}
            >
              <div className="flex-1 w-full">
                <div className="relative aspect-video rounded-3xl overflow-hidden group">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                    style={{ backgroundImage: `url('${service.image}')` }}
                  />
                  <div className="absolute inset-0 bg-navy/20 group-hover:bg-transparent transition-colors duration-500" />
                </div>
              </div>
              
              <div className="flex-1">
                <span className="text-[6rem] font-black text-white/5 leading-none block mb-4">{service.num}</span>
                <h3 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
                  {service.title}
                </h3>
                <p className="text-xl md:text-2xl text-muted leading-relaxed font-light">
                  {service.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
