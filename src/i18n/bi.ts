/**
 * 日本語(ja)と英語(en)をセットで持つ文字列の型と、表示用の補助関数。
 *
 * 使い方(.astro ファイルの中):
 *   <h1 {...bi(profile.name)}>{profile.name.ja}</h1>
 *
 * ページには最初に日本語が書き出され、言語切り替え(Layout.astro のスクリプト)で
 * data-ja / data-en の中身に自動で差し替わります。
 */
export type Bi = { ja: string; en: string };

export function bi(text: Bi) {
  return {
    'data-bi': '',
    'data-ja': text.ja,
    'data-en': text.en,
  };
}
