import style from './Sidebar.module.scss'
export default {
  data () {
    return {}
  },
  created () {
    this.$style = style
  },
  render () {
    return (
      <aside class={ this.$style.Sidebar }> Hello Sidebar </aside>
    )
  }
}