// All bilingual copy for AquaOps. Keys map to { ar, en }.

export const WA_NUMBER = "96171950364";

export const waLink = (lang, action) => {
  const msgs = {
    demo: {
      ar: "مرحباً، أريد طلب عرض توضيحي لـ AquaOps",
      en: "Hi, I'd like to request a demo of AquaOps",
    },
    access: {
      ar: "مرحباً، أريد طلب وصول إلى AquaOps",
      en: "Hi, I'd like to request access to AquaOps",
    },
    inaction: {
      ar: "مرحباً، أريد مشاهدة AquaOps أثناء العمل",
      en: "Hi, I'd like to see AquaOps in action",
    },
  };
  const msg = (msgs[action] || msgs.access)[lang] || (msgs[action] || msgs.access).ar;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
};

export const I18N = {
  /* ---------- NAV ---------- */
  nav_features: { ar: "المزايا", en: "Features" },
  nav_how:      { ar: "كيف يعمل", en: "How It Works" },
  nav_pricing:  { ar: "الأسعار", en: "Pricing" },
  nav_contact:  { ar: "تواصل", en: "Contact" },
  nav_demo:     { ar: "اطلب عرضاً", en: "Request Demo" },
  lang_label:   { ar: "EN", en: "عربي" },

  /* ---------- HERO ---------- */
  hero_eyebrow: { ar: "مصمّم لموزّعي المياه في لبنان", en: "Built for Lebanese Water Distributors" },
  hero_h1: {
    ar: 'أعمالك تعتمد على المياه.<span class="br"></span>لا تَدَع عملياتك <span class="cyan">تغرق في الورق.</span>',
    en: 'Your business runs on water.<span class="br"></span>Your operations shouldn\'t <span class="cyan">drown in paper.</span>'
  },
  hero_lead: {
    ar: "يستبدل AquaOps دفاترك ومجموعات الواتساب والحسابات الذهنية بنظامٍ مبنيٍّ على طريقة عمل التوزيع اللبناني فعلياً — خطوط بلا إنترنت، وعملتان، وكلّ التفاصيل.",
    en: "AquaOps replaces your notebooks, your WhatsApp groups, and your mental math with a system built for how Lebanese distribution actually works — offline routes, dual currencies, and all."
  },
  hero_cta1: { ar: "شاهده أثناء العمل", en: "See It In Action" },
  hero_cta2: { ar: "اطلب وصولاً", en: "Request Access" },
  hero_trust1: { ar: "يعمل دون إنترنت", en: "Works offline" },
  hero_trust2: { ar: "دولار + ليرة", en: "USD + LBP" },
  hero_trust3: { ar: "جاهز خلال يوم", en: "Live in one day" },

  /* hero mockups */
  m_driver_title: { ar: "خطّ اليوم", en: "Today's Route" },
  m_driver_sub:   { ar: "السائق · شاحنة ٣", en: "Driver · Truck 3" },
  m_pending:      { ar: "٣ سجلات بانتظار المزامنة", en: "3 records pending sync" },
  m_stop:         { ar: "التوصيلة ٨ من ١٤", en: "Stop 8 of 14" },
  m_collected:    { ar: "المبلغ المحصّل اليوم", en: "Collected today" },
  m_admin_title:  { ar: "لوحة التحكّم", en: "Dashboard" },
  m_admin_sub:    { ar: "إيرادات اليوم", en: "Today's revenue" },
  fc_synced:      { ar: "تمت المزامنة", en: "All synced" },
  fc_holding:     { ar: "يحمل حالياً", en: "Currently holding" },
  fc_bottles:     { ar: "قارورة", en: "bottles" },

  /* ---------- PROBLEM ---------- */
  prob_eyebrow: { ar: "الواقع اليومي", en: "The daily reality" },
  prob_head:    { ar: "أنت تعرف هذا أكثر من أيّ أحد.", en: "You know this better than anyone." },
  prob_lead:    { ar: "هذه ليست مشاكل نظرية. إنها ما تواجهه كلّ صباح قبل أن تشرب قهوتك.", en: "These aren't hypotheticals. They're what you face every morning before your coffee." },

  p1_t: { ar: "سائقك يحمل دفتراً إلى زحمة المدينة.", en: "Your driver carries a notebook into city traffic." },
  p1_d: { ar: "كلّ توصيلة تُسجَّل باليد. الأخطاء تحدث. الصفحات تتمزّق. والأرقام تضيع.", en: "Every delivery recorded by hand. Mistakes happen. Pages tear. Numbers get lost." },
  p2_t: { ar: "سعر الليرة تغيّر مجدداً. سجلاتك لا.", en: "The pound rate changed again. Your records didn't." },
  p2_d: { ar: "تتعقّب المدفوعات بعملتين، بآلة حاسبة ودعاء بأن تطلع صح.", en: "You're tracking payments in two currencies with a calculator and a prayer." },
  p3_t: { ar: "أين قواريرك؟", en: "Where are your bottles?" },
  p3_d: { ar: "الآلاف من القوارير بين مئات الزبائن، ولا طريقة موثوقة لمعرفة مَن يحمل ماذا.", en: "Thousands of bottles in circulation across hundreds of customers, and no reliable way to know who has what." },
  p4_t: { ar: "لا إشارة في الحي. لا إشارة في الوادي.", en: "No signal in the neighborhood. No signal in the valley." },
  p4_d: { ar: "سائقك لا يستطيع استخدام أنظمةٍ تتطلّب إنترنت. فيعود إلى الورق.", en: "Your driver can't use systems that require internet. So he goes back to paper." },
  p5_t: { ar: "زبونٌ يقول إنه دفع. وليس لديك إثبات.", en: "A customer says they paid. You have no proof." },
  p5_d: { ar: "الخلافات تكلّفك مالاً وعلاقاتٍ، دون أيّ سجلٍّ تستند إليه.", en: "Disputes cost you money and relationships with no record to fall back on." },
  prob_kicker: { ar: 'هذه ليست حالاتٍ نادرة. <span class="cyan">هذا كلّ يوم.</span>', en: 'These aren\'t edge cases. <span class="cyan">This is every day.</span>' },

  /* ---------- SOLUTION INTRO ---------- */
  sol_eyebrow: { ar: "نقدّم لكم AquaOps", en: "Introducing AquaOps" },
  sol_head:    { ar: "نظامٌ واحد. مبنيٌّ على واقع التوزيع اللبناني.", en: "One system. Built around the reality of Lebanese distribution." },
  sol_sub:     { ar: "ليس معدّلاً عن تطبيق لوجستيٍّ عام. وليس مترجَماً عن الإنكليزية. بُني من الصفر لخطوطك، وعملاتك، وزبائنك، وواقعك.", en: "Not adapted from a generic logistics app. Not translated from English. Built from scratch for your routes, your currencies, your customers, your reality." },

  /* ---------- FEATURES ---------- */
  f1_tag:  { ar: "لسائقك", en: "For Your Driver" },
  f1_head: { ar: "يعمل في الأنفاق. في الوديان. في كلّ مكان.", en: "Works in tunnels. Works in valleys. Works everywhere." },
  f1_body: { ar: "يسجّل سائقك كلّ توصيلة، وكلّ قارورة فارغة مُعادة، وكلّ دفعة محصّلة — بإنترنت أو بدونه. يخزّن التطبيق كلّ شيء محلياً ويزامنه تلقائياً لحظة عودة الإشارة. ويرى بالضبط كم سجلاً ينتظر الرفع.", en: "Your driver records every delivery, every empty bottle returned, every payment collected — with or without internet. The app stores everything locally and syncs automatically the moment signal returns. He sees exactly how many records are waiting to upload." },

  f2_tag:  { ar: "لمالِيّتك", en: "For Your Finances" },
  f2_head: { ar: "دولار، ليرة، أو الاثنان. مثبّتان للأبد على سعر ذلك اليوم.", en: "USD, LBP, or both. Locked forever at the rate that day." },
  f2_body: { ar: "كلّ معاملة تخزّن سعر الصرف الذي سُجّلت عليه. غيّر سعر اليوم غداً — تاريخك لا يتزحزح. شاهد إيرادات اليوم بالعملتين، لكلّ زبون، ولكلّ سائق، ولكلّ منطقة. محاسبك سيجد أخيراً ما يعمل عليه.", en: "Every transaction stores the exchange rate it was recorded at. Change today's rate tomorrow — your history doesn't move. See daily revenue in both currencies, per customer, per driver, per area. Your accountant will finally have something to work with." },

  f3_tag:  { ar: "لقواريرك", en: "For Your Bottles" },
  f3_head: { ar: "كلّ قارورة. كلّ زبون. محسوبة دائماً.", en: "Every bottle. Every customer. Always accounted for." },
  f3_body: { ar: "يتعقّب النظام بالضبط كم قارورة يحمل كلّ زبون. ويمنع سائقك من تسجيل قواريرَ مُعادة أكثر مما يملكه الزبون فعلياً. وحين يختفي زبونٌ ومعه ٥٠ من قواريرك، تعرف فوراً.", en: "The system tracks exactly how many bottles each customer is holding. It prevents your driver from recording more returns than a customer physically has. When a customer disappears with 50 of your bottles, you know immediately." },

  f4_tag:  { ar: "لك، أيها المالك", en: "For You, The Owner" },
  f4_head: { ar: "راقب عمليّتك من أيّ مكان. في الوقت الحقيقي.", en: "Watch your operation from anywhere. In real time." },
  f4_body: { ar: "افتح هاتفك عند الثانية ظهراً وشاهد بالضبط كم قارورة وُزِّعت اليوم، وكم نقداً قادمٌ إليك، وأيّ سائقٍ متأخّر، وأيّ زبونٍ يدين لك بالأكثر. ليس غداً. الآن.", en: "Open your phone at 2pm and see exactly how many bottles were delivered today, how much cash is coming in, which driver is behind, and which customer owes you the most. Not tomorrow. Now." },

  /* feature mockup labels */
  fm1_status_pending: { ar: "بانتظار المزامنة", en: "Pending sync" },
  fm1_records:        { ar: "٣ سجلات محفوظة محلياً", en: "3 records stored locally" },
  fm1_synced:         { ar: "تمت مزامنة كلّ شيء", en: "Everything synced" },
  fm1_sync_btn:       { ar: "مزامنة الآن", en: "Sync now" },
  fm1_offline:        { ar: "وضع بلا اتصال", en: "Offline mode" },
  fm2_title:          { ar: "إيرادات اليوم", en: "Daily revenue" },
  fm2_usd:            { ar: "بالدولار", en: "USD" },
  fm2_lbp:            { ar: "بالليرة", en: "LBP" },
  fm2_rate:           { ar: "السعر المثبّت: ٨٩٬٥٠٠", en: "Locked rate: 89,500" },
  fm2_month:          { ar: "ملخّص الشهر", en: "Monthly summary" },
  fm2_area:           { ar: "المنطقة", en: "Area" },
  fm2_revenue:        { ar: "الإيراد", en: "Revenue" },
  fm3_profile:        { ar: "ملف الزبون", en: "Customer profile" },
  fm3_holding:        { ar: "يحمل حالياً", en: "Currently holding" },
  fm3_bottles:        { ar: "قارورة", en: "bottles" },
  fm3_balance:        { ar: "الرصيد المستحق", en: "Balance due" },
  fm3_last:           { ar: "آخر توصيلة: قبل يومين", en: "Last delivery: 2 days ago" },
  fm3_max:            { ar: "الحدّ الأقصى للإعادة: ٢٣", en: "Max returnable: 23" },
  fm4_progress:       { ar: "تقدّم اليوم", en: "Today's progress" },
  fm4_delivered:      { ar: "٩٤ قارورة وُزِّعت", en: "94 bottles delivered" },
  fm4_drivers:        { ar: "حسب السائق", en: "By driver" },
  fm4_revenue:        { ar: "نقدٌ قادم اليوم", en: "Cash in today" },

  /* ---------- HOW IT WORKS ---------- */
  how_eyebrow: { ar: "يومٌ واحد مع AquaOps", en: "A day with AquaOps" },
  how_head:    { ar: "بسيط لسائقك. شفّافٌ لك.", en: "Simple for your driver. Transparent for you." },
  s1_t: { ar: "السائق يبدأ يومه", en: "Your driver starts the day" },
  s1_d: { ar: "يحمّل الشاحنة، يفتح AquaOps، ويُدخل عدد القوارير التي يحملها. ويُنزّل التطبيق كلّ ما يحتاجه لليوم.", en: "Loads the truck, opens AquaOps, enters how many bottles he's carrying. The app downloads everything he needs for the day." },
  s2_t: { ar: "يزور كلّ زبون", en: "He visits each customer" },
  s2_d: { ar: "يسجّل التوصيلة، الفوارغ المُعادة، النقد المحصّل. شاشة واحدة. أقلّ من ٣٠ ثانية لكلّ محطّة. ويرسل التطبيق للزبون ملخّصاً عبر واتساب تلقائياً.", en: "Records delivery, empties returned, cash collected. One screen. Under 30 seconds per stop. The app sends the customer a WhatsApp summary automatically." },
  s3_t: { ar: "أنت تراقب مباشرةً", en: "You watch live" },
  s3_d: { ar: "من هاتفك أو حاسوبك، ترى التقدّم لحظةً بلحظة مع مزامنة السجلات. لا حاجة لاتصالٍ لمعرفة أين سائقك.", en: "From your phone or laptop, you see progress in real time as records sync. No calls needed to know where your driver is." },
  s4_t: { ar: "نهاية اليوم", en: "End of day" },
  s4_d: { ar: "كلّ معاملة مسجّلة، كلّ رصيدٍ محدّث، كلّ ليرةٍ محسوبة. سائقك يرى ملخّص يومه كاملاً. وأنت ترى عملك كاملاً.", en: "Every transaction recorded, every balance updated, every lira accounted for. Your driver sees his full day summary. You see your full business." },

  /* ---------- REVOLUTION ---------- */
  rev_h1:   { ar: "التوزيع اللبناني يعمل على الورق منذ ٤٠ عاماً.", en: "Lebanese distribution has been running on paper for 40 years." },
  rev_ends: { ar: "هنا ينتهي ذلك.", en: "It ends here." },
  rev_body: { ar: "AquaOps هو أوّل نظامٍ مبنيٍّ بالكامل على طريقة عمل توزيع المياه فعلياً في لبنان — انقطاع الكهرباء، ضعف الإشارة، العملتان، مئات أو آلاف الزبائن، والقوارير التي يجب أن تعود. لم نعدّل أداةً أجنبية. بنينا أداتك أنت.", en: "AquaOps is the first system built entirely around how water distribution actually works in Lebanon — the power cuts, the bad signal, the two currencies, hundreds or thousands of customers, and the bottles that need to come back. We didn't adapt a foreign tool. We built yours." },
  rev_s1: { ar: "زبون تُدار في شركة واحدة اليوم", en: "customers managed in one company today" },
  rev_s2: { ar: "عملتان تُتعقّبان في آنٍ واحد", en: "currencies tracked simultaneously" },
  rev_s3: { ar: "سجلّ يضيع بسبب ضعف الاتصال", en: "records lost to bad connectivity" },

  /* ---------- AUDIENCE ---------- */
  aud_eyebrow: { ar: "لمن صُمّم", en: "Who it's for" },
  aud_head:    { ar: "طرفان. نظامٌ واحد يخدمهما.", en: "Two sides. One system that serves both." },
  aud_driver_title: { ar: "لسائقك على الطريق", en: "For your driver on the road" },
  ad1: { ar: "يعمل دون إنترنت", en: "Works offline" },
  ad2: { ar: "يسجّل خلال ثوانٍ", en: "Records in seconds" },
  ad3: { ar: "يرسل تحديثات واتساب تلقائياً", en: "Sends WhatsApp updates automatically" },
  ad4: { ar: "يعرف دائماً ما يجب تحصيله", en: "Always knows what to collect" },
  aud_owner_title: { ar: "لك في المكتب", en: "For you in the office" },
  ao1: { ar: "تتبّع التوصيل مباشرةً", en: "Live delivery tracking" },
  ao2: { ar: "رؤية ماليّة كاملة", en: "Full financial visibility" },
  ao3: { ar: "سجلّ حسابات الزبائن", en: "Customer account history" },
  ao4: { ar: "تقارير شهرية", en: "Monthly reports" },

  /* ---------- CTA ---------- */
  cta_head: { ar: "جاهزٌ لإدارة عمليّتك كأننا في {year}؟", en: "Ready to run your operation like it's {year}?" },
  cta_sub:  { ar: "يستقبل AquaOps حالياً موزّعي المياه في لبنان. تواصل معنا وسنُجهّز شركتك، ونستورد زبائنك، ونجعل سائقك يوزّع عبر التطبيق خلال يوم.", en: "AquaOps is currently onboarding Lebanese water distributors. Reach out and we'll set up your company, import your customers, and have your driver delivering on the app within a day." },
  cta_btn:  { ar: "تواصل معنا عبر واتساب", en: "Chat with us on WhatsApp" },
  cta_note: { ar: "دون أيّ التزام. نردّ عادةً في غضون ساعة.", en: "No commitment. We usually reply within an hour." },

  /* ---------- FOOTER ---------- */
  foot_tag:   { ar: "نظام عمليات التوزيع المبنيّ للبنان.", en: "The distribution operations system built for Lebanon." },
  foot_built: { ar: "صُنع للبنان", en: "Built for Lebanon" },
  foot_copy:  { ar: "© {year} AquaOps. جميع الحقوق محفوظة.", en: "© {year} AquaOps. All rights reserved." },
  foot_priv:  { ar: "الخصوصية", en: "Privacy" },
  foot_terms: { ar: "الشروط", en: "Terms" }
};
