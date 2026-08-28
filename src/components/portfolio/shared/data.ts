export const PROJECT_ASSET_ROOT = "/portfolio/projects";

export type Language = "en" | "jp";
export type SiteRoute = "/" | "/work/" | "/about/" | "/contact/";

export const NAV: { key: "home" | "work" | "about" | "contact"; href: SiteRoute }[] = [
  { key: "home", href: "/" },
  { key: "work", href: "/work/" },
  { key: "about", href: "/about/" },
  { key: "contact", href: "/contact/" },
];

export const SOCIALS = [
  { label: "GitHub", href: "https://github.com/epauengi" },
  { label: "Facebook", href: "https://facebook.com/phong626262" },
] as const;

export type ProjectSlug = "yomuji" | "giaoxu-hoi-an";

export type PortfolioProject = {
  slug: ProjectSlug;
  title: string;
  image: string;
  color: string;
  demo: string;
  github: string;
};

export const WORK: PortfolioProject[] = [
  {
    slug: "yomuji",
    title: "YomuJi",
    image: `${PROJECT_ASSET_ROOT}/yomuji-cover.png`,
    color: "#F1F1F1",
    demo: "https://yomuji.vercel.app",
    github: "https://github.com/epauengi/YomuJi",
  },
  {
    slug: "giaoxu-hoi-an",
    title: "Giáo Xứ Hội An",
    image: `${PROJECT_ASSET_ROOT}/giaoxu-hoi-an-cover.png`,
    color: "#E0D9D1",
    demo: "https://giaoxuhoian.vercel.app",
    github: "https://github.com/epauengi/giaoxuhoian",
  },
];

type ProjectContent = {
  subtitle: string;
  description: string;
  role: string;
  stack: string[];
  features: string[];
};

type PortfolioContent = {
  nav: Record<"home" | "work" | "about" | "contact", string> & { menu: string; navigation: string; socials: string };
  loader: string;
  language: { toggle: string; label: string };
  identity: { brand: string; name: string; role: string; location: string; availability: string; school: string; email: string };
  home: { recentWork: string; introLead: string; introText: string; aboutAction: string; moreWork: string; view: string };
  work: { heading: string; all: string; development: string; demo: string; source: string; features: string; role: string; stack: string };
  about: { heading: string; text: string; focus: string; focusItems: string[]; skillsHeading: string; proficiency: string };
  certificateSection: { heading: string; badge: string; label: string };
  contact: { heading: string; eyebrow: string; text: string; action: string; details: string; location: string };
  footer: { heading: string; action: string; version: string; time: string };
  projects: Record<ProjectSlug, ProjectContent>;
  skills: { name: string; items: string }[];
  proficiency: { name: string; items: string }[];
  certificates: { title: string; issuer: string; date: string; description: string }[];
};

export const CONTENT: Record<Language, PortfolioContent> = {
  en: {
    nav: { home: "Home", work: "Work", about: "About", contact: "Contact", menu: "Menu", navigation: "Navigation", socials: "Socials" },
    loader: "Loading",
    language: { toggle: "Switch language to Japanese", label: "日本語" },
    identity: { brand: "EPAUENGI.", name: "Phong Nguyen", role: "Aspiring Full Stack Engineer", location: "Ho Chi Minh City, VN", availability: "Available for hire", school: "UIT / Student", email: "ndphong0602@gmail.com" },
    home: {
      recentWork: "Selected work",
      introLead: "Building practical web applications from frontend UI to backend APIs and database design.",
      introText: "I am an Information Technology student at the University of Information Technology, VNU-HCM. I am interested in full-stack web development and database systems.",
      aboutAction: "About me",
      moreWork: "View projects",
      view: "View demo",
    },
    work: { heading: "Building practical digital products", all: "All projects", development: "Full-stack development", demo: "Live demo", source: "GitHub", features: "Key features", role: "My role", stack: "Stack" },
    about: {
      heading: "Learning to build useful systems",
      text: "I am an Information Technology student at the University of Information Technology, VNU-HCM. I am interested in full-stack web development and database systems. I enjoy building practical web applications that solve real problems, from frontend UI to backend APIs and database design.",
      focus: "Focus areas",
      focusItems: ["Web Development", "Database Systems", "AI Integration"],
      skillsHeading: "Skills and practice",
      proficiency: "Proficiency",
    },
    certificateSection: { heading: "Certificates", badge: "Verified learning", label: "Certification" },
    contact: { heading: "Let’s start a conversation", eyebrow: "What’s next?", text: "I’m currently looking for new opportunities. Whether you have a question or just want to say hi, I’ll try my best to get back to you!", action: "Say hello", details: "Contact details", location: "Ho Chi Minh City, VN" },
    footer: { heading: "Let’s work together", action: "Get in touch", version: "Portfolio", time: "Local time" },
    projects: {
      yomuji: {
        subtitle: "Japanese–Vietnamese dictionary for learners",
        description: "A search-first Japanese dictionary built to help Vietnamese learners look up words, kanji, romaji, and Sino-Vietnamese readings in a single streamlined flow.",
        role: "Full-stack developer and product owner",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "IndexedDB"],
        features: ["Multi-format search for kanji, kana, romaji, and Vietnamese", "Vocabulary and kanji detail pages with readings, meanings, and structure", "Animated stroke-order visualization and browser-based pronunciation", "Responsive UI with dark mode and client-side caching"],
      },
      "giaoxu-hoi-an": {
        subtitle: "Official parish information portal for Hội An",
        description: "The official information portal for Giáo xứ Hội An, Diocese of Da Nang, connecting parishioners, visitors, and the local community with essential pastoral information.",
        role: "Full-stack web development",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth", "MDX"],
        features: ["Mass times, Sacraments, the Word of God, news, schedules, catechism, library, donations, and emergency contact", "Content administration with secure admin authentication", "Next.js App Router and Server Components for fast page delivery", "Responsive editorial interface with SEO, sitemap, and desktop/mobile support"],
      },
    },
    skills: [
      { name: "FrontEnd", items: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS" },
      { name: "BackEnd", items: "Java, Spring Boot, Node.js, Express" },
      { name: "Database", items: "PostgreSQL, SQL Server, SQL, MongoDB" },
      { name: "Dev Tools", items: "Git, GitHub, Vite" },
      { name: "AI & Automation", items: "Gemini, ChatGPT, Claude, Prompt Engineering, AI Agents" },
    ],
    proficiency: [
      { name: "Comfortable", items: "HTML, CSS, JavaScript, SQL, React" },
      { name: "Learning", items: "Spring Boot, Docker, AWS" },
    ],
    certificates: [
      { title: "JLPT N3", issuer: "Japan Educational Exchanges and Services (JEES)", date: "Official Certificate", description: "Japanese Language Proficiency Test (N3 Certification)." },
      { title: "Gemini Certified Student", issuer: "Google AI", date: "Official Certification", description: "Certification in Google Gemini AI technology application & prompt engineering." },
    ],
  },
  jp: {
    nav: { home: "ホーム", work: "実績", about: "概要", contact: "お問い合わせ", menu: "メニュー", navigation: "ナビゲーション", socials: "ソーシャル" },
    loader: "読み込み中",
    language: { toggle: "英語に切り替える", label: "EN" },
    identity: { brand: "EPAUENGI.", name: "グエン・ディン・フォン", role: "フルスタックエンジニア志望", location: "ホーチミン市、ベトナム", availability: "Available for hire", school: "UIT / Student", email: "ndphong0602@gmail.com" },
    home: { recentWork: "プロジェクト", introLead: "フロントエンドUIからバックエンドAPI、データベース設計まで、実用的なWebアプリケーションを開発しています。", introText: "私はホーチミン市情報通信大学の学生で、Full Stack Engineerを目指しています。Web開発とデータベースに関心があります。", aboutAction: "自己紹介", moreWork: "プロジェクトを見る", view: "デモを見る" },
    work: { heading: "実用的なデジタルプロダクトを開発", all: "すべてのプロジェクト", development: "フルスタック開発", demo: "デモを見る", source: "GitHub", features: "主な機能", role: "役割", stack: "技術スタック" },
    about: { heading: "役立つシステムを学びながら開発", text: "私はホーチミン市情報通信大学の学生で、Full Stack Engineerを目指しています。Web開発とデータベースに関心があり、フロントエンドからバックエンド、データベース設計まで一貫して学習・開発しています。", focus: "興味分野", focusItems: ["Web開発", "データベース", "AI統合"], skillsHeading: "スキル", proficiency: "習熟度" },
    certificateSection: { heading: "資格・認定", badge: "学習実績", label: "認定" },
    contact: { heading: "お気軽にご連絡ください", eyebrow: "What’s next?", text: "現在、新たな機会を探しています。質問がある場合でも、ただ挨拶したい場合でも、お気軽にご連絡ください！", action: "メールを送る", details: "連絡先", location: "ホーチミン市、ベトナム" },
    footer: { heading: "一緒に働きましょう", action: "お問い合わせ", version: "ポートフォリオ", time: "現地時間" },
    projects: {
      yomuji: { subtitle: "日本語学習者向けの日越辞書", description: "ベトナム人学習者が漢字・かな・ローマ字・ベトナム語の意味を一つの検索フローで確認できる、検索中心の日本語辞書アプリです。", role: "フルスタック開発 / プロダクト開発", stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "IndexedDB"], features: ["漢字・かな・ローマ字・ベトナム語の複数形式検索", "単語と漢字の詳細情報を一画面で表示", "書き順アニメーションとブラウザ音声再生を搭載", "ダークモードとIndexedDBキャッシュに対応したレスポンシブUI"] },
      "giaoxu-hoi-an": { subtitle: "ホイアン教区の公式情報ポータル", description: "ダナン教区に属するホイアン教区の公式情報ポータルです。教区の信者、訪問者、地域の人々をつなぎ、必要な牧会情報を提供します。", role: "フルスタックWeb開発", stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "MongoDB", "NextAuth", "MDX"], features: ["ミサの時間、秘跡、神の言葉、ニュース、活動予定、カテキズム、図書館、献金、緊急連絡先を掲載", "コンテンツ管理と管理者認証に対応", "App RouterとServer Componentsによる高速なページ表示", "新聞を参考にしたレスポンシブな編集デザイン、SEOとサイトマップに対応"] },
    },
    skills: [
      { name: "フロントエンド", items: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS" },
      { name: "バックエンド", items: "Java, Spring Boot, Node.js, Express" },
      { name: "データベース", items: "PostgreSQL, SQL Server, SQL, MongoDB" },
      { name: "開発ツール", items: "Git, GitHub, Vite" },
      { name: "AI & Automation", items: "Gemini, ChatGPT, Claude, Prompt Engineering, AIエージェント" },
    ],
    proficiency: [{ name: "得意", items: "HTML, CSS, JavaScript, SQL, React" }, { name: "学習中", items: "Spring Boot, Docker, AWS" }],
    certificates: [
      { title: "日本語能力試験 JLPT N3", issuer: "日本国際教育支援協会 (JEES)", date: "認定書", description: "日本語能力試験（JLPT）N3レベル合格。" },
      { title: "Gemini Certified Student", issuer: "Google AI", date: "公式認定", description: "Google Gemini AI技術の活用およびプロンプトエンジニアリングに関する認定。" },
    ],
  },
};

export type { PortfolioContent };

export const GREETINGS = [
  { text: "Hello", extra: "home-active home-active-first" },
  { text: "こんにちは", extra: "home-active" },
  { text: "Xin chào", extra: "home-active" },
  { text: "Ciao", extra: "home-active" },
  { text: "Olá", extra: "home-active" },
  { text: "Hallo", extra: "home-active-last" },
] as const;

export const HORIZONTAL = [
  [
    { src: `${PROJECT_ASSET_ROOT}/yomuji-cover.png`, alt: "YomuJi project preview" },
    { src: `${PROJECT_ASSET_ROOT}/giaoxu-hoi-an-cover.png`, alt: "Giáo Xứ Hội An project preview" },
  ],
  [
    { src: `${PROJECT_ASSET_ROOT}/giaoxu-hoi-an-cover.png`, alt: "Giáo Xứ Hội An project preview" },
    { src: `${PROJECT_ASSET_ROOT}/yomuji-cover.png`, alt: "YomuJi project preview" },
  ],
] as const;
