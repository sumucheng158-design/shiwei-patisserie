import Head from 'next/head'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Story from '../components/Story'
import Gifting from '../components/Gifting'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>拾味製菓 Shi Wei Pâtisserie — 手工餅乾，拾起美好滋味</title>
        <meta name="description" content="拾味製菓 — 日系極簡風手工餅乾品牌，嚴選食材，手作溫度，禮盒客製服務。" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="拾味製菓 Shi Wei Pâtisserie" />
        <meta property="og:description" content="手工餅乾，拾起美好滋味" />
        <meta property="og:image" content="/logo.png" />
      </Head>

      <div className="relative">
        <Navbar />
        <main>
          <Hero />
          <Products />
          <Story />
          <Gifting />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}
