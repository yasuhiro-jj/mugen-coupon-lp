/** 各業種LPのSEO・OGP用（og:image はプレースホルダーURL） */

export type LpSeoEntry = {
  title: string;
  description: string;
  /** OGP 画像（後から差し替え。metadataBase からの相対パス） */
  ogImage: string;
  ogImageAlt: string;
};

const OG_PLACEHOLDER = "/images/og-default.png";

export const lpSeoBySlug: Record<string, LpSeoEntry> = {
  "beauty-salon": {
    title: "美容室の無限クーポン | LINE自動配信でリピーターを育てる",
    description:
      "ホットペッパー依存を脱却。LINE×無限クーポンで指名リピーターを自動で育てる方法を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "美容室向け 無限クーポン",
  },
  "nail-salon": {
    title: "ネイルサロンの無限クーポン | 施術周期に合わせたLINE自動配信",
    description:
      "21日周期で次回予約が途切れない。LINE×無限クーポンで予約の取りこぼしを防ぐ設計を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "ネイルサロン向け 無限クーポン",
  },
  seitai: {
    title: "整体院の無限クーポン | LINE自動配信で初回客を常連に",
    description:
      "「初回だけ客」を「通い続ける常連」に。症状フォローをステップ配信に組み込み離脱を減らす方法を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "整体院向け 無限クーポン",
  },
  "esthe-salon": {
    title: "エステサロンの無限クーポン | 体験後フォローで成約率を高める",
    description:
      "体験で終わらせない。LINE自動フォロー×無限クーポンで高単価メニューの検討離脱を防ぐ方法を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "エステサロン向け 無限クーポン",
  },
  dental: {
    title: "歯科医院の無限クーポン | 自費診療と定期メンテをLINEで自動化",
    description:
      "保険診療だけでは利益が薄い課題に。LINE×無限クーポンで自費診療の訴求と定期来院リマインドを解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "歯科医院向け 無限クーポン",
  },
  "fitness-gym": {
    title: "フィットネスジムの無限クーポン | 幽霊会員化を防ぐLINE配信",
    description:
      "入会後の離脱タイミングに合わせたモチベーション配信。LINE×無限クーポンで通い続ける理由を届ける方法を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "フィットネスジム向け 無限クーポン",
  },
  "pet-salon": {
    title: "ペットサロンの無限クーポン | トリミング周期に合わせたLINE配信",
    description:
      "オーナーの「また来る理由」を自動で作る。LINE×無限クーポンで予約が途切れないサロンへの設計を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "ペットサロン向け 無限クーポン",
  },
  school: {
    title: "学習塾・教室の無限クーポン | 体験後フォローで入会率と継続率を改善",
    description:
      "体験授業からの入会と既存生の継続を同時に。LINE×無限クーポンで検討期間を自動フォローする方法を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "学習塾・教室向け 無限クーポン",
  },
  "car-service": {
    title: "自動車整備の無限クーポン | 車検の合間もLINEで定期メンテ来店を自動化",
    description:
      "車検2年に1回の取りこぼしを防ぐ。LINE×無限クーポンでオイル交換・季節メンテの来店を促す方法を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "自動車整備向け 無限クーポン",
  },
  "cafe-bakery": {
    title: "カフェ・ベーカリーの無限クーポン | 高頻度リピートを低コストで自動化",
    description:
      "客単価が低い業態こそリピートが命。LINE×無限クーポンで週1常連を育てる設計を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "カフェ・ベーカリー向け 無限クーポン",
  },
  restaurant: {
    title: "飲食店の無限クーポン | グルメサイト依存を減らしLINEで常連化",
    description:
      "クーポン一見客のリピートと、予約サイトコストの課題に。LINE×無限クーポンで空席・閑散時間を平準化する方法を解説。note ¥4,980で構築マニュアル公開中。",
    ogImage: OG_PLACEHOLDER,
    ogImageAlt: "飲食店向け 無限クーポン",
  },
};

export function getLpSeo(slug: string): LpSeoEntry | undefined {
  return lpSeoBySlug[slug];
}
