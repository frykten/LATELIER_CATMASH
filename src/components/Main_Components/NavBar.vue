<template lang="html">
  <div id="nav-bar">
    Smurf...
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
          trianglePoints: "0,0 100,0 50,50",
      }
    },
  }
</script>

<style lang="scss" scoped>
  #nav-bar {
    position: fixed;
    top: 0;
  }
  
  #to-home {
    color: red;
  }
  
  #svg {
    height: 5rem;
    width: 100vw;
  }
  
  #svg-triangle {
    fill: blue;
  }
  
  #triangle {
    border-left: 50vw solid transparent;
    border-right: 50vw solid transparent;
    border-top: 10rem solid lightblue;
    position: fixed;
    top: 0;
    width: 0;
    z-index: -1;
  }
</style>
