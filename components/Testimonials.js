import { useEffect, useRef, useState } from 'react'

const testimonials = [
  {
    name: '林小姐',
    role: '台北 · 忠實顧客',
    text: '每次收到拾味的禮盒，打開的那一刻就被香氣包圍了。送禮自用都超體面，朋友每次收到都開心得不得了。',
    rating: 5,
    date: '2024.11',
  },
  {
    name: '陳先生',
    role: '企業採購主管',
    text: '公司年節禮品找了拾味製菓，從包裝到口味都讓客戶讚不絕口。專業的服務讓採購過程非常順暢，明年還會繼續合作！',
    rating: 5,
    date: '2025.01',
  },
  {
    name: 'Mei L.',
    role: '日本留學歸台',
    text: '在日本吃慣了高品質的菓子，回台後一直找不到能滿足挑剔味蕾的選擇。拾味的抹茶酥讓我大驚艷，完全不輸日本頂級品牌！',
    rating: 5,
    date: '2024.12',
  },
  {
    name: '王媽媽',
    role: '新竹 · 回購三年',
    text: '女兒第一次買來當伴手禮，我吃完馬上自己訂了。現在家裡都一直備著，用來搭配下午茶最幸福了。',
    rating: 5,
    date: '2025.02',
  },
]

// G: count-up hook
function useCountUp(target, duration = 1200, start = false) {
  const [value, setValue] = useState(0)
  useEffect(() => {
    if (!start) return
    // parse numeric part
    const numStr = String(target).replace(/[^0-9.]/g, '')
    const num = parseFloat(numStr)
    if (isNaN(num)) { setValue(target); return }
    const suffix = String(target).replace(/[0-9.]/g, '')
    const startTime = performance.now()
    const tick = (now) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      const current = eased * num
      // format: if target has decimal, show 1dp; else integer
      const formatted = numStr.includes('.') ? current.toFixed(1) : Math.floor(current).toLocaleString()
      setValue(formatted + suffix)
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [start, target, duration])
  return value
}

function StatItem({ num, label, labelEn, delay, animate }) {
  const displayed = useCountUp(num, 1400, animate)
  return (
    <div className="text-center py-10 px-4">
      <p
        className="text-4xl md:text-5xl text-[#4A3A2A] mb-2"
        style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}
      >
        {animate ? displayed || '0' : num}
      </p>
      <p
        className="tracking-widest text-[#C8A97E] mb-1"
        style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.82rem' }}
      >
        {labelEn}
      </p>
      <p className="text-[#7A5C3A]" style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 300, fontSize: '0.9rem' }}>
        {label}
      </p>
    </div>
  )
}

export default function Testimonials() {
  const sectionRef = useRef(null)
  const statsRef = useRef(null)
  const [statsVisible, setStatsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    )
    sectionRef.current?.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    // G: separate observer for stats count-up trigger
    const statsObserver = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setStatsVisible(true)
          statsObserver.disconnect()
        }
      },
      { threshold: 0.3 }
    )
    if (statsRef.current) statsObserver.observe(statsRef.current)

    return () => { observer.disconnect(); statsObserver.disconnect() }
  }, [])

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="py-28 px-6"
      style={{ background: '#F5EFEA' }}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20 reveal">
          <p
            className="tracking-widest3 text-[#C8A97E] uppercase mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem' }}
          >
            Customer Stories
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6 text-[#4A3A2A]"
            style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500 }}
          >
            顧客心聲
          </h2>
          <div className="gold-divider" />
        </div>

        {/* Testimonial grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className="reveal bg-white p-8 group hover:shadow-lg transition-all duration-400"
              style={{
                transitionDelay: `${i * 0.12}s`,
                boxShadow: '0 4px 20px rgba(74, 58, 42, 0.05)',
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-5">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <span key={j} className="star text-base select-none">★</span>
                ))}
              </div>

              <div
                className="text-5xl text-[#E8DED4] leading-none mb-3 select-none"
                style={{ fontFamily: 'Cormorant Garamond, serif' }}
              >
                "
              </div>

              {/* A: testimonial body text enlarged */}
              <p className="text-[#7A5C3A] leading-loose mb-7" style={{ fontWeight: 300, fontSize: '0.95rem' }}>
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center justify-between border-t border-[#E8DED4] pt-5">
                <div>
                  <p
                    className="text-[#4A3A2A] mb-1"
                    style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500, fontSize: '0.95rem' }}
                  >
                    {t.name}
                  </p>
                  <p className="text-[#C8A97E]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem' }}>
                    {t.role}
                  </p>
                </div>
                <span className="text-[#E8DED4]" style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem' }}>
                  {t.date}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* G: Summary stats with count-up animation */}
        <div
          ref={statsRef}
          className="reveal mt-16 grid grid-cols-3 divide-x divide-[#E8DED4]"
          style={{ transitionDelay: '0.5s' }}
        >
          <StatItem num="2,000+" label="滿意顧客" labelEn="Happy Customers" animate={statsVisible} />
          <StatItem num="4.9" label="平均評分" labelEn="Average Rating" animate={statsVisible} />
          <StatItem num="98%" label="回購率" labelEn="Repurchase Rate" animate={statsVisible} />
        </div>
      </div>
    </section>
  )
}
