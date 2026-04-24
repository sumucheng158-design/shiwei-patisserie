import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: '商品', href: '#products' },
    { label: '品牌故事', href: '#story' },
    { label: '禮盒訂製', href: '#gifting' },
    { label: '聯絡我們', href: '#contact' },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-3">
          <div className="w-10 h-10 relative bg-[#4A3A2A] rounded-full flex items-center justify-center overflow-hidden">
            <Image src="/logo.png" alt="拾味製菓" fill style={{ objectFit: 'cover' }} />
          </div>
          {/* C: brand name in navbar enlarged */}
          <span
            className="tracking-widest2 text-[#4A3A2A]"
            style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500, fontSize: '1rem' }}
          >
            拾味製菓
          </span>
        </a>

        {/* C: Desktop Nav — links enlarged */}
        <ul className="hidden md:flex gap-10">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="hover-underline opacity-80 hover:opacity-100 transition-opacity"
                style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  fontSize: '1rem',
                  letterSpacing: '0.15em',
                  color: '#4A3A2A',
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#contact"
          className="hidden md:block btn-gold py-3 px-6"
          style={{ letterSpacing: '0.18em' }}
        >
          立即訂購
        </a>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-px bg-[#4A3A2A] transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-px bg-[#4A3A2A] transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-[#4A3A2A] transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md transition-all duration-400 overflow-hidden ${
          menuOpen ? 'max-h-72 py-6' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              {/* I: mobile menu text also enlarged */}
              <a
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="text-[#4A3A2A]"
                style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '1.05rem', letterSpacing: '0.15em' }}
              >
                {l.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-gold py-3 px-8">
              立即訂購
            </a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
