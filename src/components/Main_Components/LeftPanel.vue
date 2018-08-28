<template lang="html">
  <router-link to="/leaderboard" v-if="this.$route.name === 'Home'">
    <div id="left-panel">
      <h3 v-if="!!message">{{message}}</h3>
    </div>
  </router-link>
  <div id="left-panel" v-else>
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
  #left-panel {
    align-items: center;
    background: #eff2f6;
    display: flex;
    height: 100vh;
    justify-content: center;
    position: fixed;
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
