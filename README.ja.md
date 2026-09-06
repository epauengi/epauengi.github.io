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

## 技術的な工夫と設計判断

### 1. せん断歪みを排除したパラメトリック3D軌道計算と深度オクルージョン

#### 課題
従来のCSS軌道アニメーションでは、傾斜を表現するために `rotate()` や `scaleY()`、さらに逆回転 `rotate(-angle)` を入れ子にする手法が一般的でした。しかし、傾斜角（$-24^\circ$ など）を伴う3D空間では非等方スケール行列の乗算により**アフィンせん断歪み（Affine Shear）**が発生し、円形アイコンが斜めに潰れた楕円へと変形してしまいます。また、球体の背後に回り込む際のクリッピングマスクは、要素の境界で不自然な欠けを生じさせていました。

#### 実装と解決策
[`src/components/portfolio/home/PortfolioOrb.tsx`](./src/components/portfolio/home/PortfolioOrb.tsx) において、傾斜楕円の幾何学方程式を2D投影し、`requestAnimationFrame` ループで各アイコンの位置を直接更新する方式を導入しました。

1. **未回転楕円の軌道座標**: 球体コンテナの直径 $D$ に対する長半径 $a = 0.56$、短半径 $b = 0.2408$ を定義：
   $$\begin{cases} x_0(t) = a \cos(t) \\ y_0(t) = b \sin(t) \end{cases}$$
2. **傾斜角による座標回転**: 軌道傾斜角 $\alpha = -24^\circ$（$-\frac{2\pi}{15}\text{ rad}$）を適用：
   $$\begin{cases} X(t) = x_0 \cos\alpha - y_0 \sin\alpha \\ Y(t) = x_0 \sin\alpha + y_0 \cos\alpha \end{cases}$$
3. **並進移動による配置**:
   ```css
   transform: translate(-50%, -50%) translate3d(posX, posY, 0) scale(depthScale);
   ```
   スケールは等方（`scaleX === scaleY`）であるため、アイコンの円形ジオメトリは**せん断歪みゼロ**で完全に保たれます。
4. **自然な3D深度オクルージョン（奥行き表現）**:
   - **手前半球**（$\sin t > 0$）: `zIndex = 3`、`scale = 1.0 + 0.12 * sin(t)`、`opacity = 1.0`。
   - **奥半球**（$\sin t \le 0$）: `zIndex = 0`、`scale = 1.0 + 0.10 * sin(t)`、`opacity = 0.75 - 1.0`。
   球体コア（`zIndex = 1`）と手前の軌道リング（`zIndex = 2`）とのスタッキングコンテキストを活用し、背後に回ったアイコンをCSSマスクに頼らず自然に球体で隠れるように設計しました。
5. **インタラクションとアクセシビリティ**:
   - ホバー時に軌道速度を通常の20%に減速させ、各技術アイコンの視認とツールチップ確認を容易に。
   - `prefers-reduced-motion` 設定を検出し、均等配置された静止状態へ自動フォールバック。
   - 単体検証スクリプト [`scripts/check-orb.mjs`](./scripts/check-orb.mjs) による幾何学的整合性の自動テスト。

---

### 2. Locomotive Scroll と GSAP ScrollTrigger の同期とライフサイクル管理

#### 課題
Locomotive Scroll はブラウザのネイティブスクロールをインターセプトし、仮想コンテナのCSS `translate3d(0, -y, 0)` によってスクロール位置を再現します。そのためネイティブの `window.scrollY` が常に 0 となり、GSAP ScrollTrigger の位置検知がそのままでは機能しません。

#### 実装と解決策
[`src/components/portfolio/shared/SiteEngine.tsx`](./src/components/portfolio/shared/SiteEngine.tsx) で `ScrollTrigger.scrollerProxy` を設定し、双方向同期ブリッジを構築しました。

```typescript
ScrollTrigger.scrollerProxy(container, {
  scrollTop(value) {
    if (!scroll) return 0;
    if (arguments.length) {
      scroll.scrollTo(value as number, { duration: 0, disableLerp: true });
      return value as number;
    }
    return scroll.scroll?.instance?.scroll?.y ?? 0;
  },
  getBoundingClientRect() {
    return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
  },
  pinType: container.style.transform ? "transform" : "fixed",
});

scroll.on("scroll", () => ScrollTrigger.update());
```

- **ライフサイクル制御**: ページ遷移時に既存の GSAP アニメーション（`gsap.killTweensOf("*")`）および Locomotive インスタンスを確実に破棄・クリーンアップし、メモリリークや二重アニメーションの発生を防止しています。

---

### 3. 再読み込み不要のインメモリ日英バイリンガル機構

#### 課題
言語切り替え時に対象URL（`/en` や `/ja` など）へのリロードを伴うと、画面のちらつきやスクロール位置のリセットが発生し、ユーザー体験が損なわれます。

#### 実装と解決策
[`src/components/portfolio/shared/PortfolioLanguage.tsx`](./src/components/portfolio/shared/PortfolioLanguage.tsx) に軽量な React Context を実装し、メモリ内で言語状態（`en` / `jp`）を管理しています。
- **同期的なテキスト切り替え**: コンポーネントツリー全体をアンマウントすることなく、テキスト辞書のみを即座に入れ替えます。
- **スクロール状態の保持**: ページ全体の再読み込みが発生しないため、Locomotive Scroll の位置やナビゲーション状態がそのまま維持されます。
- **型の厳格性**: [`data.ts`](./src/components/portfolio/shared/data.ts) 内の日英辞書オブジェクト構造をTypeScript型で厳密に縛り、翻訳漏れやキーの不一致をコンパイル時に検知します。

---

### 4. 物理演算に基づくマイクロインタラクション

- **マグネティックボタン**: カーソルとボタン中心の相対ベクトルを計算し、GSAP の `elastic.out` イージングを用いて指先に吸い付くような磁力引力効果を演出。
- **慣性追従プレビュー**: `/work` ページにおいて、プロジェクト一覧にホバーした際、遅延補間（`lerp`）を用いて画像プレビューが滑らかにマウスに追従し、クリック前に視覚的な手がかりを提供。

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

---

## セットアップと起動手順

### 前提環境

- Node.js 18.18.0 以上
- npm（または pnpm / yarn）

### インストール

1. リポジトリをクローン:
   ```bash
   git clone https://github.com/epauengi/epauengi.github.io.git
   cd epauengi.github.io
   ```

2. 依存関係のインストール:
   ```bash
   npm install
   ```

3. 開発サーバーの起動:
   ```bash
   npm run dev
   ```
   ブラウザで [http://localhost:3000](http://localhost:3000) を開きます。

### 検証・ビルドコマンド

- **軌道計算の自動自己検証**:
  ```bash
  node scripts/check-orb.mjs
  ```
- **コード品質チェック（ESLint）**:
  ```bash
  npm run lint
  ```
- **プロダクション用静的ビルド**:
  ```bash
  npm run build
  ```

---

## 開発者情報

**グエン・ディン・フォン（Phong Nguyen）**
- 所属: ホーチミン市情報通信大学（UIT, VNU-HCM）情報技術学部
- メール: [ndphong0602@gmail.com](mailto:ndphong0602@gmail.com)
- GitHub: [@epauengi](https://github.com/epauengi)

---

## ライセンス

本プロジェクトは [MIT License](./LICENSE) のもとで公開されています。
