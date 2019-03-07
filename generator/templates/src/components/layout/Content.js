import style from './Content.module.scss'
export default {
  data () {
    return {}
  },
  created () {
    this.$style = style
  },
  render () {
    return (
      <main class={ this.$style.Content }>
        { this.$slots.default }
      </main>
    )
  },
  methods: {
  }
}