[English](./README.md) | **日本語**

<div align="center">
  <h1>Phong Nguyen — Portfolio</h1>
  <p><strong>グエン・ディン・フォン（EPAUENGI）のエンジニアリングポートフォリオ</strong></p>
  <p>
    Next.js 16（App Router）、React 19、TypeScript、Tailwind CSS v4 で構築された、インタラクティブかつアニメーション設計に注力したデジタルポートフォリオです。Locomotive Scroll と GSAP ScrollTrigger の同期、および独自の数学的パラメトリック 3D 軌道物理演算を統合しています。
  </p>
  <p>
    <a href="https://epauengi.github.io"><strong>公開サイトを見る</strong></a> ·
    <a href="https://github.com/epauengi"><strong>GitHub プロフィール</strong></a> ·
    <a href="mailto:ndphong0602@gmail.com"><strong>お問い合わせ</strong></a>
  </p>
</div>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-16.3-black?style=flat-square&logo=nextdotjs&logoColor=white" alt="Next.js 16" />
  <img src="https://img.shields.io/badge/React-19.2-149eca?style=flat-square&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-3178C6?style=flat-square&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=flat-square&logo=tailwindcss&logoColor=white" alt="Tailwind CSS v4" />
  <img src="https://img.shields.io/badge/GSAP-3.15-88CE02?style=flat-square&logo=greensock&logoColor=white" alt="GSAP 3" />
</p>

---

## 概要

本リポジトリは、ベトナム国家大学ホーチミン市情報通信大学（UIT, VNU-HCM）の情報技術学部生であり、フルスタックエンジニアを目指す**グエン・ディン・フォン（Phong Nguyen）**の個人ポートフォリオWebサイトのソースコードです。

編集デザインの美学とインタラクティブなモーションを組み合わせ、これまでに開発・納品したソフトウェアシステムのショーケースとしてだけでなく、高度なフロントエンド設計、宣言的アニメーション管理、数学的UIモデリングの実証ケーススタディとして設計・実装しています。

### 主な特徴・提供価値

- **実用プロダクトの体系的展示**: フルスタックWebアプリ、言語学習支援システム、地域ポータル、ブラウザ拡張機能など、実際に稼働する5つの検証済みプロダクトを掲載。
- **日英バイリンガルアーキテクチャ**: 画面再読み込みを伴わない高速な言語切り替えを搭載し、日本企業やグローバル開発チームの採用担当者がスムーズに閲覧可能。
- **数学的3D軌道モデリング**: 傾斜楕円平面上のパラメトリック座標計算により、CSSのせん断歪み（アフィン変換の歪み）を排除したリアルタイム3Dテックサテライト軌道を独自実装。
- **統一モーションパイプライン**: 慣性スクロール（Locomotive Scroll）とタイムライン連動トリガー（GSAP ScrollTrigger）をプロキシ連携し、高精度なスクロール体験を実現。

---

## 主な開発実績・プロジェクト

本ポートフォリオでは、フルスタック開発からブラウザ拡張機能、グラフィックス実装まで、幅広い技術領域の実践プロダクトを公開しています。

| プロジェクト | 領域 / カテゴリ | 技術スタック | 主な実装・技術的工夫 |
| :--- | :--- | :--- | :--- |
| **[FuuCine](https://fuucine.vercel.app)** | 映画検索・ストリーミング | React, TypeScript, Vite, Tailwind, Framer Motion, WebGL / GLSL, SWR | プロシージャルGLSLフラグメントシェーダーによる映写機光線・浮遊粉塵シミュレーション、IMDb評価の二重非同期解決パイプライン、Framer Motion（`layoutId`）によるシームレスなモーダルトランジション。 |
| **[YomuJi](https://yomuji.vercel.app)** | 日本語学習者向け日越辞書 | Next.js, React, TypeScript, Tailwind, Supabase, PostgreSQL, IndexedDB | 漢字・かな・ローマ字・越語の一元検索、SVG書き順アニメーション、IndexedDBを活用したクライアントサイドの高速辞書キャッシュ層。 |
| **[Giáo Xứ Hội An](https://giaoxuhoian.vercel.app)** | 教区公式情報ポータル | Next.js App Router, Server Components, Tailwind, MongoDB, NextAuth, MDX | 司牧スケジュールや教区ニュースの公式配信、NextAuthによるセキュアな管理者管理機能、MDXコンテンツ管理と自動サイトマップ・メタデータ生成。 |
| **[FuuManga](https://github.com/epauengi/FuuManga)** | プライバシー重視マンガリーダー | React, Vite, Vanilla CSS, JS, LocalStorage API, Node.js Test Runner | MangaDexおよびOTruyen APIからのマルチソース集約とインメモリキャッシュ、Unicode正規化（NFD）によるベトナム語声調非依存検索、`IntersectionObserver`による縦スクロール読書位置自動保存。 |
| **[DocUnchain](https://github.com/epauengi/DocUnchain)** | Chromeブラウザ拡張機能 | Chrome Manifest V3, JavaScript, jsPDF, PptxGenJS, Canvas, Service Workers | 外部サーバーへドキュメントを送信せず、ブラウザ内（jsPDF / PptxGenJS）で安全にPDFおよびPPTXへ直接変換・出力するManifest V3拡張機能。学術サイト向けCookie自動クリーン機能。 |

---

## 技術スタック

### アプリケーション構成

| カテゴリ | 採用技術 | 選定理由および実装内容 |
| :--- | :--- | :--- |
| **フレームワーク** | **Next.js 16.3 (App Router)** | 静的出力（SSG: `output: 'export'` 対応）による高速な初期表示と、API負荷ゼロのアーキテクチャ。 |
| **フロントエンド基盤** | **React 19.2** | Concurrentモード、モダンフック群（`useRef`, `useLayoutEffect`, `useCallback`）による効率的な再レンダリング制御。 |
| **開発言語** | **TypeScript 5** | コンテンツスキーマ、軌道幾何学計算パラメータ、アニメーションイベントインターフェースにおける厳格な型安全性。 |
| **スタイリング** | **Tailwind CSS v4** | `@tailwindcss/postcss` を用いた最新ビルドエンジンによる軽量CSSと、柔軟なデザインシステムの構築。 |
| **スクロール基盤** | **Locomotive Scroll 4.1** | デスクトップ環境における一貫した慣性スクロール（スムーズスクロール）体験の提供。 |
| **アニメーション** | **GSAP 3.15 + ScrollTrigger** | 高度なタイムライン制御、スクロール連動テキストローリング、要素スキューアニメーションの実装。 |
| **UIプリミティブ** | **@base-ui/react + Lucide** | アクセシブルで装飾のないUIコンポーネントプリミティブとアイコン体系。 |

---

## パフォーマンスとアクセシビリティ

- **静的生成（SSG）**: Next.js Turbopack を用いて主要全4ルート（`/`, `/work`, `/about`, `/contact`）を静的HTMLとして事前生成。
- **rAFループ内のレイアウトスラッシング防止**: コンテナのサイズ取得処理を `window.resize` リスナーに集約し、60 FPS 描画ループ内での強制リフロー（Forced Reflow）を排除。
- **キーボード操作対応**: モバイルメニュー展開時、`Escape` キー入力によるメニュー閉じおよびスクロールロック解除に対応。
- **視覚運動の配慮**: `prefers-reduced-motion` メディアクエリを検知し、アニメーションを抑制した静止モードを標準サポート。

---

## ディレクトリ構成

```text
src/
├── app/                              # Next.js App Router 静的ページルート
│   ├── layout.tsx                    # グローバルルートレイアウトと言語Context
│   ├── page.tsx                      # ホーム（/）
│   ├── work/page.tsx                 # 実績一覧ページ（/work/）
│   ├── about/page.tsx                # 自己紹介・スキルページ（/about/）
│   └── contact/page.tsx              # お問い合わせページ（/contact/）
├── components/
│   └── portfolio/
│       ├── home/                     # Hero, PortfolioOrb, WorkTiles, MoreWork
│       ├── work/                     # WorkHeader, WorkRows, WorkFilters, MouseFollow
│       ├── about/                    # AboutHeader, AboutServices, Certificates
│       ├── contact/                  # ContactHeader, ContactDetails, ContactFooter
│       └── shared/                   # SiteEngine, NavBar, Footer, TechIcons, Language
├── styles/
│   └── portfolio.css                 # ポートフォリオ固有のスタイル・発光エフェクト
└── scripts/
    └── check-orb.mjs                 # 3D軌道計算の幾何学的検証スクリプト
```

## 開発者情報

**グエン・ディン・フォン（Phong Nguyen）**
- 所属: ホーチミン市情報通信大学（UIT, VNU-HCM）情報技術学部
- メール: [ndphong0602@gmail.com](mailto:ndphong0602@gmail.com)
- GitHub: [@epauengi](https://github.com/epauengi)

---

## ライセンス

本プロジェクトは [MIT License](./LICENSE) のもとで公開されています。
