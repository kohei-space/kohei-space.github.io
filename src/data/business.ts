/**
 * ===========================================================
 *  事業化活動ページ(事業化プランの説明)
 * ===========================================================
 *
 * 書き方のルールは research.ts と同じです(ja と en を両方書く、一覧は上が先、など)。
 * 写真は public/images/ に入れ、image に '/images/ファイル名' と書きます。
 * 写真がない項目は、image の行を消せば文章だけになります。
 */
import type { Bi } from '../i18n/bi';

export interface BusinessItem {
  title: Bi;
  body: Bi[];
  image?: string;
}

export interface Member {
  name: Bi;
  affiliation: Bi;
  career: Bi[];
  photo?: string;
}

export const business = {
  intro: {
    ja: '研究成果を社会で役立てるための、事業化の取り組みを紹介します。(練習用の架空の内容です)',
    en: 'This page introduces our efforts to turn research results into real-world services. (Fictional content for practice.)',
  } as Bi,

  // --- メンバー紹介(上にある人が先に、左から右へ並びます) -------------
  //  - photo: 顔写真。public/images/ に入れて '/images/ファイル名' と書きます(正方形が目安)。
  //           写真がない人は、photo の行を消せば、人型のマークが表示されます。
  //  - career: 経歴。1行ずつ { ja, en } を追加します(上から順に表示)。
  members: [
    {
      name: { ja: '山田 花子', en: 'Hanako Yamada' },
      affiliation: {
        ja: 'サンプル大学 大学院工学府 博士後期課程',
        en: 'Ph.D. Student, Graduate School of Engineering, Sample University',
      },
      career: [
        { ja: '2021年 サンプル大学 工学部 卒業', en: '2021: B.Eng., Sample University' },
        { ja: '2023年 同 大学院 博士前期課程 修了', en: "2023: M.Eng., Sample University" },
        { ja: '2023年〜 同 大学院 博士後期課程 在学', en: '2023-present: Ph.D. program, Sample University' },
      ],
      photo: '/images/member-1.svg',
    },
    {
      name: { ja: '鈴木 太郎', en: 'Taro Suzuki' },
      affiliation: {
        ja: 'サンプル株式会社 事業開発担当',
        en: 'Business Development, Sample Inc.',
      },
      career: [
        { ja: '2015年 サンプル株式会社 入社', en: '2015: Joined Sample Inc.' },
        { ja: '2022年〜 宇宙関連事業の立ち上げを担当', en: '2022-present: Leading new space-related businesses' },
      ],
      photo: '/images/member-2.svg',
    },
    {
      name: { ja: '佐藤 次郎', en: 'Jiro Sato' },
      affiliation: {
        ja: 'サンプル大学 大学院工学府 博士前期課程',
        en: "Master's Student, Graduate School of Engineering, Sample University",
      },
      career: [
        { ja: '2024年 サンプル大学 工学部 卒業', en: '2024: B.Eng., Sample University' },
        { ja: '2024年〜 同 大学院 博士前期課程 在学', en: "2024-present: Master's program, Sample University" },
      ],
    },
  ] as Member[],

  plans: [
    {
      title: { ja: '衛星データを使った地域向けサービス', en: 'Regional Services Using Satellite Data' },
      body: [
        {
          ja: '超小型衛星で撮影した画像をもとに、農地や森林の状態を地域の方へ届けるサービスを構想しています。',
          en: 'We are planning a service that delivers the condition of farmland and forests to local communities, based on images taken by small satellites.',
        },
        {
          ja: '第一段階として、地元の自治体・企業と実証実験を行う計画です。',
          en: 'As a first step, we plan a pilot study with local governments and companies.',
        },
      ],
      image: '/images/business-1.svg',
    },
    {
      title: { ja: '軌道計画ソフトウェアの提供', en: 'Orbit Planning Software' },
      body: [
        {
          ja: '研究で開発した軌道計画の手法を、衛星を運用する企業向けのソフトウェアとして提供する計画です。',
          en: 'We plan to offer the orbit planning methods developed in our research as software for companies that operate satellites.',
        },
      ],
      image: '/images/business-2.svg',
    },
  ] as BusinessItem[],
};
