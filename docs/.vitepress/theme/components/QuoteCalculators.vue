<script setup>
import { computed, ref } from 'vue'

const tab = ref('general')
const money = (value) => new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(Math.round(value)) + ' ₽'
const clamp = (value, min = 0) => Math.max(min, Number(value || 0))

const general = ref({ seconds: 60, minuteRate: 500000, complexity: 1, research: 120000, versions: 2, versionCost: 45000, rush: 1, reserve: 10 })
const generalSubtotal = computed(() =>
  clamp(general.value.seconds) / 60 * clamp(general.value.minuteRate) * clamp(general.value.complexity, .1) * clamp(general.value.rush, 1)
  + clamp(general.value.research)
  + clamp(general.value.versions) * clamp(general.value.versionCost)
)
const generalTotal = computed(() => generalSubtotal.value * (1 + clamp(general.value.reserve) / 100))

const pharma = ref({ masters: 3, seconds: 45, minuteRate: 650000, claim: 1.2, audiences: 2, cutdowns: 3, localizations: 0, rush: 1, reserve: 15 })
const pharmaPerMaster = computed(() => clamp(pharma.value.seconds) / 60 * clamp(pharma.value.minuteRate) * clamp(pharma.value.claim, 1))
const pharmaExtras = computed(() =>
  clamp(pharma.value.masters) * clamp(pharma.value.cutdowns) * 45000
  + clamp(pharma.value.localizations) * 80000
  + Math.max(0, clamp(pharma.value.audiences) - 1) * clamp(pharma.value.masters) * 90000
)
const pharmaTotal = computed(() => (clamp(pharma.value.masters) * pharmaPerMaster.value + pharmaExtras.value) * clamp(pharma.value.rush, 1) * (1 + clamp(pharma.value.reserve) / 100))

const hse = ref({ topics: 8, seconds: 40, minuteRate: 450000, site: 1.1, formats: 2, languages: 1, toolkit: 180000, reserve: 12 })
const hsePerTopic = computed(() => clamp(hse.value.seconds) / 60 * clamp(hse.value.minuteRate) * clamp(hse.value.site, 1))
const hseTotal = computed(() => {
  const masters = clamp(hse.value.topics) * hsePerTopic.value
  const formats = clamp(hse.value.topics) * Math.max(0, clamp(hse.value.formats) - 1) * 30000
  const languages = clamp(hse.value.topics) * Math.max(0, clamp(hse.value.languages) - 1) * 40000
  return (masters + formats + languages + clamp(hse.value.toolkit)) * (1 + clamp(hse.value.reserve) / 100)
})
</script>

<template>
  <section class="quote-calc">
    <div class="quote-calc__tabs" role="tablist" aria-label="Тип расчёта">
      <button :class="{ active: tab === 'general' }" @click="tab = 'general'">Видео</button>
      <button :class="{ active: tab === 'pharma' }" @click="tab = 'pharma'">Фарма-кампания</button>
      <button :class="{ active: tab === 'hse' }" @click="tab = 'hse'">HSE-программа</button>
    </div>

    <div v-if="tab === 'general'" class="quote-calc__panel">
      <div class="quote-calc__grid">
        <label>Длительность, сек.<input v-model.number="general.seconds" type="number" min="5" /></label>
        <label>Ставка за минуту, ₽<input v-model.number="general.minuteRate" type="number" min="0" step="50000" /></label>
        <label>Сложность<select v-model.number="general.complexity"><option :value=".8">0,8 — простая</option><option :value="1">1,0 — базовая</option><option :value="1.25">1,25 — сложная</option><option :value="1.5">1,5 — высокая</option><option :value="2">2,0 — R&D / hero</option></select></label>
        <label>Research и препродакшн, ₽<input v-model.number="general.research" type="number" min="0" step="10000" /></label>
        <label>Адаптации, шт.<input v-model.number="general.versions" type="number" min="0" /></label>
        <label>Одна адаптация, ₽<input v-model.number="general.versionCost" type="number" min="0" step="5000" /></label>
        <label>Срочность<select v-model.number="general.rush"><option :value="1">Обычный срок</option><option :value="1.15">Ускоренный ×1,15</option><option :value="1.3">Срочный ×1,30</option></select></label>
        <label>Резерв неопределённости, %<input v-model.number="general.reserve" type="number" min="0" max="50" /></label>
      </div>
      <Result label="Черновой бюджет видео" :value="generalTotal" :note="`До резерва: ${money(generalSubtotal)}`" />
    </div>

    <div v-else-if="tab === 'pharma'" class="quote-calc__panel">
      <div class="quote-calc__grid">
        <label>Master-ролики, шт.<input v-model.number="pharma.masters" type="number" min="1" /></label>
        <label>Длительность master, сек.<input v-model.number="pharma.seconds" type="number" min="10" /></label>
        <label>Ставка за минуту, ₽<input v-model.number="pharma.minuteRate" type="number" min="0" step="50000" /></label>
        <label>Medical / claims-сложность<select v-model.number="pharma.claim"><option :value="1">Обычная ×1</option><option :value="1.2">Высокая ×1,2</option><option :value="1.45">MoA / доказательная ×1,45</option></select></label>
        <label>Аудитории (HCP / patient / sales)<input v-model.number="pharma.audiences" type="number" min="1" max="4" /></label>
        <label>Короткие версии на master<input v-model.number="pharma.cutdowns" type="number" min="0" /></label>
        <label>Локализации, шт.<input v-model.number="pharma.localizations" type="number" min="0" /></label>
        <label>Срочность<select v-model.number="pharma.rush"><option :value="1">Плановая</option><option :value="1.15">К конференции ×1,15</option><option :value="1.3">Критический срок ×1,30</option></select></label>
        <label>Резерв согласований, %<input v-model.number="pharma.reserve" type="number" min="0" max="50" /></label>
      </div>
      <Result label="Черновой бюджет фарма-кампании" :value="pharmaTotal" note="Учитывает master, аудитории, cut-down, локализации и резерв согласований." />
    </div>

    <div v-else class="quote-calc__panel">
      <div class="quote-calc__grid">
        <label>Тем / правил, шт.<input v-model.number="hse.topics" type="number" min="1" /></label>
        <label>Длительность темы, сек.<input v-model.number="hse.seconds" type="number" min="10" /></label>
        <label>Ставка за минуту, ₽<input v-model.number="hse.minuteRate" type="number" min="0" step="50000" /></label>
        <label>Сложность объекта<select v-model.number="hse.site"><option :value="1">Типовая ×1</option><option :value="1.1">Отраслевая ×1,1</option><option :value="1.3">Опасные работы ×1,3</option><option :value="1.5">Несколько объектов ×1,5</option></select></label>
        <label>Форматов на тему<input v-model.number="hse.formats" type="number" min="1" max="5" /></label>
        <label>Языковых версий<input v-model.number="hse.languages" type="number" min="1" max="10" /></label>
        <label>Общий toolkit / маскот, ₽<input v-model.number="hse.toolkit" type="number" min="0" step="10000" /></label>
        <label>Резерв согласований, %<input v-model.number="hse.reserve" type="number" min="0" max="50" /></label>
      </div>
      <Result label="Черновой бюджет HSE-программы" :value="hseTotal" note="Считает серию, общий визуальный toolkit, форматы, языки и резерв." />
    </div>
  </section>
</template>

<script>
const Result = {
  props: ['label', 'value', 'note'],
  methods: { money(value) { return new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(Math.round(value)) + ' ₽' } },
  template: `<div class="quote-calc__result"><span>{{ label }}</span><strong>{{ money(value) }}</strong><small>{{ note }}</small></div>`
}
export default { components: { Result } }
</script>

<style scoped>
.quote-calc { margin: 28px 0; border: 1px solid rgba(33,22,45,.14); border-radius: 24px; background: rgba(255,255,255,.78); box-shadow: 0 14px 44px rgba(33,22,45,.06); overflow: hidden; }
.quote-calc__tabs { display: flex; gap: 8px; padding: 14px; border-bottom: 1px solid rgba(33,22,45,.1); background: rgba(240,232,255,.5); overflow-x: auto; }
button { min-height: 40px; padding: 8px 16px; border: 1px solid rgba(33,22,45,.14); border-radius: 999px; background: #fffaf2; color: #21162d; font: inherit; font-weight: 800; white-space: nowrap; cursor: pointer; }
button.active { border-color: #21162d; background: #21162d; color: white; }
.quote-calc__panel { padding: 22px; }
.quote-calc__grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 14px; }
label { display: grid; gap: 7px; color: #62566d; font-size: 13px; font-weight: 750; }
input, select { width: 100%; min-height: 46px; padding: 10px 12px; border: 1px solid rgba(33,22,45,.16); border-radius: 12px; background: #fffaf2; color: #21162d; font: inherit; }
input:focus, select:focus { outline: 3px solid rgba(32,178,170,.18); border-color: #20b2aa; }
.quote-calc__result { margin-top: 22px; padding: 22px; border-radius: 18px; background: rgba(32,178,170,.09); }
.quote-calc__result span, .quote-calc__result small { display: block; color: #62566d; }
.quote-calc__result strong { display: block; margin: 6px 0 9px; color: #087d70; font-size: clamp(32px,5vw,50px); line-height: 1; letter-spacing: -.04em; }
@media (max-width: 680px) { .quote-calc__grid { grid-template-columns: 1fr; } .quote-calc__panel { padding: 16px; } }
</style>
