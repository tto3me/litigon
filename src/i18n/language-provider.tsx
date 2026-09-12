import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "ar" | "fr" | "zh";

type Dictionary = Record<string, string>;

const ar: Dictionary = {
  Home: "الرئيسية", Services: "الخدمات", Projects: "المشاريع", Partners: "الشركاء", About: "من نحن", Blog: "الأخبار", Contact: "تواصل معنا",
  "Plan your event": "خطط لفعاليتك", "Talk to Litigon": "تحدث مع ليتغون", "Pages": "الصفحات", "Head Office:": "المكتب الرئيسي:",
  "Riyadh, Kingdom of Saudi Arabia": "الرياض، المملكة العربية السعودية", "All rights reserved.": "جميع الحقوق محفوظة.", "Privacy Policy": "سياسة الخصوصية", "Terms & Conditions": "الشروط والأحكام", Admin: "الإدارة",
  "Events & Conferences Management": "إدارة الفعاليات والمؤتمرات", "We Create Exceptional Impact": "نصنع تأثيراً استثنائياً",
  "Plan your event": "خطط لفعاليتك", "See our work": "شاهد أعمالنا", "An integrated ecosystem": "منظومة متكاملة",
  "Strategy, creativity, production and logistics under one roof — so nothing falls between suppliers.": "الاستراتيجية والإبداع والإنتاج والخدمات اللوجستية تحت سقف واحد لضمان تكامل كل التفاصيل.",
  "Featured projects": "مشاريع مختارة", "All projects": "جميع المشاريع", "How we work": "كيف نعمل", Strategy: "الاستراتيجية", Creative: "الإبداع", Production: "الإنتاج", Operations: "العمليات",
  "Company updates & press releases": "أخبار الشركة والبيانات الصحفية", Newsroom: "غرفة الأخبار", "All updates": "جميع الأخبار",
  "Ready to plan your next event?": "هل أنت مستعد لتخطيط فعاليتك القادمة؟", "Tell us the date, the audience and the ambition — we will handle the rest.": "أخبرنا بالموعد والجمهور والطموح، وسنتولى نحن الباقي.",
  "Our services": "خدماتنا", "Everything an event needs, in one team": "كل ما تحتاجه الفعالية ضمن فريق واحد", "Our capabilities": "قدراتنا", "Moments we engineer": "لحظات نصنعها بإتقان",
  "Drone shows": "عروض الدرون", "Fireworks & pyrotechnics": "الألعاب النارية والمؤثرات", "AI technologies": "تقنيات الذكاء الاصطناعي", "Conferences & summits": "المؤتمرات والقمم", "VIP reception": "استقبال كبار الشخصيات", "Private aviation": "الطيران الخاص",
  "Events & Conference Management": "إدارة الفعاليات والمؤتمرات", "Strategic Conferences & Summits": "المؤتمرات والقمم الاستراتيجية", "AI & Smart Experiences": "الذكاء الاصطناعي والتجارب الذكية", "Marketing Management": "إدارة التسويق", "Entertainment & Cultural Seasons": "الترفيه والمواسم الثقافية", "Crowd Management": "إدارة الحشود", "VIP & Official Delegations": "كبار الشخصيات والوفود الرسمية", "Show Production": "إنتاج العروض",
  "Our work": "أعمالنا", "Projects delivered across the Kingdom": "مشاريع نُفذت في أنحاء المملكة", "Success Partners": "شركاء النجاح", "Trusted by leading organizations": "موثوقون لدى مؤسسات رائدة", "Become a partner": "كن شريكاً لنا",
  "About us": "من نحن", "We create exceptional impact": "نصنع تأثيراً استثنائياً", Vision: "الرؤية", Mission: "الرسالة", "Our foundations": "مرتكزاتنا", "Litigon in numbers": "ليتغون بالأرقام", "Scale, measured in delivery": "حجمنا تقيسه إنجازاتنا", "Scope of services": "نطاق الخدمات", "Explore our services": "استكشف خدماتنا",
  "Integrated Ecosystem": "منظومة متكاملة", "Innovation in Experience": "الابتكار في التجربة", "Operational Excellence": "التميز التشغيلي", "Strategic Reliability": "الموثوقية الاستراتيجية",
  "Events & conferences management": "إدارة الفعاليات والمؤتمرات", "Serving clients across Saudi Arabia.": "نخدم عملاءنا في جميع أنحاء المملكة العربية السعودية.", "Let’s plan your next event": "لنخطط لفعاليتك القادمة",
  "Contact us": "تواصل معنا", "Tell us about your event": "حدثنا عن فعاليتك", "First Name": "الاسم الأول", "Last Name": "اسم العائلة", Email: "البريد الإلكتروني", Phone: "الهاتف", Subject: "الموضوع", Message: "الرسالة", "Type Message": "اكتب رسالتك", "Send a Message": "إرسال الرسالة",
  FAQs: "الأسئلة الشائعة", "Frequently asked questions": "الأسئلة الأكثر شيوعاً", "Everything you need to know before we start planning together.": "كل ما تحتاج إلى معرفته قبل أن نبدأ التخطيط معاً.", "Talk to our team": "تحدث مع فريقنا",
  "What does Litigon do?": "ماذا تقدم ليتغون؟", "How early should we contact you?": "متى ينبغي التواصل معكم؟", "Do you manage the whole event or only parts of it?": "هل تديرون الفعالية كاملة أم أجزاء منها؟", "Can you handle VIPs and official delegations?": "هل تستقبلون كبار الشخصيات والوفود الرسمية؟", "Do you produce drone shows and fireworks?": "هل تنتجون عروض الدرون والألعاب النارية؟", "Where do you work?": "أين تعملون؟", "How is pricing decided?": "كيف يتم تحديد الأسعار؟", "Can you support Saudi Vision 2030 programmes?": "هل تدعمون برامج رؤية السعودية 2030؟",
  "Company updates": "أخبار الشركة", "Press releases & project stories": "بيانات صحفية وقصص مشاريع", "News from behind Saudi Arabia's biggest events": "أخبار من كواليس أكبر فعاليات السعودية", By: "بواسطة", "Back to Blog": "العودة إلى الأخبار", "More from Litigon": "المزيد من ليتغون",
  "Conferences & summits": "المؤتمرات والقمم", "Exhibitions & stands": "المعارض والأجنحة", "Cultural seasons": "المواسم الثقافية", "Show production": "إنتاج العروض",
  "Select language": "اختر اللغة", English: "English", Arabic: "العربية", French: "Français", Chinese: "中文", Close: "إغلاق"
};

const fr: Dictionary = {
  Home: "Accueil", Services: "Services", Projects: "Projets", Partners: "Partenaires", About: "À propos", Blog: "Actualités", Contact: "Contact",
  "Plan your event": "Planifier votre événement", "Talk to Litigon": "Parler à Litigon", Pages: "Pages", "Head Office:": "Siège social :", "Riyadh, Kingdom of Saudi Arabia": "Riyad, Royaume d’Arabie saoudite", "All rights reserved.": "Tous droits réservés.", "Privacy Policy": "Politique de confidentialité", "Terms & Conditions": "Conditions générales", Admin: "Administration",
  "Events & Conferences Management": "Gestion d’événements et de conférences", "We Create Exceptional Impact": "Nous créons un impact exceptionnel", "See our work": "Découvrir nos réalisations", "An integrated ecosystem": "Un écosystème intégré",
  "Strategy, creativity, production and logistics under one roof — so nothing falls between suppliers.": "Stratégie, création, production et logistique réunies pour une exécution parfaitement coordonnée.",
  "Featured projects": "Projets à la une", "All projects": "Tous les projets", "How we work": "Notre méthode", Strategy: "Stratégie", Creative: "Création", Production: "Production", Operations: "Opérations",
  "Company updates & press releases": "Actualités et communiqués de presse", Newsroom: "Actualités", "All updates": "Toutes les actualités", "Ready to plan your next event?": "Prêt à organiser votre prochain événement ?", "Tell us the date, the audience and the ambition — we will handle the rest.": "Indiquez-nous la date, le public et votre ambition — nous nous occupons du reste.",
  "Our services": "Nos services", "Everything an event needs, in one team": "Tout ce dont votre événement a besoin, avec une seule équipe", "Our capabilities": "Nos expertises", "Moments we engineer": "Des moments conçus avec précision",
  "Drone shows": "Spectacles de drones", "Fireworks & pyrotechnics": "Feux d’artifice et pyrotechnie", "AI technologies": "Technologies d’IA", "Conferences & summits": "Conférences et sommets", "VIP reception": "Accueil VIP", "Private aviation": "Aviation privée",
  "Events & Conference Management": "Gestion d’événements et de conférences", "Strategic Conferences & Summits": "Conférences et sommets stratégiques", "AI & Smart Experiences": "IA et expériences intelligentes", "Marketing Management": "Gestion marketing", "Entertainment & Cultural Seasons": "Divertissement et saisons culturelles", "Crowd Management": "Gestion des foules", "VIP & Official Delegations": "VIP et délégations officielles", "Show Production": "Production de spectacles",
  "Our work": "Nos réalisations", "Projects delivered across the Kingdom": "Des projets réalisés dans tout le Royaume", "Success Partners": "Partenaires de réussite", "Trusted by leading organizations": "La confiance des organisations de premier plan", "Become a partner": "Devenir partenaire",
  "About us": "À propos", "We create exceptional impact": "Nous créons un impact exceptionnel", Vision: "Vision", Mission: "Mission", "Our foundations": "Nos fondements", "Litigon in numbers": "Litigon en chiffres", "Scale, measured in delivery": "Une envergure mesurée par nos réalisations", "Scope of services": "Étendue des services", "Explore our services": "Découvrir nos services",
  "Integrated Ecosystem": "Écosystème intégré", "Innovation in Experience": "Innovation dans l’expérience", "Operational Excellence": "Excellence opérationnelle", "Strategic Reliability": "Fiabilité stratégique",
  "Events & conferences management": "Gestion d’événements et de conférences", "Serving clients across Saudi Arabia.": "Au service de clients dans toute l’Arabie saoudite.", "Let’s plan your next event": "Planifions votre prochain événement",
  "Contact us": "Contactez-nous", "Tell us about your event": "Parlez-nous de votre événement", "First Name": "Prénom", "Last Name": "Nom", Email: "E-mail", Phone: "Téléphone", Subject: "Objet", Message: "Message", "Type Message": "Écrivez votre message", "Send a Message": "Envoyer le message",
  FAQs: "FAQ", "Frequently asked questions": "Questions fréquentes", "Everything you need to know before we start planning together.": "Tout ce qu’il faut savoir avant de commencer à planifier ensemble.", "Talk to our team": "Parler à notre équipe",
  "What does Litigon do?": "Que fait Litigon ?", "How early should we contact you?": "Combien de temps à l’avance faut-il nous contacter ?", "Do you manage the whole event or only parts of it?": "Gérez-vous tout l’événement ou seulement certaines parties ?", "Can you handle VIPs and official delegations?": "Pouvez-vous accueillir les VIP et délégations officielles ?", "Do you produce drone shows and fireworks?": "Produisez-vous des spectacles de drones et des feux d’artifice ?", "Where do you work?": "Où intervenez-vous ?", "How is pricing decided?": "Comment les tarifs sont-ils établis ?", "Can you support Saudi Vision 2030 programmes?": "Pouvez-vous accompagner les programmes Vision 2030 ?",
  "Company updates": "Actualités de l’entreprise", "Press releases & project stories": "Communiqués et histoires de projets", "News from behind Saudi Arabia's biggest events": "Dans les coulisses des plus grands événements saoudiens", By: "Par", "Back to Blog": "Retour aux actualités", "More from Litigon": "Plus d’actualités Litigon",
  "Exhibitions & stands": "Expositions et stands", "Cultural seasons": "Saisons culturelles", "Show production": "Production de spectacles", "Select language": "Choisir la langue", English: "English", Arabic: "العربية", French: "Français", Chinese: "中文", Close: "Fermer"
};

const zh: Dictionary = {
  Home: "首页", Services: "服务", Projects: "项目", Partners: "合作伙伴", About: "关于我们", Blog: "新闻", Contact: "联系我们",
  "Plan your event": "策划您的活动", "Talk to Litigon": "联系 Litigon", Pages: "页面", "Head Office:": "总部：", "Riyadh, Kingdom of Saudi Arabia": "沙特阿拉伯王国利雅得", "All rights reserved.": "版权所有。", "Privacy Policy": "隐私政策", "Terms & Conditions": "条款与条件", Admin: "管理",
  "Events & Conferences Management": "活动与会议管理", "We Create Exceptional Impact": "我们创造非凡影响力", "See our work": "查看案例", "An integrated ecosystem": "一体化生态系统",
  "Strategy, creativity, production and logistics under one roof — so nothing falls between suppliers.": "战略、创意、制作与物流汇聚于一个团队，让每个环节无缝衔接。",
  "Featured projects": "精选项目", "All projects": "全部项目", "How we work": "我们的工作方式", Strategy: "战略", Creative: "创意", Production: "制作", Operations: "运营",
  "Company updates & press releases": "公司动态与新闻稿", Newsroom: "新闻中心", "All updates": "全部动态", "Ready to plan your next event?": "准备好策划下一场活动了吗？", "Tell us the date, the audience and the ambition — we will handle the rest.": "告诉我们日期、受众和目标，其余交给我们。",
  "Our services": "我们的服务", "Everything an event needs, in one team": "一支团队，满足活动的一切需求", "Our capabilities": "我们的能力", "Moments we engineer": "我们精心打造的难忘时刻",
  "Drone shows": "无人机表演", "Fireworks & pyrotechnics": "烟花与特效", "AI technologies": "人工智能技术", "Conferences & summits": "会议与峰会", "VIP reception": "贵宾接待", "Private aviation": "私人航空",
  "Events & Conference Management": "活动与会议管理", "Strategic Conferences & Summits": "战略会议与峰会", "AI & Smart Experiences": "人工智能与智慧体验", "Marketing Management": "营销管理", "Entertainment & Cultural Seasons": "娱乐与文化季", "Crowd Management": "人群管理", "VIP & Official Delegations": "贵宾与官方代表团", "Show Production": "演出制作",
  "Our work": "我们的作品", "Projects delivered across the Kingdom": "遍布沙特王国的项目", "Success Partners": "成功合作伙伴", "Trusted by leading organizations": "深受领先机构信赖", "Become a partner": "成为合作伙伴",
  "About us": "关于我们", "We create exceptional impact": "我们创造非凡影响力", Vision: "愿景", Mission: "使命", "Our foundations": "我们的基石", "Litigon in numbers": "数字看 Litigon", "Scale, measured in delivery": "以成果衡量规模", "Scope of services": "服务范围", "Explore our services": "探索我们的服务",
  "Integrated Ecosystem": "一体化生态系统", "Innovation in Experience": "体验创新", "Operational Excellence": "卓越运营", "Strategic Reliability": "战略可靠性",
  "Events & conferences management": "活动与会议管理", "Serving clients across Saudi Arabia.": "服务遍及沙特阿拉伯。", "Let’s plan your next event": "让我们策划您的下一场活动",
  "Contact us": "联系我们", "Tell us about your event": "介绍一下您的活动", "First Name": "名字", "Last Name": "姓氏", Email: "电子邮箱", Phone: "电话", Subject: "主题", Message: "留言", "Type Message": "输入留言", "Send a Message": "发送留言",
  FAQs: "常见问题", "Frequently asked questions": "常见问题", "Everything you need to know before we start planning together.": "开始共同策划前，您需要了解的一切。", "Talk to our team": "联系我们的团队",
  "What does Litigon do?": "Litigon 提供哪些服务？", "How early should we contact you?": "应该提前多久联系我们？", "Do you manage the whole event or only parts of it?": "你们管理整场活动还是其中一部分？", "Can you handle VIPs and official delegations?": "你们能接待贵宾和官方代表团吗？", "Do you produce drone shows and fireworks?": "你们制作无人机和烟花表演吗？", "Where do you work?": "你们在哪里开展业务？", "How is pricing decided?": "价格如何确定？", "Can you support Saudi Vision 2030 programmes?": "你们能支持沙特 2030 愿景项目吗？",
  "Company updates": "公司动态", "Press releases & project stories": "新闻稿与项目故事", "News from behind Saudi Arabia's biggest events": "走进沙特大型活动幕后", By: "作者", "Back to Blog": "返回新闻", "More from Litigon": "更多 Litigon 动态",
  "Exhibitions & stands": "展览与展台", "Cultural seasons": "文化季", "Show production": "演出制作", "Select language": "选择语言", English: "English", Arabic: "العربية", French: "Français", Chinese: "中文", Close: "关闭"
};

const dictionaries: Record<Locale, Dictionary> = { en: {}, ar, fr, zh };
const STORAGE_KEY = "litigon-language";

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (source: string) => string;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);
const textSources = new WeakMap<Text, string>();
const attributeSources = new WeakMap<Element, Record<string, string>>();

const translateTextNode = (node: Text, dictionary: Dictionary) => {
  const source = textSources.get(node) ?? node.nodeValue ?? "";
  if (!textSources.has(node)) textSources.set(node, source);
  const trimmed = source.trim();
  const translated = dictionary[trimmed];
  const next = translated ? source.replace(trimmed, translated) : source;
  if (node.nodeValue !== next) node.nodeValue = next;
};

const translateTree = (root: ParentNode, dictionary: Dictionary) => {
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  let current = walker.nextNode();
  while (current) {
    const parent = current.parentElement;
    if (parent && !["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
      translateTextNode(current as Text, dictionary);
    }
    current = walker.nextNode();
  }
  root.querySelectorAll?.("[placeholder], [aria-label], [title], img[alt]").forEach((element) => {
    const stored = attributeSources.get(element) ?? {};
    ["placeholder", "aria-label", "title", "alt"].forEach((attribute) => {
      const value = element.getAttribute(attribute);
      if (value !== null && stored[attribute] === undefined) stored[attribute] = value;
      const source = stored[attribute];
      if (source !== undefined) element.setAttribute(attribute, dictionary[source] ?? source);
    });
    attributeSources.set(element, stored);
  });
};

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    return stored === "ar" || stored === "fr" || stored === "zh" ? stored : "en";
  });
  const setLocale = useCallback((next: Locale) => {
    localStorage.setItem(STORAGE_KEY, next);
    setLocaleState(next);
  }, []);
  const t = useCallback((source: string) => dictionaries[locale][source] ?? source, [locale]);

  useEffect(() => {
    const html = document.documentElement;
    html.lang = locale === "zh" ? "zh-Hans" : locale;
    html.dir = locale === "ar" ? "rtl" : "ltr";
    const dictionary = dictionaries[locale];
    translateTree(document.body, dictionary);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") translateTextNode(mutation.target as Text, dictionary);
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text, dictionary);
          else if (node.nodeType === Node.ELEMENT_NODE) translateTree(node as Element, dictionary);
        });
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => observer.disconnect();
  }, [locale]);

  const value = useMemo(() => ({ locale, setLocale, t }), [locale, setLocale, t]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};
