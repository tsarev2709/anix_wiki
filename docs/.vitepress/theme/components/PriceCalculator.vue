<script setup>
import { computed, ref } from 'vue'

const duration = ref(60)
const rate = ref(300000)
const complexity = ref(1)
const fixed = ref(0)
const reserve = ref(10)

const subtotal = computed(() => (duration.value / 60) * rate.value * complexity.value + Number(fixed.value || 0))
const total = computed(() => subtotal.value * (1 + Number(reserve.value || 0) / 100))
const money = (value) => new Intl.NumberFormat('ru-RU', { maximumFractionDigits: 0 }).format(Math.round(value)) + ' ₽'
</script>

<template>
  <div class="price-calc">
    <div class="price-calc__grid">
      <label>Длительность, сек.<input v-model.number="duration" type="number" min="1" /></label>
      <label>Ставка за минуту, ₽<input v-model.number="rate" type="number" min="0" step="10000" /></label>
      <label>Коэффициент сложности
        <select v-model.number="complexity">
          <option :value="0.8">0,8 — простой</option>
          <option :value="1">1,0 — базовый</option>
          <option :value="1.25">1,25 — сложный</option>
          <option :value="1.5">1,5 — высокий риск/сложность</option>
        </select>
      </label>
      <label>Фиксированные работы, ₽<input v-model.number="fixed" type="number" min="0" step="10000" /></label>
      <label>Резерв, %<input v-model.number="reserve" type="number" min="0" max="100" /></label>
    </div>
    <div class="price-calc__result">
      <span>Черновая оценка проекта</span>
      <strong>{{ money(total) }}</strong>
      <small>До резерва: {{ money(subtotal) }}. Все поля редактируемые; это внутренняя модель, а не готовое КП.</small>
    </div>
  </div>
</template>

<style scoped>
.price-calc { margin: 24px 0; padding: 20px; border: 1px solid rgba(248,250,252,.16); border-radius: 8px; background: #101217; }
.price-calc__grid { display: grid; grid-template-columns: repeat(2,minmax(0,1fr)); gap: 14px; }
label { display: grid; gap: 7px; color: rgba(248,250,252,.72); font-size: 13px; font-weight: 700; }
input, select { width: 100%; min-height: 44px; padding: 10px 12px; border: 1px solid rgba(248,250,252,.16); border-radius: 7px; background: #08090d; color: #f8fafc; font: inherit; }
input:focus, select:focus { outline: 2px solid rgba(54,224,194,.35); border-color: #36e0c2; }
.price-calc__result { margin-top: 18px; padding-top: 18px; border-top: 1px solid rgba(248,250,252,.12); }
.price-calc__result span, .price-calc__result small { display: block; color: rgba(248,250,252,.65); }
.price-calc__result strong { display: block; margin: 4px 0 6px; color: #36e0c2; font-size: clamp(30px,5vw,48px); line-height: 1; }
@media (max-width: 680px) { .price-calc__grid { grid-template-columns: 1fr; } }
</style>
