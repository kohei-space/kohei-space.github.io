/**
 * ===========================================================
 *  ニュース(新しい順に自動で並びます。書く順番は自由です)
 * ===========================================================
 *
 * 1件を増やすときは、既存の1件分({ から }, まで)をコピーして書き換えます。
 *  - slug: その記事のURLに使う名前。半角の英数字とハイフンだけ。他の記事と重ならないこと。
 *          例: slug: '2026-05-award' → https://〜/news/2026-05-award
 *  - date: 日付。必ず '2026-05-20' のように「年-月-日」(半角、ゼロ埋め)で書きます。
 *  - title / summary: 一覧に出る題名と、1〜2行の要約。
 *  - body: クリックしたあとの詳細ページの本文(段落ごとに { ja, en } を1つ追加)。
 *  - image: 写真(任意)。public/images/ に入れて '/images/ファイル名' と書きます。不要なら行ごと削除。
 *
 * 日本語は ja、英語は en に書きます。両方そろえてください。
 */
import type { Bi } from '../i18n/bi';

export interface NewsItem {
  slug: string;
  date: string;
  title: Bi;
  summary: Bi;
  body: Bi[];
  image?: string;
}

export const news: NewsItem[] = [
  {
    slug: '2026-04-paper-published',
    date: '2026-04-15',
    title: { ja: '論文が掲載されました', en: 'Paper published' },
    summary: {
      ja: '超小型衛星の軌道計画に関する論文が学術誌に掲載されました。',
      en: 'Our paper on orbit planning for small satellites has been published in a journal.',
    },
    body: [
      {
        ja: '超小型衛星の軌道計画に関する論文が、学術誌に掲載されました。限られた計算資源でも使える手法を提案しています。',
        en: 'Our paper on orbit planning for small satellites has been published in a journal. It proposes a method that works under limited computing resources.',
      },
      {
        ja: '詳細は、プロフィールページの「業績」をご覧ください。(練習用の架空のニュースです)',
        en: 'See "Publications" on the Profile page for details. (A fictional news item for practice.)',
      },
    ],
    image: '/images/news-1.svg',
  },
  {
    slug: '2026-02-award',
    date: '2026-02-20',
    title: { ja: '学会で優秀発表賞を受賞しました', en: 'Best Presentation Award at a symposium' },
    summary: {
      ja: '姿勢制御の地上実験に関する発表で、優秀発表賞をいただきました。',
      en: 'We received a Best Presentation Award for our talk on attitude control experiments.',
    },
    body: [
      {
        ja: '宇宙工学シンポジウムで、姿勢制御の地上実験に関する発表を行い、優秀発表賞をいただきました。(練習用の架空のニュースです)',
        en: 'We gave a talk on ground experiments of attitude control at a space engineering symposium and received a Best Presentation Award. (A fictional news item for practice.)',
      },
    ],
  },
  {
    slug: '2025-10-website-open',
    date: '2025-10-01',
    title: { ja: 'ホームページを公開しました', en: 'Website launched' },
    summary: {
      ja: '研究内容や業績をまとめたホームページを公開しました。',
      en: 'We launched this website to share our research and publications.',
    },
    body: [
      {
        ja: '研究内容や業績をまとめたホームページを公開しました。今後、ニュースや業績を随時更新していきます。(練習用の架空のニュースです)',
        en: 'We launched this website to share our research and publications. News and publications will be updated regularly. (A fictional news item for practice.)',
      },
    ],
  },
];
