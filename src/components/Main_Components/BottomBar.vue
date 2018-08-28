/* eslint-disable */
<template lang="html">
  <div id="bot-bar">
    <router-link :to="linkTo" id="route">
      <p id="to-home">{{txtMessage}}</p>

      <svg id="svg" :height="svgHeight">
        <a :xlink:href="linkTo">
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
      linkTo: '/',
      svgCenter: null,
      svgHeight: null,
      svgWidth: null
    }
  },
  computed: {
    trianglePoints: function () {
      return `0,${this.svgHeight} ${this.svgWidth},${this.svgHeight} ${this.svgCenter},0`
    },
    txtMessage: function () {
      return this.getMessageToPrint()
    }
  },
  methods: {
    calcView () {
      let width = window.innerWidth
      let height = window.innerHeight / 7

      this.setPoints(width, height)
    },
    setPoints (width, height) {
      this.svgHeight = height
      this.svgCenter = width / 2
      this.svgWidth = width
    },
    getMessageToPrint () {
      let msg

      if (this.$route.name === 'Home')
        msg = 'A website to vote for the prettiest cat'
      else if (this.$route.name === 'Leaderboard')
        msg = 'Discover who is the prettiest cat'
      else
        msg = 'Vote for the prettiest cat ever'

      this.getLinkToFollow(msg)

      return msg
    },
    getLinkToFollow (msg) {
      if (msg[0] != 'V') {
        this.linkTo = '/browse'
      }
      else {
        this.linkTo = '/leaderboard'
      }
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
  #bot-bar {
    bottom: 0;
    position: fixed;
    width: 100vw;
    margin-bottom: 4vh;
  }

  #to-home {
    color: #eff2f6;
    font-size: 2rem;
    font-weight: bold;
    line-height: 2rem;
    margin: 0;
  }

  #svg {
    bottom: 0;
    left: 0;
    position: fixed;
    width: 100vw;
    z-index: -1;
  }

  #svg-triangle {
    fill: #446974;
  }
</style>
