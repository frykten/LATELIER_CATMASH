/* eslint-disable */
<template lang="html">
  <router-link to="/leaderboard" v-if="this.$route.name === 'Home'">
    <div id="left-panel">
      <h2 v-if="!!message" id="title">{{message}}</h2>
    </div>
  </router-link>
  <div id="left-panel" @click="clickMe()" v-else>
    <img :src="cat.url" alt="Picture of a really pretty cat... Or not." id="cat-picture" v-if="!!cat">
  </div>
</template>

<script>
import { EventBus } from '../../eventBus.js';

export default {
  data () {
    return {
      cat: null
    }
  },
  computed: {
    message: function() {
      if (this.$route.name === 'Home')
        return 'Leaderboard'
      else return null
    }
  },
  methods: {
    clickMe() {
      EventBus.$emit('get-new-cats', this.cat);
    }
  },
  created () {
    EventBus.$on('send-cat-left', (theCat) => {
      this.cat = theCat
    });
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

  #title {
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  #cat-picture {
    border: solid 2rem rgba(68, 105, 116, .5);
    border-radius: 0px 80% 50% 55% / 0px 55% 50% 80%;
    object-fit: cover;
    height: 25vw;
    width: 25vw;
  }
</style>
