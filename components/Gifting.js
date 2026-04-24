import { useEffect, useRef } from 'react'

const giftOptions = [
  {
    emoji: '🎁',
    title: '節慶禮盒',
    titleEn: 'Festive Gift Box',
    desc: '新年、中秋、情人節、母親節……為每個重要時刻，量身打造最美的甜蜜禮物。精緻禮盒搭配手寫祝福卡，送禮自用兩相宜。',
    features: ['可客製口味組合', '精美禮盒包裝', '附手寫祝福卡', '宅配到府'],
    price: '從 NT$ 680 起',
  },
  {
    emoji: '🏢',
    title: '企業團購',
    titleEn: 'Corporate Orders',
    desc: '員工福利、客戶伴手禮、活動贈品——提供企業專屬訂製服務，可印製品牌 Logo，展現獨特質感。',
    features: ['最低起訂 30 盒', '可印製品牌 Logo', '專屬企業報價', '大量優惠折扣'],
    price: '洽詢客製報價',
  },
  {
    emoji: '💍',
    title: '婚禮答謝禮',
    titleEn: 'Wedding Favors',
    desc: '為您的幸福時刻增添甜蜜。客製化婚禮小物，讓每位賓客帶走一份溫暖的祝福與美味的回憶。',
    features: ['客製包裝設計', '婚禮主題配色', '個人化標籤', '最低 50 份起訂'],
    price: '從 NT$ 120 /份',
  },
]

export default function Gifting() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="gifting"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: 'linear-gradient(180deg, #F5EFEA 0%, #EDE4DA 100%)' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p
            className="text-xs tracking-widest3 text-[#C8A97E] uppercase mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Gift & Custom
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6 text-[#4A3A2A]"
            style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500 }}
          >
            禮盒 · 客製服務
          </h2>
          <div className="gold-divider mb-6" />
          <p className="text-[#7A5C3A] text-sm leading-relaxed max-w-md mx-auto" style={{ fontWeight: 300 }}>
            每一份禮物，都是一段心意的傳遞。
            <br />
            讓拾味製菓，為您說出那些難以言語的溫柔。
          </p>
        </div>

        {/* Gift cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {giftOptions.map((g, i) => (
            <div
              key={g.title}
              className="product-card reveal bg-white p-8 group"
              style={{
                transitionDelay: `${i * 0.15}s`,
                boxShadow: '0 4px 30px rgba(74, 58, 42, 0.06)',
              }}
            >
              {/* Top accent */}
              <div className="h-0.5 w-12 bg-[#C8A97E] mb-7 group-hover:w-full transition-all duration-700" />

              <div className="text-4xl mb-5 select-none">{g.emoji}</div>

              <p
                className="text-xs tracking-widest text-[#C8A97E] mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                {g.titleEn}
              </p>
              <h3
                className="text-xl text-[#4A3A2A] mb-4"
                style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500 }}
              >
                {g.title}
              </h3>
              <p className="text-xs text-[#7A5C3A] leading-relaxed mb-6" style={{ fontWeight: 300 }}>
                {g.desc}
              </p>

              {/* Features */}
              <ul className="mb-7 space-y-2">
                {g.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-xs text-[#7A5C3A]" style={{ fontWeight: 300 }}>
                    <span className="text-[#C8A97E] text-base leading-none">·</span>
                    {f}
                  </li>
                ))}
              </ul>

              <div className="border-t border-[#E8DED4] pt-5 flex items-center justify-between">
                <span
                  className="text-sm text-[#4A3A2A]"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500 }}
                >
                  {g.price}
                </span>
                <a href="#contact" className="btn-gold py-2 px-5 text-xs" style={{ letterSpacing: '0.12em' }}>
                  洽詢
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Banner */}
        <div
          className="reveal mt-16 p-10 text-center"
          style={{
            background: 'linear-gradient(135deg, #4A3A2A 0%, #7A5C3A 100%)',
            transitionDelay: '0.5s',
          }}
        >
          <p
            className="text-xs tracking-widest3 text-[#C8A97E] uppercase mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Special Request
          </p>
          <h3
            className="text-2xl text-white mb-4"
            style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500 }}
          >
            有特殊需求嗎？
          </h3>
          <p className="text-[#E8DED4] text-sm mb-8 max-w-lg mx-auto" style={{ fontWeight: 300 }}>
            無論是特殊口味客製、包裝設計調整，或是大量訂單需求，歡迎直接聯繫我們，讓我們一起創造專屬的甜蜜記憶。
          </p>
          <a
            href="#contact"
            className="inline-block px-10 py-4 text-xs tracking-widest border border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-white transition-all duration-300"
            style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.22em' }}
          >
            立即諮詢
          </a>
        </div>
      </div>
    </section>
  )
}
