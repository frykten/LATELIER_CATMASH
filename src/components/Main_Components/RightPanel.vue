<template lang="html">
  <div id="right-panel">
    <h3 v-if="!!message">{{message}}</h3>

    <img src="/static/cat_logo.png" alt="Picture of a really pretty cat... Or not." id="cat-picture" v-if="!!picture">
  </div>
</template>

<script>
export default {
  data () {
    return {
      picture: null
    }
  },
  computed: {
    message: function() {
      if (this.$route.name === 'Home')
        return 'Smurfs'
      else return null
    }
  }
}
</script>

<style lang="scss" scoped>
  #right-panel {
    align-items: center;
    background: #f3f2f7;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: absolute;
    top: 0;
    right: 0;
    width: 50vw;
    z-index: -10;
  }

  #right-panel:hover {
    background: radial-gradient(#f3f2f7, hsl(240, 0%, 99%));
    box-shadow: 0px 0px 15px rgba(20, 20, 20, .5), inset .5rem 0 rgba(20, 20, 20, .05);
    z-index: -8;
  }
</style>
