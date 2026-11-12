/**
 * ===========================================================
 *  プロフィール情報(このファイルだけ編集すれば、サイトの文章が変わります)
 * ===========================================================
 *
 * 書き方のルール
 *  - 日本語は ja、英語は en に書きます。両方そろえてください。
 *  - 文字列は必ず "..." または '...' で囲み、行の最後に , を付けます。
 *  - // から行末まではメモ(コメント)です。サイトには表示されません。
 *  - 一覧(education, awards など)は、上にあるものが先に表示されます。
 *    新しいものを上に追加してください。
 *
 * 業績(論文・学会発表)はこのファイルではなく、プロジェクト直下の
 * citations.bib に書きます。
 */
import type { ImageMetadata } from 'astro';
import photo from '../assets/avatar-placeholder.png';
import type { Bi } from '../i18n/bi';

export interface Profile {
  photo: ImageMetadata;
  name: Bi;
  role: Bi;
  university: Bi;
  department: Bi;
  headline: Bi;
  bio: Bi[];
  interests: Bi[];
  email: string;
  links: { label: string; url: string }[];
  education: { period: Bi; title: Bi; org: Bi }[];
  awards: { date: Bi; title: Bi; org: Bi }[];
  notice?: Bi;
}

export const profile: Profile = {
  // 写真: src/assets/ に画像を置いて、ファイル名をここに合わせます(正方形が目安)。
  photo,

  // --- 基本情報 -------------------------------------------------
  name: { ja: '山田 花子', en: 'Hanako Yamada' },
  role: { ja: '博士後期課程2年', en: 'Ph.D. Student (2nd year)' },
  university: { ja: 'サンプル大学', en: 'Sample University' },
  department: {
    ja: '大学院工学府',
    en: 'Graduate School of Engineering',
  },

  // トップページの大きな見出し(短く、1〜2文)
  headline: {
    ja: '超小型衛星の軌道計画と姿勢制御を研究しています。',
    en: 'Researching orbit planning and attitude control for small satellites.',
  },

  // --- 自己紹介(段落ごとに { ja, en } を1つ追加) ----------------
  bio: [
    {
      ja: '超小型衛星の軌道計画と姿勢制御を研究している博士後期課程の学生です。限られた搭載リソースの中でミッションを確実に遂行するための制御手法を、数値シミュレーションと地上実験の両面から検討しています。',
      en: 'I am a Ph.D. student working on orbit planning and attitude control for small satellites. I study control methods that complete missions reliably under tight onboard resources, using both numerical simulation and ground experiments.',
    },
    {
      ja: '研究成果は国内外の学会で発表しています。共同研究やご相談は、メールでお気軽にご連絡ください。',
      en: 'I present my results at domestic and international conferences. Please feel free to contact me by email about collaboration or questions.',
    },
  ],

  // --- 研究分野(キーワード) -------------------------------------
  interests: [
    { ja: '軌道計画', en: 'Orbit planning' },
    { ja: '姿勢制御', en: 'Attitude control' },
    { ja: '超小型衛星', en: 'Small satellites' },
    { ja: '数理最適化', en: 'Mathematical optimization' },
  ],

  // --- 連絡先 ---------------------------------------------------
  // 練習用なので example.com(誰も使えないダミーのドメイン)を使っています。
  email: 'hanako.yamada@example.com',
  links: [
    { label: 'Google Scholar', url: 'https://scholar.google.com/' },
    { label: 'GitHub', url: 'https://github.com/' },
  ],

  // --- 学歴(新しいものを上に) -----------------------------------
  education: [
    {
      period: { ja: '2023年4月 - 現在', en: 'Apr. 2023 - present' },
      title: { ja: '博士後期課程', en: 'Ph.D. program' },
      org: {
        ja: 'サンプル大学 大学院工学府',
        en: 'Graduate School of Engineering, Sample University',
      },
    },
    {
      period: { ja: '2021年4月 - 2023年3月', en: 'Apr. 2021 - Mar. 2023' },
      title: { ja: '博士前期課程(修士)', en: "Master's program" },
      org: {
        ja: 'サンプル大学 大学院工学府',
        en: 'Graduate School of Engineering, Sample University',
      },
    },
    {
      period: { ja: '2017年4月 - 2021年3月', en: 'Apr. 2017 - Mar. 2021' },
      title: { ja: '学士', en: "Bachelor's program" },
      org: {
        ja: 'サンプル大学 工学部 航空宇宙工学科',
        en: 'Department of Aerospace Engineering, Sample University',
      },
    },
  ],

  // --- 受賞歴(新しいものを上に) ---------------------------------
  awards: [
    {
      date: { ja: '2025年11月', en: 'Nov. 2025' },
      title: { ja: '学生奨励賞', en: 'Student Encouragement Award' },
      org: { ja: 'サンプル学会', en: 'Sample Society' },
    },
    {
      date: { ja: '2024年9月', en: 'Sep. 2024' },
      title: { ja: '優秀発表賞', en: 'Best Presentation Award' },
      org: {
        ja: 'サンプル宇宙工学シンポジウム',
        en: 'Sample Symposium on Space Engineering',
      },
    },
  ],

  // --- 注意書き(不要なら、この項目ごと削除してください) -----------
  notice: {
    ja: 'このページは練習用のサンプルです。人物・所属・業績はすべて架空のものです。',
    en: 'This page is a practice sample. The person, affiliation, and publications are all fictional.',
  },
};
