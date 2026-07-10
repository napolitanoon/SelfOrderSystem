/* =====================================================
   中華愛屋 セルフオーダーシステム
   フロントエンドのみ(バックエンド通信なし)
   ===================================================== */

/* ---------- メニューデータ ----------
   img に画像パスを入れるとアイコンの代わりに写真が表示される
   例: img: "img/menu/ramen.png"                        */
const MENU = [
  // ● おすすめ(デザイン掲載の10品。並び順は変更せず、以下の各ジャンル内では
  //   この10品がそれぞれの「まとまり(似た料理のグループ)」の先頭に来るよう配置している)
  { id: "ramen_shoyu", name: "醤油ラーメン",   price: 750, img:"img/menu/ramen_shoyu.png", cats: ["osusume", "men"],
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
      { key: "negi",     label: "ネギ",     options: ["あり", "なし"], default: "あり" },
    ] },

  // ● 麺類: ラーメン系(麺の硬さ+ネギ)をまとめ、続けて焼きそば系(麺の硬さのみ)をまとめる
  { id: "ramen_miso",  name: "味噌ラーメン",   price: 800, icon: "🍜", cats: ["men"], noodleType: "ramen", img:"img/menu/ramen_miso.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
      { key: "negi",     label: "ネギ",     options: ["あり", "なし"], default: "あり" },
    ] },
  { id: "tantan",      name: "担々麺",         price: 880, icon: "🌶️", cats: ["men"], noodleType: "ramen", img:"img/menu/tantan.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
      { key: "spice",    label: "辛さ",     type: "slider", options: ["普通", "やや辛口", "辛口", "大辛", "激辛"], default: "普通" },
      { key: "negi",     label: "ネギ",     options: ["あり", "なし"], default: "あり" },
    ] },
  { id: "wantan",      name: "海老ワンタン麺", price: 900, icon: "🥟", cats: ["men"], noodleType: "ramen", img:"img/menu/wantan.png",
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
      { key: "negi",     label: "ネギ",     options: ["あり", "なし"], default: "あり" },
    ] },
  { id: "hiyashi_chuka",     name: "冷やし中華",       price: 780, icon: "🥒", cats: ["men"], noodleType: "ramen", img:"img/menu/hiyashi_chuka.png",
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
    ] },
  { id: "shio_ramen",        name: "塩ラーメン",       price: 780, icon: "🍜", cats: ["men"], noodleType: "ramen", img:"img/menu/shio_ramen.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 0 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
      { key: "negi",     label: "ネギ",     options: ["あり", "なし"], default: "あり" },
    ] },
  { id: "curry_ramen",       name: "カレーラーメン",   price: 850, icon: "🍛", cats: ["men"], noodleType: "ramen", img:"img/menu/curry_ramen.png",
    allergy: { 卵: 0, 乳: 1, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
    ] },
  { id: "taiwan_ramen",      name: "台湾ラーメン",     price: 850, icon: "🌶️", cats: ["men"], noodleType: "ramen", img:"img/menu/taiwan_ramen.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
      { key: "spice",    label: "辛さ",     type: "slider", options: ["普通", "やや辛口", "辛口", "大辛", "激辛"], default: "普通" },
      { key: "negi",     label: "ネギ",     options: ["あり", "なし"], default: "あり" },
    ] },
  { id: "miso_tanmen",       name: "味噌タンメン",     price: 820, icon: "🥬", cats: ["men"], noodleType: "ramen", img:"img/menu/miso_tanmen.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
    ] },
  { id: "yakisoba",    name: "五目焼きそば",   price: 850, icon: "🥢", cats: ["men"], noodleType: "yakisoba", img:"img/menu/yakisoba.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
    ] },
  { id: "gomoku_ankake_soba", name: "五目うま煮そば",  price: 880, icon: "🥢", cats: ["men"], noodleType: "yakisoba", img:"img/menu/gomoku_ankake_soba.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
    ] },
  { id: "sara_udon",         name: "皿うどん",         price: 900, icon: "🍤", cats: ["men"], noodleType: "yakisoba", img:"img/menu/sara_udon.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
    ] },
  { id: "shanghai_yakisoba", name: "上海風焼きそば",   price: 870, icon: "🥢", cats: ["men"], noodleType: "yakisoba", img:"img/menu/shanghai_yakisoba.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
    ] },
  { id: "yaki_udon",         name: "五目やきうどん",   price: 860, icon: "🍲", cats: ["men"], noodleType: "yakisoba", img:"img/menu/yaki_udon.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
    ] },
  { id: "kaisen_yakisoba",   name: "海鮮焼きそば",     price: 920, icon: "🦐", cats: ["men"], noodleType: "yakisoba", img:"img/menu/kaisen_yakisoba.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "firmness", label: "麺の硬さ", options: ["柔らかめ", "普通", "硬め"], default: "普通" },
    ] },

  { id: "mabo",        name: "麻婆豆腐",       price: 780, img:"img/menu/mabo.png", cats: ["osusume", "ippin"],
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "spice", label: "辛さ", type: "slider", options: ["普通", "やや辛口", "辛口", "大辛", "激辛"], default: "普通" },
      { key: "negi",  label: "ネギ", options: ["あり", "なし"], default: "あり" },
    ] },
  // ● 一品料理: 麻婆系→チャーハン系(飯類)→エビ系→野菜系→点心→鶏系→豚・魚系 の順で近い料理をまとめる
  { id: "mabo_nasu",      name: "麻婆茄子",     price: 780, icon: "🍆", cats: ["ippin"], img:"img/menu/mabo_nasu.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "spice", label: "辛さ", type: "slider", options: ["普通", "やや辛口", "辛口", "大辛", "激辛"], default: "普通" },
      { key: "negi",  label: "ネギ", options: ["あり", "なし"], default: "あり" },
    ] },

  { id: "chahan",      name: "チャーハン",     price: 720, img:"img/menu/chahan.png" , cats: ["osusume", "han"],
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  // ● 飯類: チャーハン系をまとめ、続けて丼・オムライス系をまとめる
  { id: "gomoku",      name: "五目チャーハン", price: 850, icon: "🍚", cats: ["han"],img:"img/menu/gomoku_chahan.png",
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  { id: "ankake_chahan",  name: "あんかけチャーハン", price: 800, icon: "🍳", cats: ["han"],img:"img/menu/ankake_chahan.png",
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  { id: "takana_chahan",  name: "高菜チャーハン",   price: 750, icon: "🌶️", cats: ["han"],img:"img/menu/takana_chahan.png",
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  { id: "curry_chahan",   name: "カレーチャーハン", price: 780, icon: "🍛", cats: ["han"],img:"img/menu/curry_chahan.png",
    allergy: { 卵: 1, 乳: 1, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },

  { id: "ebichiri",    name: "エビチリ",       price: 980, img:"img/menu/ebichiri.png", cats: ["osusume", "ippin"],
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 } },
  { id: "ebimayo",     name: "海老マヨ",       price: 890, icon: "🍤", cats: ["ippin"],img:"img/menu/ebimayo.png",
    allergy: { 卵: 1, 乳: 0, 小麦: 0, えび: 1, 大豆: 1 } },

  { id: "chinjao",     name: "青椒肉絲",       price: 880, img:"img/menu/chinjao.png", cats: ["osusume", "ippin"],
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },
  { id: "nira_reba_itame", name: "ニラレバ炒め", price: 780, cats: ["ippin"], img:"img/menu/nira_reba_itame.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },
  { id: "harusame_salad", name: "春雨サラダ",   price: 480, icon: "🥗", cats: ["ippin"], img:"img/menu/harusame_salad.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 1 } },

  { id: "gyoza",       name: "焼き餃子(6個)",  price: 450, img:"img/menu/gyoza.png", cats: ["osusume", "ippin"],
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },
  { id: "shoronpo",    name: "小籠包(4個)",    price: 520, icon: "🥟", cats: ["ippin"],img:"img/menu/shoronpo.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },
  { id: "harumaki",    name: "春巻き(2本)",    price: 380, icon: "🌯", cats: ["ippin"],img:"img/menu/harumaki.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },

  { id: "karaage",     name: "唐揚げ",         price: 650, img:"img/menu/karaage.png", cats: ["osusume", "ippin"],
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },
  { id: "banbanji",    name: "棒々鶏",         price: 580, icon: "🥗", cats: ["ippin"],img:"img/menu/banbanji.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },

  { id: "subuta",      name: "酢豚",           price: 880, img:"img/menu/subuta.png", cats: ["osusume", "ippin"],
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },
  { id: "hoikoro",     name: "回鍋肉",         price: 850, icon: "🥬", cats: ["ippin"],img:"img/menu/hoikoro.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },
  { id: "sakana_ankake",  name: "白身魚の甘酢あんかけ", price: 880, icon: "🐟", cats: ["ippin"], img:"img/menu/sakana_ankake.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },

  { id: "tenshin",     name: "天津飯",         price: 790, img:"img/menu/tenshin.png", cats: ["osusume", "han"], img:"img/menu/tenshin.png" ,
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  // ● 飯類つづき: 卵系の丼→中華丼系→エビ・酢豚・青椒肉絲系の丼→肉丼
  { id: "kanitama_don",   name: "かに玉丼",         price: 800, icon: "🥚", cats: ["han"], img:"img/menu/kanitama_don.png",
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  { id: "tomato_tamago_don", name: "トマトたまご丼", price: 720, icon: "🍅", cats: ["han"], img:"img/menu/tomato_tamago_don.png",
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  { id: "chuka_omurice",  name: "中華風オムライス", price: 780, icon: "🍳", cats: ["han"], img:"img/menu/chuka_omurice.png",
    allergy: { 卵: 1, 乳: 1, 小麦: 0, えび: 0, 大豆: 0 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  { id: "chukadon",    name: "中華丼",         price: 800, icon: "🥘", cats: ["han"],img:"img/menu/chukadon.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  { id: "mabodon",     name: "麻婆丼",         price: 750, icon: "🍛", cats: ["han"],img:"img/menu/mabodon.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
      { key: "spice",   label: "辛さ",     type: "slider", options: ["普通", "やや辛口", "辛口", "大辛", "激辛"], default: "普通" },
      { key: "negi",    label: "ネギ",     options: ["あり", "なし"], default: "あり" },
    ] },
  { id: "ebichiri_don",   name: "エビチリ丼",       price: 850, icon: "🍤", cats: ["han"], img:"img/menu/ebichiri_don.png",
    allergy: { 卵: 1, 乳: 0, 小麦: 1, えび: 1, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  { id: "subuta_don",     name: "酢豚丼",           price: 820, icon: "🍖", cats: ["han"], img:"img/menu/subuta_don.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },
  { id: "special_nikudon", name: "スペシャル肉丼",   price: 3000, icon: "🍖", cats: ["han"],img:"img/menu/ex_nikudon.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 } },
  { id: "nikudon",        name: "肉丼",             price: 800, icon: "🍖", cats: ["han"],img:"img/menu/nikudon.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 1, えび: 0, 大豆: 1 },
    toppings: [
      { key: "portion", label: "ご飯の量", options: ["少なめ", "普通", "大盛り"], default: "普通" },
    ] },

  { id: "annin",       name: "杏仁豆腐",       price: 380, img:"img/menu/annin.png", cats: ["osusume", "drink"],
    allergy: { 卵: 0, 乳: 1, 小麦: 0, えび: 0, 大豆: 0 } },
  // ● ドリンク・デザート: デザート系→お茶・コーヒー系→ソフトドリンク系(アルコール類は提供しないため置かない)
  { id: "mango",       name: "マンゴープリン", price: 420, icon: "🥭", cats: ["drink"],img:"img/menu/mango.png",
    allergy: { 卵: 0, 乳: 1, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "gomadango",   name: "ごま団子(3個)",  price: 400, icon: "🍡", cats: ["drink"],img:"img/menu/gomadango.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "warabimochi",      name: "わらび餅",           price: 400, icon: "🍡", cats: ["drink"], img:"img/menu/warabimochi.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 1 } },
  { id: "matcha_icecream",  name: "抹茶アイス",         price: 420, icon: "🍨", cats: ["drink"],img:"img/menu/matcha_icecream.png",
    allergy: { 卵: 0, 乳: 1, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "oolong",      name: "ウーロン茶",     price: 250, icon: "🍵", cats: ["drink"],img:"img/menu/oolong.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "jasmine",     name: "ジャスミン茶",   price: 300, icon: "🫖", cats: ["drink"],img:"img/menu/jasmine.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "hot_tea",          name: "ホットティー",       price: 300, icon: "🍵", cats: ["drink"],img:"img/menu/hot_tea.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "hot_coffee",       name: "ホットコーヒー",     price: 350, icon: "☕", cats: ["drink"],img:"img/menu/hot_coffee.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "tapioca_milktea",  name: "タピオカミルクティー", price: 480, icon: "🧋", cats: ["drink"],　img:"img/menu/tapioca_milktea.png",
    allergy: { 卵: 0, 乳: 1, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "cola",        name: "コーラ",         price: 250, icon: "🥤", cats: ["drink"],
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 },img:"img/menu/cola.png" },
  { id: "melon_soda",       name: "メロンソーダ",       price: 300, icon: "🥤", cats: ["drink"],img:"img/menu/melon_soda.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "apple_juice",  name: "りんごジュース", price: 350, icon: "🧃", cats: ["drink"],img:"img/menu/apple_juice.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "ginger_ale",           name: "ジンジャーエール",           price: 300, icon: "🥛", cats: ["drink"],img:"img/menu/ginger_ale.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 } },
  { id: "lemonade",    name: "レモネード", price: 200, icon: "💧", cats: ["drink"],img:"img/menu/lemonade.png",
    allergy: { 卵: 0, 乳: 0, 小麦: 0, えび: 0, 大豆: 0 } },
];

/* 本日のおすすめスライドショー(idはMENUの商品を参照) */
/* heroImg を指定すると、メニューカードの画像とは別にスライドショー専用の画像(透過PNG推奨)を使用できる */
const HERO_SLIDES = [
  { id: "gomoku",
    desc: "海老・焼豚・玉子など五種の具材を<br>強火で一気に香ばしく炒め上げました。",
    heroImg: "img/menu/gomoku_chahan_touka.png" },
  { id: "ebichiri",
    desc: "ぷりぷりの大海老を、旨みと辛さの<br>特製チリソースで絡めた人気の一皿。" ,
    heroImg: "img/menu/ebichiri_touka.png"},
  { id: "tantan",
    desc: "濃厚な胡麻スープに自家製ラー油が香る<br>後を引く辛さの一杯です。",
    heroImg: "img/menu/tantan_touka.png" },
  { id: "special_nikudon",
    desc: "全てを受け入れる寛容さ、<br>正しくペース配分する知識、<br>肉の群れに突っ込む勇気、食べ続ける根気、<br>全てがなければ完食できないスペシャル肉丼です。",
    heroImg: "img/menu/ex_nikudon_touka.png" },
];
const HERO_INTERVAL = 4800;   // 自動切替の間隔(ms)

/* お知らせ欄に流すメッセージ(例文。自由に差し替え可能) */
const TICKER_MESSAGES = [
  "いらっしゃいませ！中華　愛屋へようこそ！",
  "本日のおすすめは五目チャーハンです。ぜひご賞味ください！",
  "7/31(金)まで、ごはん＆麺の大盛が無料のキャンペーンを開催中です！！",
  "焼き餃子は数量限定ですので、お早めにご注文ください。",
  "ご来店ありがとうございます。ごゆっくりお過ごしください。",
];

/* お知らせは1件ずつ表示し、右→左に流れ終えたら次の1件に切り替える */
let tickerIndex = 0;
function playNextTickerMessage() {
  const track = byId("tickerTrack");
  const msg = TICKER_MESSAGES[tickerIndex % TICKER_MESSAGES.length];
  tickerIndex++;
  track.textContent = msg;
  const dur = Math.max(6, msg.length * 0.28).toFixed(1);
  track.style.setProperty("--ticker-dur", `${dur}s`);
  track.classList.remove("run");
  void track.offsetWidth;   // アニメーション再始動のためのリフロー
  track.classList.add("run");
}

function renderTicker() {
  byId("tickerTrack").addEventListener("animationend", playNextTickerMessage);
  playNextTickerMessage();
}

const CAT_TITLES = {
  osusume: "おすすめメニュー",
  men:     "麺類メニュー",
  han:     "飯類メニュー",
  ippin:   "一品料理メニュー",
  drink:   "ドリンク・デザートメニュー",
};

const TAX_RATE = 0.10;
const PAGE_SIZE = 10;         // 初期表示は2段(5列x2)
const byId = (id) => document.getElementById(id);
const yen = (n) => "¥" + n.toLocaleString("ja-JP");

/* ---------- 状態 ---------- */
let currentCat = "osusume";
let visibleCount = PAGE_SIZE;
const cart = new Map();       // id -> 数量

/* =====================================================
   ヒーロースライドショー
   ===================================================== */
let heroIndex = 0;
let heroTimer = null;

function renderHero() {
  byId("heroSlides").innerHTML = HERO_SLIDES.map((s, i) => {
    const m = MENU.find((x) => x.id === s.id);
    const img = s.heroImg || m.img;
    const visual = img
      ? `<img class="hero-photo" src="${img}" alt="${m.name}">`
      : `<span class="h-plate">${m.icon}</span>`;
    return `
    <div class="slide${i === 0 ? " active" : ""}" data-index="${i}">
      <p class="hero-catch">本日のおすすめ！</p>
      <h1 class="hero-title">${m.name}</h1>
      <p class="hero-desc">${s.desc}</p>
      <div class="h-buy">
        <span class="h-price">${yen(m.price)}<small>＋税</small></span>
        <button class="h-add" data-id="${m.id}">＋ 注文する</button>
      </div>
      ${visual}
    </div>`;
  }).join("");
  byId("heroDots").innerHTML = HERO_SLIDES.map(
    (_, i) => `<button class="hdot${i === 0 ? " active" : ""}" data-index="${i}" aria-label="スライド${i + 1}"></button>`
  ).join("");
}

function goSlide(i) {
  heroIndex = (i + HERO_SLIDES.length) % HERO_SLIDES.length;
  document.querySelectorAll(".slide").forEach((s) =>
    s.classList.toggle("active", Number(s.dataset.index) === heroIndex));
  document.querySelectorAll(".hdot").forEach((d) =>
    d.classList.toggle("active", Number(d.dataset.index) === heroIndex));
}

function startHeroTimer() {
  clearInterval(heroTimer);
  heroTimer = setInterval(() => goSlide(heroIndex + 1), HERO_INTERVAL);
}

byId("heroPrev").addEventListener("click", () => { goSlide(heroIndex - 1); startHeroTimer(); });
byId("heroNext").addEventListener("click", () => { goSlide(heroIndex + 1); startHeroTimer(); });

byId("heroDots").addEventListener("click", (e) => {
  const dot = e.target.closest(".hdot");
  if (!dot) return;
  goSlide(Number(dot.dataset.index));
  startHeroTimer();
});

byId("heroSlides").addEventListener("click", (e) => {
  const btn = e.target.closest(".h-add");
  if (!btn) return;
  const item = MENU.find((m) => m.id === btn.dataset.id);
  const visual = btn.closest(".slide").querySelector(".hero-photo, .h-plate");
  if (item.toppings) {
    openToppingModal(item, visual);
  } else {
    flyToCart(visual, item);
    addToCart(item.id);
    showToast(`${item.name}をカートに追加しました`);
  }
  startHeroTimer();
});

/* =====================================================
   メニューグリッド
   ===================================================== */
function itemsOf(cat) {
  return MENU.filter((m) => m.cats.includes(cat));
}

function thumbInner(item) {
  return item.img ? `<img src="${item.img}" alt="${item.name}">` : item.icon;
}
function thumbHTML(item, cls) {
  return `<div class="${cls}">${thumbInner(item)}</div>`;
}

/* 品名が長い商品はカードに収まるようフォントサイズを少しずつ縮小 */
function cardNameStyle(name) {
  if (name.length >= 10) return "font-size: 10.5px;";
  if (name.length >= 8) return "font-size: 11.5px;";
  return "";
}

function renderGrid() {
  const items = itemsOf(currentCat);
  const shown = items.slice(0, visibleCount);
  byId("sectionTitle").textContent = CAT_TITLES[currentCat];
  byId("btnMore").parentElement.hidden = items.length <= visibleCount;
  byId("menuGrid").innerHTML = shown
    .map(
      (m) => `
    <div class="card" data-id="${m.id}">
      ${thumbHTML(m, "thumb")}
      <div class="card-name" style="${cardNameStyle(m.name)}">${m.name}</div>
      <div class="card-price">${yen(m.price)}<small>＋税</small></div>
      <button class="add-btn" data-id="${m.id}" aria-label="${m.name}を追加">＋</button>
    </div>`
    )
    .join("");
}

/* 商品追加は「＋」ボタンのみ(誤タップ防止)。カスタマイズ項目がある商品はトッピング画面を開く */
byId("menuGrid").addEventListener("click", (e) => {
  const btn = e.target.closest(".add-btn");
  if (!btn) return;
  const item = MENU.find((m) => m.id === btn.dataset.id);
  const thumb = btn.closest(".card").querySelector(".thumb");
  if (item.toppings) {
    openToppingModal(item, thumb);
  } else {
    flyToCart(thumb, item);
    addToCart(item.id);
    showToast(`${item.name}をカートに追加しました`);
  }
});

byId("btnMore").addEventListener("click", () => {
  if (itemsOf(currentCat).length > visibleCount) {
    visibleCount += PAGE_SIZE;
    renderGrid();
  } else {
    showToast("すべてのメニューを表示しています");
  }
});

/* カテゴリタブ */
function switchToCat(cat) {
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.cat === cat));
  currentCat = cat;
  visibleCount = PAGE_SIZE;
  renderGrid();
  byId("menuArea").scrollTo({ top: 0, behavior: "smooth" });
}
byId("tabs").addEventListener("click", (e) => {
  const tab = e.target.closest(".tab");
  if (!tab) return;
  switchToCat(tab.dataset.cat);
});

/* =====================================================
   ジャンル最大展開後、上下端でのドラッグでジャンル切替(新設)
   下端で下→上へドラッグ:次のジャンルへ / 上端で上→下へドラッグ:前のジャンルへ
   ===================================================== */
function goToAdjacentTab(direction) {
  const cats = Object.keys(CAT_TITLES);
  const idx = cats.indexOf(currentCat);
  switchToCat(cats[(idx + direction + cats.length) % cats.length]);
}

(function () {
  const area = byId("menuArea");
  const hint = byId("swipeHint");
  const hintLabel = byId("swipeHintLabel");
  const arrow = hint.querySelector(".swipe-hint-arrow");
  const THRESHOLD = 110;
  let startY = null;
  let mode = null; // "next" | "prev"
  let dragging = false;

  const isFullyExpanded = () => itemsOf(currentCat).length <= visibleCount;
  const atBottom = () => area.scrollTop + area.clientHeight >= area.scrollHeight - 1;
  const atTop = () => area.scrollTop <= 0;

  /* ドラッグ量に応じて矢印の色を金色→赤へ徐々に変化させる */
  const GOLD = [245, 197, 95];
  const RED = [192, 0, 0];
  function arrowColor(progress) {
    const c = GOLD.map((g, i) => Math.round(g + (RED[i] - g) * progress));
    return `rgb(${c[0]}, ${c[1]}, ${c[2]})`;
  }

  function updateHint(progress, dir) {
    hint.classList.toggle("prev", dir === "prev");
    hintLabel.textContent = dir === "prev" ? "前のジャンルへ" : "次のジャンルへ";
    hint.style.opacity = progress;
    hint.style.transform = `translateX(-50%) scale(${0.5 + progress * 0.5})`;
    const rotate = dir === "prev" ? "rotate(180deg) " : "";
    arrow.style.transform = `${rotate}scale(${1 + progress * 0.6})`;
    arrow.style.color = arrowColor(progress);
    arrow.style.textShadow = `0 0 ${10 * progress}px rgba(192, 0, 0, ${progress})`;
  }
  function resetVisual() {
    area.style.transition = "transform 0.25s ease";
    area.style.transform = "";
    hint.style.opacity = 0;
    hint.style.transform = "translateX(-50%) scale(0.5)";
    arrow.style.color = "";
    arrow.style.transform = "";
    arrow.style.textShadow = "";
  }

  area.addEventListener("pointerdown", (e) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    startY = e.clientY;
    mode = null;
    dragging = false;
  });

  area.addEventListener("pointermove", (e) => {
    if (startY === null) return;
    const delta = e.clientY - startY;
    if (!dragging) {
      if (delta < -8 && isFullyExpanded() && atBottom()) {
        mode = "next"; dragging = true;
      } else if (delta > 8 && atTop()) {
        mode = "prev"; dragging = true;
      } else {
        return;
      }
    }
    e.preventDefault();
    area.style.transition = "none";
    area.style.transform = `translateY(${delta * 0.25}px)`;
    updateHint(Math.min(Math.abs(delta) / THRESHOLD, 1), mode);
  });

  function endDrag(e) {
    if (dragging && startY !== null && Math.abs(e.clientY - startY) > THRESHOLD) {
      goToAdjacentTab(mode === "next" ? 1 : -1);
    }
    resetVisual();
    startY = null;
    dragging = false;
    mode = null;
  }
  area.addEventListener("pointerup", endDrag);
  area.addEventListener("pointercancel", endDrag);
})();

/* =====================================================
   カスタマイズ(トッピング)
   ===================================================== */
const cartOptions = new Map(); // id -> 選択内容の表示文字列(直近の選択を保持する簡易実装)
let toppingItem = null;
let toppingQty = 1;
let toppingSelections = {};

function openToppingModal(item, originEl) {
  toppingItem = item;
  toppingOriginEl = originEl;
  toppingQty = 1;
  toppingSelections = {};
  const toppings = item.toppings || [];
  toppings.forEach((g) => (toppingSelections[g.key] = g.default));

  byId("toppingPhoto").innerHTML = thumbInner(item);
  byId("toppingName").textContent = item.name;
  renderToppingPrice();
  byId("toppingQty").textContent = toppingQty;
  byId("toppingGroups").innerHTML = toppings
    .map((g) => {
      if (g.type === "slider") {
        const defaultIndex = g.options.indexOf(g.default);
        return `
    <div class="topping-group" data-key="${g.key}">
      <div class="topping-group-label">${g.label}<span class="spice-level">${g.default}</span></div>
      <div class="topping-slider">
        <input type="range" class="spice-range" min="1" max="${g.options.length}" step="1" value="${defaultIndex + 1}">
        <div class="spice-scale">${g.options.map((_, i) => `<span>${i + 1}</span>`).join("")}</div>
      </div>
    </div>`;
      }
      return `
    <div class="topping-group" data-key="${g.key}">
      <div class="topping-group-label">${g.label}</div>
      <div class="topping-pills">
        ${g.options
          .map((op) => `<button class="topping-pill${op === g.default ? " selected" : ""}" data-value="${op}">${op}</button>`)
          .join("")}
      </div>
    </div>`;
    })
    .join("");
  openModal("modalTopping");
}
let toppingOriginEl = null;

function renderToppingPrice() {
  byId("toppingPrice").innerHTML = `${yen(toppingItem.price * toppingQty)}<small style="font-size:11px;font-weight:normal;margin-left:4px;">＋税</small>`;
}

byId("toppingGroups").addEventListener("click", (e) => {
  const pill = e.target.closest(".topping-pill");
  if (!pill) return;
  const group = pill.closest(".topping-group");
  toppingSelections[group.dataset.key] = pill.dataset.value;
  group.querySelectorAll(".topping-pill").forEach((p) => p.classList.toggle("selected", p === pill));
});

/* 辛さなど1〜5段階のトッピングはスライドバーで調整 */
byId("toppingGroups").addEventListener("input", (e) => {
  const range = e.target.closest(".spice-range");
  if (!range) return;
  const group = range.closest(".topping-group");
  const key = group.dataset.key;
  const def = (toppingItem.toppings || []).find((g) => g.key === key);
  const value = def.options[Number(range.value) - 1];
  toppingSelections[key] = value;
  group.querySelector(".spice-level").textContent = value;
});

byId("toppingMinus").addEventListener("click", () => {
  toppingQty = Math.max(1, toppingQty - 1);
  byId("toppingQty").textContent = toppingQty;
  renderToppingPrice();
});
byId("toppingPlus").addEventListener("click", () => {
  toppingQty = Math.min(99, toppingQty + 1);
  byId("toppingQty").textContent = toppingQty;
  renderToppingPrice();
});

byId("toppingOrderBtn").addEventListener("click", () => {
  const toppings = toppingItem.toppings || [];
  if (toppings.length > 0) {
    const label = toppings.map((g) => `${g.label}:${toppingSelections[g.key]}`).join(" / ");
    cartOptions.set(toppingItem.id, label);
  }
  if (toppingOriginEl) flyToCart(toppingOriginEl, toppingItem);
  addToCart(toppingItem.id, toppingQty);
  closeModal();
  showToast(`${toppingItem.name}をカートに追加しました`);
});

/* =====================================================
   カート
   ===================================================== */
function addToCart(id, qty = 1) {
  cart.set(id, Math.min((cart.get(id) || 0) + qty, 99));
  renderCart(true);
}

function cartCount() {
  let n = 0;
  for (const q of cart.values()) n += q;
  return n;
}

function changeQty(id, delta) {
  const q = (cart.get(id) || 0) + delta;
  if (q <= 0) cart.delete(id);
  else cart.set(id, q);
  renderCart();
}

function cartTotals() {
  let subtotal = 0;
  for (const [id, q] of cart) {
    subtotal += MENU.find((m) => m.id === id).price * q;
  }
  const tax = Math.round(subtotal * TAX_RATE);
  return { subtotal, tax, total: subtotal + tax };
}

function renderCart(added = false) {
  const box = byId("cartItems");
  if (cart.size === 0) {
    box.innerHTML = `<p class="cart-empty">商品が選択されていません</p>`;
  } else {
    box.innerHTML = [...cart]
      .map(([id, q]) => {
        const m = MENU.find((x) => x.id === id);
        const opt = cartOptions.get(id);
        return `
      <div class="cart-item">
        ${thumbHTML(m, "c-thumb")}
        <div class="c-info">
          <div class="c-name">${m.name}${opt ? `<small class="c-opt">${opt}</small>` : ""}</div>
          <div class="c-bottom">
            <span class="c-price">${yen(m.price)}</span>
            <button class="q-btn" data-id="${id}" data-d="-1">－</button>
            <span class="q-num">${q}</span>
            <button class="q-btn" data-id="${id}" data-d="1">＋</button>
          </div>
        </div>
      </div>`;
      })
      .join("");
  }
  const { subtotal, tax, total } = cartTotals();
  byId("subtotal").textContent = "¥ " + subtotal.toLocaleString("ja-JP");
  byId("tax").textContent = "¥ " + tax.toLocaleString("ja-JP");
  byId("total").textContent = yen(total);

  const badge = byId("cartBadge");
  const n = cartCount();
  badge.hidden = n === 0;
  badge.textContent = n;
  if (added) {
    badge.classList.remove("pulse");
    void badge.offsetWidth;   // アニメーション再生のためリフロー
    badge.classList.add("pulse");
  }

  byId("btnConfirm").classList.toggle("glow", cart.size > 0);
}

byId("cartItems").addEventListener("click", (e) => {
  const btn = e.target.closest(".q-btn");
  if (!btn) return;
  changeQty(btn.dataset.id, Number(btn.dataset.d));
});

/* =====================================================
   注文確定フロー
   ===================================================== */
function orderRowsHTML() {
  return [...cart]
    .map(([id, q]) => {
      const m = MENU.find((x) => x.id === id);
      const opt = cartOptions.get(id);
      return `
    <div class="m-row">
      <span class="r-icon">${m.img ? `<img src="${m.img}" alt="">` : m.icon}</span>
      <span class="r-name">${m.name}${opt ? `<small class="c-opt" style="color:var(--ink-sub)">${opt}</small>` : ""}</span>
      <span class="r-qty">×${q}</span>
      <span class="r-amt">${yen(m.price * q)}</span>
    </div>`;
    })
    .join("");
}

byId("btnConfirm").addEventListener("click", () => {
  if (cart.size === 0) {
    showToast("商品を選択してください");
    return;
  }
  byId("confirmList").innerHTML = orderRowsHTML();
  byId("confirmTotal").textContent = yen(cartTotals().total);
  openModal("modalConfirm");
});

/* 「注文する」→ 注文商品の一覧と合計金額を表示。この内容を注文履歴にも記録する */
const orderHistory = []; // このセッション中に確定した注文の履歴

byId("btnOrder").addEventListener("click", () => {
  const { total } = cartTotals();
  byId("doneList").innerHTML = orderRowsHTML();
  byId("doneTotal").textContent = yen(total);
  orderHistory.push({ items: new Map(cart), total, time: new Date() });
  cart.clear();
  renderCart();
  closeModal();
  showLoadingThen(() => openModal("modalDone"));
});

/* =====================================================
   店員呼び出し / サイドメニュー / 言語切替
   ===================================================== */
byId("btnStaff").addEventListener("click", (e) => {
  const btn = e.currentTarget;
  btn.classList.remove("ringing");
  void btn.offsetWidth;           // アニメーション再生のためリフロー
  btn.classList.add("ringing");
  openModal("modalStaff");
});

/* 履歴・会計: これまでの確定注文一覧+「会計をお願いする」 */
byId("btnHistory").addEventListener("click", () => {
  renderHistory();
  openModal("modalHistory");
});

function renderHistory() {
  const box = byId("historyList");
  if (orderHistory.length === 0) {
    box.innerHTML = `<p class="cart-empty">まだご注文はありません</p>`;
    byId("historyTotal").textContent = yen(0);
    return;
  }
  box.innerHTML = orderHistory
    .map((order, i) => {
      const rows = [...order.items]
        .map(([id, q]) => {
          const m = MENU.find((x) => x.id === id);
          return `
        <div class="m-row">
          <span class="r-icon">${m.img ? `<img src="${m.img}" alt="">` : m.icon}</span>
          <span class="r-name">${m.name}</span>
          <span class="r-qty">×${q}</span>
          <span class="r-amt">${yen(m.price * q)}</span>
        </div>`;
        })
        .join("");
      return `
      <div class="history-order">
        <div class="history-order-head">
          <span>${i + 1}回目のご注文</span>
          <span>${yen(order.total)}</span>
        </div>
        ${rows}
      </div>`;
    })
    .join("");
  const grandTotal = orderHistory.reduce((sum, o) => sum + o.total, 0);
  byId("historyTotal").textContent = yen(grandTotal);
}

byId("btnCheckout").addEventListener("click", () => {
  const grandTotal = orderHistory.reduce((sum, o) => sum + o.total, 0);
  if (grandTotal <= 0) {
    showToast("ご注文履歴がありません");
    return;
  }
  openModal("modalCheckoutDone");
  let remaining = 5;
  byId("checkoutCountdown").textContent = `${remaining}秒後にトップ画面に戻ります`;
  clearInterval(checkoutTimer);
  checkoutTimer = setInterval(() => {
    remaining -= 1;
    if (remaining <= 0) {
      returnToLogin();
    } else {
      byId("checkoutCountdown").textContent = `${remaining}秒後にトップ画面に戻ります`;
    }
  }, 1000);
});

byId("btnAllergy").addEventListener("click", () => {
  renderAllergyTable();
  openModal("modalAllergy");
});
byId("btnHelp").addEventListener("click", () => openModal("modalHelp"));

function renderAllergyTable() {
  const cols = ["卵", "乳", "小麦", "えび", "大豆"];
  const rows = MENU.filter((m) => m.allergy);
  byId("allergyTable").innerHTML =
    `<tr><th>メニュー</th>${cols.map((c) => `<th>${c}</th>`).join("")}</tr>` +
    rows
      .map(
        (m) =>
          `<tr><td>${m.name}</td>${cols
            .map((c) => `<td>${m.allergy[c] ? '<span class="yes">●</span>' : "－"}</td>`)
            .join("")}</tr>`
      )
      .join("");
}

/* 言語切替(見た目のみ) */
document.querySelectorAll(".lang").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".lang").forEach((b) => b.classList.toggle("active", b === btn));
    if (btn.dataset.lang === "en") showToast("English mode is under preparation");
  });
});

/* =====================================================
   モーダル共通
   ===================================================== */
function openModal(id) {
  byId("overlay").hidden = false;
  document.querySelectorAll(".modal").forEach((m) => (m.hidden = m.id !== id));
}
function closeModal() {
  byId("overlay").hidden = true;
}
byId("overlay").addEventListener("click", (e) => {
  if (e.target.closest("[data-close]") || e.target === byId("overlay")) closeModal();
});

/* トースト */
let toastTimer;
function showToast(msg) {
  const t = byId("toast");
  t.textContent = msg;
  t.hidden = false;
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => (t.hidden = true), 1800);
}

/* =====================================================
   ステージのスケーリング(タブレット/スマホ対応)
   ===================================================== */
let currentScale = 1;
function fitStage() {
  const s = Math.min(window.innerWidth / 1280, window.innerHeight / 720);
  currentScale = s;
  const stage = byId("stage");
  const left = (window.innerWidth - 1280 * s) / 2;
  stage.style.transform = `scale(${s})`;
  stage.style.left = left + "px";
  stage.style.top = (window.innerHeight - 720 * s) / 2 + "px";
  fitLetterbox(left);
}
window.addEventListener("resize", fitStage);

/* ＋タップ時、商品がご注文内容パネルへ飛んでいく演出 */
function flyToCart(originEl, item) {
  const stage = byId("stage");
  const stageRect = stage.getBoundingClientRect();
  const toLocal = (r) => ({
    x: (r.left - stageRect.left) / currentScale,
    y: (r.top - stageRect.top) / currentScale,
    w: r.width / currentScale,
    h: r.height / currentScale,
  });
  const o = toLocal(originEl.getBoundingClientRect());
  const t = toLocal(byId("cartIco").getBoundingClientRect());

  const fly = document.createElement(item.img ? "div" : "div");
  fly.className = "fly-item";
  fly.innerHTML = item.img ? `<img src="${item.img}" alt="">` : item.icon;
  fly.style.left = `${o.x}px`;
  fly.style.top = `${o.y}px`;
  fly.style.width = `${o.w}px`;
  fly.style.height = `${o.h}px`;
  stage.appendChild(fly);

  const dx = t.x + t.w / 2 - (o.x + o.w / 2);
  const dy = t.y + t.h / 2 - (o.y + o.h / 2);
  requestAnimationFrame(() => {
    fly.style.transform = `translate(${dx}px, ${dy}px) scale(0.15)`;
    fly.style.opacity = "0.15";
  });
  fly.addEventListener("transitionend", () => fly.remove());
}

/* 左右レターボックス余白の実測幅に合わせて、竹の繰り返し模様と「福」の房飾りの
   表示・サイズを調整する(余白が狭い場合は非表示にして黒一色に見えるのを防ぐ) */
function fitLetterbox(margin) {
  const MIN_SHOW = 22;   // これ未満の余白幅では何も表示しない
  const MAX_BAMBOO = 96; // 竹模様の最大幅
  const MAX_CHARM = 78;  // 房飾りの最大幅
  const els = [byId("letterboxLeft"), byId("letterboxRight"), byId("charmLeft"), byId("charmRight")];

  if (margin < MIN_SHOW) {
    els.forEach((el) => (el.style.display = "none"));
    return;
  }

  const bambooW = Math.min(margin * 0.85, MAX_BAMBOO);
  [byId("letterboxLeft"), byId("letterboxRight")].forEach((el) => {
    el.style.display = "block";
    el.style.width = `${bambooW}px`;
    el.style.backgroundSize = `${bambooW}px auto`;
  });

  /* 竹の模様が表示される余白では、福の房飾りも必ず一緒に表示する */
  const charmW = Math.min(margin * 0.9, MAX_CHARM);
  [byId("charmLeft"), byId("charmRight")].forEach((el) => {
    el.style.display = "block";
    el.style.width = `${charmW}px`;
  });
}

/* =====================================================
   ログインページ(新設): 人数入力→カーテンが開く→軽いホワイトアウト
   ===================================================== */
let peopleCount = 2;
function renderPeopleCount() {
  byId("peopleNum").textContent = peopleCount;
}
byId("peopleMinus").addEventListener("click", () => {
  peopleCount = Math.max(1, peopleCount - 1);
  renderPeopleCount();
});
byId("peoplePlus").addEventListener("click", () => {
  peopleCount = Math.min(8, peopleCount + 1);
  renderPeopleCount();
});

byId("btnEnter").addEventListener("click", () => {
  const login = byId("loginScreen");
  login.classList.add("opening", "flash");
  setTimeout(() => login.classList.add("hide-screen"), 800);
});

function showLoginScreen() {
  const login = byId("loginScreen");
  login.classList.remove("opening", "flash", "hide-screen");
  peopleCount = 2;
  renderPeopleCount();
}

/* =====================================================
   注文確定中のローディング(新設): 鍋のアニメーション
   ===================================================== */
function showLoadingThen(callback, duration = 1800) {
  byId("loadingScreen").hidden = false;
  const bar = byId("loadingProgressBar");
  bar.style.transition = "none";
  bar.style.width = "0%";
  void bar.offsetWidth; // リフローしてから再生することで0%からのアニメーションを保証
  bar.style.transition = `width ${duration}ms linear`;
  bar.style.width = "100%";
  setTimeout(() => {
    byId("loadingScreen").hidden = true;
    callback();
  }, duration);
}

/* =====================================================
   履歴・会計から次のお客様用にリセットしてループ(新設)
   ===================================================== */
let checkoutTimer = null;
byId("btnBackToLogin").addEventListener("click", () => returnToLogin());

function returnToLogin() {
  clearInterval(checkoutTimer);
  closeModal();
  cart.clear();
  orderHistory.length = 0;
  cartOptions.clear();
  currentCat = "osusume";
  visibleCount = PAGE_SIZE;
  renderCart();
  document.querySelectorAll(".tab").forEach((t) => t.classList.toggle("active", t.dataset.cat === "osusume"));
  renderGrid();

  /* お会計画面からの復帰はホワイトアウトを挟んでログイン画面に戻す
     (画面が白く覆われている間にカーテンをトランジション無しで閉状態へ戻す) */
  const login = byId("loginScreen");
  login.classList.remove("hide-screen");
  login.classList.add("opening", "flash");
  setTimeout(() => {
    login.classList.add("snap");
    login.classList.remove("opening");
    void login.offsetWidth;
    login.classList.remove("snap");
    peopleCount = 2;
    renderPeopleCount();
  }, 260);
  setTimeout(() => login.classList.remove("flash"), 700);
}

/* ---------- 背景の流れる雲 ---------- */
const CLOUD_IMAGES = ["img/deco/j417_3_1.png", "img/deco/j417_3_3.png", "img/deco/j417_3_4.png"];
function spawnCloud() {
  const layer = byId("cloudLayer");
  if (!layer) return;
  const cloud = document.createElement("img");
  cloud.src = CLOUD_IMAGES[Math.floor(Math.random() * CLOUD_IMAGES.length)];
  cloud.className = "cloud-el";
  cloud.alt = "";
  const y = Math.random() * 520;
  cloud.style.top = `${y}px`;
  const duration = 34 + Math.random() * 14;
  cloud.style.animationDuration = `${duration}s`;
  layer.appendChild(cloud);
  cloud.addEventListener("animationend", () => cloud.remove());
}
setInterval(spawnCloud, 4000);
spawnCloud();
setTimeout(spawnCloud, 3000);

/* ---------- 初期化 ---------- */
fitStage();
renderTicker();
renderHero();
startHeroTimer();
renderGrid();
renderCart();

/* ?demo を付けて開くとデザインカンプと同じカート状態になる(動作確認用) */
if (location.search.includes("demo")) {
  ["ramen_shoyu", "chahan", "gyoza"].forEach((id) => addToCart(id));
}
