<template lang="html">
  <div id="bot-bar">
    <a href="/" id="to-home">Smurf...</a>
    <div id="triangle"></div>
    
    <svg id="svg" viewBox="0 0 100 100">
      <a xlink:href="/leaderboard" id="to-home">
        <polygon :points="trianglePoints" id="svg-triangle"/>
      </a>
    </svg>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        svgBottom: null,
        svgCenter: null,
        svgRight: null,
      }
    },
    computed: {
      trianglePoints: function() {
        return`0,${this.svgBottom} ${this.svgRight},${this.svgBottom} ${this.svgCenter},0`;
      }
    },
    methods: {
      calcView() {
		let el = document.getElementById('bot-bar');
		let width = el.clientWidth;
		let height = el.clientHeight;
        
        this.setPoints(width, height);
        
        console.log(el);
        console.log(width);
        console.log(height);
        console.log(this.trianglePoints);
      },
      setPoints(width, height) {
        this.svgBottom = height;
        this.svgCenter = width/2;
        this.svgRight = width;
      }
    },
    mounted() {
      this.calcView();
    }
  }
</script>

<style lang="scss" scoped>
  #bot-bar {
    height: 5rem;
    width: 100vw;
  }
  
  #to-home {
    color: red;
  }
  
  #svg {
    height: 5rem;
    width: 100vw;
  }
  
  #svg-triangle {
    fill: green;
    width: 100%;
  }
  
  #triangle {
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    border-bottom: 10rem solid lightblue;
    position: fixed;
    bottom: 0;
    width: 0;
    z-index: -1;
  }
</style>
