export type LPData = {
  slug: string;
  industry: string;
  icon: string;
  accentColor: string;
  heroTitle: string;
  heroSubtitle: string;
  problems: { icon: string; text: string }[];
  steps: { label: string; couponName: string; icon: string }[];
  useCases: { title: string; description: string }[];
  testimonial: { quote: string; author: string; result: string };
  deliveryInterval: string;
};

const stepIcons = {
  first: "🎁",
  appeal1: "⭐",
  appeal2: "💎",
  weekday: "📅",
  rain: "☔",
  anniversary: "🎂",
  seasonal: "🌸",
  repeat: "🔁",
  referral: "🤝",
} as const;

export const lpDataList: LPData[] = [
  {
    slug: "beauty-salon",
    industry: "美容室",
    icon: "💇",
    accentColor: "#3B82F6",
    heroTitle:
      "ホットペッパー依存を脱却。\nLINE×無限クーポンで\n「指名リピーター」を自動で育てる",
    heroSubtitle: "一度構築すれば、永遠に回り続ける来店装置",
    problems: [
      { icon: "🚶", text: "クーポン目当て新規が再来店しない" },
      { icon: "📉", text: "リピート率30%以下" },
      { icon: "💸", text: "広告費が重い" },
      { icon: "📵", text: "DMできない" },
    ],
    steps: [
      { label: "初回特典", couponName: "トリートメント無料", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "カラー500円OFF", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "ヘッドスパ半額", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日カット10%OFF", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日トリートメント", icon: stepIcons.rain },
      { label: "記念日", couponName: "誕生月スペシャルケア", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "夏の紫外線ケア", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "3回目プチギフト", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方500円OFF", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "新規とリピートの導線を一本化",
        description:
          "初回から紹介まで同じLINE上で完結し、指名予約につなげる設計が可能です。",
      },
      {
        title: "繁忙期でも配信が止まらない",
        description:
          "スタッフの手を使わず、間隔配信で常連化のタイミングを逃しません。",
      },
      {
        title: "広告依存からの脱却",
        description:
          "リスト内で完結する施策に寄せ、ホットペッパー等の掲載費を抑えられます。",
      },
    ],
    testimonial: {
      quote:
        "指名のリピーターが増え、予約の空きに困る日が減りました。配信は一度設定しただけです。",
      author: "首都圏・美容室オーナー",
      result: "再来店率が約1.4倍に",
    },
    deliveryInterval: "30〜60日間隔",
  },
  {
    slug: "nail-salon",
    industry: "ネイルサロン",
    icon: "💅",
    accentColor: "#EC4899",
    heroTitle:
      "施術周期ぴったりにLINEが届く。\n予約の取りこぼしゼロの\n自動リピート術",
    heroSubtitle: "21日周期の自動配信で、次回予約が途切れない",
    problems: [
      { icon: "📅", text: "施術周期なのに次回予約取らず離脱" },
      { icon: "📣", text: "新規集客頼りで利益出ない" },
      { icon: "⏰", text: "DM送る暇ない" },
    ],
    steps: [
      { label: "初回特典", couponName: "オフ無料", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "アート1本追加", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "新デザイン先行体験", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日ハンドケア無料", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日パラフィンパック", icon: stepIcons.rain },
      { label: "記念日", couponName: "誕生月ストーン無料", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "春ネイル10%OFF", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "3回目ケアオイル", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方500円OFF", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "21日サイクルに合わせた自動フォロー",
        description: "オフから次回予約までの空白期間を、クーポンで自然に埋めます。",
      },
      {
        title: "予約枠の平準化",
        description: "平日・雨の日クーポンで閑散時間の予約を誘導できます。",
      },
      {
        title: "紹介の連鎖",
        description: "既存客からの紹介特典を自動で案内し、口コミ獲得を後押しします。",
      },
    ],
    testimonial: {
      quote: "次回予約の取りこぼしが激減。施術の合間に手動で送る必要がなくなりました。",
      author: "関西・ネイルサロン代表",
      result: "予約継続率が向上",
    },
    deliveryInterval: "21日間隔",
  },
  {
    slug: "seitai",
    industry: "整体院",
    icon: "🦴",
    accentColor: "#10B981",
    heroTitle:
      "「初回だけ客」を「通い続ける常連」に変える。\nLINE自動配信で離脱率を激減",
    heroSubtitle: "症状改善ストーリーをステップ配信に組み込む",
    problems: [
      { icon: "🚪", text: "初回割引客が2回目来ない" },
      { icon: "🎫", text: "回数券消化されない" },
      { icon: "✋", text: "リマインド手動は限界" },
    ],
    steps: [
      { label: "初回特典", couponName: "初回1,000円OFF", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "骨盤矯正500円OFF", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "ヘッドマッサージ10分延長", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日15分延長無料", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日足湯サービス", icon: stepIcons.rain },
      { label: "記念日", couponName: "誕生月全身ほぐし", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "冬の温熱コース", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "3回で効果実感チェック", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方1,000円OFF", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "初回後のフォロー自動化",
        description: "来院後のタイミングで効果と次回提案を届け、2回目以降を設計できます。",
      },
      {
        title: "回数券の消化を促進",
        description: "期限前にクーポンとセットでリマインドし、離脱を防ぎます。",
      },
      {
        title: "信頼の積み上げ",
        description: "症状別のメッセージをステップ化し、継続理由を言語化できます。",
      },
    ],
    testimonial: {
      quote: "初回だけの客が減り、回数券の消化ペースが安定しました。",
      author: "地方都市・整体院院長",
      result: "2回目以降の来院が増加",
    },
    deliveryInterval: "14〜30日間隔",
  },
  {
    slug: "esthe-salon",
    industry: "エステサロン",
    icon: "✨",
    accentColor: "#8B5CF6",
    heroTitle:
      "体験で終わらせない。\nLINE自動フォロー×無限クーポンで\n成約率を2倍に",
    heroSubtitle: "高単価メニューの検討離脱を自動フォローで防ぐ",
    problems: [
      { icon: "🤔", text: "体験後に迷って離脱" },
      { icon: "⏳", text: "検討期間が長い" },
      { icon: "📞", text: "フォロー電話が嫌がられる" },
    ],
    steps: [
      { label: "初回特典", couponName: "体験半額", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "フェイシャル20%OFF", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "ボディ体験半額", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日デコルテ追加", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日パック追加", icon: stepIcons.rain },
      { label: "記念日", couponName: "誕生月VIPコース", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "夏痩身コース", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "3回コース特別価格", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方1回無料", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "体験後の検討期をカバー",
        description: "電話なしで、LINEだけで納得感のあるフォローを複数回送れます。",
      },
      {
        title: "高単価コースへの橋渡し",
        description: "段階的に特典を提示し、成約までの心理的ハードルを下げます。",
      },
      {
        title: "紹介とリピートの両立",
        description: "満足客からの紹介特典を組み込み、新規とLTVを同時に伸ばせます。",
      },
    ],
    testimonial: {
      quote: "体験からの成約が伸び、電話フォローの負担がなくなりました。",
      author: "都市部・エステサロンオーナー",
      result: "体験成約率が大幅改善",
    },
    deliveryInterval: "21〜30日間隔",
  },
  {
    slug: "dental",
    industry: "歯科医院",
    icon: "🦷",
    accentColor: "#F59E0B",
    heroTitle:
      "自費診療の売上を\nLINE×無限クーポンで安定化。\n定期メンテナンスが自動で埋まる",
    heroSubtitle: "3〜6ヶ月周期のメンテナンスを自動リマインド",
    problems: [
      { icon: "🏥", text: "保険診療だけでは利益薄い" },
      { icon: "💡", text: "自費診療の認知不足" },
      { icon: "📝", text: "定期来院のリマインドが手動" },
    ],
    steps: [
      { label: "初回特典", couponName: "ホワイトニング3,000円OFF", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "クリーニング割引", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "審美カウンセリング無料", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日歯石除去割引", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日フッ素無料", icon: stepIcons.rain },
      { label: "記念日", couponName: "誕生月ホワイトニング", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "年末クリーニング", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "定期検診リマインド", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方割引", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "自費メニューの訴求",
        description: "保険外の価値を段階的に伝え、納得感のある提案ができます。",
      },
      {
        title: "定期検診の自動化",
        description: "3〜6ヶ月のサイクルに合わせ、来院タイミングを逃しません。",
      },
      {
        title: "院内の手間削減",
        description: "電話・手紙に頼らず、LINEで継続的にフォローできます。",
      },
    ],
    testimonial: {
      quote: "クリーニングと自費メニューの予約が埋まりやすくなりました。",
      author: "地域密着・歯科医院",
      result: "自費診療の提案機会が増加",
    },
    deliveryInterval: "90〜180日間隔",
  },
  {
    slug: "fitness-gym",
    industry: "フィットネスジム",
    icon: "💪",
    accentColor: "#F97316",
    heroTitle:
      "幽霊会員を生まない。\nLINE自動配信で\n「通い続ける理由」を毎月届ける",
    heroSubtitle: "入会後の離脱タイミングに合わせたモチベーション配信",
    problems: [
      { icon: "👻", text: "入会3ヶ月で幽霊会員化" },
      { icon: "🛡️", text: "退会防止策がない" },
      { icon: "📊", text: "季節変動で集客が不安定" },
    ],
    steps: [
      { label: "初回特典", couponName: "パーソナル1回無料", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "プロテイン1杯無料", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "ボディチェック無料", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日ジムグッズ割引", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日ドリンク無料", icon: stepIcons.rain },
      { label: "記念日", couponName: "誕生月ウェア割引", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "夏前ダイエット企画", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "3ヶ月継続ボーナス", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方1回無料", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "入会直後の習慣化",
        description: "離脱しやすい期間に特典とメッセージで来店理由を補強します。",
      },
      {
        title: "季節キャンペーンの自動展開",
        description: "夏前・年末などに合わせた訴求を事前に組み込めます。",
      },
      {
        title: "紹介での新規獲得",
        description: "既存会員からの紹介特典を回し、口コミと継続を両立します。",
      },
    ],
    testimonial: {
      quote: "3ヶ月以降も通う会員が増え、退会相談が減りました。",
      author: "地方・フィットネス店長",
      result: "継続率が改善",
    },
    deliveryInterval: "14〜30日間隔",
  },
  {
    slug: "pet-salon",
    industry: "ペットサロン",
    icon: "🐶",
    accentColor: "#92400E",
    heroTitle:
      "ペットオーナーの\n「また来る理由」を自動で作る。\nLINEで予約が途切れないサロンへ",
    heroSubtitle: "トリミング周期に合わせた自動配信",
    problems: [
      { icon: "🔄", text: "トリミング周期あるのに他店に流れる" },
      { icon: "✋", text: "リマインドが手動" },
      { icon: "📋", text: "ペットの情報管理が大変" },
    ],
    steps: [
      { label: "初回特典", couponName: "シャンプー無料", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "爪切り+肛門腺無料", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "撮影会無料", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日アロマバス追加", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日送迎割引", icon: stepIcons.rain },
      { label: "記念日", couponName: "ペット誕生月スペシャル", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "夏サマーカット割引", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "3回目トリミング割引", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方500円OFF", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "次回トリミングの先取り予約",
        description: "周期に合わせた配信で、他店へ流れる空白を埋めます。",
      },
      {
        title: "オーナー負担の軽減",
        description: "手動リマインドをやめても、LINEが自動でフォローします。",
      },
      {
        title: "紹介の拡大",
        description: "飼い主同士の紹介特典で、新規の信頼獲得がしやすくなります。",
      },
    ],
    testimonial: {
      quote: "予約の取りこぼしが減り、常連さんの再来が安定しました。",
      author: "住宅街・ペットサロン",
      result: "リピート率アップ",
    },
    deliveryInterval: "21〜42日間隔",
  },
  {
    slug: "school",
    industry: "学習塾・教室",
    icon: "📚",
    accentColor: "#2563EB",
    heroTitle:
      "体験で終わらせない。\nLINE自動フォローで\n「入会率」と「継続率」をW改善",
    heroSubtitle: "体験後の検討期間を自動フォローでカバー",
    problems: [
      { icon: "📉", text: "体験授業からの入会率低い" },
      { icon: "🚪", text: "既存生徒の退会防止" },
      { icon: "📅", text: "季節講習の集客が手動" },
    ],
    steps: [
      { label: "初回特典", couponName: "体験授業無料", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "入会金半額", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "教材プレゼント", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日補習1回無料", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日自習室開放", icon: stepIcons.rain },
      { label: "記念日", couponName: "成績UP記念割引", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "夏期講習割引", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "友達紹介1ヶ月無料", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方入会金免除", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "体験後のフォロー強化",
        description: "保護者の検討期に、訴求と特典を段階的に届けられます。",
      },
      {
        title: "継続・退会抑止",
        description: "長期コースの価値を定期的に伝え、離塾のタイミングを防ぎます。",
      },
      {
        title: "季節講習の事前集客",
        description: "夏期・冬期に向けた案内を自動化し、枠を早めに埋められます。",
      },
    ],
    testimonial: {
      quote: "体験からの入会が伸び、講習の募集も楽になりました。",
      author: "学習塾・塾長",
      result: "体験後の成約率向上",
    },
    deliveryInterval: "14〜30日間隔",
  },
  {
    slug: "car-service",
    industry: "自動車整備",
    icon: "🚗",
    accentColor: "#6B7280",
    heroTitle:
      "車検の合間も\n「選ばれる工場」に。\nLINEで定期メンテナンスの来店を自動化",
    heroSubtitle: "車検時期に合わせた自動リマインドで取りこぼしゼロ",
    problems: [
      { icon: "⏳", text: "車検2年に1回で中間需要取りこぼし" },
      { icon: "🔧", text: "オイル交換等の来店促進が弱い" },
      { icon: "❄️", text: "季節メンテ提案ができてない" },
    ],
    steps: [
      { label: "初回特典", couponName: "オイル交換500円OFF", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "エアコンフィルター割引", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "タイヤ交換工賃無料", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日洗車サービス", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日室内清掃", icon: stepIcons.rain },
      { label: "記念日", couponName: "車記念日点検無料", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "冬タイヤ交換割引", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "車検早期予約割引", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方1,000円OFF", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "車検以外の来店創出",
        description: "オイル・タイヤ・季節点検をクーポンで継続的に提案できます。",
      },
      {
        title: "車検前の早期予約",
        description: "時期に合わせたリマインドで、工場の稼働を平準化します。",
      },
      {
        title: "地域の紹介拡大",
        description: "紹介特典で口コミを促し、リピートと新規の両方を狙えます。",
      },
    ],
    testimonial: {
      quote: "車検以外の入庫が増え、工場の閑散期が減りました。",
      author: "地域・自動車整備工場",
      result: "リピート入庫が増加",
    },
    deliveryInterval: "30〜60日間隔",
  },
  {
    slug: "cafe-bakery",
    industry: "カフェ・ベーカリー",
    icon: "☕",
    accentColor: "#EAB308",
    heroTitle:
      "週1回の常連を作る。\n低コスト×全自動のLINEクーポンで\n「毎日来たくなるお店」に",
    heroSubtitle: "客単価が低い業態こそ高頻度リピートが命",
    problems: [
      { icon: "💴", text: "客単価低く来店頻度が命" },
      { icon: "🏃", text: "販促に手が回らない" },
      { icon: "🪑", text: "空き時間の集客ができない" },
    ],
    steps: [
      { label: "初回特典", couponName: "ドリンクサイズアップ", icon: stepIcons.first },
      { label: "魅力紹介①", couponName: "焼きたてパン1個", icon: stepIcons.appeal1 },
      { label: "魅力紹介②", couponName: "季節限定メニュー先行", icon: stepIcons.appeal2 },
      { label: "平日限定", couponName: "平日午後スイーツ割", icon: stepIcons.weekday },
      { label: "雨の日", couponName: "雨の日クッキー進呈", icon: stepIcons.rain },
      { label: "記念日", couponName: "誕生月ケーキ割引", icon: stepIcons.anniversary },
      { label: "季節限定", couponName: "季節ドリンク先行", icon: stepIcons.seasonal },
      { label: "再来店促進", couponName: "スタンプ2倍デー", icon: stepIcons.repeat },
      { label: "友だち紹介", couponName: "紹介で双方ドリンク無料", icon: stepIcons.referral },
    ],
    useCases: [
      {
        title: "高頻度の来店習慣",
        description: "短い間隔の配信で、週1・週2のリピートを狙えます。",
      },
      {
        title: "閑散時間の埋め合わせ",
        description: "平日午後・雨の日クーポンで席稼働を上げられます。",
      },
      {
        title: "少人数でも運用可能",
        description: "自動配信中心なので、スタッフの手間を増やしません。",
      },
    ],
    testimonial: {
      quote: "常連さんの来店間隔が短くなり、雨の日も動きやすくなりました。",
      author: "商店街・カフェオーナー",
      result: "来店頻度が向上",
    },
    deliveryInterval: "5〜7日間隔",
  },
];

export function getLpDataBySlug(slug: string): LPData | undefined {
  return lpDataList.find((item) => item.slug === slug);
}
