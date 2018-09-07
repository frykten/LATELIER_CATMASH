/* eslint-disable */
<template lang="html">
  <div id="nav-bar">
    <router-link to="/">
      <h1 id="title">Cat Mash</h1>
      <img src="/static/cat_logo.png" id="logo-cat">

      <svg id="svg" :height="svgHeight">
        <a xlink:href="/leaderboard">
          <polygon :points="trianglePoints" id="svg-triangle"/>
        </a>
      </svg>
    </router-link>
  </div>
</template>

<script>
export default {
  data () {
    return {
      svgCenter: null,
      svgHeight: null,
      svgWidth: null
    }
  },
  computed: {
    trianglePoints: function () {
      return `0,0 ${this.svgWidth},0 ${this.svgCenter},${this.svgHeight}`
    }
  },
  methods: {
    calcView () {
      let width = window.innerWidth
      let height = window.innerHeight / 6

      this.setPoints(width, height)
    },
    setPoints (width, height) {
      this.svgHeight = height
      this.svgCenter = width / 2
      this.svgWidth = width
    }
  },
  mounted () {
    this.calcView()

    window.addEventListener('resize', () => {
      this.calcView()
    })
  }
}
</script>

<style lang="scss" scoped>
  #nav-bar {
    position: fixed;
    top: 0;
    width: 100vw;
  }

  #to-home {
    color: red;
  }

  #logo-cat {
    margin-top: -6rem;
    width: 12.5rem;
  }

  #title {
    color: hsl(240, 5%, 99%);
    font-family: 'Baloo Bhai', 'Roboto', Helvetica, Arial, sans-serif;
    font-size: 5rem;
    line-height: 5rem;
    font-variant-caps: all-small-caps;
    margin-top: 1rem;
  }

  #svg {
/*    height: 5rem;*/
    left: 0;
    position: fixed;
    top: 0;
    width: 100vw;
    z-index: -1;
  }

  #svg-triangle {
    fill: #446974;
  }
</style>
