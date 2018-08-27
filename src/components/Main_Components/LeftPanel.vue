<template lang="html">
  <div id="left-panel">
    <h3>
      {{message}}
    </h3>
  </div>
</template>

<script>
export default {
  data () {
    return {
      message: null,
      picture: null
    }
  },
}
</script>

<style lang="scss" scoped>
  #left-panel {
    align-items: center;
    background: #eff2f6;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: absolute;
    top: 0;
    width: 50vw;
    z-index: -10;
  }
  
  #left-panel:hover {
    background: radial-gradient(#eff2f6, hsl(214, 13%, 99%));
    box-shadow: 0px 0px 15px rgba(20, 20, 20, .5), inset -.5rem 0 rgba(20, 20, 20, .05);
    z-index: -8;
  }
</style>
