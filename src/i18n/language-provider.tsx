import React, { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";

export type Locale = "en" | "ar" | "fr" | "zh";

type Dictionary = Record<string, string>;

const ar: Dictionary = {
  Home: "الرئيسية", Services: "الخدمات", Projects: "المشاريع", Partners: "الشركاء", About: "من نحن", Blog: "الأخبار", Contact: "تواصل معنا",
  "Plan your event": "خطط لفعاليتك", "Talk to Litigon": "تحدث مع ليتغون", "Pages": "الصفحات", "Head Office:": "المكتب الرئيسي:",
  "Riyadh, Kingdom of Saudi Arabia": "الرياض، المملكة العربية السعودية", "All rights reserved.": "جميع الحقوق محفوظة.", "Privacy Policy": "سياسة الخصوصية", "Terms & Conditions": "الشروط والأحكام", Admin: "الإدارة",
  "Events & Conferences Management": "إدارة الفعاليات والمؤتمرات", "We Create Exceptional Impact": "نصنع تأثيراً استثنائياً",
  "See our work": "شاهد أعمالنا", "An integrated ecosystem": "منظومة متكاملة",
  "Strategy, creativity, production and logistics under one roof — so nothing falls between suppliers.": "الاستراتيجية والإبداع والإنتاج والخدمات اللوجستية تحت سقف واحد لضمان تكامل كل التفاصيل.",
  "Featured projects": "مشاريع مختارة", "All projects": "جميع المشاريع", "How we work": "كيف نعمل", Strategy: "الاستراتيجية", Creative: "الإبداع", Production: "الإنتاج", Operations: "العمليات",
  "Company updates & press releases": "أخبار الشركة والبيانات الصحفية", Newsroom: "غرفة الأخبار", "All updates": "جميع الأخبار",
  "Announcements, project stories and news from our events, shows and exhibitions across Saudi Arabia.": "إعلانات وقصص مشاريع وأخبار من فعالياتنا وعروضنا ومعارضنا في أنحاء المملكة العربية السعودية.",
  "Ready to plan your next event?": "هل أنت مستعد لتخطيط فعاليتك القادمة؟", "Tell us the date, the audience and the ambition — we will handle the rest.": "أخبرنا بالموعد والجمهور والطموح، وسنتولى نحن الباقي.",
  "Our services": "خدماتنا", "Everything an event needs, in one team": "كل ما تحتاجه الفعالية ضمن فريق واحد", "Our capabilities": "قدراتنا", "Moments we engineer": "لحظات نصنعها بإتقان",
  "Litigon covers strategy, creative direction, technical production, hospitality and operations — so your event has a single point of accountability.": "تجمع ليتغون الاستراتيجية والتوجيه الإبداعي والإنتاج التقني والضيافة والعمليات، لتكون فعاليتك تحت مسؤولية فريق واحد.",
  "Nine core services, delivered by our own teams and trusted specialists.": "تسع خدمات أساسية تقدمها فرقنا ومتخصصون موثوقون.",
  "Technology, spectacle and hospitality combined into experiences guests remember long after the last guest leaves.": "نجمع التقنية والإبهار والضيافة لنصنع تجارب تبقى في ذاكرة الضيوف طويلاً.",
  "Drone shows": "عروض الدرون", "Fireworks & pyrotechnics": "الألعاب النارية والمؤثرات", "AI technologies": "تقنيات الذكاء الاصطناعي", "Conferences & summits": "المؤتمرات والقمم", "VIP reception": "استقبال كبار الشخصيات", "Private aviation": "الطيران الخاص",
  "Events & Conference Management": "إدارة الفعاليات والمؤتمرات", "Strategic Conferences & Summits": "المؤتمرات والقمم الاستراتيجية", "AI & Smart Experiences": "الذكاء الاصطناعي والتجارب الذكية", "Marketing Management": "إدارة التسويق", "Entertainment & Cultural Seasons": "الترفيه والمواسم الثقافية", "Crowd Management": "إدارة الحشود", "VIP & Official Delegations": "كبار الشخصيات والوفود الرسمية", "Show Production": "إنتاج العروض",
  "Our work": "أعمالنا", "Projects delivered across the Kingdom": "مشاريع نُفذت في أنحاء المملكة", "Success Partners": "شركاء النجاح", "Trusted by leading organizations": "موثوقون لدى مؤسسات رائدة", "Become a partner": "كن شريكاً لنا",
  "A selection of conferences, exhibitions, sports weekends and public celebrations produced by the Litigon team.": "مجموعة مختارة من المؤتمرات والمعارض والفعاليات الرياضية والاحتفالات العامة التي أنتجها فريق ليتغون.",
  "We are proud to work alongside government entities, corporations and institutions that share our commitment to exceptional events and experiences.": "نفخر بالعمل مع الجهات الحكومية والشركات والمؤسسات التي تشاركنا الالتزام بتقديم فعاليات وتجارب استثنائية.",
  "Interested in collaborating with Litigon? We work with brands, venues, technology providers and public entities to deliver standout events across the Kingdom.": "هل ترغب في التعاون مع ليتغون؟ نعمل مع العلامات التجارية والمواقع ومزودي التقنية والجهات العامة لتقديم فعاليات مميزة في أنحاء المملكة.",
  "About us": "من نحن", "We create exceptional impact": "نصنع تأثيراً استثنائياً", Vision: "الرؤية", Mission: "الرسالة", "Our foundations": "مرتكزاتنا", "Litigon in numbers": "ليتغون بالأرقام", "Scale, measured in delivery": "حجمنا تقيسه إنجازاتنا", "Scope of services": "نطاق الخدمات", "Explore our services": "استكشف خدماتنا",
  "Integrated Ecosystem": "منظومة متكاملة", "Innovation in Experience": "الابتكار في التجربة", "Operational Excellence": "التميز التشغيلي", "Strategic Reliability": "الموثوقية الاستراتيجية",
  "Events & conferences management": "إدارة الفعاليات والمؤتمرات", "Serving clients across Saudi Arabia.": "نخدم عملاءنا في جميع أنحاء المملكة العربية السعودية.", "Let’s plan your next event": "لنخطط لفعاليتك القادمة",
  "Contact us": "تواصل معنا", "Tell us about your event": "حدثنا عن فعاليتك", "First Name": "الاسم الأول", "Last Name": "اسم العائلة", Email: "البريد الإلكتروني", Phone: "الهاتف", Subject: "الموضوع", Message: "الرسالة", "Type Message": "اكتب رسالتك", "Send a Message": "إرسال الرسالة",
  "Share the date, the audience and the ambition — our team will get back to you within one business day.": "شاركنا الموعد والجمهور والطموح، وسيتواصل معك فريقنا خلال يوم عمل واحد.", "Your Email": "بريدك الإلكتروني", "Message sent successfully!": "تم إرسال الرسالة بنجاح!", "We'll get back to you as soon as possible.": "سنتواصل معك في أقرب وقت ممكن.",
  FAQs: "الأسئلة الشائعة", "Frequently asked questions": "الأسئلة الأكثر شيوعاً", "Everything you need to know before we start planning together.": "كل ما تحتاج إلى معرفته قبل أن نبدأ التخطيط معاً.", "Talk to our team": "تحدث مع فريقنا",
  "What does Litigon do?": "ماذا تقدم ليتغون؟", "How early should we contact you?": "متى ينبغي التواصل معكم؟", "Do you manage the whole event or only parts of it?": "هل تديرون الفعالية كاملة أم أجزاء منها؟", "Can you handle VIPs and official delegations?": "هل تستقبلون كبار الشخصيات والوفود الرسمية؟", "Do you produce drone shows and fireworks?": "هل تنتجون عروض الدرون والألعاب النارية؟", "Where do you work?": "أين تعملون؟", "How is pricing decided?": "كيف يتم تحديد الأسعار؟", "Can you support Saudi Vision 2030 programmes?": "هل تدعمون برامج رؤية السعودية 2030؟",
  "Company updates": "أخبار الشركة", "Press releases & project stories": "بيانات صحفية وقصص مشاريع", "News from behind Saudi Arabia's biggest events": "أخبار من كواليس أكبر فعاليات السعودية", By: "بواسطة", "Back to Blog": "العودة إلى الأخبار", "More from Litigon": "المزيد من ليتغون",
  "Exhibitions & stands": "المعارض والأجنحة", "Cultural seasons": "المواسم الثقافية", "Show production": "إنتاج العروض",
  "Select language": "اختر اللغة", English: "English", Arabic: "العربية", French: "Français", Chinese: "中文", Close: "إغلاق"
};

const fr: Dictionary = {
  Home: "Accueil", Services: "Services", Projects: "Projets", Partners: "Partenaires", About: "À propos", Blog: "Actualités", Contact: "Contact",
  "Plan your event": "Planifier votre événement", "Talk to Litigon": "Parler à Litigon", Pages: "Pages", "Head Office:": "Siège social :", "Riyadh, Kingdom of Saudi Arabia": "Riyad, Royaume d’Arabie saoudite", "All rights reserved.": "Tous droits réservés.", "Privacy Policy": "Politique de confidentialité", "Terms & Conditions": "Conditions générales", Admin: "Administration",
  "Events & Conferences Management": "Gestion d’événements et de conférences", "We Create Exceptional Impact": "Nous créons un impact exceptionnel", "See our work": "Découvrir nos réalisations", "An integrated ecosystem": "Un écosystème intégré",
  "Strategy, creativity, production and logistics under one roof — so nothing falls between suppliers.": "Stratégie, création, production et logistique réunies pour une exécution parfaitement coordonnée.",
  "Featured projects": "Projets à la une", "All projects": "Tous les projets", "How we work": "Notre méthode", Strategy: "Stratégie", Creative: "Création", Production: "Production", Operations: "Opérations",
  "Company updates & press releases": "Actualités et communiqués de presse", Newsroom: "Actualités", "All updates": "Toutes les actualités", "Ready to plan your next event?": "Prêt à organiser votre prochain événement ?", "Tell us the date, the audience and the ambition — we will handle the rest.": "Indiquez-nous la date, le public et votre ambition — nous nous occupons du reste.",
  "Announcements, project stories and news from our events, shows and exhibitions across Saudi Arabia.": "Annonces, récits de projets et nouvelles de nos événements, spectacles et expositions en Arabie saoudite.",
  "Our services": "Nos services", "Everything an event needs, in one team": "Tout ce dont votre événement a besoin, avec une seule équipe", "Our capabilities": "Nos expertises", "Moments we engineer": "Des moments conçus avec précision",
  "Litigon covers strategy, creative direction, technical production, hospitality and operations — so your event has a single point of accountability.": "Litigon réunit stratégie, direction créative, production technique, accueil et opérations afin qu’une seule équipe soit responsable de votre événement.", "Nine core services, delivered by our own teams and trusted specialists.": "Neuf services essentiels, assurés par nos équipes et des spécialistes de confiance.", "Technology, spectacle and hospitality combined into experiences guests remember long after the last guest leaves.": "Technologie, spectacle et hospitalité réunis dans des expériences qui restent longtemps en mémoire.",
  "Drone shows": "Spectacles de drones", "Fireworks & pyrotechnics": "Feux d’artifice et pyrotechnie", "AI technologies": "Technologies d’IA", "Conferences & summits": "Conférences et sommets", "VIP reception": "Accueil VIP", "Private aviation": "Aviation privée",
  "Events & Conference Management": "Gestion d’événements et de conférences", "Strategic Conferences & Summits": "Conférences et sommets stratégiques", "AI & Smart Experiences": "IA et expériences intelligentes", "Marketing Management": "Gestion marketing", "Entertainment & Cultural Seasons": "Divertissement et saisons culturelles", "Crowd Management": "Gestion des foules", "VIP & Official Delegations": "VIP et délégations officielles", "Show Production": "Production de spectacles",
  "Our work": "Nos réalisations", "Projects delivered across the Kingdom": "Des projets réalisés dans tout le Royaume", "Success Partners": "Partenaires de réussite", "Trusted by leading organizations": "La confiance des organisations de premier plan", "Become a partner": "Devenir partenaire",
  "A selection of conferences, exhibitions, sports weekends and public celebrations produced by the Litigon team.": "Une sélection de conférences, expositions, événements sportifs et célébrations publiques produites par l’équipe Litigon.", "We are proud to work alongside government entities, corporations and institutions that share our commitment to exceptional events and experiences.": "Nous sommes fiers de collaborer avec des organismes publics, entreprises et institutions partageant notre exigence d’expériences exceptionnelles.", "Interested in collaborating with Litigon? We work with brands, venues, technology providers and public entities to deliver standout events across the Kingdom.": "Vous souhaitez collaborer avec Litigon ? Nous travaillons avec des marques, des sites, des fournisseurs technologiques et des organismes publics dans tout le Royaume.",
  "About us": "À propos", "We create exceptional impact": "Nous créons un impact exceptionnel", Vision: "Vision", Mission: "Mission", "Our foundations": "Nos fondements", "Litigon in numbers": "Litigon en chiffres", "Scale, measured in delivery": "Une envergure mesurée par nos réalisations", "Scope of services": "Étendue des services", "Explore our services": "Découvrir nos services",
  "Integrated Ecosystem": "Écosystème intégré", "Innovation in Experience": "Innovation dans l’expérience", "Operational Excellence": "Excellence opérationnelle", "Strategic Reliability": "Fiabilité stratégique",
  "Events & conferences management": "Gestion d’événements et de conférences", "Serving clients across Saudi Arabia.": "Au service de clients dans toute l’Arabie saoudite.", "Let’s plan your next event": "Planifions votre prochain événement",
  "Contact us": "Contactez-nous", "Tell us about your event": "Parlez-nous de votre événement", "First Name": "Prénom", "Last Name": "Nom", Email: "E-mail", Phone: "Téléphone", Subject: "Objet", Message: "Message", "Type Message": "Écrivez votre message", "Send a Message": "Envoyer le message",
  "Share the date, the audience and the ambition — our team will get back to you within one business day.": "Indiquez-nous la date, le public et votre ambition — notre équipe vous répondra sous un jour ouvré.", "Your Email": "Votre e-mail", "Message sent successfully!": "Message envoyé !", "We'll get back to you as soon as possible.": "Nous vous répondrons dans les meilleurs délais.",
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
  "Announcements, project stories and news from our events, shows and exhibitions across Saudi Arabia.": "了解我们在沙特各地的活动、演出和展览动态、项目故事及公告。",
  "Our services": "我们的服务", "Everything an event needs, in one team": "一支团队，满足活动的一切需求", "Our capabilities": "我们的能力", "Moments we engineer": "我们精心打造的难忘时刻",
  "Litigon covers strategy, creative direction, technical production, hospitality and operations — so your event has a single point of accountability.": "Litigon 涵盖战略、创意指导、技术制作、接待与运营，让一支团队对您的整场活动负责。", "Nine core services, delivered by our own teams and trusted specialists.": "九项核心服务，由自有团队和可信赖的专家提供。", "Technology, spectacle and hospitality combined into experiences guests remember long after the last guest leaves.": "融合科技、视听奇观与周到接待，打造令人久久难忘的体验。",
  "Drone shows": "无人机表演", "Fireworks & pyrotechnics": "烟花与特效", "AI technologies": "人工智能技术", "Conferences & summits": "会议与峰会", "VIP reception": "贵宾接待", "Private aviation": "私人航空",
  "Events & Conference Management": "活动与会议管理", "Strategic Conferences & Summits": "战略会议与峰会", "AI & Smart Experiences": "人工智能与智慧体验", "Marketing Management": "营销管理", "Entertainment & Cultural Seasons": "娱乐与文化季", "Crowd Management": "人群管理", "VIP & Official Delegations": "贵宾与官方代表团", "Show Production": "演出制作",
  "Our work": "我们的作品", "Projects delivered across the Kingdom": "遍布沙特王国的项目", "Success Partners": "成功合作伙伴", "Trusted by leading organizations": "深受领先机构信赖", "Become a partner": "成为合作伙伴",
  "A selection of conferences, exhibitions, sports weekends and public celebrations produced by the Litigon team.": "精选由 Litigon 团队打造的会议、展览、体育周末和公共庆典。", "We are proud to work alongside government entities, corporations and institutions that share our commitment to exceptional events and experiences.": "我们很荣幸与同样致力于卓越活动和体验的政府机构、企业及组织携手合作。", "Interested in collaborating with Litigon? We work with brands, venues, technology providers and public entities to deliver standout events across the Kingdom.": "有意与 Litigon 合作？我们携手品牌、场地、技术供应商和公共机构，在沙特各地呈现卓越活动。",
  "About us": "关于我们", "We create exceptional impact": "我们创造非凡影响力", Vision: "愿景", Mission: "使命", "Our foundations": "我们的基石", "Litigon in numbers": "数字看 Litigon", "Scale, measured in delivery": "以成果衡量规模", "Scope of services": "服务范围", "Explore our services": "探索我们的服务",
  "Integrated Ecosystem": "一体化生态系统", "Innovation in Experience": "体验创新", "Operational Excellence": "卓越运营", "Strategic Reliability": "战略可靠性",
  "Events & conferences management": "活动与会议管理", "Serving clients across Saudi Arabia.": "服务遍及沙特阿拉伯。", "Let’s plan your next event": "让我们策划您的下一场活动",
  "Contact us": "联系我们", "Tell us about your event": "介绍一下您的活动", "First Name": "名字", "Last Name": "姓氏", Email: "电子邮箱", Phone: "电话", Subject: "主题", Message: "留言", "Type Message": "输入留言", "Send a Message": "发送留言",
  "Share the date, the audience and the ambition — our team will get back to you within one business day.": "告诉我们日期、受众和目标，我们的团队将在一个工作日内回复。", "Your Email": "您的电子邮箱", "Message sent successfully!": "留言已成功发送！", "We'll get back to you as soon as possible.": "我们会尽快与您联系。",
  FAQs: "常见问题", "Frequently asked questions": "常见问题", "Everything you need to know before we start planning together.": "开始共同策划前，您需要了解的一切。", "Talk to our team": "联系我们的团队",
  "What does Litigon do?": "Litigon 提供哪些服务？", "How early should we contact you?": "应该提前多久联系我们？", "Do you manage the whole event or only parts of it?": "你们管理整场活动还是其中一部分？", "Can you handle VIPs and official delegations?": "你们能接待贵宾和官方代表团吗？", "Do you produce drone shows and fireworks?": "你们制作无人机和烟花表演吗？", "Where do you work?": "你们在哪里开展业务？", "How is pricing decided?": "价格如何确定？", "Can you support Saudi Vision 2030 programmes?": "你们能支持沙特 2030 愿景项目吗？",
  "Company updates": "公司动态", "Press releases & project stories": "新闻稿与项目故事", "News from behind Saudi Arabia's biggest events": "走进沙特大型活动幕后", By: "作者", "Back to Blog": "返回新闻", "More from Litigon": "更多 Litigon 动态",
  "Exhibitions & stands": "展览与展台", "Cultural seasons": "文化季", "Show production": "演出制作", "Select language": "选择语言", English: "English", Arabic: "العربية", French: "Français", Chinese: "中文", Close: "关闭"
};

Object.assign(ar, {
  "Litigon designs, produces and manages conferences, exhibitions and national celebrations across the Kingdom of Saudi Arabia — from the first idea to the final firework.": "تصمم ليتغون وتنتج وتدير المؤتمرات والمعارض والاحتفالات الوطنية في أنحاء المملكة، من الفكرة الأولى حتى اللحظة الختامية.",
  "End-to-end management of conferences, exhibitions and corporate events: strategy, creative direction, production and on-site logistics.": "إدارة شاملة للمؤتمرات والمعارض وفعاليات الشركات، من الاستراتيجية والتوجيه الإبداعي إلى الإنتاج والخدمات اللوجستية.",
  "Agenda design, speaker and delegation coordination, registration and hospitality for high-level summits.": "تصميم جداول الأعمال وتنسيق المتحدثين والوفود والتسجيل والضيافة للقمم رفيعة المستوى.",
  "Interactive installations, smart registration and data-driven experiences that make every guest feel recognised.": "تجهيزات تفاعلية وتسجيل ذكي وتجارب مدعومة بالبيانات تمنح كل ضيف تجربة شخصية.",
  "Campaign planning, content production and media coverage that build attendance before the doors open.": "تخطيط الحملات وإنتاج المحتوى والتغطية الإعلامية لبناء الحضور قبل انطلاق الفعالية.",
  "Programming and operating cultural seasons, festivals and national celebrations for wide public audiences.": "برمجة وتشغيل المواسم الثقافية والمهرجانات والاحتفالات الوطنية للجمهور الواسع.",
  "Flow planning, access control and safety operations for venues of every scale.": "تخطيط حركة الزوار والتحكم بالدخول وعمليات السلامة للمواقع بمختلف أحجامها.",
  "Protocol, reception and private hospitality for ministers, sponsors and official delegations.": "مراسم واستقبال وضيافة خاصة للوزراء والرعاة والوفود الرسمية.",
  "Private Aviation": "الطيران الخاص",
  "Private jet arrangements, airport handling and ground transfers for guests and delegations.": "ترتيبات الطائرات الخاصة وخدمات المطارات والنقل الأرضي للضيوف والوفود.",
  "Drone shows, fireworks, stage design, lighting and sound engineered for one unforgettable moment.": "عروض الدرون والألعاب النارية وتصميم المسارح والإضاءة والصوت للحظات لا تُنسى.",
  "Choreographed drone formations that turn the night sky into your message.": "تشكيلات درون متناغمة تحول سماء الليل إلى رسالتك.",
  "Licensed pyrotechnic displays synchronised to music and stage moments.": "عروض ألعاب نارية مرخصة ومتزامنة مع الموسيقى ولحظات المسرح.",
  "Smart registration, crowd analytics and interactive content driven by AI.": "تسجيل ذكي وتحليلات للحشود ومحتوى تفاعلي مدعوم بالذكاء الاصطناعي.",
  "Halls, stages, translation and hospitality built for high-level agendas.": "قاعات ومسارح وترجمة وضيافة مصممة للأجندات رفيعة المستوى.",
  "Protocol-trained hosts, lounges and transport for official delegations.": "مضيفون مدربون على البروتوكول وصالات ونقل للوفود الرسمية.",
  "Private jet charters, airport handling and seamless ground transfers.": "استئجار طائرات خاصة وخدمات مطارات ونقل أرضي سلس.",
  "One team from the first brief to the final report, supporting the ambitions of Saudi Vision 2030.": "فريق واحد من موجز العمل الأول حتى التقرير النهائي، دعماً لطموحات رؤية السعودية 2030.",
  "We start with your objective, audience and budget, then shape the event concept around it.": "نبدأ بهدفك وجمهورك وميزانيتك، ثم نبني مفهوم الفعالية حولها.",
  "Identity, stage design, content and show flow developed as one visual story.": "نطور الهوية وتصميم المسرح والمحتوى وتسلسل العرض كقصة بصرية واحدة.",
  "Build, staging, lighting, sound and technology delivered by our own crews.": "تنفذ فرقنا أعمال البناء والمسارح والإضاءة والصوت والتقنية.",
  "Logistics, hospitality, crowd flow and reporting on the day and after it.": "الخدمات اللوجستية والضيافة وحركة الحشود والتقارير أثناء الفعالية وبعدها.",
  "Events and conferences management in the Kingdom of Saudi Arabia. We create exceptional impact.": "إدارة الفعاليات والمؤتمرات في المملكة العربية السعودية. نصنع تأثيراً استثنائياً.",
  "Kingdom of Saudi Arabia": "المملكة العربية السعودية",
  "Litigon was founded to redefine the events and experiences industry through integrated solutions that combine strategic thinking, creative excellence, and flawless execution. We transform ambitious visions into world-class experiences that inspire audiences, elevate brands, and reinforce Saudi Arabia's position as a global destination for events, business tourism, and entertainment.": "تأسست ليتغون لإعادة تعريف صناعة الفعاليات والتجارب عبر حلول متكاملة تجمع التفكير الاستراتيجي والإبداع والتنفيذ المتقن. نحول الرؤى الطموحة إلى تجارب عالمية تلهم الجمهور وترتقي بالعلامات التجارية وتعزز مكانة المملكة كوجهة عالمية للفعاليات والترفيه.",
  "Shaping the future of the events industry in Saudi Arabia": "نرسم مستقبل صناعة الفعاليات في المملكة العربية السعودية",
  "Turning bold ideas into unforgettable experiences": "نحول الأفكار الجريئة إلى تجارب لا تُنسى",
  "Four principles behind every Litigon delivery": "أربعة مبادئ تقود كل إنجاز في ليتغون",
  "Success partners": "شركاء النجاح", "Successful events delivered": "فعالية ناجحة تم تنفيذها", "Operational & technical management hours": "ساعة إدارة تشغيلية وتقنية", "Artists & influencers managed": "فنان ومؤثر تمت إدارتهم",
  "Planning, development, execution and operations": "التخطيط والتطوير والتنفيذ والتشغيل"
});

Object.assign(fr, {
  "Litigon designs, produces and manages conferences, exhibitions and national celebrations across the Kingdom of Saudi Arabia — from the first idea to the final firework.": "Litigon conçoit, produit et gère des conférences, expositions et célébrations nationales dans toute l’Arabie saoudite, de la première idée au moment final.",
  "End-to-end management of conferences, exhibitions and corporate events: strategy, creative direction, production and on-site logistics.": "Gestion complète des conférences, expositions et événements d’entreprise : stratégie, direction créative, production et logistique sur site.",
  "Agenda design, speaker and delegation coordination, registration and hospitality for high-level summits.": "Conception des programmes, coordination des intervenants et délégations, inscriptions et accueil pour les sommets de haut niveau.",
  "Interactive installations, smart registration and data-driven experiences that make every guest feel recognised.": "Installations interactives, inscriptions intelligentes et expériences personnalisées grâce aux données.",
  "Campaign planning, content production and media coverage that build attendance before the doors open.": "Planification de campagnes, production de contenu et couverture médiatique pour mobiliser le public en amont.",
  "Programming and operating cultural seasons, festivals and national celebrations for wide public audiences.": "Programmation et exploitation de saisons culturelles, festivals et célébrations nationales grand public.",
  "Flow planning, access control and safety operations for venues of every scale.": "Planification des flux, contrôle des accès et sécurité pour des sites de toute taille.",
  "Protocol, reception and private hospitality for ministers, sponsors and official delegations.": "Protocole, accueil et hospitalité privée pour ministres, sponsors et délégations officielles.",
  "Private Aviation": "Aviation privée", "Private jet arrangements, airport handling and ground transfers for guests and delegations.": "Organisation de jets privés, assistance aéroportuaire et transferts terrestres pour les invités et délégations.",
  "Drone shows, fireworks, stage design, lighting and sound engineered for one unforgettable moment.": "Spectacles de drones, feux d’artifice, scénographie, lumière et son conçus pour un moment inoubliable.",
  "Choreographed drone formations that turn the night sky into your message.": "Des chorégraphies de drones qui transforment le ciel nocturne en message.", "Licensed pyrotechnic displays synchronised to music and stage moments.": "Des spectacles pyrotechniques autorisés, synchronisés avec la musique et la scène.", "Smart registration, crowd analytics and interactive content driven by AI.": "Inscriptions intelligentes, analyse des foules et contenus interactifs propulsés par l’IA.", "Halls, stages, translation and hospitality built for high-level agendas.": "Salles, scènes, interprétation et accueil adaptés aux programmes de haut niveau.", "Protocol-trained hosts, lounges and transport for official delegations.": "Hôtes formés au protocole, salons et transport pour les délégations officielles.", "Private jet charters, airport handling and seamless ground transfers.": "Affrètement de jets privés, assistance aéroportuaire et transferts fluides.",
  "One team from the first brief to the final report, supporting the ambitions of Saudi Vision 2030.": "Une seule équipe, du premier brief au rapport final, au service des ambitions de la Vision saoudienne 2030.", "We start with your objective, audience and budget, then shape the event concept around it.": "Nous partons de votre objectif, de votre public et de votre budget pour façonner le concept.", "Identity, stage design, content and show flow developed as one visual story.": "Identité, scénographie, contenu et déroulé sont conçus comme une seule histoire visuelle.", "Build, staging, lighting, sound and technology delivered by our own crews.": "Construction, scène, lumière, son et technologie sont réalisés par nos propres équipes.", "Logistics, hospitality, crowd flow and reporting on the day and after it.": "Logistique, accueil, gestion des flux et rapports pendant et après l’événement.",
  "Events and conferences management in the Kingdom of Saudi Arabia. We create exceptional impact.": "Gestion d’événements et de conférences en Arabie saoudite. Nous créons un impact exceptionnel.", "Kingdom of Saudi Arabia": "Royaume d’Arabie saoudite",
  "Shaping the future of the events industry in Saudi Arabia": "Façonner l’avenir de l’événementiel en Arabie saoudite", "Turning bold ideas into unforgettable experiences": "Transformer les idées audacieuses en expériences inoubliables", "Four principles behind every Litigon delivery": "Quatre principes au cœur de chaque réalisation Litigon", "Success partners": "Partenaires de réussite", "Successful events delivered": "Événements réalisés avec succès", "Operational & technical management hours": "Heures de gestion opérationnelle et technique", "Artists & influencers managed": "Artistes et influenceurs accompagnés", "Planning, development, execution and operations": "Planification, développement, exécution et opérations"
});

Object.assign(zh, {
  "Litigon designs, produces and manages conferences, exhibitions and national celebrations across the Kingdom of Saudi Arabia — from the first idea to the final firework.": "Litigon 在沙特各地设计、制作和管理会议、展览及国家庆典，从最初构想到精彩收官。",
  "End-to-end management of conferences, exhibitions and corporate events: strategy, creative direction, production and on-site logistics.": "为会议、展览和企业活动提供端到端管理，包括战略、创意指导、制作和现场物流。",
  "Agenda design, speaker and delegation coordination, registration and hospitality for high-level summits.": "为高级别峰会提供议程设计、嘉宾与代表团协调、注册和接待服务。",
  "Interactive installations, smart registration and data-driven experiences that make every guest feel recognised.": "通过互动装置、智能注册和数据驱动体验，让每位来宾都感到备受重视。",
  "Campaign planning, content production and media coverage that build attendance before the doors open.": "通过营销策划、内容制作和媒体报道，在活动开始前吸引受众。",
  "Programming and operating cultural seasons, festivals and national celebrations for wide public audiences.": "为广大公众策划并运营文化季、节庆和国家庆典。",
  "Flow planning, access control and safety operations for venues of every scale.": "为各种规模场地提供人流规划、出入控制和安全运营。",
  "Protocol, reception and private hospitality for ministers, sponsors and official delegations.": "为部长、赞助商和官方代表团提供礼宾、接待及专属服务。",
  "Private Aviation": "私人航空", "Private jet arrangements, airport handling and ground transfers for guests and delegations.": "为来宾和代表团安排私人飞机、机场服务和地面接送。",
  "Drone shows, fireworks, stage design, lighting and sound engineered for one unforgettable moment.": "无人机表演、烟花、舞台设计、灯光和音响，共同打造难忘时刻。",
  "Choreographed drone formations that turn the night sky into your message.": "以编排精准的无人机阵列表演，让夜空传递您的讯息。", "Licensed pyrotechnic displays synchronised to music and stage moments.": "经许可的烟花特效，与音乐和舞台时刻精准同步。", "Smart registration, crowd analytics and interactive content driven by AI.": "由人工智能驱动的智能注册、人群分析和互动内容。", "Halls, stages, translation and hospitality built for high-level agendas.": "为高级别议程提供会场、舞台、翻译和接待服务。", "Protocol-trained hosts, lounges and transport for official delegations.": "为官方代表团提供专业礼宾人员、贵宾室和交通服务。", "Private jet charters, airport handling and seamless ground transfers.": "私人飞机包机、机场服务和无缝地面接送。",
  "One team from the first brief to the final report, supporting the ambitions of Saudi Vision 2030.": "从初次需求到最终报告，由一支团队全程负责，助力沙特 2030 愿景。", "We start with your objective, audience and budget, then shape the event concept around it.": "我们从您的目标、受众和预算出发，构建活动概念。", "Identity, stage design, content and show flow developed as one visual story.": "将品牌形象、舞台设计、内容和演出流程融为一个视觉故事。", "Build, staging, lighting, sound and technology delivered by our own crews.": "由自有团队完成搭建、舞台、灯光、音响和技术实施。", "Logistics, hospitality, crowd flow and reporting on the day and after it.": "负责活动当日及之后的物流、接待、人流和报告。",
  "Events and conferences management in the Kingdom of Saudi Arabia. We create exceptional impact.": "沙特阿拉伯王国的活动与会议管理专家。我们创造非凡影响力。", "Kingdom of Saudi Arabia": "沙特阿拉伯王国",
  "Shaping the future of the events industry in Saudi Arabia": "塑造沙特活动行业的未来", "Turning bold ideas into unforgettable experiences": "将大胆创意转化为难忘体验", "Four principles behind every Litigon delivery": "成就每个 Litigon 项目的四项原则", "Success partners": "成功合作伙伴", "Successful events delivered": "成功交付的活动", "Operational & technical management hours": "运营与技术管理小时", "Artists & influencers managed": "合作艺人与影响者", "Planning, development, execution and operations": "规划、开发、执行与运营"
});

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
    if (parent && !parent.closest("[data-i18n-ignore]") && !["SCRIPT", "STYLE", "NOSCRIPT"].includes(parent.tagName)) {
      translateTextNode(current as Text, dictionary);
    }
    current = walker.nextNode();
  }
  root.querySelectorAll?.("[placeholder], [aria-label], [title], [content], img[alt]").forEach((element) => {
    if (element.closest("[data-i18n-ignore]")) return;
    const stored = attributeSources.get(element) ?? {};
    ["placeholder", "aria-label", "title", "alt", "content"].forEach((attribute) => {
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
    translateTree(document, dictionary);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") translateTextNode(mutation.target as Text, dictionary);
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.TEXT_NODE) translateTextNode(node as Text, dictionary);
          else if (node.nodeType === Node.ELEMENT_NODE) translateTree(node as Element, dictionary);
        });
      });
    });
    observer.observe(document.documentElement, { childList: true, subtree: true, characterData: true });
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
