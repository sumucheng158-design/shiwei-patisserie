import Image from 'next/image'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F5EFEA 0%, #EDE4DA 60%, #E3D5C7 100%)' }}
    >
      {/* Background decorative circles */}
      <div
        className="absolute top-20 right-0 w-96 h-96 rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #C8A97E 0%, transparent 70%)', transform: 'translate(30%, -10%)' }}
      />
      <div
        className="absolute bottom-20 left-0 w-80 h-80 rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, #C8A97E 0%, transparent 70%)', transform: 'translate(-30%, 10%)' }}
      />

      {/* Japanese kanji decorative */}
      <div
        className="absolute top-32 left-10 text-8xl opacity-5 select-none"
        style={{ fontFamily: '"Shippori Mincho", serif', color: '#4A3A2A', writingMode: 'vertical-rl' }}
      >
        手作餅乾
      </div>
      <div
        className="absolute bottom-32 right-10 text-8xl opacity-5 select-none"
        style={{ fontFamily: '"Shippori Mincho", serif', color: '#4A3A2A', writingMode: 'vertical-rl' }}
      >
        拾味製菓
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Top ornament */}
        <div className="flex items-center gap-4 mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-[#C8A97E]" />
          <span
            className="text-xs tracking-widest3 text-[#C8A97E] uppercase"
            style={{ fontFamily: 'Cormorant Garamond, serif' }}
          >
            Shi Wei Pâtisserie
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-[#C8A97E]" />
        </div>

        {/* Logo — large, prominent */}
        <div
          className="mb-10 relative"
          style={{
            animation: 'fadeIn 1.2s ease forwards',
            animationDelay: '0.4s',
            opacity: 0,
          }}
        >
          {/* White circle background to make logo visible on light bg */}
          <div
            className="relative w-36 h-36 md:w-48 md:h-48 rounded-full shadow-2xl flex items-center justify-center"
            style={{
              background: '#1A1210',
              boxShadow: '0 20px 60px rgba(74, 58, 42, 0.25), 0 0 0 8px rgba(200,169,126,0.15)',
            }}
          >
            <Image
              src="/logo.png"
              alt="拾味製菓 Logo"
              fill
              style={{ objectFit: 'cover', borderRadius: '50%' }}
              priority
            />
          </div>
        </div>

        {/* Brand name */}
        <h1
          className="text-5xl md:text-7xl tracking-widest mb-4"
          style={{
            fontFamily: '"Shippori Mincho", serif',
            color: '#4A3A2A',
            fontWeight: 500,
            animation: 'fadeUp 1s ease forwards',
            animationDelay: '0.6s',
            opacity: 0,
          }}
        >
          拾味製菓
        </h1>

        {/* Gold divider */}
        <div
          className="flex items-center gap-3 my-6"
          style={{ animation: 'fadeIn 1s ease forwards', animationDelay: '0.8s', opacity: 0 }}
        >
          <div className="h-px w-20 bg-gradient-to-r from-transparent to-[#C8A97E]" />
          <div className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]" />
          <div className="h-px w-20 bg-gradient-to-l from-transparent to-[#C8A97E]" />
        </div>

        {/* Slogan */}
        <p
          className="text-xl md:text-2xl font-light text-[#7A5C3A] tracking-wide mb-2"
          style={{
            fontFamily: '"Shippori Mincho", serif',
            animation: 'fadeUp 1s ease forwards',
            animationDelay: '1s',
            opacity: 0,
          }}
        >
          拾起風味，收藏每一刻的甜
        </p>

        {/* Latin subtitle */}
        <p
          className="text-xs tracking-widest3 text-[#C8A97E] uppercase mb-12"
          style={{
            fontFamily: 'Cormorant Garamond, serif',
            animation: 'fadeIn 1s ease forwards',
            animationDelay: '1.2s',
            opacity: 0,
          }}
        >
          Handcrafted with love · 手作餅乾
        </p>

        {/* CTA */}
        <div
          className="flex flex-col sm:flex-row gap-4 items-center"
          style={{ animation: 'fadeUp 1s ease forwards', animationDelay: '1.4s', opacity: 0 }}
        >
          <a href="#products" className="btn-gold text-xs px-10 py-4" style={{ letterSpacing: '0.25em' }}>
            立即訂購
          </a>
          <a href="#story" className="btn-outline text-xs px-10 py-4" style={{ letterSpacing: '0.25em' }}>
            品牌故事
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="text-xs tracking-widest text-[#7A5C3A]" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
          scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-[#C8A97E] to-transparent animate-pulse" />
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
      `}</style>
    </section>
  )
}
