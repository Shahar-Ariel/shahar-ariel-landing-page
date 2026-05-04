import type { CardItem, ChipItem, ProcessItem, ProjectItem } from '../types/landing';

export const expertiseItems: ChipItem[] = [
  { label: 'Software Architecture', icon: 'shield' },
  { label: 'Cloud Modernization', icon: 'cloud' },
  { label: 'Microservices', icon: 'monitor' },
  { label: 'AI Integration', icon: 'rocket' },
  { label: 'Zero Trust', icon: 'shield' },
  { label: 'Embedded Systems', icon: 'cpu' },
  { label: 'Android Kiosk', icon: 'smartphone' },
];

export const serviceItems: CardItem[] = [
  {
    title: 'Architecture & Modernization',
    description:
      'תכנון מחדש של מערכות Legacy, פירוק סיכונים, מעבר לארכיטקטורה מודרנית ויציבה לאורך זמן.',
    icon: 'building',
  },
  {
    title: 'Cloud & Microservices',
    description:
      'תכנון והובלה של מערכות מבוזרות על AWS, GCP ו-Azure עם דגש על ביצועים, סקייל ותחזוקתיות.',
    icon: 'cloud',
  },
  {
    title: 'Secure Systems',
    description:
      'תכנון פתרונות עם SSDLC, Zero Trust, בידוד רכיבים והקשחת מערכות כחלק מהארכיטקטורה.',
    icon: 'shield',
  },
  {
    title: 'Backend Engineering',
    description:
      'פיתוח APIs, שירותי Backend, אינטגרציות מורכבות ותשתית ליכולות עסקיות בסביבת production.',
    icon: 'monitor',
  },
  {
    title: 'Applied AI & Model Enablement',
    description:
      'שילוב יכולות AI במוצרים, עבודה עם מודלים כמו OpenAI ו-Gemini, ואימון מודלים לפי צורך עסקי והנדסי.',
    icon: 'rocket',
  },
  {
    title: 'Embedded & Low-Level',
    description:
      'פיתוח וניתוח רכיבי מערכת קרובים לחומרה, תקשורת, פרוטוקולים ופתרונות Embedded מורכבים.',
    icon: 'cpu',
  },
  {
    title: 'Technical Leadership',
    description:
      'הובלה טכנית של צוותים, קוד ריוויו, חניכה, יישור קו מקצועי וחיבור בין טכנולוגיה ליעדים עסקיים.',
    icon: 'rocket',
  },
];

export const audienceItems: CardItem[] = [
  {
    title: 'חברות עם מערכות Legacy',
    description:
      'ארגונים שצריכים לחדש מערכת קיימת בלי לייצר שבר תפעולי ובלי להמר על rewrite מלא.',
    icon: 'building',
  },
  {
    title: 'מוצרי SaaS ו-Platform',
    description:
      'צוותים שצריכים ארכיטקטורה ברורה, גבולות שירותים, שיפור ביצועים ויכולת לגדול נכון.',
    icon: 'monitor',
  },
  {
    title: 'מוצרים עם חומרה או IoT',
    description:
      'חברות שמחברות בין Embedded, תקשורת, Cloud ודשבורדים תפעוליים למוצר אחד עובד.',
    icon: 'factory',
  },
  {
    title: 'צוותים שבונים יכולות AI',
    description:
      'ארגונים שצריכים לחבר מודלי AI למוצר קיים, להפעיל תהליכי evaluation או להכניס יכולות חכמות בלי לאבד שליטה הנדסית.',
    icon: 'rocket',
  },
  {
    title: 'ארגונים עם דרישות אבטחה',
    description:
      'פרויקטים שבהם security, governance ו-SSDLC הם חלק מליבת הפתרון ולא שכבת תיקון בדיעבד.',
    icon: 'shield',
  },
];

export const projectItems: ProjectItem[] = [
  {
    title: 'Modernization Program',
    description:
      'מודרניזציה של מערכות Legacy לכיוון microservices, ענן ותחזוקה ארוכת טווח.',
    tags: ['AWS', 'GCP', 'Microservices'],
    visual: 'cloud',
  },
  {
    title: 'Zero Trust IoT Platform',
    description:
      'פלטפורמה מאובטחת לניהול רכיבים, תקשורת טלמטריה ושליטה במכשירים בסביבת production.',
    tags: ['Zero Trust', 'IoT', 'Security'],
    visual: 'dashboard',
  },
  {
    title: 'Embedded Control System',
    description:
      'פתרון המשלב low-level development, פרוטוקולים ותקשורת מול רכיבי חומרה ובקרה.',
    tags: ['Embedded', 'C/C++', 'Protocols'],
    visual: 'board',
  },
  {
    title: 'Android Kiosk & Device Control',
    description:
      'מערכת שליטה והפעלה למכשירי Android Kiosk עם ניהול תצורה ועדכונים מרחוק.',
    tags: ['Android', 'Kiosk', 'Device Mgmt'],
    visual: 'display',
  },
];

export const processItems: ProcessItem[] = [
  {
    step: '1',
    title: 'מיפוי והבנת מצב קיים',
    description:
      'לימוד הארכיטקטורה, צווארי הבקבוק, הסיכונים העסקיים והמצב התפעולי בפועל.',
  },
  {
    step: '2',
    title: 'גיבוש פתרון',
    description:
      'הגדרת target architecture, גבולות מערכת, סדרי עדיפויות ותוכנית ישימה לביצוע.',
  },
  {
    step: '3',
    title: 'מימוש והובלה טכנית',
    description:
      'פיתוח, בקרה על איכות, הובלת צוותים או hands-on execution לפי צורכי הפרויקט.',
  },
  {
    step: '4',
    title: 'הקשחה וייצוב',
    description:
      'ביצועים, אבטחה, observability, תהליכי פיתוח נכונים והפחתת סיכון לפני scale.',
  },
  {
    step: '5',
    title: 'מסירה והטמעה',
    description:
      'העברת ידע, נהלי עבודה, תיעוד הנדסי ושיפור יכולת התחזוקה של הצוות לאורך זמן.',
  },
];

export const navigationItems = [
  { href: '#services', label: 'שירותים' },
  { href: '#audience', label: 'למי זה מתאים' },
  { href: '#projects', label: 'פרויקטים' },
  { href: '#process', label: 'תהליך עבודה' },
  { href: '#contact', label: 'צור קשר' },
];
