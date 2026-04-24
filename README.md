# 拾味製菓 Shi Wei Pâtisserie — 品牌官網

日系極簡風手工餅乾品牌網站，使用 Next.js + Tailwind CSS 建構。

## 技術棧

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **Fonts**: Shippori Mincho, Cormorant Garamond, Noto Serif TC (Google Fonts)

## 快速開始

### 1. 安裝依賴

```bash
npm install
```

### 2. 開發模式

```bash
npm run dev
```

瀏覽器開啟 [http://localhost:3000](http://localhost:3000)

### 3. 建置生產版本

```bash
npm run build
npm run start
```

## 專案結構

```
shiwei-patisserie/
├── components/
│   ├── Navbar.js         # 固定導航列（含 scroll 效果）
│   ├── Hero.js           # 主視覺區塊
│   ├── Products.js       # 商品展示區
│   ├── Story.js          # 品牌故事
│   ├── Gifting.js        # 禮盒 & 客製服務
│   ├── Testimonials.js   # 顧客評價
│   ├── Contact.js        # 聯絡區（LINE / IG）
│   └── Footer.js         # 頁腳
├── pages/
│   ├── _app.js
│   ├── _document.js
│   └── index.js          # 主頁面
├── public/
│   └── logo.png          # 品牌 Logo
├── styles/
│   └── globals.css       # 全域樣式 & 動畫
├── tailwind.config.js
├── postcss.config.js
└── next.config.js
```

## 客製化指南

### 更換商品資料

編輯 `components/Products.js` 中的 `products` 陣列：

```js
const products = [
  {
    id: 1,
    emoji: '🌸',           // 暫時用 emoji，可換成真實圖片路徑
    name: '商品名稱',
    nameEn: 'Product Name in English',
    desc: '商品描述...',
    price: 'NT$ 380',
    tag: '人氣首選',       // 可為空字串 '' 則不顯示標籤
  },
  // ...
]
```

### 加入真實商品圖片

1. 將圖片放入 `public/products/` 資料夾（例如 `public/products/matcha-cookie.jpg`）
2. 在 `Products.js` 中將 emoji 替換為 `<Image>` 元件：

```jsx
import Image from 'next/image'

// 原本
<span className="text-7xl">{p.emoji}</span>

// 替換為
<Image src={p.image} alt={p.name} fill style={{ objectFit: 'cover' }} />
```

3. 在商品資料中加入 `image` 欄位：`image: '/products/matcha-cookie.jpg'`

### 更換 LINE / IG 連結

編輯 `components/Contact.js` 與 `components/Footer.js` 中的連結：

```jsx
href="https://line.me/ti/p/~@你的LINE帳號"
href="https://instagram.com/你的IG帳號"
```

### 配色調整

主要配色定義在 `styles/globals.css` 的 `:root` 與 `tailwind.config.js`：

| 用途 | 色碼 |
|------|------|
| 背景 | `#F5EFEA` |
| 主色（深咖啡） | `#4A3A2A` |
| 輔助（淡卡其） | `#E8DED4` |
| 強調（金棕） | `#C8A97E` |

## 部署到 GitHub Pages / Vercel

### Vercel（推薦）

```bash
# 安裝 Vercel CLI
npm i -g vercel

# 部署
vercel
```

### GitHub Pages

在 `next.config.js` 加入：

```js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
}
```

然後推送至 GitHub，設定 GitHub Pages 使用 `gh-pages` 分支。

---

© 2025 拾味製菓 Shi Wei Pâtisserie
