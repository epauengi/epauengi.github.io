import { createContext, useContext, useState, ReactNode } from 'react';

export type Language = 'en' | 'jp';

export const content = {
  en: {
    nav: {
      about: "ABOUT",
      skills: "SKILLS",
      certificates: "CERTIFICATES",
      projects: "PROJECTS",
      contact: "CONTACT",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Phong Nguyen.",
      title: "Aspiring Full Stack Engineer.",
      projectsBtn: "VIEW PROJECTS",
      location: "HO CHI MINH CITY, VN",
      role: "CREATIVE ENGINEER",
    },
    about: {
      title: "ABOUT ME",
      text: "I am an Information Technology student at the University of Information Technology, VNU-HCM. I am interested in full-stack web development and database systems. I enjoy building practical web applications that solve real problems, from frontend UI to backend APIs and database design.",
      statsHeading: "FOCUS AREAS",
      stats: ["Web Development", "Database Systems", "AI Integration"]
    },
    skills: {
      title: "SKILLS",
      categories: [
        { name: "FrontEnd", skills: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS" },
        { name: "BackEnd", skills: "Java, Spring Boot, Node.js, Express" },
        { name: "Database", skills: "PostgreSQL, SQL Server, SQL" },
        { name: "Dev Tools", skills: "Git, GitHub, Vite" },
        { name: "AI & Automation", skills: "Gemini, ChatGPT, Claude, Prompt Engineering, AI Agents" }
      ],
      levels: [
        { title: "Comfortable", items: "HTML, CSS, JavaScript, SQL, React" },
        { title: "Learning", items: "Spring Boot, Docker, AWS" }
      ]
    },
    certificates: {
      title: "CERTIFICATIONS & DEGREES",
      emptyMessage: "Certificates and degrees will be updated soon.",
      items: [
        {
          title: "JLPT N3",
          issuer: "Japan Educational Exchanges and Services (JEES)",
          date: "Official Certificate",
          desc: "Japanese Language Proficiency Test (N3 Certification)."
        },
        {
          title: "Gemini Certified Student",
          issuer: "Google AI",
          date: "Official Certification",
          desc: "Certification in Google Gemini AI technology application & prompt engineering."
        }
      ]
    },
    projects: {
      title: "FEATURED PROJECTS",
      items: [
        {
          name: "YomuJi",
          subtitle: "Japanese–Vietnamese dictionary for learners",
          desc: "A search-first Japanese dictionary built to help Vietnamese learners look up words, kanji, romaji, and Sino-Vietnamese readings in a single streamlined flow.",
          features: [
            "Multi-format search for kanji, kana, romaji, and Vietnamese",
            "Vocabulary and kanji detail pages with readings, meanings, and structure",
            "Animated stroke-order visualization and browser-based pronunciation",
            "Responsive UI with dark mode and client-side caching"
          ],
          role: "Full-stack developer and product owner",
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "IndexedDB"],
          github: "https://github.com/epauengi/YomuJi",
          demo: "https://yomuji.vercel.app",
          image: "projects/yomuji.png"
        }
      ]
    },
    contact: {
      title: "GET IN TOUCH",
      text: "I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!",
      emailBtn: "SAY HELLO",
      resumeBtn: "DOWNLOAD CV",
      githubBtn: "GITHUB"
    }
  },
  jp: {
    nav: {
      about: "概要",
      skills: "スキル",
      certificates: "資格・認定",
      projects: "実績",
      contact: "お問い合わせ",
    },
    hero: {
      greeting: "初めまして、",
      name: "グエン・ディン・フォン。",
      title: "フルスタックエンジニア志望",
      projectsBtn: "プロジェクトを見る",
      location: "ホーチミン市、ベトナム",
      role: "CREATIVE ENGINEER",
    },
    about: {
      title: "自己紹介",
      text: "私はホーチミン市情報通信大学の学生で、Full Stack Engineerを目指しています。Web開発とデータベースに関心があり、フロントエンドからバックエンド、データベース設計まで一貫して学習・開発しています。",
      statsHeading: "興味分野",
      stats: ["Web開発", "データベース", "AI統合"]
    },
    skills: {
      title: "スキル",
      categories: [
        { name: "フロントエンド", skills: "HTML, CSS, JavaScript, TypeScript, React, Next.js, Tailwind CSS" },
        { name: "バックエンド", skills: "Java, Spring Boot, Node.js, Express" },
        { name: "データベース", skills: "PostgreSQL, SQL Server, SQL" },
        { name: "開発ツール", skills: "Git, GitHub, Vite" },
        { name: "AI & Automation", skills: "Gemini, ChatGPT, Claude, Prompt Engineering, AIエージェント" }
      ],
      levels: [
        { title: "得意", items: "HTML, CSS, JavaScript, SQL, React" },
        { title: "学習中", items: "Spring Boot, Docker, AWS" }
      ]
    },
    certificates: {
      title: "資格・認定",
      emptyMessage: "資格・認定情報は近日公開予定です。",
      items: [
        {
          title: "日本語能力試験 JLPT N3",
          issuer: "日本国際教育支援協会 (JEES)",
          date: "認定書",
          desc: "日本語能力試験（JLPT）N3レベル合格。"
        },
        {
          title: "Gemini Certified Student",
          issuer: "Google AI",
          date: "公式認定",
          desc: "Google Gemini AI技術の活用およびプロンプトエンジニアリングに関する認定。"
        }
      ]
    },
    projects: {
      title: "プロジェクト",
      items: [
        {
          name: "YomuJi",
          subtitle: "日本語学習者向けの日越辞書",
          desc: "ベトナム人学習者が漢字・かな・ローマ字・ベトナム語の意味を一つの検索フローで確認できる、検索中心の日本語辞書アプリです。",
          features: [
            "漢字・かな・ローマ字・ベトナム語の複数形式検索",
            "単語と漢字の詳細情報を一画面で表示",
            "書き順アニメーションとブラウザ音声再生を搭載",
            "ダークモードとIndexedDBキャッシュに対応したレスポンシブUI"
          ],
          role: "フルスタック開発 / プロダクト開発",
          stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "IndexedDB"],
          github: "https://github.com/epauengi/YomuJi",
          demo: "https://yomuji.vercel.app",
          image: "projects/yomuji.png"
        }
      ]
    },
    contact: {
      title: "連絡先",
      text: "現在、新たな機会を探しています。質問がある場合でも、ただ挨拶したい場合でも、お気軽にご連絡ください！",
      emailBtn: "メールを送る",
      resumeBtn: "履歴書ダウンロード",
      githubBtn: "GITHUB"
    }
  }
};

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: typeof content.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('en');

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: content[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
