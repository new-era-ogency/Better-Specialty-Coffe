/**
 * Better Specialty Coffee — Bean Matrix, brew calculator, Coffee Concierge.
 */
(function () {
  "use strict";

  console.log("Hello Coffee");

  var LANG_KEY = "bsc-lang";

  /** @returns {"en" | "bg"} */
  function getLang() {
    try {
      var s = localStorage.getItem(LANG_KEY);
      if (s === "bg" || s === "en") return s;
    } catch (e) {}
    if (
      typeof navigator !== "undefined" &&
      navigator.language &&
      navigator.language.toLowerCase().indexOf("bg") === 0
    ) {
      return "bg";
    }
    return "en";
  }

  /** @param {"en" | "bg"} lang */
  function setLang(lang) {
    try {
      localStorage.setItem(LANG_KEY, lang);
    } catch (e) {}
    document.documentElement.lang = lang === "bg" ? "bg" : "en";
    applyStaticI18n();
    syncLangButtons();
    updatePlanDescription(document);
    updateMethodHint(document);
    updateMatrix(document);
    runBrewCalculator(document);
  }

  var T = {
    en: {
      skip: "Skip to content",
      aria_logo_home: "Better Specialty Coffee — home",
      aria_logo_alt:
        "Better Specialty Coffee logo: cream skull and wordmark on forest green",
      aria_language: "Language",
      aria_nav: "Main navigation",
      aria_mobile_nav: "Mobile sections",
      loading_pour: "Steady pour. No rush.",
      nav_menu: "Menu",
      nav_gallery: "Gallery",
      nav_why: "Why us",
      nav_reviews: "Reviews",
      nav_about: "About",
      nav_book: "Book",
      nav_beans: "Beans",
      nav_brew: "Brew",
      nav_club: "Club",
      nav_order: "Order",
      nav_visit: "Visit",
      nav_id: "Character",
      hero_eyebrow: "Sofia · Specialty slow bar",
      hero_title: "Specialty coffee brewed with precision in Sofia.",
      hero_sub:
        "Third-wave bar, single-origin on bar and on plate. Pull up, dial in, stay for the pour.",
      cta_menu: "View Menu",
      cta_book: "Book a Table",
      gallery_title: "Inside the bar",
      gallery_lead:
        "Replace these documentary-style placeholders with your own barista, interior, beans, brew, guests, and pastry shots — same grid, your heat.",
      cap_barista: "Barista craft",
      cap_interior: "Interior",
      cap_beans: "Green & roast",
      cap_brew: "Brewing",
      cap_guests: "Guests",
      cap_desserts: "Desserts",
      why_title: "Why Better?",
      why_lead:
        "Four promises we repeat until they’re boring — because boring consistency is what great cups are built on.",
      why_c1t: "Single origin beans",
      why_c1p:
        "Traceable lots, rotated seasonally, dialled on bar with the same obsession you’d expect from a cupping table.",
      why_c2t: "Fresh roasting",
      why_c2p:
        "Roasted-on dates on the board, rest windows respected, espresso pulled like the beans still remember the farm.",
      why_c3t: "Specialty desserts",
      why_c3p:
        "Pastry that can stand next to a washed Yirgacheffe — butter, fruit, and bitterness in balance, not sugar cover-ups.",
      why_c4t: "Fast Wi-Fi · workspace",
      why_c4p:
        "Quiet corners, power at the banquette, light that doesn’t shame your laptop. Stay one cup or five.",
      id_eyebrow: "Not a franchise story",
      id_title: "Better is a bar with opinions",
      id_lead:
        "We’re not a polished franchise template — we’re a small crew choosing harder beans, slower pours, and honest dates on the board. Here’s what that sounds like in practice.",
      id_b1t: "Philosophy: minimum viable hype",
      id_b1p:
        "The name is intentional: Better is the floor, not the ceiling. If it doesn’t taste better than yesterday’s dial-in, it doesn’t leave the bar — whether you’re ordering an espresso flight or a humble filter.",
      id_b2t: "Roasting & QC",
      id_b2p:
        "We chase profiles that survive milk and still whisper origin on filter — lighter where the cup needs air, settled where chocolate carries the day. Lots rotate; the language on the menu doesn’t sugar-coat terroir.",
      id_b3t: "Community over performance",
      id_b3p:
        "The bar is a room first, a stage second — students, regulars, tourists, and nerds arguing TDS share the same rail. Specialty can be serious without being cold; we roast for the people who actually show up.",
      id_b4t: "The skull is intentional",
      id_b4p:
        "Forest green, bone, a winking mascot — a reminder not to confuse reverence with pretence. Playful badge, ruthless cupping standards. If the vibe feels human, the discipline behind it is twice as strict.",
      menu_title: "Digital menu",
      menu_lead:
        "Categories, filters, and the nerdy detail specialty drinkers actually read. Badges flag vegan, seasonal, and what’s flying out of the machine.",
      mf_all: "All",
      mf_espresso: "Espresso",
      mf_filter: "Filter",
      mf_cold: "Cold",
      mf_dessert: "Desserts",
      menu_vegan_only: "Vegan only",
      reviews_title: "Voices from the bar",
      reviews_lead:
        "Demo quotes — wire Google Reviews or another API when you go live.",
      reviews_q1:
        "“Best coffee shop Sofia energy without the attitude. Filter flight was unreal.”",
      reviews_q2:
        "“Specialty coffee in Sofia usually phones in the pastry — not here. Laptop friendly too.”",
      reviews_q3:
        "“Third wave coffee Sofia spot I bring out-of-town guests. Booking was instant.”",
      ig_title: "@betterspecialtysofia",
      ig_lead:
        "Auto-scroll strip — swap for EmbedSocial / Meta embed or latest Reels API.",
      about_title: "Why we opened Better",
      about_p1:
        "We were tired of “specialty” signs on cups that tasted like compromise. Better started as a bet: that Sofia deserved a bar where every dial — grinder, water, time — is treated like the guest can taste arrogance.",
      about_p2_html:
        "Philosophy is simple: <strong class=\"text-[#f4e9d8]\">no filler beans</strong>, no hiding roast dates, no mystery milk. The team is small, loud about quality, quiet about ego. Coffee till I die isn’t marketing — it’s the shift we work.",
      about_p3:
        "Skeleton mascot? That’s the wink: we take the craft seriously, not ourselves. Pull up to the bar, ask rude questions about TDS, we’ll answer.",
      book_title: "Book a table",
      book_lead:
        "Demo form — connect to your booking engine or Resy / internal sheet later.",
      bf_name: "Name",
      bf_date: "Date",
      bf_time: "Time",
      bf_guests: "Guests",
      bf_submit: "Request table (demo)",
      order_title: "Order ahead",
      order_lead:
        "Takeaway, preorder, pickup — hook Shopify, GloriaFood, or your POS webhook here. For now these are intent buttons (demo).",
      ord_takeaway: "Takeaway",
      ord_preorder: "Preorder",
      ord_pickup: "Pickup slot",
      visit_title: "Visit",
      visit_blurb_html:
        "<strong class=\"text-[#f4e9d8]\">12 Vitosha Blvd</strong> (demo address — replace). Sofia city center. Google Maps pin below is approximate for local SEO preview.",
      visit_hours_wd: "Mon–Fri",
      visit_hours_we: "Sat–Sun",
      visit_hours_val_wd: "7:30 — 21:00",
      visit_hours_val_we: "8:00 — 22:00",
      visit_phone: "Phone",
      map_iframe_title: "Map — Better Specialty Coffee Sofia (approximate)",
      footer_note:
        "Better Specialty Coffee · Sofia · Replace demo photos, address, canonical URL, and OG links before launch. Grain + forest accents stay.",
      shop_title: "The Bean Matrix",
      shop_lead:
        "Hunt by sensory tag. Your Coffee Concierge plan (below) decides how wild the lineup gets—rotational chaos for the curious, fixed steel for the daily driver.",
      flavor_legend: "Flavor notes",
      flavor_hint:
        "Match any selected note. Leave them blank to see the full matrix for your plan.",
      note_fruity: "Fruity",
      note_chocolatey: "Chocolatey",
      note_floral: "Floral",
      guides_title: "Integrated brewing intelligence",
      guides_lead:
        "Lock your numbers before you touch the kettle. Dial water from mass and ratio—V60 or AeroPress—then chase the cup, not the guesswork.",
      brew_method: "Method",
      brew_v60: "V60",
      brew_aero: "AeroPress",
      brew_coffee: "Coffee (g)",
      brew_ratio: "Ratio (1 : n water)",
      brew_ratio_cap: "1 g coffee : n g water",
      brew_submit: "Calculate water",
      sub_title: "Coffee Concierge",
      sub_lead:
        "Premium subscription logic: go rotational and chase the rare, or lock fixed and let the same ruthless profile meet you every morning. Either way, the Matrix above obeys your call.",
      sub_plan: "Plan",
      sub_rot: "Rotational",
      sub_fix: "Fixed",
      sub_radiogroup_aria: "Coffee Concierge plan",
      plan_rot:
        "Rotational mode: seasonal edges, limited drops, flavor that refuses to sit still. The Matrix shows what belongs in the chaos pipeline.",
      plan_fix:
        "Fixed mode: the same cut-throat profile on repeat—balanced, chocolate-leaning lots for the cup you trust when the alarm wins.",
      brew_hint_v60:
        "V60: start 1:15–1:17, then interrogate the cup. Precision is the flex.",
      brew_hint_aero:
        "AeroPress: tighter ratios common—1:12–1:15 before you invert your luck.",
      matrix_empty:
        "Nothing in the Matrix matches that combo. Loosen the filters or switch plans—the beans are still ruthless elsewhere.",
      matrix_lot1: " lot",
      matrix_lots: " lots",
      matrix_plan: " · Plan: ",
      matrix_notes: " · Notes: ",
      matrix_all_notes: " · All flavor notes",
      bean_origin: "Origin",
      bean_roast: "Roast date",
      bean_sca: "SCA score",
      bean_flavor: "Flavor notes",
      brew_err: "Enter a positive coffee mass and ratio.",
      brew_out_title: " · Target water",
      brew_out_ml: "(≈ ml)",
      brew_out_line: " g coffee · 1:",
      brew_out_commit: " — weigh, boil, commit.",
      alert_booking:
        "Demo: your table request would be sent. Connect Resy, internal CRM, or email-to-Slack next.",
      alert_order:
        " flow not wired. Add Shopify POS, GloriaFood, or custom checkout.",
      alert_order_pre: 'Demo: "',
    },
    bg: {
      skip: "Към съдържанието",
      aria_logo_home: "Better Specialty Coffee — начало",
      aria_logo_alt:
        "Лого Better Specialty Coffee: кремав череп и надпис върху шумово зелено",
      aria_language: "Език",
      aria_nav: "Основна навигация",
      aria_mobile_nav: "Мобилни секции",
      loading_pour: "Бавен pour. Без бързане.",
      nav_menu: "Меню",
      nav_gallery: "Галерия",
      nav_why: "Защо ние",
      nav_reviews: "Отзиви",
      nav_about: "За нас",
      nav_book: "Резервация",
      nav_beans: "Зърна",
      nav_brew: "Приготвяне",
      nav_club: "Клуб",
      nav_order: "Поръчка",
      nav_visit: "Посещение",
      nav_id: "Характер",
      hero_eyebrow: "София · специалти slow bar",
      hero_title: "Специалти кафе, приготвено с прецизност в София.",
      hero_sub:
        "Трета вълна: single origin на бара и в чинията. Седни, настрой се, остана за pour-а.",
      cta_menu: "Виж менюто",
      cta_book: "Резервирай маса",
      gallery_title: "Зад бара",
      gallery_lead:
        "Замени тези демо кадри със свои: бариста, интериор, зърна, brewing, гости, десерти — същата мрежа, твоята атмосфера.",
      cap_barista: "Бариста",
      cap_interior: "Интериор",
      cap_beans: "Зелено и печиво",
      cap_brew: "Приготвяне",
      cap_guests: "Гости",
      cap_desserts: "Десерти",
      why_title: "Защо Better?",
      why_lead:
        "Четири обещания, докато станат скучни — защото скучната последователност прави чашата велика.",
      why_c1t: "Single origin зърна",
      why_c1p:
        "Проследими партиди, сезонна ротация, бар настройка със същата одиссея като на cupping.",
      why_c2t: "Свежо печене",
      why_c2p:
        "Дата на печене на таблото, уважение към rest, еспресо изтеглено така, сякаш зърната помнят фермата.",
      why_c3t: "Специалти десерти",
      why_c3p:
        "Паста, която издържа до измит Yirgacheffe — масло, плод, горчивина в баланс, не захарна завеса.",
      why_c4t: "Бърз Wi‑Fi · работно място",
      why_c4p:
        "Тихи кътове, контакти до пейката, светлина, която не убива лаптопа. Остани за едно или пет кафета.",
      id_eyebrow: "Не франчайз история",
      id_title: "Better е бар с позиция",
      id_lead:
        "Не сме лъскав шаблон — малък екип, който избира по-трудни зърна, по-бавни pour-и и честни дати на таблото. Ето как това звучи на практика.",
      id_b1t: "Философия: минимален hype",
      id_b1p:
        "Името е нарочно: Better е под, не таван. Ако не вкуси по-добре от вчерашния dial-in, не излиза от бара — еспресо флайт или скромен филтър.",
      id_b2t: "Печене и QC",
      id_b2p:
        "Търсим профили, които издържат мляко и още нашепват произход на филтър — по-светли където чашата иска въздух, по-стегнати където шоколадът носи деня. Партидите се сменят; езикът в менюто не захарва тероара.",
      id_b3t: "Общност пред перформанс",
      id_b3p:
        "Барът е стая първо, сцена второ — студенти, редовни гости, туристи и nerds за TDS на един и същ rail. Specialty може да е сериозно без да е студено; печем за хората, които наистина идват.",
      id_b4t: "Черепът е нарочен",
      id_b4p:
        "Шумово зелено, кремаво, маскот с усмивка — да не объркаме реверанс с претенция. Игрив знак, безкомпромисни cupping стандарти. Ако атмосферата е човешка, дисциплината зад нея е двойно по-строга.",
      menu_title: "Дигитално меню",
      menu_lead:
        "Категории, филтри и детайлите, които specialty гостите наистина четат. Баджове: vegan, сезонно, bestseller.",
      mf_all: "Всички",
      mf_espresso: "Еспресо",
      mf_filter: "Филтър",
      mf_cold: "Студени",
      mf_dessert: "Десерти",
      menu_vegan_only: "Само веган",
      reviews_title: "Гласове от бара",
      reviews_lead:
        "Демо цитати — свържи Google Reviews или друг API при реален старт.",
      reviews_q1:
        "„Енергията на най-доброто кафе в София без арогантността. Filter flight беше нереален.“",
      reviews_q2:
        "„При специалти кафето в София често десертът е слаб — тук не. Удобно и с лаптоп.“",
      reviews_q3:
        "„Третата вълна в София, където водя гости от чужбина. Резервацията беше моментална.“",
      ig_title: "@betterspecialtysofia",
      ig_lead:
        "Автоскрол лента — замени с EmbedSocial / Meta embed или Reels API.",
      about_title: "Защо отворихме Better",
      about_p1:
        "Омръзна ни „специалти“ върху чаши, които вкусуват на компромис. Better е залог: София заслужава бар, където всяка настройка — мелачка, вода, време — е тактилна.",
      about_p2_html:
        "Философията е проста: <strong class=\"text-[#f4e9d8]\">без пълнителни зърна</strong>, без скрити дати на печене, без мистериозно мляко. Екипът е малък, силен по качество, тих по егото. Coffee till I die не е реклама — смяната, на която работим.",
      about_p3:
        "Скелетът като маскот? Усмивката: сериозни сме към занаята, не към себе си. Идваш на бара с „груби“ въпроси за TDS — отговаряме.",
      book_title: "Резервирай маса",
      book_lead:
        "Демо форма — свържи Resy, вътрешен CRM или имейл към Slack по-късно.",
      bf_name: "Име",
      bf_date: "Дата",
      bf_time: "Час",
      bf_guests: "Гости",
      bf_submit: "Заявка за маса (демо)",
      order_title: "Поръчай напред",
      order_lead:
        "За вкъщи, предварителна поръчка, pickup — тук Shopify, GloriaFood или POS. Засега бутоните са демо.",
      ord_takeaway: "За вкъщи",
      ord_preorder: "Предварително",
      ord_pickup: "Час за pickup",
      visit_title: "Посети ни",
      visit_blurb_html:
        "<strong class=\"text-[#f4e9d8]\">ул. „Витоша“ 12</strong> (демо адрес — замени). Център София. Картата по-долу е ориентировъчна за локално SEO.",
      visit_hours_wd: "Пн–Пт",
      visit_hours_we: "Сб–Нд",
      visit_hours_val_wd: "7:30 — 21:00",
      visit_hours_val_we: "8:00 — 22:00",
      visit_phone: "Телефон",
      map_iframe_title: "Карта — Better Specialty Coffee София (ориентировъчно)",
      footer_note:
        "Better Specialty Coffee · София · Замени демо снимки, адрес, canonical и OG преди launch.",
      shop_title: "Матрицата на зърната",
      shop_lead:
        "Лов по сензорни тагове. Coffee Concierge (долу) решава колко див е подборът — ротация или фиксиран daily driver.",
      flavor_legend: "Вкусови нотки",
      flavor_hint:
        "Покажи партиди с някоя избрана нотка. Празно = всички нотки за твоя план.",
      note_fruity: "Плодови",
      note_chocolatey: "Шоколадови",
      note_floral: "Цветни",
      guides_title: "Интелигентност при brewing",
      guides_lead:
        "Заключи числата преди котлона. Вода от маса и съотношение — V60 или AeroPress — после гони чашата, не гадаенето.",
      brew_method: "Метод",
      brew_v60: "V60",
      brew_aero: "AeroPress",
      brew_coffee: "Кафе (g)",
      brew_ratio: "Съотношение (1 : n вода)",
      brew_ratio_cap: "1 g кафе : n g вода",
      brew_submit: "Изчисли водата",
      sub_title: "Coffee Concierge",
      sub_lead:
        "Премиум абонамент: ротация за редки партиди или фиксиран профил всяка сутрин. Матрицата горе слуша избора ти.",
      sub_plan: "План",
      sub_rot: "Ротационен",
      sub_fix: "Фиксиран",
      sub_radiogroup_aria: "План Coffee Concierge",
      plan_rot:
        "Ротация: сезонни ръбове, малки серии, вкус, който не стои на едно място. Матрицата показва хаоса.",
      plan_fix:
        "Фиксиран: същият безкомпромисен профил всеки път — баланс, шоколад, чашата ти при будилника.",
      brew_hint_v60:
        "V60: старт 1:15–1:17, после разпитвай чашата. Прецизността е flex.",
      brew_hint_aero:
        "AeroPress: по-плътни съотношения — 1:12–1:15 преди да инвертираш късмета.",
      matrix_empty:
        "Няма партиди за тази комбинация. Разхлаби филтрите или смени плана.",
      matrix_lot1: " партия",
      matrix_lots: " партии",
      matrix_plan: " · План: ",
      matrix_notes: " · Нотки: ",
      matrix_all_notes: " · Всички нотки",
      bean_origin: "Произход",
      bean_roast: "Дата на печене",
      bean_sca: "SCA точки",
      bean_flavor: "Вкусови нотки",
      brew_err: "Въведи положителни грамове кафе и съотношение.",
      brew_out_title: " · Целева вода",
      brew_out_ml: "(≈ ml)",
      brew_out_line: " g кафе · 1:",
      brew_out_commit: " — мери, кипни, ангажирай се.",
      alert_booking:
        "Демо: заявката за маса би била изпратена. Свържи Resy, CRM или Slack.",
      alert_order:
        " — още не е свързано. Добави Shopify POS, GloriaFood или checkout.",
      alert_order_pre: 'Демо: "',
    },
  };

  function tr(key) {
    var lang = getLang();
    var table = T[lang] || T.en;
    return table[key] != null ? table[key] : T.en[key] != null ? T.en[key] : key;
  }

  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-html");
      if (key) el.innerHTML = tr(key);
    });
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      if (el.hasAttribute("data-i18n-html")) return;
      var key = el.getAttribute("data-i18n");
      if (!key) return;
      el.textContent = tr(key);
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (key && "placeholder" in el) el.placeholder = tr(key);
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-alt");
      if (key && "alt" in el) el.alt = tr(key);
    });
    document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-aria");
      if (key) el.setAttribute("aria-label", tr(key));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-title");
      if (key) el.setAttribute("title", tr(key));
    });
  }

  function syncLangButtons() {
    var lang = getLang();
    document.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      var v = btn.getAttribute("data-set-lang");
      btn.classList.toggle("is-active", v === lang);
      btn.setAttribute("aria-pressed", v === lang ? "true" : "false");
    });
  }

  function initLangToggle(root) {
    root.querySelectorAll("[data-set-lang]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var v = btn.getAttribute("data-set-lang");
        if (v === "bg" || v === "en") setLang(v);
      });
    });
    syncLangButtons();
  }

  function noteLabel(note) {
    return tr("note_" + note);
  }

  const METHOD_RATIOS = { v60: 16, aeropress: 14 };
  /** @typedef {'fruity' | 'chocolatey' | 'floral'} FlavorNote */
  /** @typedef {'rotational' | 'fixed'} ConciergePlan */

  /**
   * @typedef {Object} BeanLot
   * @property {string} id
   * @property {string} origin
   * @property {string} roastDate ISO date
   * @property {number} scaScore
   * @property {FlavorNote[]} flavorNotes
   * @property {ConciergePlan[]} plans
   */

  /** @type {BeanLot[]} */
  const BEAN_LOTS = [
    {
      id: "et-1",
      origin: "Ethiopia · Yirgacheffe",
      roastDate: "2026-05-02",
      scaScore: 86,
      flavorNotes: ["fruity", "floral"],
      plans: ["rotational"],
    },
    {
      id: "co-1",
      origin: "Colombia · Huila",
      roastDate: "2026-05-07",
      scaScore: 84,
      flavorNotes: ["chocolatey", "fruity"],
      plans: ["rotational", "fixed"],
    },
    {
      id: "br-1",
      origin: "Brazil · Cerrado",
      roastDate: "2026-05-08",
      scaScore: 82,
      flavorNotes: ["chocolatey"],
      plans: ["fixed"],
    },
    {
      id: "ke-1",
      origin: "Kenya · Nyeri",
      roastDate: "2026-04-28",
      scaScore: 88,
      flavorNotes: ["fruity", "floral"],
      plans: ["rotational"],
    },
    {
      id: "gt-1",
      origin: "Guatemala · Huehuetenango",
      roastDate: "2026-05-01",
      scaScore: 85,
      flavorNotes: ["chocolatey", "floral"],
      plans: ["rotational", "fixed"],
    },
    {
      id: "cr-1",
      origin: "Costa Rica · Tarrazú",
      roastDate: "2026-05-06",
      scaScore: 83,
      flavorNotes: ["fruity", "chocolatey"],
      plans: ["rotational"],
    },
  ];

  /**
   * 1:n water-to-coffee ratio: water (g) = coffee (g) × n.
   * @param {number} coffeeGrams
   * @param {number} ratioWaterPerCoffee e.g. 16 for 1:16
   * @returns {number | null}
   */
  function calculateBrewWater(coffeeGrams, ratioWaterPerCoffee) {
    if (!Number.isFinite(coffeeGrams) || coffeeGrams <= 0) return null;
    if (!Number.isFinite(ratioWaterPerCoffee) || ratioWaterPerCoffee <= 0) {
      return null;
    }
    return coffeeGrams * ratioWaterPerCoffee;
  }

  /**
   * @param {BeanLot[]} lots
   * @param {{ plan: ConciergePlan; flavorFilters: FlavorNote[] }} opts
   * @returns {BeanLot[]}
   */
  function filterBeanMatrix(lots, opts) {
    const { plan, flavorFilters } = opts;
    return lots.filter(function (lot) {
      if (!lot.plans.includes(plan)) return false;
      if (flavorFilters.length === 0) return true;
      return flavorFilters.some(function (note) {
        return lot.flavorNotes.indexOf(note) !== -1;
      });
    });
  }

  function formatRoastDate(iso) {
    try {
      var d = new Date(iso + "T12:00:00");
      var loc = getLang() === "bg" ? "bg-BG" : "en-GB";
      return d.toLocaleDateString(loc, {
        year: "numeric",
        month: "short",
        day: "numeric",
      });
    } catch (e) {
      return iso;
    }
  }

  function escapeHtml(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function renderBeanCards(container, lots) {
    container.innerHTML = "";
    if (lots.length === 0) {
      var empty = document.createElement("p");
      empty.className = "col-span-full py-16 text-center text-sm text-white/45";
      empty.textContent = tr("matrix_empty");
      container.appendChild(empty);
      return;
    }

    lots.forEach(function (lot) {
      var card = document.createElement("article");
      card.className = "bsc-bean-card flex flex-col p-5 sm:p-6";
      card.setAttribute("data-bean-id", lot.id);

      var notes = lot.flavorNotes
        .map(function (n) {
          return (
            '<span class="inline-block border border-[#3C2A21]/90 bg-black/30 px-2 py-1 text-[10px] font-medium uppercase tracking-wider text-white/75 transition-[border-color] duration-300 group-hover:border-[#5c4033]">' +
            escapeHtml(noteLabel(n)) +
            "</span>"
          );
        })
        .join(" ");

      card.innerHTML =
        '<h3 class="text-base font-semibold tracking-tight text-white sm:text-lg">' +
        escapeHtml(lot.origin) +
        "</h3>" +
        '<p class="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">' +
        escapeHtml(tr("bean_origin")) +
        "</p>" +
        '<dl class="mt-8 space-y-4 text-sm">' +
        '<div class="flex flex-wrap justify-between gap-2 border-b border-[#3C2A21]/50 pb-3">' +
        "<dt class=\"text-white/45\">" +
        escapeHtml(tr("bean_roast")) +
        "</dt>" +
        '<dd class="text-right font-medium text-white">' +
        escapeHtml(formatRoastDate(lot.roastDate)) +
        "</dd></div>" +
        '<div class="flex flex-wrap justify-between gap-2 border-b border-[#3C2A21]/50 pb-3">' +
        "<dt class=\"text-white/45\">" +
        escapeHtml(tr("bean_sca")) +
        "</dt>" +
        '<dd class="text-right font-medium tabular-nums text-white">' +
        escapeHtml(String(lot.scaScore)) +
        "+</dd></div>" +
        "<div><dt class=\"text-white/45\">" +
        escapeHtml(tr("bean_flavor")) +
        "</dt>" +
        '<dd class="mt-2 flex flex-wrap gap-2">' +
        notes +
        "</dd></div></dl>";

      container.appendChild(card);
    });
  }

  function getSelectedFlavorFilters(root) {
    /** @type {FlavorNote[]} */
    var selected = [];
    root.querySelectorAll('input[name="flavor-note"]:checked').forEach(function (el) {
      selected.push(/** @type {HTMLInputElement} */ (el).value);
    });
    return selected;
  }

  function getSelectedPlan(root) {
    var checked = root.querySelector('input[name="concierge-plan"]:checked');
    if (!checked) return "rotational";
    return /** @type {ConciergePlan} */ (checked.value);
  }

  function updateMatrix(root) {
    var grid = root.getElementById("bean-matrix-grid");
    var status = root.getElementById("bean-matrix-status");
    if (!grid || !status) return;

    var plan = getSelectedPlan(root);
    var flavorFilters = getSelectedFlavorFilters(root);
    var filtered = filterBeanMatrix(BEAN_LOTS, { plan: plan, flavorFilters: flavorFilters });

    var noteStr = flavorFilters.length
      ? tr("matrix_notes") +
        flavorFilters
          .map(function (n) {
            return noteLabel(n);
          })
          .join(", ")
      : tr("matrix_all_notes");

    status.textContent =
      filtered.length +
      (filtered.length === 1 ? tr("matrix_lot1") : tr("matrix_lots")) +
      tr("matrix_plan") +
      plan +
      noteStr;

    renderBeanCards(grid, filtered);
  }

  function updatePlanDescription(root) {
    var el = root.getElementById("plan-description");
    if (!el) return;
    var plan = getSelectedPlan(root);
    el.textContent = tr(plan === "rotational" ? "plan_rot" : "plan_fix");
  }

  function updateMethodHint(root) {
    var methodEl = root.getElementById("brew-method");
    var hintEl = root.getElementById("brew-method-hint");
    var ratioEl = root.getElementById("brew-ratio");
    if (!methodEl || !hintEl) return;

    var method = /** @type {'v60' | 'aeropress'} */ (methodEl.value);
    var ratio = METHOD_RATIOS[method];
    if (ratio != null && ratioEl && document.activeElement !== ratioEl) {
      ratioEl.value = String(ratio);
    }
    hintEl.textContent = tr(method === "aeropress" ? "brew_hint_aero" : "brew_hint_v60");
  }

  function runBrewCalculator(root) {
    var coffeeEl = root.getElementById("brew-coffee-g");
    var ratioEl = root.getElementById("brew-ratio");
    var methodEl = root.getElementById("brew-method");
    var out = root.getElementById("brew-result");
    if (!coffeeEl || !ratioEl || !methodEl || !out) return;

    var coffeeG = parseFloat(coffeeEl.value);
    var ratio = parseFloat(ratioEl.value);
    var water = calculateBrewWater(coffeeG, ratio);

    if (water === null) {
      out.hidden = false;
      out.textContent = tr("brew_err");
      return;
    }

    var methodLabel =
      methodEl.value === "aeropress" ? tr("brew_aero") : tr("brew_v60");
    var rounded = Math.round(water * 10) / 10;
    out.hidden = false;
    out.innerHTML =
      "<p class=\"font-medium text-white\">" +
      methodLabel +
      tr("brew_out_title") +
      "</p>" +
      '<p class="mt-2 tabular-nums text-lg text-white">' +
      rounded +
      " g <span class=\"text-white/45\">" +
      tr("brew_out_ml") +
      "</span></p>" +
      '<p class="mt-2 text-xs text-white/50">' +
      coffeeG +
      tr("brew_out_line") +
      ratio +
      tr("brew_out_commit") +
      "</p>";
  }

  function dismissLoadingOverlay(root) {
    var el = root.getElementById("bsc-loading");
    if (!el) return;
    el.classList.add("bsc-loading--done");
    el.setAttribute("aria-busy", "false");
    root.body.classList.remove("bsc-loading-active");
    var hero = root.getElementById("home-hero");
    if (hero) hero.classList.add("is-bloom-ready");
  }

  function prefersReducedMotion() {
    return (
      typeof window.matchMedia === "function" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    );
  }

  function initScrollReveal(root) {
    var els = root.querySelectorAll(".bsc-reveal");
    if (!els.length) return;
    if (!window.IntersectionObserver || prefersReducedMotion()) {
      els.forEach(function (el) {
        el.classList.add("is-visible");
      });
      return;
    }
    var io = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (en.isIntersecting) {
            en.target.classList.add("is-visible");
            io.unobserve(en.target);
          }
        });
      },
      { rootMargin: "0px 0px -6% 0px", threshold: 0.06 }
    );
    els.forEach(function (el) {
      io.observe(el);
    });
  }

  function initDigitalMenu(root) {
    var grid = root.getElementById("menu-card-grid");
    if (!grid) return;
    var active = "all";
    var veganOnly = false;
    var buttons = root.querySelectorAll("[data-menu-filter]");
    var veganCb = root.getElementById("menu-vegan-only");

    function applyMenuFilter() {
      grid.querySelectorAll(".bsc-menu-card").forEach(function (card) {
        var cat = card.getAttribute("data-menu-cat") || "";
        var vegan = card.getAttribute("data-vegan") === "true";
        var okCat = active === "all" || cat === active;
        var okVegan = !veganOnly || vegan;
        card.classList.toggle("is-hidden", !(okCat && okVegan));
      });
      buttons.forEach(function (btn) {
        var v = btn.getAttribute("data-menu-filter") || "all";
        btn.classList.toggle("is-active", v === active);
      });
    }

    buttons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        active = btn.getAttribute("data-menu-filter") || "all";
        applyMenuFilter();
      });
    });
    if (veganCb) {
      veganCb.addEventListener("change", function () {
        veganOnly = veganCb.checked;
        applyMenuFilter();
      });
    }
    applyMenuFilter();
  }

  function initMagnetic(root) {
    if (prefersReducedMotion()) return;
    root.querySelectorAll(".bsc-magnetic").forEach(function (wrap) {
      wrap.addEventListener("mousemove", function (e) {
        var r = wrap.getBoundingClientRect();
        var ch = wrap.firstElementChild;
        if (!ch) return;
        var x = e.clientX - (r.left + r.width / 2);
        var y = e.clientY - (r.top + r.height / 2);
        ch.style.transform = "translate(" + x * 0.1 + "px," + y * 0.1 + "px)";
      });
      wrap.addEventListener("mouseleave", function () {
        var ch = wrap.firstElementChild;
        if (ch) ch.style.transform = "";
      });
    });
  }

  function initHeroBloom(root) {
    var hero = root.getElementById("home-hero");
    if (!hero) return;
    if (prefersReducedMotion()) return;
    function setPos(clientX, clientY) {
      var r = hero.getBoundingClientRect();
      if (r.width <= 0 || r.height <= 0) return;
      var x = ((clientX - r.left) / r.width) * 100;
      var y = ((clientY - r.top) / r.height) * 100;
      hero.style.setProperty(
        "--bsc-hero-bx",
        Math.max(6, Math.min(94, x)).toFixed(2) + "%"
      );
      hero.style.setProperty(
        "--bsc-hero-by",
        Math.max(8, Math.min(92, y)).toFixed(2) + "%"
      );
    }
    hero.addEventListener(
      "pointermove",
      function (e) {
        setPos(e.clientX, e.clientY);
      },
      { passive: true }
    );
    hero.addEventListener("pointerleave", function () {
      hero.style.setProperty("--bsc-hero-bx", "50%");
      hero.style.setProperty("--bsc-hero-by", "54%");
    });
  }

  function initHeroParallax() {
    if (prefersReducedMotion()) return;
    var layer = document.getElementById("hero-bg-layer");
    var hero = document.getElementById("home-hero");
    if (!layer || !hero) return;
    function onScroll() {
      var rect = hero.getBoundingClientRect();
      if (rect.bottom <= 0 || rect.top >= window.innerHeight) return;
      var max = rect.height + window.innerHeight;
      var y = (window.innerHeight - rect.top) / max;
      var shift = (y - 0.35) * 42;
      layer.style.transform = "translate3d(0," + shift + "px,0)";
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  function cloneMarqueeTrack(root) {
    var track = root.querySelector(".bsc-marquee-track");
    if (!track || track.getAttribute("data-bsc-marquee-cloned")) return;
    track.setAttribute("data-bsc-marquee-cloned", "1");
    track.innerHTML += track.innerHTML;
  }

  function initBookingDemo(root) {
    var form = root.getElementById("booking-form-demo");
    if (!form) return;
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      window.alert(tr("alert_booking"));
    });
  }

  function initOrderDemoButtons(root) {
    root.querySelectorAll("[data-order-demo]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        var mode = btn.getAttribute("data-order-demo") || "order";
        window.alert(tr("alert_order_pre") + mode + tr("alert_order"));
      });
    });
  }

  function init() {
    var root = document;
    document.documentElement.lang = getLang() === "bg" ? "bg" : "en";
    var started = typeof performance !== "undefined" ? performance.now() : Date.now();
    var reduceMotion = prefersReducedMotion();
    var minVisibleMs = reduceMotion ? 220 : 820;

    cloneMarqueeTrack(root);
    applyStaticI18n();
    initLangToggle(root);
    initScrollReveal(root);
    initDigitalMenu(root);
    initMagnetic(root);
    initHeroBloom(root);
    initHeroParallax();
    initBookingDemo(root);
    initOrderDemoButtons(root);

    updatePlanDescription(root);
    updateMethodHint(root);
    updateMatrix(root);

    root.querySelectorAll('input[name="concierge-plan"]').forEach(function (radio) {
      radio.addEventListener("change", function () {
        updatePlanDescription(root);
        updateMatrix(root);
      });
    });

    root.querySelectorAll('input[name="flavor-note"]').forEach(function (cb) {
      cb.addEventListener("change", function () {
        updateMatrix(root);
      });
    });

    var methodEl = root.getElementById("brew-method");
    if (methodEl) {
      methodEl.addEventListener("change", function () {
        updateMethodHint(root);
        runBrewCalculator(root);
      });
    }

    var form = root.getElementById("brew-calculator-form");
    if (form) {
      form.addEventListener("submit", function (e) {
        e.preventDefault();
        runBrewCalculator(root);
      });
    }

    ["brew-coffee-g", "brew-ratio"].forEach(function (id) {
      var el = root.getElementById(id);
      if (el) {
        el.addEventListener("input", function () {
          runBrewCalculator(root);
        });
      }
    });

    runBrewCalculator(root);
    document.documentElement.dataset.bscReady = "1";

    var now =
      typeof performance !== "undefined" ? performance.now() : Date.now();
    var elapsed = now - started;
    var wait = Math.max(0, minVisibleMs - elapsed);
    window.setTimeout(function () {
      dismissLoadingOverlay(root);
    }, wait);
  }

  if (typeof document !== "undefined") {
    if (document.readyState === "loading") {
      document.addEventListener("DOMContentLoaded", init);
    } else {
      init();
    }
  }
})();
