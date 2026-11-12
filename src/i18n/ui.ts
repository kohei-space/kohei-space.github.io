import { DEFAULT_LANG, LANGUAGES } from './constants';

export const languages = LANGUAGES;

export const defaultLang = DEFAULT_LANG;

/**
 * 画面の部品(メニュー、ボタン、見出し)の文言。
 * 名前・経歴・自己紹介などの本文は src/data/profile.ts に、
 * 研究内容は research.ts、事業化活動は business.ts、ニュースは news.ts に書きます。
 */
export const ui = {
  en: {
    'nav.home': 'Home',
    'nav.profile': 'Profile',
    'nav.research': 'Research',
    'nav.business': 'Business',
    'nav.news': 'News',
    'nav.contact': 'Contact',
    'nav.search': 'Search',

    'search.subtitle': 'Search through the publications and profile.',

    'hero.viewPubs': 'View Publications',
    'hero.profile': 'Profile',

    'section.selectedPubs': 'Selected Publications',
    'section.awards': 'Awards',
    'section.viewAll': 'View all',

    'profile.title': 'Profile',
    'profile.about': 'About',
    'profile.interests': 'Research Interests',
    'profile.education': 'Education',
    'profile.awards': 'Awards',
    'profile.publications': 'Publications',
    'profile.noPapers': 'No publications listed yet.',
    'profile.contact': 'Contact',
    'profile.email': 'Email',

    'research.title': 'Research',
    'research.projects': 'Research Topics',
    'research.facilities': 'Facilities',

    'business.title': 'Business Activities',
    'business.plans': 'Commercialization Plans',
    'business.members': 'Members',

    'news.title': 'News',
    'news.subtitle': 'Latest updates, newest first.',
    'news.empty': 'No news yet.',
    'news.readMore': 'Read more',
    'news.back': 'Back to News',

    'contact.title': 'Contact',
    'contact.subtitle': 'For collaboration, questions, or any inquiries, please feel free to email us.',
    'contact.send': 'Send an email',
    'contact.copy': 'Copy address',
    'contact.copied': 'Copied!',
    'contact.affiliation': 'Affiliation',
    'contact.links': 'Links',
  },
  ja: {
    'nav.home': 'ホーム',
    'nav.profile': 'プロフィール',
    'nav.research': '研究内容',
    'nav.business': '事業化活動',
    'nav.news': 'ニュース',
    'nav.contact': '連絡先',
    'nav.search': '検索',

    'search.subtitle': '業績とプロフィールを検索します。',

    'hero.viewPubs': '業績を見る',
    'hero.profile': 'プロフィール',

    'section.selectedPubs': '主な業績',
    'section.awards': '受賞歴',
    'section.viewAll': 'すべて見る',

    'profile.title': 'プロフィール',
    'profile.about': '自己紹介',
    'profile.interests': '研究分野',
    'profile.education': '学歴',
    'profile.awards': '受賞歴',
    'profile.publications': '業績(論文・学会発表)',
    'profile.noPapers': '業績はまだ登録されていません。',
    'profile.contact': '連絡先',
    'profile.email': 'メール',

    'research.title': '研究内容',
    'research.projects': '研究紹介',
    'research.facilities': '設備紹介',

    'business.title': '事業化活動',
    'business.plans': '事業化プラン',
    'business.members': 'メンバー紹介',

    'news.title': 'ニュース',
    'news.subtitle': '新しい順に表示しています。',
    'news.empty': 'ニュースはまだありません。',
    'news.readMore': '詳細を見る',
    'news.back': 'ニュース一覧へ戻る',

    'contact.title': '連絡先',
    'contact.subtitle': '共同研究やご相談など、お気軽にメールでご連絡ください。',
    'contact.send': 'メールを送る',
    'contact.copy': 'アドレスをコピー',
    'contact.copied': 'コピーしました',
    'contact.affiliation': '所属',
    'contact.links': 'リンク',
  },
} as const;

export function getLangFromUrl(url: URL) {
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}
