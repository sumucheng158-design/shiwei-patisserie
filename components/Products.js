import { useEffect, useRef } from 'react'
import Image from 'next/image'

const products = [
  {
    id: 1,
    image: '/Sakura Matcha Sablé.png',
    name: '櫻花抹茶酥',
    nameEn: 'Sakura Matcha Sablé',
    desc: '嚴選京都宇治抹茶，融合台灣玉荷包桂花，口感酥脆細緻，餘韻悠長。',
    price: 'NT$ 380',
    tag: '人氣首選',
  },
  {
    id: 2,
    image: '/Sea Salt Lemon Tuile.jpg',
    name: '海鹽檸檬薄酥',
    nameEn: 'Sea Salt Lemon Tuile',
    desc: '清新台灣檸檬搭配法國布列塔尼海鹽，薄脆之中帶著清爽果香。',
    price: 'NT$ 350',
    tag: '季節限定',
  },
  {
    id: 3,
    image: '/Caramel Hazelnut Cookie.webp',
    name: '焦糖榛果奶酥',
    nameEn: 'Caramel Hazelnut Cookie',
    desc: '法國榛果醬與頂級發酵奶油完美結合，焦糖香氣瀰漫，入口即化。',
    price: 'NT$ 420',
    tag: '新品上市',
  },
  {
    id: 4,
    image: '/Dark Chocolate Rice Crisp.webp',
    name: '黑巧克力米脆餅',
    nameEn: 'Dark Chocolate Rice Crisp',
    desc: '70% 厄瓜多黑巧克力搭配日本品川米，層次豐富，苦甜平衡。',
    price: 'NT$ 400',
    tag: '',
  },
  {
    id: 5,
    image: '/Earl Grey Almond Tile.png',
    name: '伯爵茶杏仁瓦片',
    nameEn: 'Earl Grey Almond Tile',
    desc: '法國伯爵茶搭配法式杏仁片，入口有清雅花香與堅果的美妙層次。',
    price: 'NT$ 380',
    tag: '',
  },
  {
    id: 6,
    image: '/Rose Lychee Snowball.png',
    name: '玫瑰荔枝雪球',
    nameEn: 'Rose Lychee Snowball',
    desc: '純白糖粉包裹玫瑰荔枝餡心，外酥內軟，如小雪球般迷人可愛。',
    price: 'NT$ 360',
    tag: '情人節限定',
  },
]

export default function Products() {
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1 }
    )
    const reveals = sectionRef.current?.querySelectorAll('.reveal')
    reveals?.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="products" ref={sectionRef} className="py-28 px-6" style={{ background: '#F5EFEA' }}>
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-20 reveal">
          {/* A: section labels enlarged */}
          <p
            className="tracking-widest3 text-[#C8A97E] uppercase mb-4"
            style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem' }}
          >
            Our Collection
          </p>
          <h2
            className="text-4xl md:text-5xl mb-6 text-[#4A3A2A]"
            style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500 }}
          >
            精選餅乾
          </h2>
          <div className="gold-divider mb-6" />
          {/* A: description text enlarged */}
          <p className="text-[#7A5C3A] leading-relaxed max-w-md mx-auto" style={{ fontWeight: 300, fontSize: '0.95rem' }}>
            每一片餅乾，都是時間與用心的結晶。
            <br />
            嚴選食材，手工製作，拒絕妥協。
          </p>
        </div>

        {/* Products grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((p, i) => (
            <div
              key={p.id}
              className="product-card reveal bg-white rounded-sm overflow-hidden group cursor-pointer"
              style={{
                transitionDelay: `${i * 0.1}s`,
                boxShadow: '0 4px 30px rgba(74, 58, 42, 0.06)',
              }}
            >
              {/* Image area */}
              <div className="relative h-52 overflow-hidden">
                {p.tag && (
                  <div
                    className="absolute top-4 left-4 px-3 py-1 z-10"
                    style={{
                      background: '#C8A97E',
                      fontFamily: 'Cormorant Garamond, serif',
                      fontSize: '0.8rem',
                      letterSpacing: '0.1em',
                      color: 'white',
                    }}
                  >
                    {p.tag}
                  </div>
                )}
                <Image
                  src={p.image}
                  alt={p.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                {/* hover overlay */}
                <div className="absolute inset-0 bg-[#4A3A2A]/0 group-hover:bg-[#4A3A2A]/5 transition-all duration-400" />
              </div>

              {/* D: card content — all text enlarged */}
              <div className="p-7">
                <p
                  className="tracking-widest text-[#C8A97E] mb-2"
                  style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem' }}
                >
                  {p.nameEn}
                </p>
                <h3
                  className="text-xl text-[#4A3A2A] mb-3"
                  style={{ fontFamily: '"Shippori Mincho", serif', fontWeight: 500, fontSize: '1.15rem' }}
                >
                  {p.name}
                </h3>
                {/* D: description enlarged from text-xs to 0.875rem */}
                <p className="text-[#7A5C3A] leading-relaxed mb-6" style={{ fontWeight: 300, fontSize: '0.875rem' }}>
                  {p.desc}
                </p>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#4A3A2A]"
                    style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 500, fontSize: '1.1rem' }}
                  >
                    {p.price}
                  </span>
                  <a
                    href="#contact"
                    className="btn-outline py-2 px-5"
                    style={{ letterSpacing: '0.15em', fontSize: '0.875rem' }}
                  >
                    訂購
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p
          className="text-center text-[#C8A97E] mt-14 tracking-widest reveal"
          style={{ fontFamily: 'Cormorant Garamond, serif', fontSize: '0.85rem' }}
        >
          * 所有商品均為手工現製，依季節與食材供應調整品項
        </p>
      </div>
    </section>
  )
}
