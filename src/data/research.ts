/**
 * ===========================================================
 *  研究内容ページ(研究紹介・設備紹介)
 * ===========================================================
 *
 * 書き方のルール(profile.ts と同じです)
 *  - 日本語は ja、英語は en に書きます。両方そろえてください。
 *  - 文字列は "..." または '...' で囲み、行の最後に , を付けます。
 *  - 一覧は上にあるものが先に表示されます。
 *  - 1件を増やすときは、既存の1件分({ から }, まで)をコピーして書き換えます。
 *
 * 写真について
 *  - 写真は、プロジェクトの public/images/ フォルダに入れます
 *    (GitHub の画面なら「Add file」→「Upload files」)。
 *  - image には '/images/ファイル名' と書きます。写真がない項目は、image の行を消せば文章だけになります。
 *  - 写真は横長(3:2 くらい)で、1枚 1MB 以下が目安です。
 */
import type { Bi } from '../i18n/bi';

export interface ResearchItem {
  title: Bi;
  body: Bi[]; // 段落ごとに { ja, en } を1つ追加
  image?: string;
}

export const research = {
  // ページ上部の導入文
  intro: {
    ja: '超小型衛星を安定して運用するための、軌道計画と姿勢制御の研究を行っています。',
    en: 'We study orbit planning and attitude control to operate small satellites reliably.',
  } as Bi,

  // --- 研究紹介 -------------------------------------------------
  projects: [
    {
      title: { ja: '超小型衛星の軌道計画', en: 'Orbit Planning for Small Satellites' },
      body: [
        {
          ja: '搭載できる計算資源や電力が限られる超小型衛星でも、目的の観測を確実に行えるよう、軽い計算で解ける軌道計画の手法を研究しています。',
          en: 'Small satellites have limited computing power and energy. We develop orbit planning methods that are light enough to run onboard while still achieving the observation goals.',
        },
        {
          ja: '数値シミュレーションで手法を比較し、有望なものを実機相当の環境で確かめています。',
          en: 'We compare methods by numerical simulation and verify the promising ones in a flight-like environment.',
        },
      ],
      image: '/images/research-1.svg',
    },
    {
      title: { ja: '姿勢制御の地上実験', en: 'Ground Experiments on Attitude Control' },
      body: [
        {
          ja: '衛星が向きを保つための制御を、地上の実験装置で再現して検証しています。',
          en: 'We reproduce attitude control, which keeps a satellite pointing in the right direction, on ground-based testbeds and verify it.',
        },
      ],
      image: '/images/research-2.svg',
    },
  ] as ResearchItem[],

  // --- 設備紹介 -------------------------------------------------
  facilities: [
    {
      title: { ja: '姿勢制御シミュレータ', en: 'Attitude Control Simulator' },
      body: [
        {
          ja: '空気の力で衛星模型を浮かせ、ほぼ摩擦のない状態で姿勢制御を試せる実験装置です。(練習用の架空の設備です)',
          en: 'A testbed that floats a satellite model on air so attitude control can be tested with almost no friction. (A fictional facility for practice.)',
        },
      ],
      image: '/images/facility-1.svg',
    },
    {
      title: { ja: 'クリーンルーム', en: 'Clean Room' },
      body: [
        {
          ja: '衛星の組み立てと試験を、ほこりの少ない環境で行います。(練習用の架空の設備です)',
          en: 'Satellites are assembled and tested here in a low-dust environment. (A fictional facility for practice.)',
        },
      ],
      image: '/images/facility-2.svg',
    },
  ] as ResearchItem[],
};
