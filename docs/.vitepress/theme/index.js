import DefaultTheme from 'vitepress/theme'
import './custom.css'
import PriceCalculator from './components/PriceCalculator.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PriceCalculator', PriceCalculator)
  }
}
