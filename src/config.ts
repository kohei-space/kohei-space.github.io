import heroImage from './assets/hero-real.jpg';
import { profile } from './data/profile';

export const SITE = {
  // 公開URL。astro.config.mjs の site(公開時は GitHub Actions が自動設定)から取得します。
  website: import.meta.env.SITE ?? 'http://localhost:4321',
  author: profile.name.en,
  description: `${profile.name.en} - ${profile.headline.en}`,
  title: profile.name.en,
  jobTitle: profile.role.en,
  ogImage: 'astropaper-og.jpg',
  lightAndDarkMode: true,
  postPerPage: 3,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes

  // サイト名(ブラウザのタブ名・SNS共有に使われます。英語表記)
  labName: profile.name.en,
  university: profile.university.en,
  // ロゴは表示しません(下の LOGO_IMAGE.enable)。ここは検索エンジン向けの代表画像として使われます。
  logo: '/favicon.svg',
  avatar: '/favicon.svg',
  email: profile.email,

  // トップページの背景画像(src/assets/hero-real.jpg)。差し替えるときは同じ名前で上書きします。
  hero: {
    image: heroImage,
  },

  // メニュー(key は src/i18n/ui.ts の 'nav.○○' に対応)
  nav: [
    { text: 'Profile', link: '/profile', key: 'profile' },
    { text: 'Research', link: '/research', key: 'research' },
    { text: 'Business', link: '/business', key: 'business' },
    { text: 'News', link: '/news', key: 'news' },
    { text: 'Contact', link: '/contact', key: 'contact' },
  ],

  customPages: [
    // Example: { text: 'Alumni', link: '/alumni', key: 'alumni' }
  ],

  // i18n Config
  i18n: {
    enabled: true,
    defaultLocale: 'en',
  },
};

export const LOCALE = {
  lang: 'en', // html lang code. Set this empty and default will be "en"
  langTag: ['en-EN'], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false, // false: ロゴを表示しない(名前だけ表示)
  svg: true,
  width: 216,
  height: 46,
};
