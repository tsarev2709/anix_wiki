import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'ru-RU',
  title: 'Anix Wiki',
  description: 'Внутренняя база знаний Anix: продажи, производство, продукты и экспертиза',
  cleanUrls: true,
  lastUpdated: true,
  head: [
    ['meta', { name: 'theme-color', content: '#08090d' }],
    ['meta', { name: 'robots', content: 'noindex,nofollow' }]
  ],
  themeConfig: {
    logo: false,
    siteTitle: 'ANIX / WIKI',
    search: {
      provider: 'local'
    },
    nav: [
      { text: 'Старт', link: '/start-here' },
      { text: 'Продажи', link: '/sales/' },
      { text: 'Экспертиза', link: '/expertise/' },
      { text: 'Производство', link: '/production/' },
      { text: 'Калькуляторы', link: '/calculators/' }
    ],
    sidebar: [
      {
        text: 'Начало',
        items: [
          { text: 'Главная', link: '/' },
          { text: 'Как пользоваться wiki', link: '/start-here' }
        ]
      },
      {
        text: 'Продажи',
        collapsed: false,
        items: [
          { text: 'Sales Hub', link: '/sales/' },
          { text: 'Воронка Anix', link: '/sales/funnel' },
          { text: 'КЭВ / ключевая встреча', link: '/sales/kev' },
          { text: 'Выявление потребностей', link: '/sales/discovery' },
          { text: 'Возражения', link: '/sales/objections' },
          { text: 'Касания и follow-up', link: '/sales/follow-up' },
          { text: 'CRM', link: '/sales/crm' },
          { text: 'Гребень Продаж — конспект', link: '/sales/greben' }
        ]
      },
      {
        text: 'Экспертность по продукту',
        collapsed: false,
        items: [
          { text: 'Карта экспертности', link: '/expertise/' },
          { text: 'Словарь', link: '/expertise/glossary' },
          { text: 'YouTube', link: '/expertise/youtube' },
          { text: 'История бизнеса', link: '/expertise/business-history' },
          { text: 'Производство', link: '/expertise/production' },
          { text: 'Статьи', link: '/expertise/articles' },
          { text: 'Путь клиента', link: '/expertise/customer-journey' },
          { text: 'Блогеры и эксперты', link: '/expertise/creators' },
          { text: 'Топ-кейсы', link: '/expertise/cases' }
        ]
      },
      {
        text: 'Продукт и производство',
        items: [
          { text: 'Линейка продуктов', link: '/products/' },
          { text: 'Производственный хаб', link: '/production/' },
          { text: 'Частые и сложные вопросы', link: '/production/faq' },
          { text: 'Кейсы', link: '/cases/' }
        ]
      },
      {
        text: 'Коммерция',
        items: [
          { text: 'Финансы и договоры', link: '/finance/' },
          { text: 'Конкуренты', link: '/market/competitors' },
          { text: 'Калькуляторы цен', link: '/calculators/' }
        ]
      },
      {
        text: 'Поддержка wiki',
        items: [
          { text: 'Шаблоны страниц', link: '/templates/' },
          { text: 'Как редактировать', link: '/contributing' }
        ]
      }
    ],
    outline: {
      level: [2, 3],
      label: 'На странице'
    },
    docFooter: {
      prev: 'Назад',
      next: 'Дальше'
    },
    editLink: {
      pattern: 'https://github.com/tsarev2709/anix_wiki/edit/main/docs/:path',
      text: 'Редактировать эту страницу'
    },
    lastUpdated: {
      text: 'Обновлено',
      formatOptions: {
        dateStyle: 'medium',
        timeStyle: 'short'
      }
    },
    footer: {
      message: 'Внутренняя база знаний Anix',
      copyright: 'Для рабочей навигации команды'
    }
  }
})
