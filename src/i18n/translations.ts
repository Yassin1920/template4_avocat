export type Lang = "fr" | "en" | "ar";

export interface Review {
  name: string;
  text: string;
}

export interface Translations {
  dir: "ltr" | "rtl";
  langLabel: string;
  langShort: string;
  metaTitle: string;
  nav: { home: string; services: string; about: string; reviews: string; faq: string; contact: string };
  ctaBook: string;
  hero: {
    badge: string;
    title: string;
    titleAccent: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
    trustNote: string;
    stats: { value: string; label: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
    items: { title: string; desc: string }[];
  };
  lawyer: {
    eyebrow: string;
    title: string;
    role: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    cta: string;
  };
  booking: {
    eyebrow: string;
    title: string;
    text: string;
    cta: string;
    modalTitle: string;
    modalSubtitle: string;
    form: {
      name: string;
      namePh: string;
      phone: string;
      phonePh: string;
      service: string;
      servicePh: string;
      message: string;
      messagePh: string;
      confirm: string;
    };
    errors: { nameReq: string; phoneReq: string; phoneLen: string; serviceReq: string };
    wa: {
      greeting: string;
      name: string;
      phone: string;
      service: string;
      message: string;
      footer: string;
    };
    note: string;
  };
  reviews: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ratingValue: string;
    ratingCount: string;
    google: string;
    items: Review[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { q: string; a: string }[];
  };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    addressLabel: string;
    phoneLabel: string;
    emailLabel: string;
    hoursLabel: string;
    hours: string[];
    mapLabel: string;
    whatsappCta: string;
  };
  footer: {
    about: string;
    quickLinks: string;
    expertise: string;
    contactUs: string;
    rights: string;
    madeBy: string;
    legal: string;
  };
}

export const translations: Record<Lang, Translations> = {
  fr: {
    dir: "ltr",
    langLabel: "Français",
    langShort: "FR",
    metaTitle: "Cabinet Maître Ahmed Chetti — Avocat à Alger",
    nav: {
      home: "Accueil",
      services: "Expertises",
      about: "Le Cabinet",
      reviews: "Avis",
      faq: "FAQ",
      contact: "Contact",
    },
    ctaBook: "Prendre rendez-vous",
    hero: {
      badge: "Cabinet d'avocats · Alger",
      title: "Votre défense,",
      titleAccent: "notre métier.",
      subtitle:
        "Maître Ahmed Chetti vous accompagne dans vos démarches juridiques avec rigueur, confidentialité et une approche humaine. Conseil, négociation et représentation en justice.",
      ctaPrimary: "Prendre rendez-vous",
      ctaSecondary: "Découvrir nos expertises",
      trustNote: "Réponse sous 24h · Consultation confidentielle",
      stats: [
        { value: "15+", label: "ans d'expérience" },
        { value: "500+", label: "dossiers traités" },
        { value: "98%", label: "de clients satisfaits" },
        { value: "24h", label: "délai de réponse" },
      ],
    },
    services: {
      eyebrow: "Nos expertises",
      title: "Une expertise juridique complète",
      subtitle:
        "Une gamme de services couvrant l'essentiel du droit, pour les particuliers comme pour les entreprises.",
      cta: "Consulter un avocat",
      items: [
        {
          title: "Droit des affaires",
          desc: "Création d'entreprise, contrats commerciaux, fusion-acquisition, contentieux et conseil stratégique.",
        },
        {
          title: "Droit de la famille",
          desc: "Divorce, garde d'enfants, succession, pension alimentaire et médiation familiale.",
        },
        {
          title: "Droit pénal",
          desc: "Défense pénale, garde à vue, comparution et accompagnement devant les juridictions.",
        },
        {
          title: "Droit civil",
          desc: "Litiges contractuels, responsabilité, indemnisation et procédures civiles.",
        },
        {
          title: "Droit immobilier",
          desc: "Achat et vente, bail commercial, copropriété et litiges de construction.",
        },
        {
          title: "Droit du travail",
          desc: "Licenciement, contrats de travail, harcèlement et conseil employeur / salarié.",
        },
      ],
    },
    lawyer: {
      eyebrow: "Le Cabinet",
      title: "Maître Ahmed Chetti",
      role: "Avocat au Barreau d'Alger",
      paragraphs: [
        "Fort de plus de quinze années de pratique, Maître Ahmed Chetti a bâti une réputation fondée sur l'exigence, la loyauté et une connaissance approfondie du droit algérien.",
        "Il intervient tant en conseil qu'en contentieux, auprès des particuliers comme des entreprises, avec une conviction : la justice se gagne autant par la maîtrise technique que par l'écoute.",
        "Le cabinet place la relation de confiance au cœur de chaque dossier, pour des solutions claires, rapides et parfaitement adaptées.",
      ],
      stats: [
        { value: "15+", label: "années de pratique" },
        { value: "500+", label: "clients accompagnés" },
        { value: "30+", label: "missions internationales" },
      ],
      cta: "Prendre rendez-vous",
    },
    booking: {
      eyebrow: "Prise de rendez-vous",
      title: "Une question juridique ? Parlons-en.",
      text: "Prenez rendez-vous en quelques secondes. Remplissez le formulaire et nous vous recontactons immédiatement sur WhatsApp pour planifier votre consultation.",
      cta: "Réserver ma consultation",
      modalTitle: "Prendre rendez-vous",
      modalSubtitle: "Renseignez vos coordonnées, nous vous répondons sur WhatsApp.",
      form: {
        name: "Nom complet",
        namePh: "Ex : Ahmed Benali",
        phone: "Téléphone",
        phonePh: "8 chiffres (ex : 05551234)",
        service: "Domaine d'expertise",
        servicePh: "Choisissez un service",
        message: "Votre message (optionnel)",
        messagePh: "Décrivez brièvement votre besoin…",
        confirm: "Confirmer et envoyer sur WhatsApp",
      },
      errors: {
        nameReq: "Veuillez indiquer votre nom.",
        phoneReq: "Veuillez indiquer un numéro valide.",
        phoneLen: "Le numéro doit contenir 8 chiffres.",
        serviceReq: "Veuillez choisir un domaine.",
      },
      wa: {
        greeting: "Bonjour Maître Ahmed Chetti, je souhaite prendre rendez-vous.",
        name: "Nom",
        phone: "Téléphone",
        service: "Domaine",
        message: "Message",
        footer: "Merci de me recontacter pour planifier un rendez-vous.",
      },
      note: "Vous serez redirigé vers WhatsApp avec votre message pré-rempli.",
    },
    reviews: {
      eyebrow: "Témoignages",
      title: "Ce que disent nos clients",
      subtitle: "Plus de 120 avis vérifiés sur Google. La confiance, ça se mérite.",
      ratingValue: "4,9",
      ratingCount: "128 avis Google",
      google: "Avis Google",
      items: [
        { name: "Karim B.", text: "Maître Chetti a pris mon dossier très au sérieux. Excellente écoute et résultat au-delà de mes attentes." },
        { name: "Nadia L.", text: "Un avocat d'une grande intégrité. Explications claires, jamais de jargon inutile. Je recommande." },
        { name: "Yacine M.", text: "Réactivité exemplaire. J'ai eu une réponse le jour même et un accompagnement sans faille." },
        { name: "Samia R.", text: "Professionnalisme et humanité. Le cabinet m'a soutenue dans une période difficile. Merci." },
        { name: "Sofiane T.", text: "Très compétent en droit des affaires. Contrat sécurisé et négociation gagnante." },
        { name: "Leila K.", text: "Transparence totale sur les honoraires et les étapes. Rare et précieux." },
        { name: "Mehdi A.", text: "Présence rassurante au tribunal. On se sent vraiment défendu." },
        { name: "Fatima Z.", text: "Médiation familiale menée avec tact et fermeté. Issue équilibrée." },
        { name: "Rachid O.", text: "Suivi rigoriste de mon dossier immobilier. Je me suis senti en confiance." },
        { name: "Amina H.", text: "Conseil stratégique de haut niveau. Un vrai partenaire juridique." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Questions fréquentes",
      subtitle: "Les réponses aux questions les plus posées avant de nous confier votre dossier.",
      items: [
        {
          q: "Combien coûte une première consultation ?",
          a: "Le premier échange est gratuit et strictement confidentiel. Les honoraires sont ensuite fixés clairement, selon la nature de votre dossier, après évaluation.",
        },
        {
          q: "Proposez-vous une consultation à distance ?",
          a: "Oui. Nous recevons vos dossiers par téléphone, visioconférence ou WhatsApp, selon vos disponibilités.",
        },
        {
          q: "Dans quels délais puis-je être recontacté ?",
          a: "Nous nous engageons à répondre sous 24 heures ouvrées, le plus souvent le jour même.",
        },
        {
          q: "Intervenez-vous en dehors d'Alger ?",
          a: "Le cabinet peut vous représenter sur l'ensemble du territoire national et vous accompagner sur des dossiers à dimension internationale.",
        },
        {
          q: "Mes informations restent-elles confidentielles ?",
          a: "Absolument. Le secret professionnel est au cœur de notre déontologie : vos échanges restent strictement confidentiels.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Contactez le cabinet",
      subtitle: "Une question, un dossier à confier ? Nous sommes à votre écoute.",
      addressLabel: "Adresse",
      phoneLabel: "Téléphone",
      emailLabel: "Email",
      hoursLabel: "Horaires",
      hours: ["Lun – Ven : 9h00 – 18h00", "Samedi : 9h00 – 13h00", "Dimanche : Fermé"],
      mapLabel: "Voir sur la carte",
      whatsappCta: "Écrire sur WhatsApp",
    },
    footer: {
      about:
        "Cabinet d'avocats à Alger, dédié au conseil et au contentieux pour les particuliers comme pour les entreprises.",
      quickLinks: "Liens rapides",
      expertise: "Expertises",
      contactUs: "Contact",
      rights: "Tous droits réservés.",
      madeBy: "Conçu avec excellence.",
      legal: "Mentions légales · Politique de confidentialité",
    },
  },

  en: {
    dir: "ltr",
    langLabel: "English",
    langShort: "EN",
    metaTitle: "Cabinet Maître Ahmed Chetti — Lawyer in Algiers",
    nav: {
      home: "Home",
      services: "Expertise",
      about: "The Firm",
      reviews: "Reviews",
      faq: "FAQ",
      contact: "Contact",
    },
    ctaBook: "Book a consultation",
    hero: {
      badge: "Law Firm · Algiers",
      title: "Your defense is",
      titleAccent: "our profession.",
      subtitle:
        "Maître Ahmed Chetti guides you through your legal matters with rigor, confidentiality and a human approach. Counsel, negotiation and court representation.",
      ctaPrimary: "Book a consultation",
      ctaSecondary: "Explore our expertise",
      trustNote: "Reply within 24h · Confidential consultation",
      stats: [
        { value: "15+", label: "years of experience" },
        { value: "500+", label: "cases handled" },
        { value: "98%", label: "client satisfaction" },
        { value: "24h", label: "response time" },
      ],
    },
    services: {
      eyebrow: "Our expertise",
      title: "Complete legal expertise",
      subtitle:
        "A full range of services covering the essentials of the law, for individuals and businesses alike.",
      cta: "Consult a lawyer",
      items: [
        {
          title: "Business Law",
          desc: "Company formation, commercial contracts, M&A, litigation and strategic counsel.",
        },
        {
          title: "Family Law",
          desc: "Divorce, child custody, inheritance, alimony and family mediation.",
        },
        {
          title: "Criminal Defense",
          desc: "Criminal defense, police custody, hearings and court support.",
        },
        {
          title: "Civil Law",
          desc: "Contract disputes, liability, compensation and civil proceedings.",
        },
        {
          title: "Real Estate Law",
          desc: "Purchase and sale, commercial leases, co-ownership and construction disputes.",
        },
        {
          title: "Employment Law",
          desc: "Dismissal, employment contracts, harassment and employer / employee counsel.",
        },
      ],
    },
    lawyer: {
      eyebrow: "The Firm",
      title: "Maître Ahmed Chetti",
      role: "Lawyer at the Algiers Bar",
      paragraphs: [
        "With over fifteen years of practice, Maître Ahmed Chetti has built a reputation rooted in excellence, loyalty and a deep knowledge of Algerian law.",
        "He acts both in counsel and in litigation, for individuals and businesses alike, guided by a conviction: justice is won as much through technical mastery as through listening.",
        "The firm places the relationship of trust at the heart of every case, for clear, fast and perfectly tailored solutions.",
      ],
      stats: [
        { value: "15+", label: "years of practice" },
        { value: "500+", label: "clients accompanied" },
        { value: "30+", label: "international matters" },
      ],
      cta: "Book a consultation",
    },
    booking: {
      eyebrow: "Book an appointment",
      title: "Have a legal question? Let's talk.",
      text: "Book in seconds. Fill in the form and we will reach you immediately on WhatsApp to schedule your consultation.",
      cta: "Book my consultation",
      modalTitle: "Book a consultation",
      modalSubtitle: "Enter your details and we will reply on WhatsApp.",
      form: {
        name: "Full name",
        namePh: "e.g. Ahmed Benali",
        phone: "Phone",
        phonePh: "8 digits (e.g. 05551234)",
        service: "Area of expertise",
        servicePh: "Choose a service",
        message: "Your message (optional)",
        messagePh: "Briefly describe your need…",
        confirm: "Confirm & send on WhatsApp",
      },
      errors: {
        nameReq: "Please enter your name.",
        phoneReq: "Please enter a valid number.",
        phoneLen: "The number must contain 8 digits.",
        serviceReq: "Please choose an area.",
      },
      wa: {
        greeting: "Hello Maître Ahmed Chetti, I would like to book a consultation.",
        name: "Name",
        phone: "Phone",
        service: "Area",
        message: "Message",
        footer: "Please get back to me to schedule an appointment.",
      },
      note: "You will be redirected to WhatsApp with your pre-filled message.",
    },
    reviews: {
      eyebrow: "Testimonials",
      title: "What our clients say",
      subtitle: "Over 120 verified Google reviews. Trust is earned.",
      ratingValue: "4.9",
      ratingCount: "128 Google reviews",
      google: "Google review",
      items: [
        { name: "Karim B.", text: "Maître Chetti treated my case with great seriousness. Excellent listening and a result beyond my expectations." },
        { name: "Nadia L.", text: "A lawyer of great integrity. Clear explanations, never any jargon. Highly recommended." },
        { name: "Yacine M.", text: "Exemplary responsiveness. I got an answer the very same day and flawless support." },
        { name: "Samia R.", text: "Professionalism and humanity. The firm supported me through a difficult time. Thank you." },
        { name: "Sofiane T.", text: "Very skilled in business law. Secure contract and winning negotiation." },
        { name: "Leila K.", text: "Total transparency on fees and steps. Rare and valuable." },
        { name: "Mehdi A.", text: "Reassuring presence in court. You truly feel defended." },
        { name: "Fatima Z.", text: "Family mediation handled with tact and firmness. Balanced outcome." },
        { name: "Rachid O.", text: "Rigorous follow-up of my real estate case. I felt in safe hands." },
        { name: "Amina H.", text: "High-level strategic counsel. A true legal partner." },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Frequently asked questions",
      subtitle: "Answers to the most common questions before entrusting us with your case.",
      items: [
        {
          q: "How much does a first consultation cost?",
          a: "The first exchange is free and strictly confidential. Fees are then set clearly, based on the nature of your case, after assessment.",
        },
        {
          q: "Do you offer remote consultations?",
          a: "Yes. We receive your files by phone, video call or WhatsApp, according to your availability.",
        },
        {
          q: "How quickly can I be contacted?",
          a: "We commit to respond within 24 business hours, most often the very same day.",
        },
        {
          q: "Do you practice outside Algiers?",
          a: "The firm can represent you across the national territory and support you on matters with an international dimension.",
        },
        {
          q: "Is my information kept confidential?",
          a: "Absolutely. Professional secrecy is at the heart of our ethics: your exchanges remain strictly confidential.",
        },
      ],
    },
    contact: {
      eyebrow: "Contact",
      title: "Contact the firm",
      subtitle: "A question, a case to entrust? We are here for you.",
      addressLabel: "Address",
      phoneLabel: "Phone",
      emailLabel: "Email",
      hoursLabel: "Opening hours",
      hours: ["Mon – Fri: 9:00 – 18:00", "Saturday: 9:00 – 13:00", "Sunday: Closed"],
      mapLabel: "View on map",
      whatsappCta: "Message on WhatsApp",
    },
    footer: {
      about:
        "Law firm in Algiers, dedicated to counsel and litigation for individuals and businesses alike.",
      quickLinks: "Quick links",
      expertise: "Expertise",
      contactUs: "Contact",
      rights: "All rights reserved.",
      madeBy: "Crafted with excellence.",
      legal: "Legal notice · Privacy policy",
    },
  },

  ar: {
    dir: "rtl",
    langLabel: "العربية",
    langShort: "ع",
    metaTitle: "مكتب الأستاذ أحمد شتي — محامٍ في الجزائر",
    nav: {
      home: "الرئيسية",
      services: "خبراتنا",
      about: "المكتب",
      reviews: "الآراء",
      faq: "أسئلة شائعة",
      contact: "تواصل",
    },
    ctaBook: "احجز موعدًا",
    hero: {
      badge: "مكتب محاماة · الجزائر",
      title: "الدفاع عنك",
      titleAccent: "مهنتنا.",
      subtitle:
        "يصطحبك الأستاذ أحمد شتي في إجراءاتك القانونية بصرامة وروح سرية ونهج إنساني. استشارات وتفاوض وتمثيل أمام المحاكم.",
      ctaPrimary: "احجز موعدًا",
      ctaSecondary: "اكتشف خبراتنا",
      trustNote: "رد خلال 24 ساعة · استشارة سرية",
      stats: [
        { value: "15+", label: "سنوات من الخبرة" },
        { value: "500+", label: "ملف منجز" },
        { value: "98%", label: "رضا العملاء" },
        { value: "24 س", label: "مدة الرد" },
      ],
    },
    services: {
      eyebrow: "خبراتنا",
      title: "خبرة قانونية متكاملة",
      subtitle: "مجموعة خدمات تغطي جوهر القانون، للأفراد كما للشركات.",
      cta: "استشر محاميًا",
      items: [
        {
          title: "قانون الأعمال",
          desc: "تأسيس الشركات، العقود التجارية، الاندماج والاستحواذ، النزاعات التجارية والاستشارات الاستراتيجية.",
        },
        {
          title: "قانون الأسرة",
          desc: "الطلاق، حضانة الأطفال، الميراث، النفقة والوساطة الأسرية.",
        },
        {
          title: "القانون الجنائي",
          desc: "الدفاع الجنائي، الحراسة النظرية، الجلسات والمرافقة أمام المحاكم.",
        },
        {
          title: "القانون المدني",
          desc: "النزاعات التعاقدية، المسؤولية، التعويض والإجراءات المدنية.",
        },
        {
          title: "القانون العقاري",
          desc: "البيع والشراء، الإيجار التجاري، الملكية المشتركة ونزاعات البناء.",
        },
        {
          title: "قانون العمل",
          desc: "الفصل، عقود العمل، التحرش والاستشارات للمشغّل والموظف.",
        },
      ],
    },
    lawyer: {
      eyebrow: "المكتب",
      title: "الأستاذ أحمد شتي",
      role: "محامٍ لدى نقابة محامي الجزائر",
      paragraphs: [
        "بأكثر من خمسة عشر عامًا من الممارسة، بنى الأستاذ أحمد شتي سمعةً قائمة على الإتقان والولاء وإلمام عميق بالقانون الجزائري.",
        "يتدخّل في الاستشارة كما في المرافعة، لخدمة الأفراد والشركات على حدٍّ سواء، انطلاقًا من قناعة: إن العدالة تُكتسب بقدر ما بالإتقان التقني وبقدر ما بالإنصات.",
        "يضع المكتب ثقة العميل في صلب كل ملف، لتقديم حلول واضحة وسريعة ومُلائمة تمامًا لحالته.",
      ],
      stats: [
        { value: "15+", label: "سنة ممارسة" },
        { value: "500+", label: "عميل رافقناهم" },
        { value: "30+", label: "مهمة دولية" },
      ],
      cta: "احجز موعدًا",
    },
    booking: {
      eyebrow: "حجز موعد",
      title: "لديك استشارة قانونية؟ لنتحدث.",
      text: "احجز في ثوانٍ. املأ النموذج وسنتواصل معك فورًا عبر واتساب لجدولة استشارتك.",
      cta: "احجز استشارتي",
      modalTitle: "حجز موعد",
      modalSubtitle: "أدخل بياناتك وسنرد عليك عبر واتساب.",
      form: {
        name: "الاسم الكامل",
        namePh: "مثال: أحمد بن علي",
        phone: "رقم الهاتف",
        phonePh: "8 أرقام (مثال: 05551234)",
        service: "مجال الخبرة",
        servicePh: "اختر خدمة",
        message: "رسالتك (اختياري)",
        messagePh: "صف طلبك باختصار…",
        confirm: "تأكيد وإرسال عبر واتساب",
      },
      errors: {
        nameReq: "يرجى إدخال الاسم.",
        phoneReq: "يرجى إدخال رقم صحيح.",
        phoneLen: "يجب أن يحتوي الرقم على 8 أرقام.",
        serviceReq: "يرجى اختيار مجال.",
      },
      wa: {
        greeting: "مرحبًا الأستاذ أحمد شتي، أرغب في حجز موعد.",
        name: "الاسم",
        phone: "الهاتف",
        service: "المجال",
        message: "الرسالة",
        footer: "أرجو التواصل معي لجدولة موعد.",
      },
      note: "سيتم توجيهك إلى واتساب مع رسالتك المُعبّأة مسبقًا.",
    },
    reviews: {
      eyebrow: "شهادات",
      title: "ماذا يقول عملاؤنا",
      subtitle: "أكثر من 120 تقييمًا موثّقًا على جوجل. الثقة تُكتسب.",
      ratingValue: "4.9",
      ratingCount: "128 تقييمًا على جوجل",
      google: "تقييم جوجل",
      items: [
        { name: "كريم ب.", text: "تعامل الأستاذ شتي مع ملفي بجدية كبيرة. استماع ممتاز ونتيجة فاقت توقعاتي." },
        { name: "نادية ل.", text: "محامٍ ذو نزاهة عالية. توضيحات واضحة دون أي تعقيد. أنصح به بشدة." },
        { name: "ياسين م.", text: "استجابة مثالية. حصلت على رد في نفس اليوم ومتابعة بلا نقص." },
        { name: "سامية ر.", text: "احترافية وإنسانية. ساندني المكتب في فترة صعبة. شكرًا." },
        { name: "سفيان ت.", text: "كفاءة عالية في قانون الأعمال. عقد مؤمَّن وتفاوض رابح." },
        { name: "ليلى ك.", text: "شفافية تامة في الأتعاب والخطوات. نادر وثمين." },
        { name: "مهدي ع.", text: "حضور مطمئن في المحكمة. تشعر فعلًا بأنك مدافَع عنك." },
        { name: "فاطمة ز.", text: "وساطة أسرية بُدِّت بمهارة وحزم. نتيجة متوازنة." },
        { name: "رشيد و.", text: "متابعة دقيقة لملفي العقاري. شعرت باطمئنان تام." },
        { name: "أمينة ح.", text: "استشارة استراتيجية راقية. شريك قانوني حقيقي." },
      ],
    },
    faq: {
      eyebrow: "أسئلة شائعة",
      title: "الأسئلة الشائعة",
      subtitle: "إجابات على أكثر الأسئلة شيوعًا قبل إسناد ملفك إلينا.",
      items: [
        {
          q: "كم تكلفة الاستشارة الأولى؟",
          a: "أول لقاء مجاني وسرّي تمامًا. تُحدَّد الأتعاب بوضوح بعد ذلك حسب طبيعة ملفك وبعد التقييم.",
        },
        {
          q: "هل تقدّمون استشارة عن بُعد؟",
          a: "نعم. نتلقّى ملفاتكم عبر الهاتف أو الفيديو أو واتساب، حسب توفّركم.",
        },
        {
          q: "خلال أي مدة يمكنكم الرد؟",
          a: "نلتزم بالرد خلال 24 ساعة عمل، وكثيرًا في نفس اليوم.",
        },
        {
          q: "هل تتدخّلون خارج الجزائر؟",
          a: "يستطيع المكتب تمثيلكم عبر كامل التراب الوطني ومرافقتكم في الملفات ذات البُعد الدولي.",
        },
        {
          q: "هل تبقى معلوماتي سرّية؟",
          a: "بالتأكيد. السرّ المهني في صلب أخلاقياتنا: تبقى مراسلاتكم سرّية تمامًا.",
        },
      ],
    },
    contact: {
      eyebrow: "تواصل",
      title: "تواصل مع المكتب",
      subtitle: "سؤال أو ملف تريد إسناده؟ نحن في خدمتك.",
      addressLabel: "العنوان",
      phoneLabel: "الهاتف",
      emailLabel: "البريد الإلكتروني",
      hoursLabel: "ساعات العمل",
      hours: ["الإثنين – الجمعة: 9:00 – 18:00", "السبت: 9:00 – 13:00", "الأحد: مغلق"],
      mapLabel: "عرض على الخريطة",
      whatsappCta: "مراسلة عبر واتساب",
    },
    footer: {
      about: "مكتب محاماة في الجزائر، مكرّس للاستشارة والترافع للأفراد والشركات.",
      quickLinks: "روابط سريعة",
      expertise: "الخبرات",
      contactUs: "تواصل",
      rights: "جميع الحقوق محفوظة.",
      madeBy: "صُمم بإتقان.",
      legal: "إشعار قانوني · سياسة الخصوصية",
    },
  },
};
