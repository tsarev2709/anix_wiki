import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  title: 'Anix Wiki',
  description: 'Рабочая база знаний Anix: онбординг, продажи, продукты, производство и доказательная база',
  cleanUrls: true,
  lastUpdated: true,
  appearance: false,
  head: [
    ['meta', { name: 'theme-color', content: '#f7f4ef' }],
    ['meta', { name: 'robots', content: 'noindex,nofollow' }],
    ['link', { rel: 'icon', href: 'https://studio.anix-ai.pro/anix_wand.png' }]
  ],
  themeConfig: {
    logo: 'https://studio.anix-ai.pro/anix_wand.png',
    siteTitle: 'ANIX / WIKI',
    search: {
      provider: 'local',
      options: {
        translations: {
          button: { buttonText: 'Поиск', buttonAriaLabel: 'Открыть поиск' },
          modal: {
            noResultsText: 'Ничего не найдено',
            resetButtonTitle: 'Очистить поиск',
            footer: { selectText: 'выбрать', navigateText: 'перейти', closeText: 'закрыть' }
          }
        }
      }
    },
    nav: [
      { text: 'Старт', link: '/start-here' },
      { text: 'Продажи', link: '/sales/' },
      {
        text: 'Продукты',
        items: [
          { text: 'Линейка продуктов', link: '/products/' },
          { text: 'Фарма', link: '/products/pharma' },
          { text: 'HSE и охрана труда', link: '/products/hse' },
          { text: 'MedTech', link: '/products/medtech' },
          { text: 'Сложный B2B', link: '/products/b2b' },
          { text: 'Корпоративное обучение', link: '/products/learning' }
        ]
      },
      { text: 'Кейсы', link: '/cases/' },
      { text: 'Библиотека', link: '/library/' },
      { text: 'Anix Studio ↗', link: 'https://studio.anix-ai.pro/' }
    ],
    sidebar: [
      {
        text: 'Начало',
        collapsed: false,
        items: [
          { text: 'Главная', link: '/' },
          { text: 'Начать здесь', link: '/start-here' },
          { text: 'Онбординг: 10 дней', link: '/onboarding/' },
          { text: 'Что такое Anix', link: '/company/' }
        ]
      },
      {
        text: 'Продажи',
        collapsed: false,
        items: [
          { text: 'Sales Hub', link: '/sales/' },
          { text: 'Воронка Anix', link: '/sales/funnel' },
          { text: 'Квалификация', link: '/sales/qualification' },
          { text: 'Исследование клиента', link: '/sales/research' },
          { text: 'Первое касание', link: '/sales/first-touch' },
          { text: 'КЭВ / встреча', link: '/sales/kev' },
          { text: 'Discovery', link: '/sales/discovery' },
          { text: 'Возражения', link: '/sales/objections' },
          { text: 'Предложение и КП', link: '/sales/proposal' },
          { text: 'Follow-up', link: '/sales/follow-up' },
          { text: 'CRM', link: '/sales/crm' },
          { text: '«Гребень Продаж»', link: '/sales/greben' }
        ]
      },
      {
        text: 'Продукты',
        collapsed: false,
        items: [
          { text: 'Карта продуктов', link: '/products/' },
          { text: 'Фарма', link: '/products/pharma' },
          { text: 'HSE и охрана труда', link: '/products/hse' },
          { text: 'MedTech', link: '/products/medtech' },
          { text: 'Сложный B2B', link: '/products/b2b' },
          { text: 'Корпоративное обучение', link: '/products/learning' }
        ]
      },
      {
        text: 'Отраслевые playbook’и',
        collapsed: true,
        items: [
          { text: 'Продажи в фарме', link: '/playbooks/pharma' },
          { text: 'Продажи HSE', link: '/playbooks/hse' },
          { text: 'Продажи MedTech', link: '/playbooks/medtech' }
        ]
      },
      {
        text: 'Производство',
        collapsed: false,
        items: [
          { text: 'Производственный хаб', link: '/production/' },
          { text: 'Хороший бриф', link: '/production/brief' },
          { text: 'Стандарт качества', link: '/production/quality' },
          { text: 'Правки и согласования', link: '/production/feedback' },
          { text: 'Частые вопросы', link: '/production/faq' }
        ]
      },
      {
        text: 'Экспертность',
        collapsed: true,
        items: [
          { text: 'Карта экспертности', link: '/expertise/' },
          { text: 'Почему это работает', link: '/expertise/why-it-works' },
          { text: 'Научная база команды', link: '/expertise/science' },
          { text: 'Словарь', link: '/expertise/glossary' },
          { text: 'Технологический радар', link: '/expertise/toolstack' },
          { text: 'Статьи и источники', link: '/expertise/articles' },
          { text: 'Что такое нейроанимация', link: '/expertise/articles/neuroanimation' },
          { text: 'AI или классический production', link: '/expertise/articles/ai-vs-classic' },
          { text: 'Видео для HSE', link: '/expertise/articles/hse-video' },
          { text: 'Фарма и MedTech-анимация', link: '/expertise/articles/pharma-animation' },
          { text: 'Метрики контента', link: '/expertise/articles/content-metrics' },
          { text: 'Истории и память', link: '/expertise/articles/story-memory' },
          { text: 'YouTube', link: '/expertise/youtube' },
          { text: 'Эксперты и каналы', link: '/expertise/creators' },
          { text: 'История рынка', link: '/expertise/business-history' },
          { text: 'Путь клиента', link: '/expertise/customer-journey' },
          { text: 'Кейсы для экспертности', link: '/expertise/cases' },
          { text: 'Аргументы и формулировки', link: '/expertise/talk-tracks' }
        ]
      },
      {
        text: 'Кейсы и библиотека',
        collapsed: false,
        items: [
          { text: 'Кейсы Anix', link: '/cases/' },
          { text: 'Внутренняя библиотека', link: '/library/' },
          { text: 'Продажи и стратегия', link: '/library/sales' },
          { text: 'Истории и визуальный язык', link: '/library/storytelling' },
          { text: 'Обучение и поведение', link: '/library/learning' }
        ]
      },
      {
        text: 'Коммерция',
        collapsed: true,
        items: [
          { text: 'Финансы и договоры', link: '/finance/' },
          { text: 'Конкуренты', link: '/market/competitors' },
          { text: 'Калькуляторы видео / фарма / HSE', link: '/calculators/' }
        ]
      },
      {
        text: 'Поддержка wiki',
        collapsed: true,
        items: [
          { text: 'Шаблоны страниц', link: '/templates/' },
          { text: 'Как редактировать', link: '/contributing' }
        ]
      }
    ],
    outline: { level: [2, 3], label: 'На странице' },
    docFooter: { prev: 'Назад', next: 'Дальше' },
    editLink: {
      pattern: 'https://github.com/tsarev2709/anix_wiki/edit/main/docs/:path',
      text: 'Предложить правку'
    },
    lastUpdated: {
      text: 'Обновлено',
      formatOptions: { dateStyle: 'medium', timeStyle: 'short' }
    },
    footer: {
      message: 'Anix Wiki — рабочая система знаний',
      copyright: 'Проверяйте статус фактов перед использованием вне команды'
    }
  }
})
