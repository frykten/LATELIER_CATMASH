/* eslint-disable */
<template lang="html">
  <router-link to="/browse" v-if="this.$route.name === 'Home'">
    <div id="right-panel">
      <h2 v-if="!!message" id="title">{{message}}</h2>
    </div>
  </router-link>
  <div id="right-panel" @click="clickMe()" v-else-if="this.$route.name === 'Browse'">
    <img :src="cat.url" alt="Picture of a really pretty cat... Or not." id="cat-picture" v-if="!!cat">
  </div>
  <div id="right-panel" @click="clickMe()" v-else>
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
        return 'Vote Challenge'
      else return null
    }
  },
  methods: {
    clickMe() {
      EventBus.$emit('get-new-cats', this.cat);
    }
  },
  created () {
    EventBus.$on('send-cat-right', (theCat) => {
      this.cat = theCat
    });
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
    position: fixed;
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

  #title {
    font-size: 2.5rem;
    text-transform: uppercase;
  }

  #cat-picture {
    border: solid 2rem rgba(68, 105, 116, .5);
    border-radius: 80% 0px 55% 50% / 55% 0px 80% 50%;
    object-fit: cover;
    height: 25vw;
    width: 25vw;
  }
</style>
