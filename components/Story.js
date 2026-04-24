import { useEffect, useRef } from 'react'

export default function Story() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const values = [
    {
      icon: '✦',
      title: '選材堅持',
      titleEn: 'Premium Ingredients',
      desc: '嚴選日本、法國、台灣頂級食材，每一樣原料都有它的故事與靈魂。',
    },
    {
      icon: '✦',
      title: '手作溫度',
      titleEn: 'Handcrafted with Love',
      desc: '拒絕量產，每一片餅乾皆由雙手捏塑，保留最真實的手作溫度。',
    },
    {
      icon: '✦',
      title: '時令創作',
      titleEn: 'Seasonal Creations',
      desc: '隨四季更迭推出限定口味，讓每一次品嚐都是獨一無二的當季記憶。',
    },
  ]

  return (
    <section
      id="story"
      ref={sectionRef}
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: '#4A3A2A' }}
    >
      {/* Decorative background text */}
      <div
        className="absolute inset-0 flex items-center justify-center opacity-5 select-none pointer-events-none"
        style={{
          fontFamily: '"Shippori Mincho", serif',
          fontSize: '20vw',
          color: '#C8A97E',
          fontWeight: 600,
          lineHeight: 1,
        }}
      >
        菓
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p
            className="tracking-widest3 uppercase mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', color: '#C8A97E', fontSize: '0.85rem' }}
          >
            Our Story
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500 }}
          >
            品牌故事
          </h2>
          <div className="gold-divider mb-8" />
        </div>

        {/* Story text */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
          <div className="reveal">
            <div
              className="text-8xl text-[#C8A97E] leading-none mb-4 opacity-40 select-none"
              style={{ fontFamily: 'Cormorant Garamond, serif' }}
            >
              "
            </div>
            {/* A: quote enlarged */}
            <p
              className="text-2xl md:text-3xl text-white leading-relaxed mb-6"
              style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 400 }}
            >
              拾起，是珍視每一次相遇的心意。
              <br />
              味，是記憶裡最溫柔的語言。
            </p>
            {/* A: body text enlarged */}
            <p className="text-[#E8DED4] leading-loose" style={{ fontWeight: 300, fontSize: '0.95rem' }}>
              拾味製菓誕生於一個簡單的念頭：想讓每個人在繁忙的生活中，
              因為一片小小的餅乾，感受到被珍視的溫暖。
            </p>
          </div>

          <div className="reveal" style={{ transitionDelay: '0.2s' }}>
            <p className="text-[#E8DED4] leading-loose mb-6" style={{ fontWeight: 300, fontSize: '0.95rem' }}>
              創辦人旅居日本期間，深受和菓子文化中「一期一會」精神的感動——
              每一次的相聚，都值得用最誠摯的手藝來記錄。
            </p>
            <p className="text-[#E8DED4] leading-loose mb-8" style={{ fontWeight: 300, fontSize: '0.95rem' }}>
              回台後，帶著對食材的尊重與對美學的堅持，
              用雙手將這份精神轉化為一片片餅乾，
              希望每一口都能讓您拾起生活中那些美好的滋味。
            </p>
            <div className="flex items-center gap-4">
              <div className="h-px flex-1 bg-[#C8A97E] opacity-30" />
              <span
                className="tracking-widest text-[#C8A97E]"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem' }}
              >
                手作餅乾 · 拾起美好滋味
              </span>
              <div className="h-px flex-1 bg-[#C8A97E] opacity-30" />
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((v, i) => (
            <div
              key={v.title}
              className="reveal text-center p-8 border border-[#C8A97E]/20 hover:border-[#C8A97E]/50 transition-all duration-400 group"
              style={{ transitionDelay: `${i * 0.15}s` }}
            >
              <div className="text-[#C8A97E] text-2xl mb-5 group-hover:scale-110 transition-transform duration-300 select-none">
                {v.icon}
              </div>
              <p
                className="tracking-widest text-[#C8A97E] mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem' }}
              >
                {v.titleEn}
              </p>
              <h3
                className="text-white mb-4"
                style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500, fontSize: '1.1rem' }}
              >
                {v.title}
              </h3>
              {/* A: value description enlarged */}
              <p className="text-[#E8DED4] leading-relaxed" style={{ fontWeight: 300, fontSize: '0.875rem' }}>
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
