import { useEffect, useRef } from 'react'
import Image from 'next/image'

export default function Contact() {
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
      id="contact"
      ref={sectionRef}
      className="py-28 px-6 relative overflow-hidden"
      style={{ background: '#4A3A2A' }}
    >
      {/* Background decoration */}
      <div
        className="absolute top-0 right-0 w-1/2 h-full opacity-5 pointer-events-none select-none"
        style={{
          fontFamily: '"Shippori Mincho", serif',
          fontSize: '30vw',
          color: '#C8A97E',
          fontWeight: 700,
          lineHeight: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        味
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Logo */}
        <div className="flex justify-center mb-10 reveal">
          <div
            className="w-20 h-20 relative rounded-full overflow-hidden"
            style={{
              boxShadow: '0 0 0 2px rgba(200,169,126,0.4), 0 0 40px rgba(200,169,126,0.1)',
            }}
          >
            <Image src="/logo.png" alt="拾味製菓" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>

        {/* Header */}
        <div className="text-center mb-16 reveal" style={{ transitionDelay: '0.1s' }}>
          <p
            className="text-xs tracking-widest3 text-[#C8A97E] uppercase mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Get in Touch
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6 text-white"
            style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500 }}
          >
            聯絡我們
          </h2>
          <div className="gold-divider mb-8" />
          <p className="text-[#E8DED4] text-sm leading-relaxed max-w-md mx-auto" style={{ fontWeight: 300 }}>
            無論是一般訂購、禮盒客製，或是任何問題，
            <br />
            歡迎透過以下方式聯繫我們，我們會在 24 小時內回覆。
          </p>
        </div>

        {/* Contact buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20 reveal" style={{ transitionDelay: '0.2s' }}>
          {/* LINE button */}
          <a
            href="https://line.me/ti/p/~@shiweipatisserie"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-5 transition-all duration-300"
            style={{
              background: '#06C755',
              color: 'white',
              minWidth: 220,
              justifyContent: 'center',
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
              <path d="M19.365 9.863c.349 0 .63.285.63.631 0 .345-.281.63-.63.63H17.61v1.125h1.755c.349 0 .63.283.63.63 0 .344-.281.629-.63.629h-2.386c-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63h2.386c.349 0 .63.285.63.63 0 .349-.281.63-.63.63H17.61v1.125h1.755zm-3.855 3.016c0 .27-.174.51-.432.596-.064.021-.133.031-.199.031-.211 0-.391-.09-.51-.25l-2.443-3.317v2.94c0 .344-.279.629-.631.629-.346 0-.626-.285-.626-.629V8.108c0-.27.173-.51.43-.595.06-.023.136-.033.194-.033.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63.345 0 .63.285.63.63v4.771zm-5.741 0c0 .344-.282.629-.631.629-.345 0-.627-.285-.627-.629V8.108c0-.345.282-.63.627-.63.349 0 .631.285.631.63v4.771zm-2.466.629H4.917c-.345 0-.63-.285-.63-.629V8.108c0-.345.285-.63.63-.63.348 0 .63.285.63.63v4.141h1.756c.348 0 .629.283.629.63 0 .344-.281.629-.629.629M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608.391.082.923.258 1.058.59.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645 1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314" />
            </svg>
            <div className="text-left">
              <p className="text-xs opacity-80 mb-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.1em' }}>
                LINE 官方帳號
              </p>
              <p className="text-sm font-medium" style={{ letterSpacing: '0.05em' }}>
                @shiweipatisserie
              </p>
            </div>
          </a>

          {/* Instagram button */}
          <a
            href="https://instagram.com/shiwei.patisserie"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 px-8 py-5 transition-all duration-300 border border-[#C8A97E] hover:bg-[#C8A97E]"
            style={{
              color: '#C8A97E',
              minWidth: 220,
              justifyContent: 'center',
            }}
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 flex-shrink-0">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            <div className="text-left group-hover:text-white transition-colors">
              <p className="text-xs opacity-80 mb-0.5" style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.1em' }}>
                Instagram
              </p>
              <p className="text-sm font-medium" style={{ letterSpacing: '0.05em' }}>
                @shiwei.patisserie
              </p>
            </div>
          </a>
        </div>

        {/* Info grid */}
        <div
          className="reveal grid grid-cols-2 md:grid-cols-4 gap-px bg-[#C8A97E]/20"
          style={{ transitionDelay: '0.3s' }}
        >
          {[
            { label: '訂單處理', value: '1–2 工作天', sub: 'Processing Time' },
            { label: '出貨方式', value: '黑貓宅配', sub: 'Delivery' },
            { label: '回覆時間', value: '24 小時內', sub: 'Response Time' },
            { label: '保存期限', value: '30–60 天', sub: 'Shelf Life' },
          ].map((info) => (
            <div key={info.label} className="bg-[#4A3A2A] text-center p-6">
              <p
                className="text-xs text-[#C8A97E] mb-2"
                style={{ fontFamily: 'Cormorant Garamond, serif', letterSpacing: '0.1em' }}
              >
                {info.sub}
              </p>
              <p
                className="text-lg text-white mb-1"
                style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500 }}
              >
                {info.value}
              </p>
              <p className="text-xs text-[#E8DED4]" style={{ fontWeight: 300 }}>
                {info.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
