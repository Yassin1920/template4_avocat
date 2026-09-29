import type { Lang } from "./translations";

export interface Extra {
  brand: { name: string; specialty: string };
  why: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { title: string; desc: string }[];
  };
  process: {
    eyebrow: string;
    title: string;
    subtitle: string;
    stepLabel: string;
    steps: { title: string; desc: string }[];
  };
  credentials: { title: string; items: string[] };
  faqMore: { title: string; text: string; cta: string };
  bookingPage: {
    back: string;
    eyebrow: string;
    title: string;
    subtitle: string;
    formTitle: string;
    sideTitle: string;
    sideSteps: { title: string; desc: string }[];
    directTitle: string;
    directText: string;
    successTitle: string;
    successText: string;
    successBtn: string;
    newRequest: string;
    backHome: string;
    menu: string;
  };
}

export const extra: Record<Lang, Extra> = {
  fr: {
    brand: { name: "Maître Ahmed Chetti", specialty: "Avocat · Alger" },
    why: {
      eyebrow: "Nos engagements",
      title: "Pourquoi nous confier votre dossier",
      subtitle: "Quatre engagements concrets qui guident chacune de nos interventions.",
      items: [
        {
          title: "Confidentialité absolue",
          desc: "Le secret professionnel est au cœur de notre pratique. Vos échanges et vos documents restent strictement protégés.",
        },
        {
          title: "Réactivité garantie",
          desc: "Une réponse sous 24h et un suivi régulier : vous savez toujours où en est votre dossier.",
        },
        {
          title: "Transparence totale",
          desc: "Honoraires annoncés dès le départ, étapes expliquées simplement, sans jargon ni mauvaise surprise.",
        },
        {
          title: "Expertise reconnue",
          desc: "Plus de quinze ans de pratique devant les juridictions et une connaissance fine du droit algérien.",
        },
      ],
    },
    process: {
      eyebrow: "Notre méthode",
      title: "Comment nous travaillons",
      subtitle:
        "Un parcours simple et transparent, de la première prise de contact jusqu'à la résolution de votre dossier.",
      stepLabel: "Étape",
      steps: [
        {
          title: "Prise de contact",
          desc: "Vous remplissez le formulaire de rendez-vous et nous vous répondons sur WhatsApp sous 24h.",
        },
        {
          title: "Analyse du dossier",
          desc: "Nous étudions vos documents et évaluons vos droits, les risques et les options possibles.",
        },
        {
          title: "Stratégie sur mesure",
          desc: "Nous définissons ensemble la meilleure approche : négociation amiable ou action en justice.",
        },
        {
          title: "Défense & suivi",
          desc: "Nous vous représentons avec rigueur et vous informons à chaque étape jusqu'à l'issue.",
        },
      ],
    },
    credentials: {
      title: "Parcours & valeurs",
      items: [
        "Avocat inscrit au Barreau d'Alger",
        "Affaires, famille, pénal, civil et immobilier",
        "Assistance en français, arabe et anglais",
        "Première consultation confidentielle",
      ],
    },
    faqMore: {
      title: "Une autre question ?",
      text: "Notre cabinet vous répond personnellement, sans engagement.",
      cta: "Prendre rendez-vous",
    },
    bookingPage: {
      back: "Retour à l'accueil",
      eyebrow: "Rendez-vous",
      title: "Prenez rendez-vous avec Maître Chetti",
      subtitle:
        "Remplissez le formulaire : votre demande est transmise directement sur WhatsApp avec toutes vos informations.",
      formTitle: "Votre demande",
      sideTitle: "Comment ça se passe ?",
      sideSteps: [
        { title: "Remplissez le formulaire", desc: "Quelques informations suffisent." },
        { title: "Envoi sur WhatsApp", desc: "Un message pré-rempli s'ouvre automatiquement." },
        { title: "Confirmation du rendez-vous", desc: "Nous vous répondons sous 24h pour fixer le créneau." },
      ],
      directTitle: "Une urgence ?",
      directText: "Appelez le cabinet directement pendant les horaires d'ouverture.",
      successTitle: "Votre demande est prête !",
      successText:
        "WhatsApp s'est ouvert avec votre message pré-rempli. Si rien ne s'est passé, utilisez le bouton ci-dessous.",
      successBtn: "Ouvrir WhatsApp",
      newRequest: "Nouvelle demande",
      backHome: "Retour à l'accueil",
      menu: "Menu",
    },
  },

  en: {
    brand: { name: "Maître Ahmed Chetti", specialty: "Lawyer · Algiers" },
    why: {
      eyebrow: "Our commitments",
      title: "Why entrust us with your case",
      subtitle: "Four concrete commitments that guide every one of our interventions.",
      items: [
        {
          title: "Absolute confidentiality",
          desc: "Professional secrecy is at the heart of our practice. Your exchanges and documents remain strictly protected.",
        },
        {
          title: "Guaranteed responsiveness",
          desc: "A reply within 24h and regular updates: you always know where your case stands.",
        },
        {
          title: "Total transparency",
          desc: "Fees announced upfront, steps explained simply, with no jargon and no unpleasant surprises.",
        },
        {
          title: "Recognized expertise",
          desc: "Over fifteen years of courtroom practice and a fine knowledge of Algerian law.",
        },
      ],
    },
    process: {
      eyebrow: "Our method",
      title: "How we work",
      subtitle:
        "A simple and transparent journey, from the first contact to the resolution of your case.",
      stepLabel: "Step",
      steps: [
        {
          title: "First contact",
          desc: "You fill in the appointment form and we reply on WhatsApp within 24h.",
        },
        {
          title: "Case analysis",
          desc: "We review your documents and assess your rights, risks and possible options.",
        },
        {
          title: "Tailored strategy",
          desc: "Together we define the best approach: amicable negotiation or legal action.",
        },
        {
          title: "Defense & follow-up",
          desc: "We represent you rigorously and keep you informed at every step until the outcome.",
        },
      ],
    },
    credentials: {
      title: "Background & values",
      items: [
        "Lawyer registered at the Algiers Bar",
        "Business, family, criminal, civil and real estate law",
        "Assistance in French, Arabic and English",
        "Confidential first consultation",
      ],
    },
    faqMore: {
      title: "Another question?",
      text: "Our firm answers you personally, with no obligation.",
      cta: "Book a consultation",
    },
    bookingPage: {
      back: "Back to home",
      eyebrow: "Appointment",
      title: "Book an appointment with Maître Chetti",
      subtitle:
        "Fill in the form: your request is sent directly on WhatsApp with all your information.",
      formTitle: "Your request",
      sideTitle: "How does it work?",
      sideSteps: [
        { title: "Fill in the form", desc: "A few details are enough." },
        { title: "Sent on WhatsApp", desc: "A pre-filled message opens automatically." },
        { title: "Appointment confirmed", desc: "We reply within 24h to set the time slot." },
      ],
      directTitle: "An emergency?",
      directText: "Call the firm directly during opening hours.",
      successTitle: "Your request is ready!",
      successText:
        "WhatsApp opened with your pre-filled message. If nothing happened, use the button below.",
      successBtn: "Open WhatsApp",
      newRequest: "New request",
      backHome: "Back to home",
      menu: "Menu",
    },
  },

  ar: {
    brand: { name: "الأستاذ أحمد شتي", specialty: "محامٍ · الجزائر" },
    why: {
      eyebrow: "التزاماتنا",
      title: "لماذا تُسند إلينا ملفك",
      subtitle: "أربعة التزامات ملموسة توجّه كل تدخّل نقوم به.",
      items: [
        {
          title: "سرّية مطلقة",
          desc: "السرّ المهني في صلب ممارستنا. تبقى مراسلاتك ووثائقك محميّة تمامًا.",
        },
        {
          title: "استجابة مضمونة",
          desc: "رد خلال 24 ساعة ومتابعة منتظمة: تعرف دائمًا أين وصل ملفك.",
        },
        {
          title: "شفافية كاملة",
          desc: "أتعاب معلنة منذ البداية، ومراحل مشروحة ببساطة، دون تعقيد ودون مفاجآت.",
        },
        {
          title: "خبرة معترف بها",
          desc: "أكثر من خمسة عشر عامًا من الممارسة أمام المحاكم ومعرفة دقيقة بالقانون الجزائري.",
        },
      ],
    },
    process: {
      eyebrow: "منهجنا",
      title: "كيف نعمل",
      subtitle: "مسار بسيط وشفاف، من أول تواصل حتى حلّ ملفك.",
      stepLabel: "المرحلة",
      steps: [
        {
          title: "التواصل الأول",
          desc: "تملأ نموذج الموعد ونرد عليك عبر واتساب خلال 24 ساعة.",
        },
        {
          title: "دراسة الملف",
          desc: "ندرس وثائقك ونقيّم حقوقك والمخاطر والخيارات الممكنة.",
        },
        {
          title: "استراتيجية مخصّصة",
          desc: "نحدّد معًا أفضل مسار: تفاوض ودّي أو دعوى قضائية.",
        },
        {
          title: "الدفاع والمتابعة",
          desc: "نمثّلك بصرامة ونُطلعك على كل مرحلة حتى النتيجة.",
        },
      ],
    },
    credentials: {
      title: "المسار والقيم",
      items: [
        "محامٍ مسجّل لدى نقابة محامي الجزائر",
        "الأعمال، الأسرة، الجنائي، المدني والعقاري",
        "مرافقة بالعربية والفرنسية والإنجليزية",
        "الاستشارة الأولى سرّية",
      ],
    },
    faqMore: {
      title: "لديك سؤال آخر؟",
      text: "يجيبك مكتبنا شخصيًا ودون أي التزام.",
      cta: "احجز موعدًا",
    },
    bookingPage: {
      back: "العودة إلى الرئيسية",
      eyebrow: "موعد",
      title: "احجز موعدًا مع الأستاذ شتي",
      subtitle: "املأ النموذج: يُرسَل طلبك مباشرة عبر واتساب مع جميع بياناتك.",
      formTitle: "طلبك",
      sideTitle: "كيف يتم ذلك؟",
      sideSteps: [
        { title: "املأ النموذج", desc: "بضع معلومات تكفي." },
        { title: "الإرسال عبر واتساب", desc: "تُفتح رسالة مُعبّأة مسبقًا تلقائيًا." },
        { title: "تأكيد الموعد", desc: "نرد عليك خلال 24 ساعة لتحديد الموعد." },
      ],
      directTitle: "حالة استعجالية؟",
      directText: "اتصل بالمكتب مباشرة خلال ساعات العمل.",
      successTitle: "طلبك جاهز!",
      successText: "فُتح واتساب برسالتك المُعبّأة. إن لم يحدث شيء، استخدم الزر أدناه.",
      successBtn: "فتح واتساب",
      newRequest: "طلب جديد",
      backHome: "العودة إلى الرئيسية",
      menu: "القائمة",
    },
  },
};
