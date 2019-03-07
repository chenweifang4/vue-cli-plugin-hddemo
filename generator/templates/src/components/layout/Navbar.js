import style from './Navbar.module.scss'
export default {
  data () {
    return {}
  },
  created () {
    this.$style = style
  },
  render () {
    return (
      <nav class={ this.$style.Navbar }>
        <div class={ this.$style.NavbarWrapper }>
          { this.genNavbarHeader() }
          { this.genNavbarContent() }
        </div>
      </nav>
    )
  },
  methods: {
    genNavbarHeader () {
      return (
        <div class={ this.$style.NavbarWrapperHeader }>
          Hiido Header
        </div>
      )
    },
    genNavbarContent () {
      return (
        <div class={ this.$style.NavbarWrapperContent }>
          { this.genNavbarContentLeft() }
          { this.genNavbarContentRight() }
        </div>
      )
    },
    genNavbarContentLeft () {
      return (
        <ul class={ this.$style.genNavbarContentLeftUl }>
          <li class={ this.$style.genNavbarContentLeftUlLiActive }>Navbar</li>
          <li>Navbar2</li>
        </ul>
      )
    },
    genNavbarContentRight () {
      return (
        <ul class={ this.$style.genNavbarContentRightUl }>
          <li>Hi, friend</li>
        </ul>
      )
    }
  }
}
